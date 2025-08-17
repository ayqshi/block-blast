"use strict";
                    cc._RF.push(o, "4393dBlYotAIb/7GRXWqxbZ", "guide_force");
                    var n, i = this && this.__extends || (n = function(t, o) {
                        return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(t, o) {
                            t.__proto__ = o
                        }
                        || function(t, o) {
                            for (var e in o)
                                Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e])
                        }
                        )(t, o)
                    }
                    ,
                    function(t, o) {
                        function e() {
                            this.constructor = t
                        }
                        n(t, o),
                        t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype,
                        new e)
                    }
                    ), r = this && this.__decorate || function(t, o, e, n) {
                        var i, r = arguments.length, c = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                            c = Reflect.decorate(t, o, e, n);
                        else
                            for (var s = t.length - 1; s >= 0; s--)
                                (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(o, e, c) : i(o, e)) || c);
                        return r > 3 && c && Object.defineProperty(o, e, c),
                        c
                    }
                    ;
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var c = t("./control")
                      , s = cc._decorator
                      , a = s.ccclass
                      , l = s.property
                      , p = function(t) {
                        function o() {
                            var o = null !== t && t.apply(this, arguments) || this;
                            return o.finger = null,
                            o.ani = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {}
                        ,
                        o.prototype.init = function(t, o, e, n, i, r, c) {
                            this.start_pos = t,
                            this.end_pos = o,
                            this.toy_node = e,
                            this.toy_sd_node = n,
                            this.d3rate = i,
                            this.ease_name = r,
                            this.move_t = c
                        }
                        ,
                        o.prototype.onStart = function() {
                            if (!this.started)
                                return this.started = !0,
                                void (this.finger.x = this.start_pos);
                            cc.tween(this.finger).to(10 / 60, {
                                x: this.start_pos
                            }).start()
                        }
                        ,
                        o.prototype.onMove = function() {
                            cc.tween(this.finger).to(this.move_t, {
                                x: this.end_pos
                            }, {
                                easing: c.control.ease(this.ease_name)
                            }).start()
                        }
                        ,
                        o.prototype.onRelease = function() {
                            if (cc.isValid(this.toy_node)) {
                                var t = this.toy_node.y
                                  , o = 20 * this.d3rate;
                                cc.tween(this.toy_node).to(.2, {
                                    y: t - o
                                }).to(.1, {
                                    y: t
                                }).start(),
                                cc.isValid(this.toy_sd_node) && cc.tween(this.toy_sd_node).to(.2, {
                                    y: t - o
                                }).to(.1, {
                                    y: t
                                }).start()
                            }
                        }
                        ,
                        o.prototype.restart = function() {
                            this.finger.stopAllActions(),
                            this.ani.stop(),
                            this.ani.setCurrentTime(0),
                            this.ani.play(null, 0)
                        }
                        ,
                        r([l(cc.Node)], o.prototype, "finger", void 0),
                        r([l(cc.Animation)], o.prototype, "ani", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()