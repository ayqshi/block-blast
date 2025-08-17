"use strict";
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