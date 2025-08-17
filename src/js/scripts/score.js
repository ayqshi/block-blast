"use strict";
                    cc._RF.push(o, "c6989cEKftKT6UYpz0h4Z30", "score");
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
                            return o.grade = null,
                            o.score_lbl = null,
                            o.combo_lbl = null,
                            o.combo_name = null,
                            o.particle_node = null,
                            o.score_ani = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {}
                        ,
                        o.prototype.showScore = function(t) {
                            var o = t.combo
                              , e = t.bingo_lines
                              , n = c.control.settings.score_base
                              , i = c.control.settings.score_lbl
                              , r = c.control.settings.score_bingo;
                            this.grade.string = i[e - 1] || "",
                            1 === o ? (this.combo_lbl.node.active = !1,
                            this.combo_name.x = 0,
                            this.particle_node.x = 0) : (this.combo_lbl.string = o,
                            this.particle_node.x = this.combo_lbl.node.x + this.combo_lbl.node.width / 2 + 7),
                            1 === e && (this.score_lbl.node.y = 0);
                            var s = n * r[e - 1] * (o + 1);
                            this.score_lbl.string = "+" + String(s),
                            o ? (this.score_lbl.node.color = cc.color(255, 246, 192),
                            this.score_ani.play("combo_score")) : this.score_ani.play("score"),
                            this.scheduleOnce(function() {
                                c.control.view.addScore(s)
                            }, 1)
                        }
                        ,
                        r([l(cc.Label)], o.prototype, "grade", void 0),
                        r([l(cc.Label)], o.prototype, "score_lbl", void 0),
                        r([l(cc.Label)], o.prototype, "combo_lbl", void 0),
                        r([l(cc.Node)], o.prototype, "combo_name", void 0),
                        r([l(cc.Node)], o.prototype, "particle_node", void 0),
                        r([l(cc.Animation)], o.prototype, "score_ani", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()