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