"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
function Button(_a) {
    var children = _a.children, size = _a.size, className = _a.className, isPrimary = _a.isPrimary, isSecondary = _a.isSecondary, isSuccess = _a.isSuccess, isDanger = _a.isDanger, isLink = _a.isLink, isOutlinePrimary = _a.isOutlinePrimary, isOutlineSecondary = _a.isOutlineSecondary, isOutlineSuccess = _a.isOutlineSuccess, isOutlineDanger = _a.isOutlineDanger, isOutlineLink = _a.isOutlineLink, isExpanded = _a.isExpanded, isIcon = _a.isIcon, rest = __rest(_a, ["children", "size", "className", "isPrimary", "isSecondary", "isSuccess", "isDanger", "isLink", "isOutlinePrimary", "isOutlineSecondary", "isOutlineSuccess", "isOutlineDanger", "isOutlineLink", "isExpanded", "isIcon"]);
    var Element = rest.href ? "a" : "button";
    var sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
    var hasStyleClass = isPrimary || isSecondary || isSuccess || isDanger || isLink ||
        isOutlinePrimary || isOutlineSecondary || isOutlineSuccess ||
        isOutlineDanger || isOutlineLink;
    var combinedClassName = classnames_1["default"](sizeClass, {
        "btn-primary": isPrimary || !hasStyleClass,
        "btn-secondary": isSecondary,
        "btn-success": isSuccess,
        "btn-danger": isDanger,
        "btn-link": isLink,
        "btn-outline-primary": isOutlinePrimary,
        "btn-outline-secondary": isOutlineSecondary,
        "btn-outline-success": isOutlineSuccess,
        "btn-outline-danger": isOutlineDanger,
        "btn-outline-link": isOutlineLink,
        "btn-block": isExpanded,
        "btn-icon": isIcon
    }, className);
    return (react_1["default"].createElement(Element, __assign({ className: "btn " + combinedClassName }, rest), children));
}
exports["default"] = Button;
;

