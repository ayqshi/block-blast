"use strict";
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