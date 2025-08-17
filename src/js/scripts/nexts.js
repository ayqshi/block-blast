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