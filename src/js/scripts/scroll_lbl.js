"use strict";
                    cc._RF.push(o, "339f5Z8T69Cyr6dlZaNKWwb", "scroll_lbl");
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
                            return o.lbl = null,
                            o.startLbl = 0,
                            o.endLbl = 100,
                            o.prefix = "",
                            o.suffix = "",
                            o.play_on_load = !1,
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            this.control = c.control,
                            this.lbl.string = this.prefix + this.startLbl + this.suffix,
                            this.play_on_load && this.playLbl()
                        }
                        ,
                        o.prototype.playLbl = function() {
                            this.control.scrolNum(this.lbl, this.startLbl, this.endLbl, 1, null, this.prefix + "{0}" + this.suffix)
                        }
                        ,
                        r([l(cc.Label)], o.prototype, "lbl", void 0),
                        r([l(cc.Float)], o.prototype, "startLbl", void 0),
                        r([l(cc.Float)], o.prototype, "endLbl", void 0),
                        r([l(cc.String)], o.prototype, "prefix", void 0),
                        r([l(cc.String)], o.prototype, "suffix", void 0),
                        r([l(cc.Boolean)], o.prototype, "play_on_load", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()