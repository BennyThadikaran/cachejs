/**
* Client Side Caching with localStorage using the Module Pattern
*/
var Cache = (function () {
    "use strict";

    /**
    * Test browser support for localStorage and cache result
    */
    var test = (function () {
        if (typeof localStorage === "undefined") return false;

        try {
            localStorage.setItem('x', '1');

            if (localStorage.getItem('x') === null) return false;

            localStorage.removeItem('x');
            return true;
        } catch(e) {
            return false;
        }
    })();

    return {

        /**
        * Sets an item into localStorage
        */
        set: function (key, value, expiryInSeconds) {
            if (! test) return null;

            if (typeof expiryInSeconds === "undefined") expiryInSeconds = 1800;  // 30 mins

            localStorage.setItem(key, value);
            localStorage.setItem(key + "_expiry", Date.now() + (Math.abs(expiryInSeconds)*1000));
        },

        /**
        * Get data from localStorage
        */
        get: function (key) {
            if (! test) return null;
            var expiry =  localStorage.getItem(key + "_expiry");
            if (! expiry || expiry < Date.now()) {
                this.remove(key);
                return null;
            }
            return localStorage.getItem(key);
        },

        /**
        * Remove an item from localStorage
        */
        remove: function (key) {
            if (!test) return null;

            localStorage.removeItem(key);
            localStorage.removeItem(key + "_expiry");
        },

        /**
        * Clear all items in localStorage
        */
        clear: function () {
            if (!test) return null;

            localStorage.clear();
        }
    }
})();
