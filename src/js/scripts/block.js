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