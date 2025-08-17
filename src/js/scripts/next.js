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