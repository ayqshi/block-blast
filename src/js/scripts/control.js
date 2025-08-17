function (require, module, exports) {
    "use strict";

    // Unregisters this module from the global Cocos Creator module registry.
    cc._RF.push(module, "195afZ95GFCO7JdfHHpzCDj", "control");

    // Polyfill for Array spread syntax.
    var spreadArraysPolyfill = this && this.__spreadArrays || function () {
        for (var totalLength = 0, i = 0, numArgs = arguments.length; i < numArgs; i++)
            totalLength += arguments[i].length;
        var newArray = Array(totalLength),
            currentIndex = 0;
        for (i = 0; i < numArgs; i++)
            for (var arr = arguments[i], j = 0, arrLength = arr.length; j < arrLength; j++, currentIndex++)
                newArray[currentIndex] = arr[j];
        return newArray;
    };

    // Mark this module as an ES module.
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    // Import other modules.
    var config = require("./config");
    var model = require("./model");

    // Event handler registry for window messages.
    var eventHandlers = {};

    // Flags to determine the execution environment.
    exports.IS_DEBUG = "http://localhost" === window.location.href.slice(0, 16);
    exports.IS_DEVELOP = "file:///C:/Users" === window.location.href.slice(0, 16);

    // Custom debug logging function that only logs in debug or development environments.
    cc.dLog = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (exports.IS_DEBUG || exports.IS_DEVELOP) {
            console.log.apply(console, spreadArraysPolyfill(["[D] -"], args));
        }
    };

    // The main game control class.
    var Control = (function () {
        function Control() {
            this.model = model.model;
            this.settings = this.model.getSettings();

            // Set up a window event listener to handle external messages.
            window.addEventListener("message", function (event) {
                if (event.data && "string" !== typeof event.data) {
                    var handlers = eventHandlers[event.data.name];
                    if (handlers) {
                        for (var i = 0; i < handlers.length; i++) {
                            if (handlers[i]) {
                                var result = handlers[i].cb.apply(handlers[i].sc, [event.data.data]);
                                result && result(event.data.data);
                            }
                        }
                    }
                }
            }, false);
        }

        // Getters for properties.
        Object.defineProperty(Control.prototype, "d3rate", {
            get: function () {
                return this.view.d3rate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Control.prototype, "block_size", {
            get: function () {
                return this.view.getBlockSize();
            },
            enumerable: false,
            configurable: true
        });

        // Register an event listener for a custom event.
        Control.prototype.listenEvent = function (eventName, callback, scope) {
            eventHandlers[eventName] || (eventHandlers[eventName] = []);
            eventHandlers[eventName].push({
                cb: callback,
                sc: scope
            });
        };

        // Dispatch a custom event.
        Control.prototype.dispatchEvent = function (eventName, data) {
            var customEvent = new CustomEvent("message");
            customEvent.data = {
                name: eventName,
                data: data
            };
            window.dispatchEvent(customEvent);
        };

        // Get level configuration data.
        Control.prototype.getLevelConf = function (level) {
            var levelConfig = this.model.getLevelConf(level);
            // Remove empty rows from the end of the level configuration.
            for (var i = levelConfig.length - 1; i > 0 && 0 === levelConfig[i].reduce(function (total, item) {
                    return total + item;
                }, 0); i--) {
                levelConfig.pop();
            }
            return levelConfig;
        };

        // Get a specific toy (block) configuration.
        Control.prototype.getToyConf = function (index) {
            var toyShapes = this.model.getToyShapeConf();
            return toyShapes[index % toyShapes.length];
        };

        // Get a random toy (block) based on priority.
        Control.prototype.getRandomToy = function (excludedToys) {
            var toyShapes = exports.control.model.getToyShapeConf();
            var totalPriority = 0;
            for (var i = 0; i < toyShapes.length; i++) {
                if (excludedToys && excludedToys.indexOf(i) > -1) {
                    continue;
                }
                totalPriority += toyShapes[i].priority || toyShapes[i].color;
            }
            var randomValue = totalPriority * Math.random();
            for (i = 0; i < toyShapes.length; i++) {
                if (excludedToys && excludedToys.indexOf(i) > -1) {
                    continue;
                }
                randomValue -= toyShapes[i].priority || toyShapes[i].color;
                if (randomValue <= 0) {
                    return i;
                }
            }
        };

        // Get HSL color values for a block.
        Control.prototype.getHSL = function (index, typeIndex, colorsetIndex) {
            var colorset = (this.model.getColorConf(colorsetIndex) || {});
            var colorList = colorset[["block_colors", "destroy_colors"][typeIndex]] || [];
            return colorList[index - 1] || [0, 0, 0, 0, 0];
        };

        // Apply HSL color to a sprite material.
        Control.prototype.setHSL = function (spriteNode, hslArray) {
            if (cc.isValid(spriteNode)) {
                var material = spriteNode.getComponent(cc.Sprite).getMaterial(0);
                material.setProperty("h", hslArray[0]);
                material.setProperty("s", hslArray[1]);
                material.setProperty("v", hslArray[2]);
                material.setProperty("x", hslArray[3]);
                material.setProperty("y", hslArray[4]);
                // Check for additional properties for more complex shaders.
                if ("number" === typeof material.getProperty("x2", 0)) {
                    material.setProperty("x2", hslArray[5]);
                    material.setProperty("y2", hslArray[6]);
                }
            }
        };

        // Play an audio clip.
        Control.prototype.playAudio = function (audioClip, loop) {
            if (audioClip) {
                if (!window.mute && !this.mute && this.play_started) {
                    cc.audioEngine.play(audioClip, !!loop, 1);
                }
            }
        };

        // Shrink a label's font size if its content is too wide.
        Control.prototype.shrinkLbl = function (label, maxWidth, originalScale) {
            if (cc.isValid(label)) {
                originalScale = originalScale || 1;
                if (label.node.width * label.node.scaleX > maxWidth) {
                    label.node.scale = originalScale * (maxWidth / label.node.width);
                }
            }
        };

        // Animate a number scrolling up.
        Control.prototype.scrolNum = function (label, startNum, endNum, duration, frameRate, formatString, maxWidth) {
            var _this = this;
            if (startNum !== endNum) {
                frameRate = frameRate || 30 * duration;
                label.string = formatString ? this.formatString(formatString, [Math.round(startNum)]) : String(Math.round(startNum));
                var tween = cc.tween;
                var delay = duration / frameRate;
                var currentNum = startNum;
                var increment = (endNum - startNum) / frameRate;
                var animation = tween(label).repeat(frameRate, tween().delay(delay).call(function () {
                    if (cc.isValid(label)) {
                        currentNum += increment;
                        label.string = formatString ? _this.formatString(formatString, [Math.round(currentNum)]) : String(Math.round(Math.round(currentNum)));
                        maxWidth && _this.shrinkLbl(label, maxWidth);
                    }
                }));
                label.tween = animation;
                animation.start();
            }
        };

        // Animate a progress bar.
        Control.prototype.prgsTo = function (progressBar, toValue, duration, delay) {
            if (delay) {
                cc.tween(progressBar).delay(delay).to(duration, {
                    progress: toValue
                }).start();
            } else {
                cc.tween(progressBar).to(duration, {
                    progress: toValue
                }).start();
            }
        };

        // Shake a node.
        Control.prototype.shakeNode = function (node, shakeDuration, totalDuration, shakeX, shakeY) {
            if (totalDuration && cc.isValid(node)) {
                shakeY = shakeY || 0 === shakeY ? shakeY : shakeX;
                var originalPosition = node.position;
                var shakeInterval = 1 / shakeDuration;
                var elapsedTime = 0;

                (function shakeStep(reset) {
                    var newPosition = reset ? originalPosition : cc.v3(originalPosition.x + Math.random() * shakeX * 2 - shakeX, originalPosition.y + Math.random() * shakeY * 2 - shakeY, originalPosition.z);
                    cc.tween(node).to(shakeInterval, {
                        position: newPosition
                    }).call(function () {
                        elapsedTime += shakeInterval;
                        if (elapsedTime < totalDuration) {
                            shakeStep();
                        } else if (!reset) {
                            shakeStep(true);
                        }
                    }).start();
                })();
            }
        };

        // Fade-in animation for a node.
        Control.prototype.exStart = function (node, duration) {
            var originalY = node.y;
            if (duration && cc.isValid(node)) {
                node.y = -600;
                node.active = true;
                cc.tween(node).to(duration, {
                    y: originalY
                }, {
                    easing: this.ease("easeOutSine")
                }).start();
            }
        };

        // Play background music.
        Control.prototype.playBgm = function (audioClip) {
            if (audioClip) {
                this.bgm = audioClip;
            } else {
                if (!this.bgm) {
                    return;
                }
                audioClip = this.bgm;
            }
            this.playAudio(audioClip, true);
        };

        // Get the easing function name.
        Control.prototype.ease = function (easingString) {
            var splitInOut = easingString.split("InOut");
            if (splitInOut.length > 1) {
                return splitInOut[1].toLowerCase() + "InOut";
            }
            var splitIn = easingString.split("In");
            if (splitIn.length > 1) {
                return splitIn[1].toLowerCase() + "In";
            }
            var splitOut = easingString.split("Out");
            if (splitOut.length > 1) {
                return splitOut[1].toLowerCase() + "Out";
            }
            return undefined;
        };

        // Get a specific color configuration from the model.
        Control.prototype.getColColor = function (index) {
            return (this.model.getColColors() || [])[index];
        };

        // Format a string with given arguments.
        Control.prototype.formatString = function (format, args) {
            var _this = this;
            return format.replace(/\$\{(\d+)\}/g, function (match, index) {
                if (this) {
                    return _this.formatSecTime(args[index]);
                }
            }).replace(/\{(\d+)\}/g, function (match, index) {
                return args[index];
            });
        };

        // Format seconds into a "mm:ss" string.
        Control.prototype.formatSecTime = function (seconds) {
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;
            return (minutes < 10 ? "0" + minutes : minutes) + ":" + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);
        };

        // Configure the "next" block display component.
        Control.prototype.configNexts = function (nextsComponent, initialToys) {
            this.nexts_comp = nextsComponent;
            this.nexts_comp.init(initialToys);
        };

        // Update the "next" block display.
        Control.prototype.updateNexts = function (newToys) {
            if (cc.isValid(this.nexts_comp)) {
                this.nexts_comp.updateNexts(newToys);
            }
        };

        // Get the configuration for the next block.
        Control.prototype.getNextToyConf = function () {
            return cc.isValid(this.nexts_comp) ? this.nexts_comp.getNextToyConf() : this.getToyConf(this.view.toy_index);
        };

        // Get the design resolution of the canvas.
        Control.prototype.getResolution = function () {
            return cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas).designResolution;
        };

        // Progress to the next game level.
        Control.prototype.nextLevel = function () {
            this.level++;
            this.view.nextLevel();
        };

        // Shuffle an array in place.
        Control.prototype.shuffle = function (array) {
            var newArray = array.slice();
            for (var i = newArray.length - 1; i > 0; i--) {
                var randomIndex = Math.floor(Math.random() * (i + 1));
                var temp = newArray[i];
                newArray[i] = newArray[randomIndex];
                newArray[randomIndex] = temp;
            }
            return newArray;
        };

        // Create and shuffle an array of numbers.
        Control.prototype.getShuffleArr = function (length, startNumber) {
            var array = Array.apply(null, {
                length: length
            }).map(function (item, index) {
                return index + startNumber;
            });
            for (var i = array.length - 1; i > 0; i--) {
                var randomIndex = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[randomIndex];
                array[randomIndex] = temp;
            }
            return array;
        };

        // Create a singleton instance of the Control class.
        Control.instance = new Control();
        return Control;
    }());

    // Export the Control class and its singleton instance.
    exports.Control = Control;
    exports.control = Control.instance;
    cc.control = exports.control;

    // Global listener for audio control from external messages.
    window.addEventListener("message", function (event) {
        if ("AudioPause" === event.data) {
            window.mute = true;
            cc && cc.audioEngine && cc.audioEngine.stopAll();
        } else if ("AudioResume" === event.data) {
            window.mute = false;
            exports.control && exports.control.playBgm();
        }
    }, false);

    // Internationalization (i18n) setup.
    var preferredLanguage = exports.IS_DEBUG ? "en" : null;
    var traditionalChineseLocales = ["zh-TW", "zh-HK", "zh-MO"];

    function getI18nString(key) {
        var languageCode = preferredLanguage || cc.sys.language;
        var browserLanguage = navigator.language;
        if (traditionalChineseLocales.indexOf(browserLanguage) !== -1) {
            languageCode = "zh_t";
        }
        var translationList = config.config.i18n.list[key];
        if (translationList) {
            var langIndex = Math.abs(config.config.i18n.key.indexOf(languageCode));
            return {
                lang_idx: langIndex,
                str: translationList[langIndex] || key,
                max_width: translationList[0]
            };
        }
        return {
            lang_idx: 0,
            str: key
        };
    }

    // Override the cc.Label component's onLoad method for i18n support.
    var ccLabelProto = cc.Label.prototype;
    var originalOnLoad = ccLabelProto.onLoad;
    ccLabelProto.onLoad = function () {
        originalOnLoad.apply(this);
        if (this.string !== "") {
            var i18nData = getI18nString(this.string);
            if (i18nData.lang_idx > 1) {
                if (this.font && "minervaregular-p7d5v" === this.font.name) {
                    this.enableBold = true;
                }
                this.useSystemFont = true;
            }
            this.string = i18nData.str;
        }
    };

    // Pop the module from the internal Cocos Creator module stack.
    cc._RF.pop();
}