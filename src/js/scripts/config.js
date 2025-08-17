function (require, module, exports) {
    "use strict";

    // Unregisters this module from the global Cocos Creator module registry.
    // The module ID "e562ftYRWxMR5Q7/vF2+3v8" and the name "config" are for internal tracking.
    cc._RF.push(module, "e562ftYRWxMR5Q7/vF2+3v8", "config");

    // Mark this module as an ES module.
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    // The main configuration object for the game.
    exports.config = void 0;
    exports.config = {
        // Defines global game settings.
        settings: {
            name: "CAK1324",
            id_num: 220,
            suffix: null,
            platforms: [1, 2, 5, 7, 10, 12],
            time_limit: -1, // -1 means no time limit.
            tile_size: [80], // Size of a single game tile.
            opt_tile_size: 38,
            start_level: 4,
            block_space: 0, // Space between blocks.
            play_node: 2,
            force_cta_step: 1,
            destroy_pos: [5, -98], // Position for destroyed blocks.
            destroy_blocks: [0, 0], // Parameters for block destruction.
            destroy_blocks_rand: 0,
            destroy_single_color: 0,
            d3_texture_div: 20, // 3D texture division.
            score_bingo: [1, 3, 6, 10, 15, 21], // Scores for clearing multiple lines/blocks.
            score_lbl: [null, " Good", " Great", " Excellect", " Amazing", " Unbelievable"], // Labels for combo scores.
            score_base: 10, // Base score multiplier.
            guide_conf: [{
                pos: [125, -44], // Tutorial position.
                color: 1
            }, {
                pos: [0, 0], // Tutorial position.
                color: 4
            }]
        },
        // I actually remember working on this part in the past
        // Defines the layout and content of different game levels.
        level: {
            //tutorial levels
            level_1: [
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }]
            ],
            level_2: [
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }]
            ],
            level_3: [
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }]
            ],
            //after tutorial completed next level is an empty board
            //freeplay
            level_4: [
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }],
                [{
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
                }]
            ]
        },
        col_colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Not entirely clear what this does.
        // Defines the shapes and priorities of blocks ("toys") that appear in the game.
        toytypes: [{
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 1 // Lower priority means less likely to appear.
        },
        //so for the shapes, its already easy to visualize.
       
        {
             // The one below this note is a 4x1 with a spawn chance of 16 (which will be often)
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 16
        }, {
             // below this note is a 1x4 with a spawn chance of 16 (which will also be often)
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [1, 1, 1, 1, 0]
            ],
            priority: 16
        }, {
            //L-Shape pointing down-left
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 1, 0, 0]
            ],
            priority: 4
        }, {
            //L-Shape pointing down-right
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 1, 0]
            ],
            priority: 4
        }, {
            shape: [
                //idk what to call this but by now any reader would understand.
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 4
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1],
                [0, 0, 1, 0, 0]
            ],
            priority: 4
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [1, 1, 1, 0, 0]
            ],
            priority: 4
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 1, 1]
            ],
            priority: 4
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 4
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 4
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 1, 1, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 1, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 1, 1, 0, 0]
            ],
            priority: 16
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 1, 1, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 1, 0],
                [0, 1, 1, 0, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 1, 1, 0]
            ],
            priority: 8
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [1, 1, 1, 0, 0]
            ],
            priority: 5
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 1, 1]
            ],
            priority: 5
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [1, 1, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 5
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 5
        }, {
            shape: [
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            priority: 6
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1]
            ],
            priority: 6
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 1, 1, 0, 0]
            ],
            priority: 6
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 1, 1, 0]
            ],
            priority: 6
        }, {
            shape: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 1, 1, 0]
            ],
            priority: 6
        }],
        // Color configurations for blocks.
        colors: {
            block_colors: [ // Block colors, likely in a custom format.
                [.074, .107, .031, .407, .324, .55, .827],
                [-.406, .102, .076, .357, .31, .633, .82],
                [-.02, 0, -.004, .51, .43, .757, .814],
                [.322, .005, -.004, .47, .297, .963, .654],
                [-.28, .005, .284, .493, .214, .787, .67],
                [.5, .138, .196, .612, .115, .638, .802],
                [.007, .044, 0, .35, .317, .68, .72],
                [0, 0, 0, 0, 0, 1, 1]
            ],
            destroy_colors: [ // Colors for destruction effects.
                [.098, 0, 0, .333, .333, .667, .667],
                [-.351, 0, 0, .333, .333, .667, .667],
                [0, 0, 0, 0, 0, 1, 1],
                [.318, .2, -.089, .333, .333, .667, .667],
                [-.278, 0, 0, .333, .333, .667, .667],
                [-.424, 0, 0, .333, .333, .667, .667],
                [.056, 0, 0, .333, .333, .667, .667],
                [0, 0, 0, 0, 0, 1, 1]
            ]
        },
        colors3d: {
            block_colors: [],
            destroy_colors: []
        },
        auto_play: [], // Defines sequences for an autoplay or demo mode.
        // Internationalization (i18n) data for multi-language support.
        i18n: {
            key: ["tool", "en", "fr", "de", "es", "ar", "zh", "zh_t", "hi", "ru", "pt", "ko", "ja"],
            list: {
                free_to_play: [null],
                install: [null],
                play: [null]
            }
        }
    };

    // Pops the module off the internal Cocos Creator module stack.
    cc._RF.pop();
}