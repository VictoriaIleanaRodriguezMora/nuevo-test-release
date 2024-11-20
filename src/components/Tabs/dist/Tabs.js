"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TabsContainer_1 = require("./TabsContainer");
var TabsList_1 = require("./TabsList");
var TabsItem_1 = require("./TabsItem");
var Button_1 = require("../Button");
function Tabs() {
    return (react_1["default"].createElement(TabsContainer_1["default"], null,
        react_1["default"].createElement(TabsList_1["default"], { id: "simple-myTab", role: "tablist" },
            react_1["default"].createElement(TabsItem_1["default"], { role: "presentation" },
                react_1["default"].createElement(Button_1["default"], { text: "Pesta\u00F1a 1", customClasses: "nav-link", dataToggle: "tab", dataTarget: "panel-content-1", role: "tab" })),
            react_1["default"].createElement(TabsItem_1["default"], { role: "presentation" },
                react_1["default"].createElement(Button_1["default"], { text: "Pesta\u00F1a 2", customClasses: "nav-link", dataToggle: "tab", dataTarget: "panel-content-1", role: "tab" })),
            react_1["default"].createElement(TabsItem_1["default"], { role: "presentation" },
                react_1["default"].createElement(Button_1["default"], { text: "Pesta\u00F1a 3", customClasses: "nav-link", dataToggle: "tab", dataTarget: "panel-content-1", role: "tab" })),
            react_1["default"].createElement(TabsItem_1["default"], { role: "presentation" },
                react_1["default"].createElement(Button_1["default"], { text: "Pesta\u00F1a 4", customClasses: "nav-link", dataToggle: "tab", dataTarget: "panel-content-1", role: "tab" })),
            react_1["default"].createElement(TabsItem_1["default"], { role: "presentation" },
                react_1["default"].createElement(Button_1["default"], { text: "Pesta\u00F1a 5", customClasses: "nav-link", dataToggle: "tab", dataTarget: "panel-content-1", role: "tab" })))));
}
exports["default"] = Tabs;
