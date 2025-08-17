"use strict";
                    cc._RF.push(o, "195afZ95GFCO7JdfHHpzCDj", "control");
                    var n = this && this.__spreadArrays || function() {
                        for (var t = 0, o = 0, e = arguments.length; o < e; o++)
                            t += arguments[o].length;
                        var n = Array(t)
                          , i = 0;
                        for (o = 0; o < e; o++)
                            for (var r = arguments[o], c = 0, s = r.length; c < s; c++,
                            i++)
                                n[i] = r[c];
                        return n
                    }
                    ;
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.control = e.Control = e.IS_DEVELOP = e.IS_DEBUG = void 0;
                    var i = t("./config")
                      , r = t("./model")
                      , c = {};
                    e.IS_DEBUG = "http://localhost" === window.location.href.slice(0, 16),
                    e.IS_DEVELOP = "file:///C:/Users" === window.location.href.slice(0, 16),
                    cc.dLog = function() {
                        for (var t = [], o = 0; o < arguments.length; o++)
                            t[o] = arguments[o];
                        (e.IS_DEBUG || e.IS_DEVELOP) && console.log.apply(console, n(["[D] -"], t))
                    }
                    ;
                    var s = function() {
                        function t() {
                            this.model = r.model,
                            this.settings = this.model.getSettings(),
                            window.addEventListener("message", function(t) {
                                if (t.data && "string" != typeof t.data) {
                                    var o = c[t.data.name];
                                    if (o)
                                        for (var e = 0; e < o.length; e++)
                                            if (o[e]) {
                                                var n = o[e].cb.apply(o[e].sc, [t.data.data]);
                                                n && n(t.data.data)
                                            }
                                }
                            }, !1)
                        }
                        return Object.defineProperty(t.prototype, "d3rate", {
                            get: function() {
                                return this.view.d3rate
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "block_size", {
                            get: function() {
                                return this.view.getBlockSize()
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.listenEvent = function(t, o, e) {
                            c[t] || (c[t] = []),
                            c[t].push({
                                cb: o,
                                sc: e
                            })
                        }
                        ,
                        t.prototype.dispatchEvent = function(t, o) {
                            var e = new CustomEvent("message");
                            e.data = {
                                name: t,
                                data: o
                            },
                            window.dispatchEvent(e)
                        }
                        ,
                        t.prototype.getLevelConf = function(t) {
                            for (var o = this.model.getLevelConf(t), e = o.length - 1; e > 0 && 0 === o[e].reduce(function(t, o) {
                                return t + o
                            }, 0); e--)
                                o.pop();
                            return o
                        }
                        ,
                        t.prototype.getToyConf = function(t) {
                            var o = this.model.getToyShapeConf();
                            return o[t % o.length]
                        }
                        ,
                        t.prototype.getRandomToy = function(t) {
                            for (var o = e.control.model.getToyShapeConf(), n = 0, i = 0; i < o.length; i++)
                                t && t.indexOf(i) > -1 || (n += o[i].priority || o[i].color);
                            var r = n * Math.random();
                            for (i = 0; i < o.length; i++)
                                if (!(t && t.indexOf(i) > -1) && (r -= o[i].priority || o[i].color) <= 0)
                                    return i
                        }
                        ,
                        t.prototype.getHSL = function(t, o, e) {
                            return ((this.model.getColorConf(e) || {})[["block_colors", "destroy_colors"][o]] || [])[t - 1] || [0, 0, 0, 0, 0]
                        }
                        ,
                        t.prototype.setHSL = function(t, o) {
                            if (cc.isValid(t)) {
                                var e = t.getComponent(cc.Sprite).getMaterial(0);
                                e.setProperty("h", o[0]),
                                e.setProperty("s", o[1]),
                                e.setProperty("v", o[2]),
                                e.setProperty("x", o[3]),
                                e.setProperty("y", o[4]),
                                "number" == typeof e.getProperty("x2", 0) && (e.setProperty("x2", o[5]),
                                e.setProperty("y2", o[6]))
                            }
                        }
                        ,
                        t.prototype.playAudio = function(t, o) {
                            t && (window.mute || this.mute || !this.play_started || cc.audioEngine.play(t, !!o, 1))
                        }
                        ,
                        t.prototype.shrinkLbl = function(t, o, e) {
                            cc.isValid(t) && (e || (e = 1),
                            t.node.width * t.node.scaleX > o && (t.node.scale = e * (o / t.node.width)))
                        }
                        ,
                        t.prototype.scrolNum = function(t, o, e, n, i, r, c) {
                            var s = this;
                            if (o !== e) {
                                i = i || 30 * n,
                                t.string = r ? this.formatString(r, [Math.round(o)]) : String(Math.round(o));
                                var a = cc.tween
                                  , l = n / i
                                  , p = o
                                  , u = (e - o) / i
                                  , h = a(t).repeat(i, a().delay(l).call(function() {
                                    cc.isValid(t) && (p += u,
                                    t.string = r ? s.formatString(r, [Math.round(p)]) : String(Math.round(Math.round(p))),
                                    c && s.shrinkLbl(t, c))
                                }));
                                t.tween = h,
                                h.start()
                            }
                        }
                        ,
                        t.prototype.prgsTo = function(t, o, e, n) {
                            n ? cc.tween(t).delay(n).to(e, {
                                progress: o
                            }).start() : cc.tween(t).to(e, {
                                progress: o
                            }).start()
                        }
                        ,
                        t.prototype.shakeNode = function(t, o, e, n, i) {
                            if (e && cc.isValid(t)) {
                                i || 0 === i || (i = n);
                                var r = t.position
                                  , c = 1 / o
                                  , s = 0;
                                (function o(a) {
                                    var l = a ? r : cc.v3(r.x + Math.random() * n * 2 - n, r.y + Math.random() * i * 2 - i, r.z);
                                    cc.tween(t).to(c, {
                                        position: l
                                    }).call(function() {
                                        (s += c) < e ? o() : a || o(!0)
                                    }).start()
                                }
                                )()
                            }
                        }
                        ,
                        t.prototype.exStart = function(t, o) {
                            var e = t.y;
                            o && cc.isValid(t) && (t.y = -600,
                            t.active = !0,
                            cc.tween(t).to(o, {
                                y: e
                            }, {
                                easing: this.ease("easeOutSine")
                            }).start())
                        }
                        ,
                        t.prototype.playBgm = function(t) {
                            if (t)
                                this.bgm = t;
                            else {
                                if (!this.bgm)
                                    return;
                                t = this.bgm
                            }
                            this.playAudio(t, !0)
                        }
                        ,
                        t.prototype.ease = function(t) {
                            var o = t.split("InOut");
                            return o.length > 1 ? o[1].toLowerCase() + "InOut" : (o = t.split("In")).length > 1 ? o[1].toLowerCase() + "In" : (o = t.split("Out")).length > 1 ? o[1].toLowerCase() + "Out" : void 0
                        }
                        ,
                        t.prototype.getColColor = function(t) {
                            return (this.model.getColColors() || [])[t]
                        }
                        ,
                        t.prototype.formatString = function(t, o) {
                            return t.replace(/\$\{(\d+)\}/g, function(t, e) {
                                if (this)
                                    return this.formatSecTime(o[e])
                            }
                            .bind(this)).replace(/\{(\d+)\}/g, function(t, e) {
                                return o[e]
                            })
                        }
                        ,
                        t.prototype.formatSecTime = function(t) {
                            var o = Math.floor(t / 60)
                              , e = t % 60;
                            return (o < 10 ? "0" + o : o) + ":" + (e < 10 ? "0" + e : e)
                        }
                        ,
                        t.prototype.configNexts = function(t, o) {
                            this.nexts_comp = t,
                            this.nexts_comp.init(o)
                        }
                        ,
                        t.prototype.updateNexts = function(t) {
                            cc.isValid(this.nexts_comp) && this.nexts_comp.updateNexts(t)
                        }
                        ,
                        t.prototype.getNextToyConf = function() {
                            return cc.isValid(this.nexts_comp) ? this.nexts_comp.getNextToyConf() : this.getToyConf(this.view.toy_index)
                        }
                        ,
                        t.prototype.getResolution = function() {
                            return cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas).designResolution
                        }
                        ,
                        t.prototype.nextLevel = function() {
                            this.level++,
                            this.view.nextLevel()
                        }
                        ,
                        t.prototype.shuffle = function(t) {
                            for (var o, e = t.slice(), n = e.length - 1; n > 0; n--) {
                                var i = Math.floor(Math.random() * (n + 1));
                                o = [e[i], e[n]],
                                e[n] = o[0],
                                e[i] = o[1]
                            }
                            return e
                        }
                        ,
                        t.prototype.getShuffleArr = function(t, o) {
                            for (var e, n = Array.apply(null, {
                                length: t
                            }).map(function(t, e) {
                                return e + o
                            }), i = n.length - 1; i > 0; i--) {
                                var r = Math.floor(Math.random() * (i + 1));
                                e = [n[r], n[i]],
                                n[i] = e[0],
                                n[r] = e[1]
                            }
                            return n
                        }
                        ,
                        t.instance = new t,
                        t
                    }();
                    e.Control = s,
                    e.control = s.instance,
                    cc.control = e.control,
                    window.addEventListener("message", function(t) {
                        "AudioPause" == t.data ? (window.mute = !0,
                        cc && cc.audioEngine && cc.audioEngine.stopAll()) : "AudioResume" == t.data && (window.mute = !1,
                        e.control && e.control.playBgm())
                    }, !1);
                    var a = e.IS_DEBUG ? "en" : null
                      , l = ["zh-TW", "zh-HK", "zh-MO"];
                    function p(t) {
                        var o = a || cc.sys.language
                          , e = navigator.language;
                        -1 !== l.indexOf(e) && (o = "zh_t");
                        var n = i.config.i18n.list[t];
                        if (n) {
                            var r = Math.abs(i.config.i18n.key.indexOf(o));
                            return {
                                lang_idx: r,
                                str: n[r] || t,
                                max_width: n[0]
                            }
                        }
                        return {
                            lang_idx: 0,
                            str: t
                        }
                    }
                    var u = cc.Label.prototype
                      , h = u.onLoad;
                    u.onLoad = function() {
                        if (h.apply(this),
                        "" !== this.string) {
                            var t = p(this.string);
                            t.lang_idx > 1 && (this.font && "minervaregular-p7d5v" === this.font.name && (this.enableBold = !0),
                            this.useSystemFont = !0),
                            this.string = t.str
                        }
                    }
                    ,
                    cc._RF.pop()