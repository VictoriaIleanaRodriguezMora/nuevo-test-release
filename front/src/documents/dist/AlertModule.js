'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_use_scrollspy_1 = require("react-use-scrollspy");
var CodeBox_1 = require("@/components/CodeBox");
// import Alert from "@componentes/Alert";
var Box_1 = require("@/components/DocComponents/Box");
var Flex_1 = require("@/components/DocComponents/Flex");
var HeadingTemplate_1 = require("@/components/DocComponents/HeadingTemplate");
var MainDescription_1 = require("@/components/DocComponents/MainDescription");
var Divisor_1 = require("@/components/DocComponents/Divisor");
var SimpleText_1 = require("@/components/DocComponents/SimpleText");
var AlertModule = function () {
    var codeImport = "\n  import Alert from \"@componentes/Alert\";\n  ";
    var codeInfo = "\n    <Alert alertInfo>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad\n      obca\n    </Alert>\n  ";
    var codeWarning = "\n    <Alert alertWarning>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad\n      obca\n    </Alert>\n  ";
    var codeSuccess = "\n    <Alert alertSuccess>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad\n    obca\n    </Alert>\n  ";
    var codeDanger = "\n    <Alert alertDanger>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad\n    obca\n    </Alert>\n  ";
    var codeDimissible = "\n    <Alert alertInfo alertDimissible>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad\n      obca</p>\n    </Alert>\n  ";
    var sectionRefs = [
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
        react_1.useRef(null),
    ];
    var activeSection = react_use_scrollspy_1["default"]({
        sectionElementRefs: sectionRefs,
        offsetPx: -300
    });
    return (react_1["default"].createElement(Box_1["default"], null,
        react_1["default"].createElement(Flex_1["default"], null,
            react_1["default"].createElement("nav", { id: "navbar-example2", className: "navbar sticky-top bg-light px-3" },
                react_1["default"].createElement("div", { className: "container" },
                    react_1["default"].createElement("a", { className: "navbar-brand", href: "#" }, "Navbar"),
                    react_1["default"].createElement("ul", { className: "nav nav-pills" },
                        react_1["default"].createElement("li", { className: "nav-item" },
                            react_1["default"].createElement("a", { className: "nav-link", href: "#hero" }, "Hero")),
                        react_1["default"].createElement("li", { className: "nav-item" },
                            react_1["default"].createElement("a", { className: "nav-link", href: "#about" }, "About")),
                        react_1["default"].createElement("li", { className: "nav-item" },
                            react_1["default"].createElement("a", { className: "nav-link", href: "#portfolio" }, "Portfolio")),
                        react_1["default"].createElement("li", { className: "nav-item" },
                            react_1["default"].createElement("a", { className: "nav-link", href: "#contact" }, "Contact")),
                        react_1["default"].createElement("li", { className: "nav-item" },
                            react_1["default"].createElement("a", { className: "nav-link", href: "#footer" }, "Footer"))))),
            react_1["default"].createElement("div", { "data-bs-spy": "scroll", "data-bs-target": "#navbar-example2", "data-bs-root-margin": "0px 0px -40%", "data-bs-smooth-scroll": "true", tabIndex: 0, className: "col-12 col-lg-8" },
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "introduction" },
                    react_1["default"].createElement("h1", { ref: sectionRefs[0] }, "Alerta")),
                react_1["default"].createElement(MainDescription_1["default"], { description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio\r\n            blanditiis neque illum? Sequi atque ullam deserunt quos doloremque\r\n            repellendus iste error, obcaecati ducimus cumque esse maxime eligendi\r\n            nesciunt enim? Voluptates!" }),
                react_1["default"].createElement(Divisor_1["default"], null),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "import" },
                    react_1["default"].createElement("div", { className: 'articulo-1' },
                        react_1["default"].createElement("h2", { className: "mb-4", ref: sectionRefs[1] }, "import"))),
                react_1["default"].createElement(SimpleText_1["default"], { description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis\r\n            repellendus expedita repellat ducimus assumenda voluptate dolor,\r\n            voluptatem dolorem iusto reiciendis iste temporibus odio tempore\r\n            perferendis. Impedit quod aliquam autem quas!" }),
                react_1["default"].createElement(CodeBox_1["default"], { code: codeImport }),
                react_1["default"].createElement(Divisor_1["default"], null),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "usage" },
                    react_1["default"].createElement("div", { className: 'articulo-2' },
                        react_1["default"].createElement("h2", { className: "mb-5", ref: sectionRefs[2] }, "Usage"))),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: 'tipos' },
                    react_1["default"].createElement("div", { className: 'articulo-3' },
                        react_1["default"].createElement("h3", { className: "mb-4", ref: sectionRefs[3] }, "Tipos"))),
                react_1["default"].createElement(SimpleText_1["default"], { description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,\r\n            dolorum consequuntur ea voluptatem, expedita odio eaque sint\r\n            doloremque vero assumenda reiciendis tenetur magnam recusandae iure\r\n            maxime explicabo officia officiis? Reprehenderit?" }),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "simples" },
                    react_1["default"].createElement("div", { className: 'articulo-4' },
                        react_1["default"].createElement("h4", { className: "mb-4", ref: sectionRefs[4] }, "Simples"))),
                react_1["default"].createElement(SimpleText_1["default"], { description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,\r\n            dolorum consequuntur ea voluptatem, expedita odio eaque sint\r\n            doloremque vero assumenda reiciendis tenetur magnam recusandae iure\r\n            maxime explicabo officia officiis? Reprehenderit?" }),
                react_1["default"].createElement(Divisor_1["default"], null),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "informacion" },
                    react_1["default"].createElement("h4", { className: "mb-4", ref: sectionRefs[5] }, "Informaci\u00F3n")),
                react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit ducimus repudiandae, placeat tempora dolor eaque nostrum provident assumenda officiis harum, repellat amet tenetur praesentium esse ad commodi enim qui!"),
                react_1["default"].createElement(CodeBox_1["default"], { code: codeInfo }),
                react_1["default"].createElement(Divisor_1["default"], null),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "advertencia" },
                    react_1["default"].createElement("h4", { className: "mb-4", ref: sectionRefs[6] }, "Advertencia")),
                react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit ducimus repudiandae, placeat tempora dolor eaque nostrum provident assumenda officiis harum, repellat amet tenetur praesentium esse ad commodi enim qui!"),
                react_1["default"].createElement(CodeBox_1["default"], { code: codeWarning }),
                react_1["default"].createElement(Divisor_1["default"], null),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "exito" },
                    react_1["default"].createElement("h4", { className: "mb-4", ref: sectionRefs[7] }, "Exito")),
                react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit ducimus repudiandae, placeat tempora dolor eaque nostrum provident assumenda officiis harum, repellat amet tenetur praesentium esse ad commodi enim qui!"),
                react_1["default"].createElement(CodeBox_1["default"], { code: codeSuccess }),
                react_1["default"].createElement(Divisor_1["default"], null),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "peligro" },
                    react_1["default"].createElement("h4", { className: "mb-4", ref: sectionRefs[8] }, "Peligro")),
                react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit ducimus repudiandae, placeat tempora dolor eaque nostrum provident assumenda officiis harum, repellat amet tenetur praesentium esse ad commodi enim qui!"),
                react_1["default"].createElement(CodeBox_1["default"], { code: codeDanger }),
                react_1["default"].createElement(Divisor_1["default"], null),
                react_1["default"].createElement(HeadingTemplate_1["default"], { id: "con-cierre" },
                    react_1["default"].createElement("h4", { className: "mb-4", ref: sectionRefs[9] }, "Con cierre")),
                react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit ducimus repudiandae, placeat tempora dolor eaque nostrum provident assumenda officiis harum, repellat amet tenetur praesentium esse ad commodi enim qui!"),
                react_1["default"].createElement(CodeBox_1["default"], { code: codeDimissible })))));
};
exports["default"] = AlertModule;
