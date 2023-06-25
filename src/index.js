"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var server_1 = require("react-dom/server");
var render = function (reactNode) {
    return (0, server_1.renderToString)(reactNode);
};
exports.render = render;
