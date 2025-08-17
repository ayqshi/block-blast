"use strict";
                    cc._RF.push(o, "83d4a2K2rxOArfgtBX3vJ8J", "game_over_6");
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
                      , l = (s.property,
                    function(t) {
                        function o() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            this.ctl = c.control,
                            this.list_PA = [],
                            this.logo = this.node.getChildByName("logo");
                            var t = this.node.getChildByName("mask");
                            this.list_PA = this.list_PA.concat(t.getChildByName("node1").children),
                            this.list_PA = this.list_PA.concat(t.getChildByName("node2").children),
                            this.ctl.setHSL(this.logo, [0, 0, 1, 0, 0, 1, 1])
                        }
                        ,
                        o.prototype.playLogo = function() {
                            this.logo_v = 1
                        }
                        ,
                        o.prototype.playPA = function() {
                            this.play_PA = !0
                        }
                        ,
                        o.prototype.update = function(t) {
                            if (this.play_PA)
                                for (var o = 0; o < this.list_PA.length; o++) {
                                    var e = this.list_PA[o];
                                    cc.isValid(e) && (e.x += 1,
                                    e.x > 1332 && (e.x -= 2664))
                                }
                            this.logo_v > 0 && (this.logo_v -= 2 * t,
                            this.logo_v < 0 && (this.logo_v = 0),
                            this.ctl.setHSL(this.logo, [0, 0, this.logo_v, 0, 0, 1, 1]))
                        }
                        ,
                        r([a], o)
                    }(cc.Component));
                    e.default = l,
                    cc._RF.pop()