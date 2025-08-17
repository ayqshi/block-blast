"use strict";
                    ;
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