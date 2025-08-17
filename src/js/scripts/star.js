"use strict";
                    ;
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
                            return o.star_sf_list = [],
                            o.show_progress = !1,
                            o.particle_pfb = null,
                            o.fly_audio = null,
                            o.gen_audio = null,
                            o.star_stat_list = [],
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            this.ctrl = c.control,
                            this.initTargetList()
                        }
                        ,
                        o.prototype.initTargetList = function() {
                            for (var t in this.stars = this.node.children,
                            this.stars) {
                                var o = this.stars[t]
                                  , e = o.getChildByName("star_node")
                                  , n = 1
                                  , i = o.getChildByName("lbl");
                                for (var r in i.active && (n = Number(i.getComponent(cc.Label).string)),
                                e.children) {
                                    var c = e.children[r];
                                    if (c.active) {
                                        var s = c.getChildByName("prgs").getComponent(cc.ProgressBar);
                                        s.progress = 0,
                                        this.star_stat_list.push([Number(c.name.split("_")[1]), 0, n, s]);
                                        break
                                    }
                                }
                            }
                        }
                        ,
                        o.prototype.parseStatData = function(t) {
                            return {
                                idx: t[0],
                                cur: t[1],
                                tgt: t[2],
                                prgs: t[3]
                            }
                        }
                        ,
                        o.prototype.addStar = function(t, o) {
                            for (var e = this, n = function(n) {
                                var r = i.star_stat_list[n];
                                if (r[0] === t && r[1] < r[2]) {
                                    r[1]++;
                                    var c = new cc.Node;
                                    i.checkGameOver();
                                    var s = cc.instantiate(i.particle_pfb)
                                      , a = new cc.Node;
                                    a.parent = c,
                                    a.zIndex = 10,
                                    a.addComponent(cc.Sprite).spriteFrame = i.star_sf_list[t - 11],
                                    c.parent = i.node;
                                    var l = r[3].node.parent.parent.parent.position
                                      , p = r[3].node.parent.parent.scale;
                                    c.position = o.subtract(i.node.position),
                                    c.scale = .2;
                                    var u = i.played_audio;
                                    i.played_audio = !0,
                                    u || i.ctrl.playAudio(i.gen_audio, !1);
                                    var h = cc.tween
                                      , _ = h(c).to(.4, {
                                        scale: 1.1
                                    }).call(function() {
                                        e.played_audio = !1,
                                        s.parent = c,
                                        s.zIndex = 1
                                    }).to(.1, {
                                        scale: 1
                                    }).delay(.3).call(function() {
                                        u || e.ctrl.playAudio(e.fly_audio, !1),
                                        cc.tween(a).by(1, {
                                            angle: 1080
                                        }).start()
                                    }).parallel(h().bezierTo(1, cc.v2(0, -640), cc.v2(200, -640), cc.v2(l.x, l.y)), h().to(1, {
                                        scale: p
                                    }));
                                    return i.show_progress && (_ = _.to(.3, {
                                        scale: 0
                                    })),
                                    _.call(function() {
                                        e.ctrl.prgsTo(r[3], 1, .5),
                                        e.removeStar(c)
                                    }).start(),
                                    "break"
                                }
                            }, i = this, r = 0; r < this.star_stat_list.length && "break" !== n(r); r++)
                                ;
                        }
                        ,
                        o.prototype.checkGameOver = function() {
                            for (var t = !0, o = 0; o < this.star_stat_list.length; o++) {
                                var e = this.star_stat_list[o];
                                e[1] < e[2] && (t = !1)
                            }
                            t && this.gameOver("star", !0, 3)
                        }
                        ,
                        o.prototype.removeStar = function(t) {
                            this.scheduleOnce(function() {
                                cc.isValid(t) && t.removeFromParent
                            }, .5)
                        }
                        ,
                        r([l([cc.SpriteFrame])], o.prototype, "star_sf_list", void 0),
                        r([l(cc.Boolean)], o.prototype, "show_progress", void 0),
                        r([l(cc.Prefab)], o.prototype, "particle_pfb", void 0),
                        r([l(cc.AudioClip)], o.prototype, "fly_audio", void 0),
                        r([l(cc.AudioClip)], o.prototype, "gen_audio", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()