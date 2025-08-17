function (require, module, exports) {
    "use strict";

    // Unregisters this module from the global Cocos Creator module registry.
    // The module ID "20887r4FApMCLJSLj30IheE" and the name "model" are for internal tracking.
    cc._RF.push(module, "20887r4FApMCLJSLj30IheE", "model");

    // Mark this module as an ES module.
    Object.defineProperty(exports, "__esModule", { value: true });

    // Declare and export the Model class and its singleton instance.
    exports.model = exports.Model = void 0;

    // Imports the config module, which contains the game's raw data.
    var configModule = require("./config");

    /**
     * The Model class acts as the data layer for the game.
     * It provides a centralized place to access all game configurations and settings.
     * This class is implemented as a singleton to ensure a single source of truth for all game data.
     */
    var Model = (function () {
        // Constructor initializes the model with the game configuration.
        function Model() {
            this.TOY_SIZE = 5; // A hard-coded constant for the size of a "toy" (likely a game piece).
            this.config = configModule.config; // Stores the imported config object.
        }

        // Returns the entire game configuration object.
        Model.prototype.getConfig = function () {
            return this.config;
        };

        // Returns the shape configurations for game "toys" or pieces.
        // It returns an empty array if the `toytypes` property is not found, preventing errors.
        Model.prototype.getToyShapeConf = function () {
            return this.config.toytypes || [];
        };

        // Returns the color configurations, choosing between 3D or standard colors.
        // The `is3d` parameter determines which color set is returned.
        Model.prototype.getColorConf = function (is3d) {
            return is3d ? this.config.colors3d : this.config.colors;
        };

        // Returns the game's global settings.
        Model.prototype.getSettings = function () {
            return this.config.settings;
        };

        // Returns the color configurations for columns.
        Model.prototype.getColColors = function () {
            return this.config.col_colors;
        };

        // Returns the configuration for a specific level.
        // If the level is not found, it defaults to `level_1`.
        Model.prototype.getLevelConf = function (levelId) {
            return this.config.level[levelId] || this.config.level.level_1;
        };

        // Create a single instance of the Model class (the singleton pattern).
        Model.instance = new Model();

        return Model;
    })();

    // Export the Model class and its singleton instance for external use.
    exports.Model = Model;
    exports.model = Model.instance;

    // Additionally, attach the singleton instance to the global `cc` object for easy access within Cocos Creator.
    cc.model = Model.instance;

    // Pops the module off the internal Cocos Creator module stack, indicating it's done loading.
    cc._RF.pop();
}