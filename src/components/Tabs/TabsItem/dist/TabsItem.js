"use strict";
exports.__esModule = true;
var react_1 = require("react");
function TabsItem(_a) {
    var className = _a.className, role = _a.role, children = _a.children;
    var _b = react_1.useState(0), count = _b[0], setCount = _b[1];
    var incrementedClassName = "tab-" + count;
    react_1.useEffect(function () {
        setCount(function (prevCount) { return prevCount + 1; });
    }, []);
    return (react_1["default"].createElement("li", { id: "" + incrementedClassName, className: "nav-item " + (className ? className : ""), role: role }, children));
}
exports["default"] = TabsItem;