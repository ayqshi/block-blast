  window.__require = function t(o, e, n) {
                function i(c, s) {
                    if (!e[c]) {
                        if (!o[c]) {
                            var a = c.split("/");
                            if (a = a[a.length - 1],
                            !o[a]) {
                                var l = "function" == typeof __require && __require;
                                if (!s && l)
                                    return l(a, !0);
                                if (r)
                                    return r(a, !0);
                                throw new Error("Cannot find module '" + c + "'")
                            }
                            c = a
                        }
                        var p = e[c] = {
                            exports: {}
                        };
                        o[c][0].call(p.exports, function(t) {
                            return i(o[c][1][t] || t)
                        }, p, p.exports, t, o, e, n)
                    }
                    return e[c].exports
                }
                for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++)
                    i(n[c]);
                return i
            }({
                api: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "329f7FzT7xFwKcJahEhVAJM", "api"),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.API = void 0,
                    e.API = {
                        open: function() {
                            var t = new CustomEvent("message");
                            t.data = "ClickDownLoad",
                            window.dispatchEvent(t)
                        },
                        game_end: function() {},
                        game_ready: function() {}
                    },
                    cc._RF.pop()
                }
                , {}],
                audio_btn: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "150e1cRDhZF44HLt34jJRvX", "audio_btn");
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
                            return o.audio_node = null,
                            o.mute_node = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.start = function() {}
                        ,
                        o.prototype.onClickAudioBtn = function() {
                            c.control.mute = !c.control.mute,
                            this.audio_node.active = !c.control.mute,
                            this.mute_node.active = c.control.mute
                        }
                        ,
                        r([l(cc.Node)], o.prototype, "audio_node", void 0),
                        r([l(cc.Node)], o.prototype, "mute_node", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()
                }
                , {
                    "./control": "control"
                }],
                auto_play_blink: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "8e79aRU2sNFmq3nZgboNd91", "auto_play_blink");
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
                    var c = t("./api/api")
                      , s = cc._decorator
                      , a = s.ccclass
                      , l = (s.property,
                    function(t) {
                        function o() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            var t = this.node.getComponent(cc.Animation);
                            cc.isValid(t) && !c.API.forbid_blink && t.play()
                        }
                        ,
                        r([a], o)
                    }(cc.Component));
                    e.default = l,
                    cc._RF.pop()
                }
                , {
                    "./api/api": "api"
                }],
                blast: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "f00c3PmuJNFM5jdrDsLWYNy", "blast");
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
                }
                , {
                    "./api/api": "api",
                    "./control": "control"
                }],
                blink_2: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "fdfebGcfGBIAJyUrSoA6YCT", "blink_2");
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
                            return o.blink_audio = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.playAudio = function() {
                            this.control = c.control,
                            this.control.playAudio(this.blink_audio, !1)
                        }
                        ,
                        r([l(cc.AudioClip)], o.prototype, "blink_audio", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()
                }
                , {
                    "./control": "control"
                }],
                blink: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "d1c383iyftABLzwyYNVHEgJ", "blink");
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
                            return o.spr = null,
                            o.blink_audio = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onEnable = function() {
                            this.control = c.control,
                            this.changeActive(),
                            this.spr.active && this.blink_audio && this.control.playAudio(this.blink_audio, !1)
                        }
                        ,
                        o.prototype.changeActive = function() {
                            var t = this;
                            cc.isValid(this.node) && this.schedule(function() {
                                cc.isValid(t.spr) && (t.spr.active = !t.spr.active,
                                t.spr.active && t.blink_audio && t.control.playAudio(t.blink_audio, !1))
                            }, .5)
                        }
                        ,
                        r([l(cc.Node)], o.prototype, "spr", void 0),
                        r([l(cc.AudioClip)], o.prototype, "blink_audio", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()
                }
                , {
                    "./control": "control"
                }],
                block: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "0982eQ7W+ZNPKeS1fuQ7WiV", "block");
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
                            return o.ani = null,
                            o.mesh = null,
                            o.spr_colors = null,
                            o.spr2_colors = null,
                            o.drop_color = null,
                            o.drop_ani = null,
                            o.destroy_ani = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.start = function() {}
                        ,
                        Object.defineProperty(o.prototype, "settings", {
                            get: function() {
                                return c.control.settings
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        o.prototype.set3dColor = function(t, o) {
                            if (cc.isValid(t)) {
                                var e = this.mesh.getMaterial(0)
                                  , n = c.control.getHSL(o, 0, !0)
                                  , i = new Float32Array([n[0] / 255, n[1] / 255, n[2] / 255, 1]);
                                e.setProperty("diffuseColor", i, 0)
                            }
                        }
                        ,
                        o.prototype.addGlow = function(glowColor, glowIntensity) {
    if (cc.isValid(this.mesh)) {
        var material = this.mesh.getMaterial(0);
        // Assuming the material supports glow properties
        material.setProperty("glowColor", glowColor);
        material.setProperty("glowIntensity", glowIntensity);
    }
},
                        o.prototype.setColor = function(t, o, e, n, i) {
                            e = e || 1;
                            var r = this.spr2_colors;
                            if (i || (r = this.spr_colors,
                            this.color_num = t),
                            o)
                                this.set3dColor(this.node.getChildByName("block3d"), t),
                                this.settings.d3_texture_div && 1 !== this.settings.d3_texture_div || this.set3dColor(this.node.getChildByName("box"), t),
                                n && n();
                            else
                                switch (e) {
                                case 1:
                                    cc.isValid(r) && this.setNodeColor(r, t),
                                    n && n();
                                    break;
                                case 2:
                                    c.control.setHSL(r.node, c.control.getHSL(t, 0)),
                                    n && n()
                                }
                        }
                        ,
                        o.prototype.setNodeColor = function(t, o) {
                            o || (o = this.color_num);
                            var e = t.defaultClip.curveData.comps["cc.Sprite"].spriteFrame
                              , n = e[o - 1] || e[0];
                            t.node.getComponent(cc.Sprite).spriteFrame = n.value
                        }
                        ,
                        o.prototype.setSize = function(t, o) {
                            o = o || 1;
                            var e = t - this.settings.block_space
                              , n = this.node
                              , i = this.spr_colors.node
                              , r = this.spr2_colors.node
                              , c = this.node.getChildByName("block3d")
                              , s = this.node.getChildByName("box")
                              , a = this.node.getChildByName("destroy_ani");
                            cc.isValid(i) ? (i.width = e,
                            i.height = e,
                            i.position = cc.v2(e / 2, e / 2),
                            cc.isValid(r) && (r.width = e,
                            r.height = e,
                            i.position = cc.v2(e / 2, e / 2)),
                            cc.isValid(a) && (a.width = e,
                            a.height = e,
                            a.position = cc.v2(e / 2, e / 2))) : (cc.isValid(c) && (n.scale = o * e / t),
                            cc.isValid(s) && (n.box = s,
                            n.scale = o * e / t))
                        }
                        ,
                        o.prototype.playDropAni = function() {
                            this.drop_ani.play()
                        }
                        ,
                        o.prototype.playDestroyAni = function(t, o) {
                            var e = this
                              , n = (this.settings.destroy_blocks[1],
                            this.settings.destroy_blocks[0],
                            this.settings.destroy_blocks_rand,
                            Math.random());
                            n = .02 * Math.abs(o - t / 2),
                            this.destroy_ani.node.active = !0,
                            this.destroy_ani.play(),
                            this.scheduleOnce(function() {
                                e.ani.play("block_destroy")
                            }, n)
                        }
                        ,
                        o.prototype.onBlockDestroy = function() {
                            this.node.active = !1
                        }
                        ,
                        o.prototype.setOpacity = function(t) {
                            this.spr_colors.node.opacity = t
                        }
                        ,
                        o.prototype.setOpacityDelay = function(t, o) {
                            var e = this;
                            this.scheduleOnce(function() {
                                e.spr_colors.node.opacity = t
                            }, o)
                        }
                        ,
                        o.prototype.getOpacity = function() {
                            return this.spr_colors.node.opacity
                        }
                        ,
                        r([l(cc.Animation)], o.prototype, "ani", void 0),
                        r([l(cc.MeshRenderer)], o.prototype, "mesh", void 0),
                        r([l(cc.Animation)], o.prototype, "spr_colors", void 0),
                        r([l(cc.Animation)], o.prototype, "spr2_colors", void 0),
                        r([l(cc.Animation)], o.prototype, "drop_color", void 0),
                        r([l(cc.Animation)], o.prototype, "drop_ani", void 0),
                        r([l(cc.Animation)], o.prototype, "destroy_ani", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()
                }
                , {
                    "./control": "control"
                }],
                config: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "e562ftYRWxMR5Q7/vF2+3v8", "config"),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.config = void 0,
                    e.config = {
                        settings: {
                            name: "CAK1324",
                            id_num: 220,
                            suffix: null,
                            platforms: [1, 2, 5, 7, 10, 12],
                            time_limit: -1,
                            tile_size: [80],
                            opt_tile_size: 38,
                            start_level: 4,
                            block_space: 0,
                            play_node: 2,
                            force_cta_step: 1,
                            destroy_pos: [5, -98],
                            destroy_blocks: [0, 0],
                            destroy_blocks_rand: 0,
                            destroy_single_color: 0,
                            d3_texture_div: 20,
                            score_bingo: [1, 3, 6, 10, 15, 21],
                            score_lbl: [null, " Good", " Great", " Excellect", " Amazing", " Unbelievable"],
                            score_base: 10,
                            guide_conf: [{
                                pos: [125, -44],
                                color: 1
                            }, {
                                pos: [0, 0],
                                color: 4
                            }]
                        },
                        level: {
                            level_1: [[{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 6
                            }, {
                                q: 0,
                                a: 4
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 7
                            }, {
                                q: 0,
                                a: 3
                            }, {
                                q: 0,
                                a: -1
                            }, {
                                q: 0,
                                a: 5
                            }, {
                                q: 0,
                                a: 2
                            }], [{
                                q: 0,
                                a: 6
                            }, {
                                q: 0,
                                a: 4
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 7
                            }, {
                                q: 0,
                                a: 3
                            }, {
                                q: 0,
                                a: -1
                            }, {
                                q: 0,
                                a: 5
                            }, {
                                q: 0,
                                a: 2
                            }], [{
                                q: 0,
                                a: 6
                            }, {
                                q: 0,
                                a: 4
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 7
                            }, {
                                q: 0,
                                a: 3
                            }, {
                                q: 1,
                                a: 9
                            }, {
                                q: 0,
                                a: 5
                            }, {
                                q: 0,
                                a: 2
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }]],
                            level_2: [[{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 3
                            }, {
                                q: 0,
                                a: 3
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 7
                            }, {
                                q: 0,
                                a: 7
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 5
                            }, {
                                q: 0,
                                a: 2
                            }, {
                                q: 0,
                                a: 6
                            }, {
                                q: 0,
                                a: -1
                            }, {
                                q: 0,
                                a: -1
                            }, {
                                q: 0,
                                a: 6
                            }, {
                                q: 0,
                                a: 2
                            }, {
                                q: 0,
                                a: 5
                            }], [{
                                q: 0,
                                a: 5
                            }, {
                                q: 0,
                                a: 2
                            }, {
                                q: 0,
                                a: 6
                            }, {
                                q: 0,
                                a: -1
                            }, {
                                q: 1,
                                a: 27
                            }, {
                                q: 0,
                                a: 6
                            }, {
                                q: 0,
                                a: 2
                            }, {
                                q: 0,
                                a: 5
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 7
                            }, {
                                q: 0,
                                a: 7
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 3
                            }, {
                                q: 0,
                                a: 3
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }]],
                            level_3: [[{
                                q: 0,
                                a: 3
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 4
                            }, {
                                q: 0,
                                a: 2
                            }], [{
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 4
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 4
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 1
                            }], [{
                                q: 0,
                                a: 2
                            }, {
                                q: 0,
                                a: 4
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 1
                            }, {
                                q: 0,
                                a: 3
                            }]],
                            level_4: [[{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }], [{
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }, {
                                q: 0,
                                a: 0
                            }]]
                        },
                        col_colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        toytypes: [{
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 1
                        },  {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 16
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 0]],
                            priority: 16
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 0, 0]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 1], [0, 0, 1, 0, 0]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 0, 0]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 1]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 4
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 1, 1, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0], [0, 0, 1, 0, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 1, 0, 0]],
                            priority: 16
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 1, 1, 0], [0, 0, 1, 0, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 1, 1, 0, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 1, 1, 0]],
                            priority: 8
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 0, 0]],
                            priority: 5
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 1, 1]],
                            priority: 5
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 5
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 5
                        }, {
                            shape: [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
                            priority: 6
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1]],
                            priority: 6
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 1, 0, 0], [0, 1, 1, 0, 0]],
                            priority: 6
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0]],
                            priority: 6
                        }, {
                            shape: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0]],
                            priority: 6
                        }],
                        colors: {
                            block_colors: [[.074, .107, .031, .407, .324, .55, .827], [-.406, .102, .076, .357, .31, .633, .82], [-.02, 0, -.004, .51, .43, .757, .814], [.322, .005, -.004, .47, .297, .963, .654], [-.28, .005, .284, .493, .214, .787, .67], [.5, .138, .196, .612, .115, .638, .802], [.007, .044, 0, .35, .317, .68, .72], [0, 0, 0, 0, 0, 1, 1]],
                            destroy_colors: [[.098, 0, 0, .333, .333, .667, .667], [-.351, 0, 0, .333, .333, .667, .667], [0, 0, 0, 0, 0, 1, 1], [.318, .2, -.089, .333, .333, .667, .667], [-.278, 0, 0, .333, .333, .667, .667], [-.424, 0, 0, .333, .333, .667, .667], [.056, 0, 0, .333, .333, .667, .667], [0, 0, 0, 0, 0, 1, 1]]
                        },
                        colors3d: {
                            block_colors: [],
                            destroy_colors: []
                        },
                        auto_play: [],
                        i18n: {
                            key: ["tool", "en", "fr", "de", "es", "ar", "zh", "zh_t", "hi", "ru", "pt", "ko", "ja"],
                            list: {
                                free_to_play: [null],
                                install: [null],
                                play: [null]
                            }
                        }
                    },
                    cc._RF.pop()
                }
                , {}],
                control: [function(t, o, e) {
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
                }
                , {
                    "./config": "config",
                    "./model": "model"
                }],
                finger: [function(t, o, e) {
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
                }
                , {
                    "../control": "control"
                }],
                game_over_6: [function(t, o, e) {
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
                }
                , {
                    "./control": "control"
                }],
                guide_force: [function(t, o, e) {
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
                }
                , {
                    "./control": "control"
                }],
                model: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "20887r4FApMCLJSLj30IheE", "model"),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.model = e.Model = void 0;
                    var n = t("./config")
                      , i = function() {
                        function t() {
                            this.TOY_SIZE = 5,
                            this.config = n.config
                        }
                        return t.prototype.getConfig = function() {
                            return this.config
                        }
                        ,
                        t.prototype.getToyShapeConf = function() {
                            return this.config.toytypes || []
                        }
                        ,
                        t.prototype.getColorConf = function(t) {
                            return t ? this.config.colors3d : this.config.colors
                        }
                        ,
                        t.prototype.getSettings = function() {
                            return this.config.settings
                        }
                        ,
                        t.prototype.getColColors = function() {
                            return this.config.col_colors
                        }
                        ,
                        t.prototype.getLevelConf = function(t) {
                            return this.config.level[t] || this.config.level.level_1
                        }
                        ,
                        t.instance = new t,
                        t
                    }();
                    e.Model = i,
                    e.model = i.instance,
                    cc.model = i.instance,
                    cc._RF.pop()
                }
                , {
                    "./config": "config"
                }],
                nexts: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "dbb0bgwjWFLm64CyAk2NsE4", "nexts");
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
                            return o.big_bg_node = null,
                            o.next_toys_node = null,
                            o.toy_pfb = null,
                            o.toy_list = [],
                            o
                        }
                        return i(o, t),
                        o.prototype.init = function(t) {
                            for (var o = this, e = c.control.settings.next_count, n = this.toy_list, i = 0; i < e; i++) {
                                var r = cc.instantiate(this.toy_pfb);
                                r.parent = this.next_toys_node,
                                r.x = c.control.settings.next_space * (i - e / 2 + .5) * c.control.d3rate;
                                var s = r.getComponent("next");
                                n.push(s),
                                s.init({
                                    idx: i,
                                    parent_comp: this
                                })
                            }
                            c.control.view.isRecording() ? this.scheduleOnce(function() {
                                o.updateNexts(t)
                            }, .5) : this.updateNexts(t)
                        },
                        o.prototype.updateNexts = function(t) {
                            var o = c.control.settings.next_count
                              , e = Math.floor((c.control.view.toy_index + 1) / o) * o;
                            1 !== o || this.inited || (e = 0,
                            this.inited = !0);
                            for (var n = this.toy_list, i = 0; i < o; i++)
                                n[i].updateNext(i, e, t)
                        }
                        ,
                        o.prototype.popNext = function() {
                            var t = this
                              , o = c.control.settings.next_count
                              , e = c.control.view.toy_index % o
                              , n = o === e + 1
                              , i = this.toy_list[e];
                            cc.isValid(i) && i.popNext(function() {
                                n && t.updateNexts(!0)
                            })
                        }
                        ,
                        o.prototype.changeToyColor = function(t) {
                            this.toy_list.map(function(o) {
                                o.changeToyColor(t)
                            })
                        }
                        ,
                        o.prototype.getNextToyConf = function() {
                            for (var t = 0; t < this.toy_list.length; t++) {
                                var o = this.toy_list[t];
                                if (cc.isValid(o) && !o.poped)
                                    return o.toy_conf
                            }
                        }
                        ,
                        o.prototype.clickChangeNext = function(t) {
                            this.toy_list[t - 1].autoTouchSel()
                        }
                        ,
                        o.prototype.enterGuide = function(t) {
                            this.in_guide = !0,
                            this.guide_idx = t - 1,
                            this.toy_list[this.guide_idx].showGuide()
                        }
                        ,
                        o.prototype.playGuide = function(t) {
                            for (var o = 0; o < this.toy_list.length; o++) {
                                var e = this.toy_list[o];
                                cc.isValid(e) && (o === t ? (e.node.zIndex = 10,
                                e.guide_ani.play()) : e.node.zIndex = 1)
                            }
                        }
                        ,
                        o.prototype.flashGuide = function() {
                            this.guide_idx && this.toy_list[this.guide_idx].next_sel_ani.play()
                        }
                        ,
                        r([l(cc.Node)], o.prototype, "big_bg_node", void 0),
                        r([l(cc.Node)], o.prototype, "next_toys_node", void 0),
                        r([l(cc.Prefab)], o.prototype, "toy_pfb", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()
                }
                , {
                    "./control": "control"
                }],
                next: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "f2473nZfEJLo5zJoiLrIO48", "next");
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
                      , s = t("./model")
                      , a = cc._decorator
                      , l = a.ccclass
                      , p = a.property
                      , u = function(t) {
                        function o() {
                            var o = null !== t && t.apply(this, arguments) || this;
                            return o.change_audio = null,
                            o.change_icon = null,
                            o.sel_active_node = null,
                            o.main_ani = null,
                            o.toy_node = null,
                            o.next_toy_node = null,
                            o.next_toy_sd_node = null,
                            o.next_sel_ani = null,
                            o.guide_ani = null,
                            o.guide_node = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            this.poped = !0
                        }
                        ,
                        o.prototype.init = function(t) {
                            this.idx = t.idx,
                            this.parent_comp = t.parent_comp
                        }
                        ,
                        o.prototype.autoTouchSel = function() {
                            this.guide_node.active = !0,
                            this.playGuide()
                        }
                        ,
                        o.prototype.playGuide = function() {
                            this.parent_comp.playGuide(this.idx)
                        }
                        ,
                        o.prototype.onAutoTouchSel = function() {
                            this.guide_ani.defaultClip.wrapMode !== cc.WrapMode.Loop && this.onTouchSel()
                        }
                        ,
                        o.prototype.onTouchSel = function() {
                            if (c.control.view.touchListening) {
                                if (this.parent_comp.in_guide) {
                                    if (this.parent_comp.guide_idx !== this.idx)
                                        return;
                                    this.parent_comp.in_guide = !1,
                                    this.guide_ani.setCurrentTime(0),
                                    this.guide_ani.stop(),
                                    c.control.view.configGuideNode()
                                } else if (-1 === c.control.view.timer)
                                    return;
                                c.control.play_started = !0,
                                c.control.playAudio(this.change_audio, !1);
                                var t = c.control.view;
                                if (!this.poped && this.next_toy_node && this.toy_conf && t.cur_toy_conf && t.toy_node) {
                                    this.next_sel_ani.play(),
                                    t.genToyNode(t.toy_index, this.toy_conf, t.toy_node, t.toy_sd_node, t.toy_fs_node),
                                    t.genToyNode(null, t.cur_toy_conf, this.next_toy_node, this.next_toy_sd_node);
                                    var o = {
                                        shape: {},
                                        color: null
                                    };
                                    o.shape = t.cur_toy_conf.shape,
                                    o.color = t.cur_toy_conf.color,
                                    t.cur_toy_conf.shape = this.toy_conf.shape,
                                    t.cur_toy_conf.color = this.toy_conf.color,
                                    this.toy_conf.shape = o.shape,
                                    this.toy_conf.color = o.color,
                                    t.calcLRLimit(),
                                    t.calcLRLimit2(t.toy_node.y),
                                    t.toy_fs_node.position = t.getTargetPos(t.toy_node.x + t.play_area.x / 2 + t.block_size),
                                    this.adjustPosCenter()
                                }
                            }
                        }
                        ,
                        o.prototype.adjustPosCenter = function() {
                            for (var t = this.toy_conf.shape, o = s.model.TOY_SIZE, e = o, n = 0, i = o, r = 0, a = 0; a < o; a++)
                                for (var l = 0; l < o; l++)
                                    t[a][l] && (e = l < e ? l : e,
                                    n = l > n ? l : n,
                                    i = a < i ? a : i,
                                    r = a > r ? a : r);
                            var p = [-(e + n - 2) / 2 * c.control.block_size * c.control.d3rate, (r + i - 9) / 2 * c.control.block_size * c.control.d3rate];
                            c.control.view.setPos(this.next_toy_node, p),
                            c.control.view.setPos(this.next_toy_sd_node, p)
                        }
                        ,
                        o.prototype.updateNext = function(t, o, e) {
                            var n = this
                              , i = t + o
                              , r = c.control.getToyConf(i)
                              , s = this.next_toy_node
                              , a = this.next_toy_sd_node
                              , l = this.main_ani.node;
                            s.removeAllChildren(),
                            a.removeAllChildren(),
                            a.active = 1 === c.control.settings.next_show_sd,
                            this.toy_conf = r,
                            this.adjustPosCenter(),
                            c.control.view.genToyNode(null, r, s, a),
                            this.toy_node.scale = c.control.settings.next_toy_scale[0],
                            e ? (l.scale = 0,
                            this.scheduleOnce(function() {
                                n.poped = !1,
                                cc.tween(n.change_icon).to(.2, {
                                    scale: 1.08
                                }).to(.1, {
                                    scale: 1
                                }).start(),
                                cc.isValid(l) && l.getComponent(cc.Animation) && l.getComponent(cc.Animation).play()
                            }, t * c.control.settings.next_toy_birth_gap + c.control.settings.next_update_gap)) : (this.poped = !1,
                            this.change_icon.scale = 1,
                            l.scale = 1)
                        }
                        ,
                        o.prototype.popNext = function(t) {
                            this.poped = !0,
                            this.change_icon.stopAllActions(),
                            cc.tween(this.change_icon).to(.3, {
                                scale: 0
                            }).start(),
                            this.main_ani.play("next_pop"),
                            this.main_ani.once("finished", function() {
                                t && t()
                            }, this)
                        }
                        ,
                        o.prototype.changeToyColor = function(t) {
                            this.next_toy_node.children.map(function(o) {
                                t(o)
                            })
                        }
                        ,
                        o.prototype.showGuide = function() {
                            this.guide_ani.defaultClip.wrapMode = cc.WrapMode.Loop,
                            this.guide_ani.defaultClip.speed = .5,
                            this.playGuide()
                        }
                        ,
                        r([p(cc.AudioClip)], o.prototype, "change_audio", void 0),
                        r([p(cc.Node)], o.prototype, "change_icon", void 0),
                        r([p(cc.Node)], o.prototype, "sel_active_node", void 0),
                        r([p(cc.Animation)], o.prototype, "main_ani", void 0),
                        r([p(cc.Node)], o.prototype, "toy_node", void 0),
                        r([p(cc.Node)], o.prototype, "next_toy_node", void 0),
                        r([p(cc.Node)], o.prototype, "next_toy_sd_node", void 0),
                        r([p(cc.Animation)], o.prototype, "next_sel_ani", void 0),
                        r([p(cc.Animation)], o.prototype, "guide_ani", void 0),
                        r([p(cc.Node)], o.prototype, "guide_node", void 0),
                        r([l], o)
                    }(cc.Component);
                    e.default = u,
                    cc._RF.pop()
                }
                , {
                    "./control": "control",
                    "./model": "model"
                }],
                opt: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "3f42esDz0pNFYybnD0voKt+", "opt");
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
                      , s = t("../model")
                      , a = cc._decorator
                      , l = a.ccclass
                      , p = a.property
                      , u = function(t) {
                        function o() {
                            var o = null !== t && t.apply(this, arguments) || this;
                            return o.birth_node = null,
                            o.toy_node = null,
                            o.btn = null,
                            o.block_sd_pfb = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            this.fs_list = [],
                            this.bingo_i = [],
                            this.bingo_j = [],
                            this.btn.on(cc.Node.EventType.TOUCH_START, this.touchStart, this),
                            this.btn.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this),
                            this.btn.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this),
                            this.btn.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
                        }
                        ,
                        o.prototype.init = function(t, o, e) {
                            this.view = c.control.view;
                            var n = o.a;
                            this.toy_index = n;
                            var i = c.control.getToyConf(n);
                            this.guide_q = o.q,
                            this.guide_i = o.i,
                            this.guide_j = o.j;
                            var r = i.shape;
                            this.shape = r;
                            var a = c.control.block_size;
                            this.auto_order = o.toy_order;
                            for (var l = o.toy_target_x, p = o.toy_target_y, u = s.model.TOY_SIZE, h = u, _ = 0, d = u, f = 0, y = 0; y < u; y++)
                                for (var v = 0; v < u; v++)
                                    r[y][v] && (h = v < h ? v : h,
                                    _ = v > _ ? v : _,
                                    d = y < d ? y : d,
                                    f = y > f ? y : f);
                            var g = [-(h + _ + 1) / 2 * a * c.control.d3rate, (f + d - 9) / 2 * a * c.control.d3rate];
                            this.auto_order && (this.toy_target_pos = this.view.block_map[p][l].node.position.subtract(this.node.parent.position).add(cc.v3(40 * (Math.random() - .5), 40 * (Math.random() - .5), 0)).add(cc.v3((_ - h + 1 & 1) / 2 * a, (f - d + 1 & 1) / 2 * a, 0)));
                            var b = o.toy_color;
                            for (this.guide_q && (b = c.control.settings.guide_conf[c.control.level - 1].color),
                            this.color_idx = b,
                            y = 0; y < u; y++)
                                for (v = 0; v < u; v++)
                                    if (r[y][v]) {
                                        var m = cc.instantiate(t)
                                          , O = v * a + g[0]
                                          , q = (u - y - 1) * a + g[1];
                                        m.x = O,
                                        m.y = q;
                                        var x = m.getComponent("block");
                                        x.setSize(a, null),
                                        x.setColor(b, !1, 1, function() {}, !1),
                                        x.ori_color_num = b;
                                        var w = void 0;
                                        if (cc.isValid(this.block_sd_pfb)) {
                                            (w = cc.instantiate(this.block_sd_pfb)).x = O,
                                            w.y = q;
                                            var C = w.getChildByName("spr");
                                            if (cc.isValid(C)) {
                                                var P = 1.8 * a;
                                                C.anchorY = 1 - 1 / 1.8,
                                                C.y = 0,
                                                C.width = P,
                                                C.height = P
                                            }
                                            w.parent = this.toy_node,
                                            w.zIndex = 0
                                        }
                                        m.parent = this.toy_node,
                                        m.zIndex = 1
                                    }
                            this.toy_node.scale = this.getScale(),
                            this.node.x = 200 * (e - 1),
                            this.node.scale = 0,
                            cc.tween(this.node).to(.2, {
                                scale: 1.08
                            }).to(.05, {
                                scale: 1
                            }).start()
                        }
                        ,
                        o.prototype.autoPut = function() {
                            var t = this;
                            this.auto_moving = !0,
                            this.node.zIndex = 1,
                            cc.tween(this.toy_node).to(.2, {
                                scale: 1
                            }).start(),
                            cc.tween(this.node).delay(.35).to(.4, {
                                position: this.toy_target_pos
                            }, {
                                easing: c.control.ease("easeOutCubic")
                            }).delay(.07).call(function() {
                                t.putOn(),
                                t.node.destroy()
                            }).start()
                        }
                        ,
                        o.prototype.update = function() {
                            this.auto_moving && this.onCheckBlocks()
                        }
                        ,
                        o.prototype.touchStart = function(t) {
                            if (!this.clicking && !this.view.is_game_over) {
                                this.view.guide_node.active = !1,
                                c.control.play_started = !0,
                                c.control.playAudio(this.view.audio_move, !1),
                                this.birth_node.active = !1,
                                this.node.zIndex = 1,
                                this.clicking = !0,
                                this.ori_pos = this.node.position,
                                this.toy_node.stopAllActions();
                                var o = t.getLocation();
                                this.node.position = this.getOptionTouchPos(o),
                                this.toy_node.scale = 1
                            }
                        }
                        ,
                        o.prototype.touchMove = function(t) {
                            if (this.clicking && !this.view.is_game_over) {
                                var o = t.getLocation();
                                this.node.position = this.getOptionTouchPos(o),
                                this.onCheckBlocks()
                            }
                        }
                        ,
                        o.prototype.getOptionTouchPos = function(t) {
                            var o = c.control.getResolution()
                              , e = o.width
                              , n = o.height
                              , i = this.view
                              , r = i.options_node.scale
                              , s = i.isPortrait() ? 0 : -100
                              , a = i.isPortrait() ? 200 : 40
                              , l = (t.x - e / 2) / 1 / r - i.options_node.x / r + s
                              , p = (t.y - n / 2) / 1 / r - i.options_node.y / r + a;
                            return cc.v3(l, p, 0)
                        }
                        ,
                        o.prototype.touchEnd = function() {
                            this.clicking && !this.view.is_game_over && (this.node.zIndex = 0,
                            this.clicking = !1,
                            this.checkAllow() ? (this.putOn(),
                            this.node.destroy()) : (cc.tween(this.node).to(.05, {
                                position: this.ori_pos
                            }).start(),
                            cc.tween(this.toy_node).to(.05, {
                                scale: this.getScale()
                            }).start(),
                            this.cancle()))
                        }
                        ,
                        o.prototype.checkAllow = function() {
                            if (this.fs_list.length) {
                                if (!this.guide_q)
                                    return !0;
                                for (var t = [], o = this.shape.length, e = this.shape[0].length, n = 0; n < o; n++)
                                    for (var i = 0; i < e; i++)
                                        this.shape[n][i] && t.push([this.guide_i + n - (o - 1), this.guide_j + i - (e >> 1)]);
                                for (n = 0; n < this.fs_list.length; n++) {
                                    var r = this.fs_list[n]
                                      , s = !1;
                                    for (i = 0; i < t.length; i++)
                                        r.i === t[i][0] && r.j === t[i][1] && (s = !0);
                                    if (!s)
                                        return !1
                                }
                                return c.control.nextLevel(),
                                !0
                            }
                            return !1
                        }
                        ,
                        o.prototype.onDestroy = function() {
                            this.guide_q || this.view.onPutToy()
                        }
                        ,
                        o.prototype.putOn = function() {
                            for (var t, o = this, e = this.view.block_map, n = 0, i = 0; i < this.bingo_i.length; i++) {
                                for (var r = this.bingo_i[i], s = 0; s < e[r].length; s++)
                                    e[r][s].setOpacity(0);
                                n++;
                                var a = cc.instantiate(c.control.view.destroy_pfb);
                                this.view.configDestroyNode(a, (r - e[r].length / 2) * c.control.block_size + c.control.settings.destroy_pos[1], this.color_idx)
                            }
                            for (i = 0; i < this.bingo_j.length; i++) {
                                for (s = this.bingo_j[i],
                                r = 0; r < e.length; r++)
                                    e[r][s].setOpacity(0);
                                n++,
                                (a = cc.instantiate(c.control.view.destroy_pfb)).angle = -90,
                                this.view.configDestroyNode(a, (s - e[s].length / 2) * c.control.block_size + c.control.settings.destroy_pos[1], this.color_idx)
                            }
                            this.fs_list.map(function(e) {
                                0 === e.getOpacity() ? t || (t = e.node.position) : (e.setOpacity(255),
                                e.ori_color_num = o.color_idx)
                            }),
                            this.view.handlePut(n, this.shape.reduce(function(t, o) {
                                return t + o.reduce(function(t, o) {
                                    return t + o
                                }, 0)
                            }, 0), t),
                            this.auto_moving && (this.auto_moving = !1,
                            this.view.autoPut(this.auto_order, n))
                        }
                        ,
                        o.prototype.cancle = function() {
                            for (var t = this.view.block_map, o = 0; o < t.length; o++)
                                for (var e = 0; e < t[0].length; e++) {
                                    var n = t[o][e];
                                    n.getOpacity() < 255 && n.setOpacity(0),
                                    n.setColor(n.ori_color_num)
                                }
                        }
                        ,
                        o.prototype.getScale = function() {
                            return c.control.settings.opt_tile_size / c.control.block_size
                        }
                        ,
                       

           
                        o.prototype.onCheckBlocks = function() {
                            var t = this.view.block_map
                              , o = c.control.block_size
                              , e = !0
                              , n = [];
                            this.fs_list = [],
                            this.bingo_i = [],
                            this.bingo_j = [];
                            for (var i = 0; i < this.toy_node.children.length; i++) {
                                for (var r = !1, s = 0; s < t.length; s++)
                                    for (var a = 0; a < t[0].length; a++)
                                        if ((h = t[s][a]).getOpacity() < 255 && h.setOpacity(0),
                                        h.setColor(h.ori_color_num),
                                        e) {
                                            var l = h.node.convertToNodeSpaceAR(this.toy_node.children[i].convertToWorldSpaceAR(cc.v2(0, 0)));
                                            l.x >= -o / 2 && l.x < o / 2 && l.y >= -o / 2 && l.y < o / 2 && (h.getOpacity() || (r = !0),
                                            n.push(h))
                                        }
                                r || (e = !1)
                            }
                            if (e) {
                                var p = []
                                  , u = [];
                                for (s = 0; s < n.length; s++) {
                                    var h;
                                    (h = n[s]).getOpacity() || (h.setColor(this.color_idx),
                                    h.setOpacity(127),
                                    this.fs_list.push(h))
                                }
                                for (var _ = 0; _ < n.length; _++) {
                                    var d = n[_];
                                    if (s = d.i,
                                    a = d.j,
                                    -1 === p.indexOf(s)) {
                                        p.push(s);
                                        for (var f = !0, y = 0; y < t[s].length; y++)
                                            t[s][y].getOpacity() <= 0 && (f = !1);
                                            if (f) {
    this.bingo_i.push(s);
    for (var v = 0; v < t[s].length; v++) {
        // Set the color of the block
        t[s][v].setColor(this.color_idx);
    var glowIntensity = 1.5; // Adjust intensity as needed
    t[s][v].addGlow(this.color_idx, glowIntensity);
        // Add glow effect to the block
      
    }
}
                                    }
                                    if (-1 === u.indexOf(a)) {
                                        u.push(a),
                                        f = !0;
                                        for (var g = 0; g < t.length; g++)
                                            t[g][a].getOpacity() <= 0 && (f = !1);
                                        if (f) {
                                            this.bingo_j.push(a);
                                            for (var b = 0; b < t.length; b++)
                                                t[b][a].setColor(this.color_idx);
                                            t[b][a].setOpacity(150);
                                        }
                                    }
                                }
                            }
                        }
                        ,
                        r([p(cc.Node)], o.prototype, "birth_node", void 0),
                        r([p(cc.Node)], o.prototype, "toy_node", void 0),
                        r([p(cc.Node)], o.prototype, "btn", void 0),
                        r([p(cc.Prefab)], o.prototype, "block_sd_pfb", void 0),
                        r([l], o)
                    }(cc.Component);
                    e.default = u,
                    cc._RF.pop()
                }
                , {
                    "../control": "control",
                    "../model": "model"
                }],
                play_audio: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "59d710ybCtKIK2fWdvSLN7z", "play_audio");
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
                            return o.audio = null,
                            o
                        }
                        return i(o, t),
                        o.prototype.onLoad = function() {
                            this.ctl = c.control,
                            this.ctl.playAudio(this.audio, !1)
                        }
                        ,
                        r([l(cc.AudioClip)], o.prototype, "audio", void 0),
                        r([a], o)
                    }(cc.Component);
                    e.default = p,
                    cc._RF.pop()
                }
                , {
                    "./control": "control"
                }],
                prgs: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "f83d5CyuapJcLAo4Xuab05M", "prgs");
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
                    var c = cc._decorator
                      , s = c.ccclass
                      , a = c.property
                      , l = function(t) {
                        function o() {
                            var o = null !== t && t.apply(this, arguments) || this;
                            return o.prgs_bar = null,
                            o
                        }
                        return i(o, t),
                        r([a(cc.ProgressBar)], o.prototype, "prgs_bar", void 0),
                        r([s], o)
                    }(cc.Component);
                    e.default = l,
                    cc._RF.pop()
                }
                , {}],
                score: [function(t, o, e) {
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
                }
                , {
                    "../control": "control"
                }],
                scroll_lbl: [function(t, o, e) {
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
                }
                , {
                    "./control": "control"
                }],
                shake: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "acbbcXFsbVJpYFgOe/Y9JAw", "shake");
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
                    );
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.shake = void 0;
                    var r = function(t) {
                        function o(o, e, n) {
                            var i = t.call(this) || this;
                            return i._initial_x = 0,
                            i._initial_y = 0,
                            i._strength_x = 0,
                            i._strength_y = 0,
                            i.initWithDuration(o, e, n),
                            i
                        }
                        return i(o, t),
                        o.prototype.initWithDuration = function(o, e, n) {
                            return t.prototype.initWithDuration.call(this, o),
                            this._strength_x = e,
                            this._strength_y = n,
                            !0
                        }
                        ,
                        o.prototype.update = function() {
                            var t = 2 * Math.random() * this._strength_x - this._strength_x
                              , o = 2 * Math.random() * this._strength_y - this._strength_y;
                            this.getTarget().setPosition(t + this._initial_x, o + this._initial_y)
                        }
                        ,
                        o.prototype.startWithTarget = function(o) {
                            t.prototype.startWithTarget.call(this, o),
                            this._initial_x = o.x,
                            this._initial_y = o.y
                        }
                        ,
                        o.prototype.stop = function() {
                            this.getTarget().setPosition(new cc.Vec2(this._initial_x,this._initial_y)),
                            t.prototype.stop.call(this)
                        }
                        ,
                        o
                    }(cc.ActionInterval);
                    e.shake = function(t, o, e) {
                        return new r(t,o,e)
                    }
                    ,
                    cc._RF.pop()
                }
                , {}],
                star: [function(t, o, e) {
                    "use strict";
                    cc._RF.push(o, "38a37PduI5MS7mPwrExGLXj", "star");
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
                }
                , {
                    "./control": "control"
                }]
            }, {}, ["api", "audio_btn", "auto_play_blink", "blast", "finger", "opt", "score", "blink", "blink_2", "block", "config", "control", "game_over_6", "guide_force", "model", "next", "nexts", "play_audio", "prgs", "scroll_lbl", "shake", "star"]);