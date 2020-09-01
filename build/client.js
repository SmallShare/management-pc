// client_patch.js, For Android 4.0
var defineProperty = Object.defineProperty;
Object.defineProperty = function (exports, name) {
    if (name === '__esModule') {
        exports[name] = true;
        return;
    }
    return defineProperty.apply(this, arguments);
};