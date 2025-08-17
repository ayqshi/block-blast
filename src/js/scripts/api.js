function (require, module, exports) {
    "use strict";

    // Unregisters this module from the global Cocos Creator module registry.
    // The module ID "329f7FzT7xFwKcJahEhVAJM" and the name "api" are used for internal tracking.
    cc._RF.push(module, "329f7FzT7xFwKcJahEhVAJM", "api");

    // Defines the 'exports' object as an ES module to enable 'import' functionality.
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    // Declares a global API object and assigns it to the module's exports.
    exports.API = void 0;
    exports.API = {
        // This function dispatches a custom event called "message" to the browser window.
        // It's likely used to communicate with an external script or web page.
        open: function () {
            var messageEvent = new CustomEvent("message");
            messageEvent.data = "ClickDownLoad";
            window.dispatchEvent(messageEvent);
        },
        
        // These are empty placeholder functions, likely to be filled in later or used
        // as event triggers by other parts of the game.
        game_end: function () {},
        game_ready: function () {}
    };

    // Pops the module off the internal Cocos Creator module stack.
    cc._RF.pop();
}