"use client";
"use strict";
exports.__esModule = true;
exports.componentsPages = void 0;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
require("./globals.scss");
var script_1 = require("next/script");
var Desktop_1 = require("@/components/Layout/Headers/Desktop");
var nav_1 = require("@/components/Layout/Navigation/nav");
var image_1 = require("next/image");
exports.componentsPages = [
    { text: "Accesos", url: "/components/access", id: 1 },
    { text: "Alertas", url: "/components/alert", id: 2 },
    { text: "Audio", url: "/components/audio", id: 3 },
    { text: "Banner", url: "/components/banner", id: 4 },
    { text: "Bloque de trámite", url: "/components/block", id: 5 },
    { text: "Colapsable", url: "/components/collapse", id: 6 },
    { text: "Migas de pan", url: "/components/breadcrumb", id: 7 },
    { text: "Botón", url: "/components/button", id: 8 },
    { text: "Footer", url: "/components/footer", id: 9 },
    { text: "Galeria", url: "/components/gallery", id: 10 },
    { text: "Spinner", url: "/components/spinner", id: 11 },
    { text: "Navegacion vertical", url: "/components/navigationVertical", id: 12 },
    {
        text: "Navegacion Horizontal",
        url: "/components/navigationHorizontal",
        id: 13
    },
];
var gettingPages = [
    { text: "Instalacción", url: "/getting-started/installation", id: 2 },
    { text: "Importaciones", url: "/getting-started/imports", id: 3 },
];
function RootLayout(_a) {
    var children = _a.children;
    var pathname = navigation_1.usePathname();
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("head", null,
            react_1["default"].createElement("title", null, "Obelisco React Js"),
            react_1["default"].createElement("meta", { name: "description", content: "Una colecci\u00F3n de componentes React que siguen el sistema de dise\u00F1o del Gobierno de la Ciudad de Buenos Aires (GCBA). Estos componentes est\u00E1n dise\u00F1ados para ayudar a los desarrolladores a construir aplicaciones web coherentes y accesibles que se alineen con los est\u00E1ndares de dise\u00F1o del GCBA." }),
            react_1["default"].createElement("link", { href: "https://gcba.github.io/Obelisco/obelisco.css", rel: "stylesheet" }),
            react_1["default"].createElement("link", { href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap", rel: "stylesheet" }),
            react_1["default"].createElement("link", { href: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap", rel: "stylesheet" }),
            react_1["default"].createElement("link", { href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css", rel: "stylesheet" }),
            react_1["default"].createElement("link", { href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round", rel: "stylesheet" }),
            react_1["default"].createElement("link", { href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css", rel: "stylesheet" })),
        react_1["default"].createElement("body", null,
            react_1["default"].createElement(Desktop_1["default"], null),
            react_1["default"].createElement("div", { className: "layout" },
                react_1["default"].createElement("main", null,
                    react_1["default"].createElement("div", { className: "box" },
                        pathname.includes("/components") && (react_1["default"].createElement("div", { className: "nav-left" },
                            react_1["default"].createElement("div", { className: "nav-left-box-title" },
                                react_1["default"].createElement("h3", { className: "pl-2" }, "Componentes")),
                            react_1["default"].createElement("hr", null),
                            react_1["default"].createElement(nav_1["default"], { items: exports.componentsPages }))),
                        pathname.includes("/getting-started") && (react_1["default"].createElement("div", { className: "nav-left" },
                            react_1["default"].createElement("div", { className: "nav-left-box-title" },
                                react_1["default"].createElement("h3", { className: "pl-2 " }, "Comenzando")),
                            react_1["default"].createElement("hr", null),
                            react_1["default"].createElement(nav_1["default"], { items: gettingPages }))),
                        react_1["default"].createElement("div", { className: "" }, children))),
                react_1["default"].createElement("footer", { className: "main-footer", style: { background: "#333 !important" } },
                    react_1["default"].createElement("div", { className: "container" },
                        react_1["default"].createElement("section", { className: "footer-legal-section" },
                            react_1["default"].createElement("div", { className: "row align-items-center" },
                                react_1["default"].createElement("div", { className: "col-12 col-md-5 col-xl-4 footer-content-img" },
                                    react_1["default"].createElement(image_1["default"], { className: "d-lg-none", src: "https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg", alt: "Ciudad de Buenos Aires", width: "102", height: "48" }),
                                    react_1["default"].createElement(image_1["default"], { className: "d-none d-lg-inline", src: "https://gcba.github.io/Obelisco/footer/ciudad-ba.svg", alt: "Ciudad de Buenos Aires", width: "204", height: "40" }),
                                    react_1["default"].createElement(image_1["default"], { className: "img-vamos-ba", src: "\thttps://gcba.github.io/Obelisco/footer/vamos-ba.svg", alt: "Vamos Buenos Aires", width: "112", height: "38" })),
                                react_1["default"].createElement("div", { className: "col-12" },
                                    react_1["default"].createElement("ul", { className: "list-inline" },
                                        react_1["default"].createElement("li", { className: "list-inline-item" },
                                            react_1["default"].createElement("a", { href: "https://boletinoficial.buenosaires.gob.ar" }, "Bolet\u00EDn oficial")),
                                        react_1["default"].createElement("li", { className: "list-inline-item" },
                                            react_1["default"].createElement("a", { href: "https://buenosaires.gob.ar/inicio/terminos-y-condiciones" }, "T\u00E9rminos y condiciones")),
                                        react_1["default"].createElement("li", { className: "list-inline-item" },
                                            react_1["default"].createElement("a", { href: "https://buenosaires.gob.ar/inicio/privacidad" }, "Pol\u00EDtica de privacidad")),
                                        react_1["default"].createElement("li", { className: "list-inline-item" },
                                            react_1["default"].createElement("a", { href: "https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales" }, "Oficios judiciales")),
                                        react_1["default"].createElement("li", { className: "list-inline-item" },
                                            react_1["default"].createElement("a", { href: "https://www.buenosaires.gob.ar/gobierno/transparencia" }, "Transparencia")))))),
                        react_1["default"].createElement("section", null,
                            react_1["default"].createElement("div", { className: "footer-license-text" }, "Los contenidos de buenosaires.gob.ar est\u00E1n licenciados bajo Creative Commons Reconocimiento 2.5 Argentina License."))))),
            react_1["default"].createElement(script_1["default"], { src: "https://code.jquery.com/jquery-3.5.1.slim.min.js", integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj", crossOrigin: "anonymous", strategy: "afterInteractive", defer: true }),
            react_1["default"].createElement(script_1["default"], { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js", integrity: "sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct", crossOrigin: "anonymous", strategy: "afterInteractive", async: true }),
            react_1["default"].createElement(script_1["default"], { src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js", integrity: "sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct", crossOrigin: "anonymous", strategy: "afterInteractive", async: true }))));
}
exports["default"] = RootLayout;
