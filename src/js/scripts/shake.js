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