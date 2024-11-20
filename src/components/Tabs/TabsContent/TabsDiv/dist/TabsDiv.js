"use strict";
exports.__esModule = true;
var react_1 = require("react");
function TabsDiv(_a) {
    var className = _a.className, children = _a.children;
    var _b = react_1.useState(0), count = _b[0], setCount = _b[1];
    var incrementedClassName = "panel-content-" + count;
    react_1.useEffect(function () {
        setCount(function (prevCount) { return prevCount + 1; });
    }, []);
    return (react_1["default"].createElement("div", { className: "tab-pane fade " + (className ? className : ""), id: "" + incrementedClassName, role: "tabpanel", "aria-label": "4-tab" }, children));
}
exports["default"] = TabsDiv;
