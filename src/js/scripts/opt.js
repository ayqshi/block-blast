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