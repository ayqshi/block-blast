"use strict";
                    cc._RF.push(o, "27f76E96mJB/4VGskwCUGdq", "finger");
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
                    var c = t("../control")
                      , s = cc._decorator
                      , a = s.ccclass
                      , l = s.property
                      , p = function(t) {
                        function o() {
                            var o = null !== t && t.apply(this, arguments) || this;
                            return o.ani = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onStart = function() {
                            this.node.position = c.control.view.options_node.position
                        }
                        ,
                        o.prototype.onPressGuideFInger = function() {
                            var t = c.control.settings.guide_conf[c.control.level - 1].pos;
                            cc.tween(this.node).to(1, {
                                position: cc.v2(t[0], t[1])
                            }, {
                                easing: c.control.ease("easeOutCubic")
                            }).start()
                        }
                        ,
                        o.prototype.onDisable = function() {
                            cc.dLog("disable"),
                            this.node.stopAllActions(),
                            this.node.position = c.control.view.options_node.position,
                            this.ani.setCurrentTime(0)
                        }
                        ,
                        r([l(cc.Animation)], o.prototype, "ani", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()