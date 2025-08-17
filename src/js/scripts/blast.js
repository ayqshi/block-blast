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
                    },
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
                    var c = t("./api/api")
                      , s = t("./control")
                      , a = cc._decorator
                      , l = a.ccclass
                      , p = a.property
                      , u = function(t) {
                        function o() {
                            var o = null !== t && t.apply(this, arguments) || this;
                            return o.combo_node = null,
                            o.combo_track_ani = null,
                            o.destroy_layout_node = null,
                            o.destroy_pfb = null,
                            o.game_over_node = null,
                            o.guide_node = null,
                            o.no_space_left_node = null,
                            o.play_area = null,
                            o.tiles_node = null,
                            o.tile_pfb = null,
                            o.options_node = null,
                            o.opt_pfb = null,
                            o.d3rate = 1,
                            o.root = null,
                            o.score_lbl = null,
                            o.score_parent = null,
                            o.score_pfb = null,
                            o.audio_move = null,
                            o.audio_put = null,
                            o.audio_combo = [],
                            o.audio_grade = [],
                            o.audio_end = null,
                            o.audio_win = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            s.control.view = this,
                            s.control.level = s.control.settings.start_level,
                            this.combo = 0,
                            this.no_combo = 0,
                            this.block_map = [],
                            this.toy_index = 0,
                            this.initLevel();

                            //grid animation when starting
                            for (var o = 0; o < this.block_map.length; o++)
                                for (var e = 0; e < this.block_map[0].length; e++) {
                                    var n = this.block_map[o][e];
                                    n.getOpacity() < 255 && (n.setColor(Math.floor(7 * Math.random())),
                                    n.setOpacityDelay(255, .1 * o + .5)),
                                    n.setOpacityDelay(0, .1 * (2 * this.block_map.length + 1 - o) + .5)
                                }
                        }
                        ,
                        o.prototype.onGameEnd = function() {
                            cc.dLog("game_end"),
                            c.API.game_end()
                        }
                        ,
                        o.prototype.onClickCTA = function() {
                            c.API.open()
                        }
                        ,
                        o.prototype.autoClickCTA = function() {
                            if (!this.auto_clicked_CTA && (this.auto_clicked_CTA = !0,
                            !c.API.forbid_auto_CTA))
                                try {
                                    this.onClickCTA()
                                } catch (t) {
                                    cc.dLog(t)
                                }
                        }
                        ,
                        o.prototype.getBlockSize = function() {
                            return s.control.settings.tile_size[s.control.level - 1] || s.control.settings.tile_size[0]
                        }
                        ,
                        o.prototype.checkConf = function(t, o) {
                            for (var e = 0; e < t.length; e++)
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[e][n] || {};
                                    o(i, e, n, i.q, i.a)
                                }
                        }
                        ,
                        o.prototype.initLevel = function() {
                            var t = s.control.level
                              , o = s.control.getLevelConf("level_" + t);
                            this.initTiles(o);
                            var e = [];
                            this.checkConf(o, function(t, o, n, i, r) {
                                i > 0 && (e[i - 1] = {
                                    q: i,
                                    a: r,
                                    i: o,
                                    j: n
                                })
                            }),
                            e.length ? this.initGuide(e) : this.initToys()
                        }
                        ,
                        o.prototype.nextLevel = function() {
                            var t = this;
                            this.scheduleOnce(function() {
                                t.initLevel()
                            }, 2.5)
                        }
                        ,
                        o.prototype.initTiles = function(t) {
                            var o = this;
                            this.tiles_node.removeAllChildren();
                            var e = this.getBlockSize();
                            this.checkConf(t, function(n, i, r, c, a) {
                                var l = cc.instantiate(o.tile_pfb);
                                l.parent = o.tiles_node;
                                var p = l.getComponent("block");
                                if (p.setSize(e),
                                p.i = i,
                                p.j = r,
                                l.x = (r - t[0].length / 2) * e,
                                l.y = (i - t.length / 2) * e,
                                o.block_map[i] || (o.block_map[i] = []),
                                o.block_map[i][r] = p,
                                0 === c && a > 0)
                                    p.setColor(a),
                                    p.ori_color_num = a;
                                else if (0 !== a) {
                                    p.setOpacity(50);
                                    var u = s.control.settings.guide_conf[s.control.level - 1].color;
                                    p.setColor(u),
                                    p.ori_color_num = u
                                } else
                                    p.setOpacity(0)
                            })
                        }
                        ,
                        o.prototype.initGuide = function(t) {
                            var o = t.pop();
                            if (o) {
                                o.toy_color = s.control.settings.guide_conf[s.control.level - 1].color,
                                this.guide_node.active = !0;
                                var e = cc.instantiate(this.opt_pfb);
                                e.getComponent("opt").init(this.tile_pfb, o, 1),
                                e.parent = this.options_node
                            }
                        }
                        ,
                        o.prototype.isPortrait = function() {
                            return !0
                        }
                        ,
                        o.prototype.getAutoPlayConf = function() {
                            return s.control.model.config.auto_play || []
                        }
                        ,
                        o.prototype.initToys = function() {
                            var t = this
                              , o = s.control.getShuffleArr(7, 1).splice(0, 3);
                            if (this.getAutoPlayConf().length) {
                                for (this.opt_comps = [],
                                u = 0; u < 3; u++) {
                                    f = cc.instantiate(this.opt_pfb);
                                    var e = this.getAutoPlayConf()[this.toy_index]
                                      , n = (h = e[0],
                                    e[1])
                                      , i = e[2]
                                      , r = e[3]
                                      , c = e[4];
                                    this.toy_index++;
                                    var a = f.getComponent("opt");
                                    f.parent = this.options_node,
                                    a.init(this.tile_pfb, {
                                        a: h,
                                        toy_color: n || o[u],
                                        toy_order: i,
                                        toy_target_x: r,
                                        toy_target_y: c
                                    }, u),
                                    this.opt_comps.push(a)
                                }
                                this.scheduleOnce(function() {
                                    t.autoPut(0)
                                }, .5)
                            } else {
                                for (var l = !1, p = [], u = 0; u < 3; u++) {
                                    this.toy_index++;
                                    var h = s.control.getRandomToy();
                                    this.hasSeat(s.control.getToyConf(h).shape) && (l = !0),
                                    p.push(h)
                                }
                                if (!l)
                                    for (var _ = Math.floor(Math.random() * p.length); ; ) {
                                        var d = s.control.getRandomToy();
                                        if (this.hasSeat(s.control.getToyConf(d).shape)) {
                                            p[_] = d;
                                            break
                                        }
                                    }
                                for (u = 0; u < p.length; u++) {
                                    var f = cc.instantiate(this.opt_pfb);
                                    h = p[u];
                                    f.getComponent("opt").init(this.tile_pfb, {
                                        a: h,
                                        toy_color: o[u]
                                    }, u),
                                    f.parent = this.options_node
                                }
                            }
                        }
                        ,
                        o.prototype.autoPut = function(t, o) {
                            for (var e, n = 0; n < this.opt_comps.length; n++) {
                                var i = this.opt_comps[n];
                                i.auto_order > t && (!cc.isValid(e) || e.auto_order > i.auto_order) && (e = i)
                            }
                            cc.isValid(e) && this.scheduleOnce(function() {
                                e.autoPut()
                            }, o ? 1.1 : .3)
                        }
                        ,
                        o.prototype.onPutToy = function() {
                            var t = this;
                            this.scheduleOnce(function() {
                                t.checkGameOver() && t.gameOver(),
                                t.options_node.children.length || t.initToys()
                            })
                        }
                        ,
                        o.prototype.checkGameOver = function() {
                            if (!this.options_node.children.length)
                                return !1;
                            for (var t = 0; t < this.options_node.children.length; t++)
                                if (this.hasSeat(this.options_node.children[t].getComponent("opt").shape))
                                    return !1;
                            return !0
                        }
                        ,
                        o.prototype.gameOver = function() {
                            var t = this;
                            cc.dLog("game_over"),
                            this.is_game_over = !0,
                            this.no_space_left_node.active = !0,
                            s.control.playAudio(this.audio_end);
                            for (var o = 0; o < this.block_map.length; o++)
                                for (var e = 0; e < this.block_map[0].length; e++) {
                                    var n = this.block_map[o][e];
                                    n.getOpacity() < 255 && (n.setColor(Math.floor(7 * Math.random())),
                                    n.setOpacityDelay(255, .1 * o + .5)),
                                    n.setOpacityDelay(0, .1 * (2 * this.block_map.length + 1 - o) + .5)
                                }
                            this.scheduleOnce(function() {
                                s.control.playAudio(t.audio_win);
                                location.reload();
                            }, 2.5)
                        }
                        ,
                        o.prototype.configDestroyNode = function(t, o, e) {
                            t.parent = s.control.view.destroy_layout_node;
                            var n = t.getChildByName("destroy");
                            s.control.setHSL(n, s.control.getHSL(e, 1)),
                            n.y = o,
                            n.x = s.control.settings.destroy_pos[0];
                            var i = (n.getComponent(cc.Animation).defaultClip.duration || 50) + 1 / 30;
                            this.scheduleOnce(function() {
                                t.destroy()
                            }, i)
                        }
                        ,
                        o.prototype.hasSeat = function(t) {
                            for (var o = this.block_map, e = [], n = 0; n < t.length; n++)
                                for (var i = 0; i < t[0].length; i++)
                                    t[n][i] && e.push([t.length - 1 - n, i]);
                            for (n = 1 - t.length; n < o.length + 2 * t.length - 1; n++)
                                for (i = 1 - t[0].length; i < o[0].length + 2 * t[0].length - 1; i++) {
                                    for (var r = !0, c = 0; c < e.length; c++) {
                                        var s = n + e[c][0]
                                          , a = i + e[c][1];
                                        o[s] && o[s][a] && 0 === o[s][a].getOpacity() || (r = !1)
                                    }
                                    if (r)
                                        return !0
                                }
                            return !1
                        }
                        ,
                        o.prototype.addScore = function(t) {
                            var o = Number(this.score_lbl.string);
                            this.total_score || (this.total_score = 0),
                            this.total_score += t,
                            s.control.scrolNum(this.score_lbl, o, this.total_score, .2)
                        }
                        ,
                        o.prototype.handlePut = function(t, o, e) {
                            var n = this;
                            if (t ? (this.combo++,
                            this.no_combo = 0,
                            s.control.playAudio(this.audio_combo[Math.min(this.combo - 1, this.audio_combo.length - 1)]),
                            this.autoClickCTA()) : (this.no_combo++,
                            3 === this.no_combo && (this.no_combo = 0,
                            this.combo = 0,
                            cc.tween(this.combo_node).to(.3, {
                                opacity: 0
                            }).start()),
                            s.control.playAudio(this.audio_put)),
                            this.addScore(o),
                            this.combo > 2 && t > 0 && (s.control.shakeNode(this.root, 30, 10 / 30, 5),
                            this.combo_node.active = !0,
                            this.combo_node.opacity = 255,
                            this.combo_track_ani.play()),
                            e) {
                                var i = cc.instantiate(this.score_pfb);
                                i.parent = this.score_parent;
                                var r = e.add(cc.v3(this.getBlockSize() / 2, this.getBlockSize() / 2, 0));
                                r.x < -120 ? r.x = -120 : r.x > 120 && (r.x = 120),
                                i.position = r,
                                i.getComponent("score").showScore({
                                    combo: Math.max(this.combo - 1, 0),
                                    bingo_lines: t
                                }),
                                t >= 2 && this.scheduleOnce(function() {
                                    s.control.playAudio(n.audio_grade[Math.min(t - 2, n.audio_grade.length - 1)])
                                }, .7)
                            }
                        }
                        ,
                        r([p(cc.Node)], o.prototype, "combo_node", void 0),
                        r([p(cc.Animation)], o.prototype, "combo_track_ani", void 0),
                        r([p(cc.Node)], o.prototype, "destroy_layout_node", void 0),
                        r([p(cc.Prefab)], o.prototype, "destroy_pfb", void 0),
                        r([p(cc.Node)], o.prototype, "game_over_node", void 0),
                        r([p(cc.Node)], o.prototype, "guide_node", void 0),
                        r([p(cc.Node)], o.prototype, "no_space_left_node", void 0),
                        r([p(cc.Node)], o.prototype, "play_area", void 0),
                        r([p(cc.Node)], o.prototype, "tiles_node", void 0),
                        r([p(cc.Prefab)], o.prototype, "tile_pfb", void 0),
                        r([p(cc.Node)], o.prototype, "options_node", void 0),
                        r([p(cc.Prefab)], o.prototype, "opt_pfb", void 0),
                        r([p(cc.Float)], o.prototype, "d3rate", void 0),
                        r([p(cc.Node)], o.prototype, "root", void 0),
                        r([p(cc.Label)], o.prototype, "score_lbl", void 0),
                        r([p(cc.Node)], o.prototype, "score_parent", void 0),
                        r([p(cc.Prefab)], o.prototype, "score_pfb", void 0),
                        r([p(cc.AudioClip)], o.prototype, "audio_move", void 0),
                        r([p(cc.AudioClip)], o.prototype, "audio_put", void 0),
                        r([p([cc.AudioClip])], o.prototype, "audio_combo", void 0),
                        r([p([cc.AudioClip])], o.prototype, "audio_grade", void 0),
                        r([p(cc.AudioClip)], o.prototype, "audio_end", void 0),
                        r([p(cc.AudioClip)], o.prototype, "audio_win", void 0),
                        r([l], o)
                    }(cc.Component);
                    e.default = u,
                    cc._RF.pop()