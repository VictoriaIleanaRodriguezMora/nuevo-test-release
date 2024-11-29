"use strict";
exports.__esModule = true;
exports.USER_MOBILE = exports.USER = exports.Login = exports.SEARCH = exports.BUTTON_TOGGLER = exports.LOGO = exports.NavSection = exports.NAV_ITEM = void 0;
var react_1 = require("react");
exports.NAV_ITEM = (react_1["default"].createElement("li", { className: "nav-item" },
    react_1["default"].createElement("a", { className: "nav-link nav-link-lg", href: "#" },
        react_1["default"].createElement("span", null, "Navegaci\u00F3n"))));
exports.NavSection = function (_a) {
    var children = _a.children, isExtended = _a.isExtended;
    return (react_1["default"].createElement("div", { className: isExtended ? "navbar-content-extended" : "navbar-sections" },
        react_1["default"].createElement("nav", null,
            react_1["default"].createElement("h3", { className: "navbar-sections-title" }, "Secciones"),
            react_1["default"].createElement("ul", { className: "nav nav-pills nav-sections" }, children))));
};
exports.LOGO = (react_1["default"].createElement("a", { href: "https://buenosaires.gob.ar", className: "navbar-brand" },
    react_1["default"].createElement("img", { className: "header-logo", src: "https://gcba.github.io/Obelisco/header/logotipo_ba.svg", alt: "Gobierno de la Ciudad de Buenos Aires - Inicio" })));
exports.BUTTON_TOGGLER = (react_1["default"].createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarContent", "aria-controls": "navbarContent", "aria-expanded": "false", "aria-label": "Men\u00FA" }));
exports.SEARCH = (react_1["default"].createElement("div", { className: "navbar-search" },
    react_1["default"].createElement("form", { className: "form-search" },
        react_1["default"].createElement("div", { className: "form-group" },
            react_1["default"].createElement("label", { className: "sr-only", htmlFor: "search-input" }, "Buscador"),
            react_1["default"].createElement("input", { type: "search", className: "form-control input-search", id: "search-input", name: "name", placeholder: "Buscar en Buenos Aires" }),
            react_1["default"].createElement("button", { className: "reset", type: "reset", "aria-label": "Borrar" }),
            react_1["default"].createElement("button", { className: "submit-search", type: "submit", "aria-label": "Buscar" })))));
exports.Login = function (_a) {
    var isMobile = _a.isMobile;
    return (react_1["default"].createElement("div", { className: isMobile ? "navbar-login-mobile" : "navbar-login" },
        react_1["default"].createElement("a", { className: "btn btn-lg btn-icon btn-outline-link", href: "#", target: "_blank" },
            react_1["default"].createElement("span", { className: "material-icons-round" }, "person"),
            react_1["default"].createElement("span", { className: "btn-text" }, "Ingresar"))));
};
exports.USER = (react_1["default"].createElement("div", { className: "navbar-user" },
    react_1["default"].createElement("div", { className: "dropdown" },
        react_1["default"].createElement("button", { type: "button", className: "btn btn-dropdown btn-dropdown-lg btn-dropdown-border dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
            react_1["default"].createElement("span", { className: "material-icons-round" }, "person"),
            react_1["default"].createElement("span", { className: "btn-dropdown-text" }, "Perfil")),
        react_1["default"].createElement("div", { className: "dropdown-menu dropdown-menu-right" },
            react_1["default"].createElement("a", { className: "dropdown-item", href: "#" },
                react_1["default"].createElement("span", { className: "item-text" }, "Navegaci\u00F3n 1")),
            react_1["default"].createElement("a", { className: "dropdown-item", href: "#" },
                react_1["default"].createElement("span", { className: "item-text" }, "Navegaci\u00F3n 2")),
            react_1["default"].createElement("a", { className: "dropdown-item", href: "#" },
                react_1["default"].createElement("span", { className: "item-text" }, "Navegaci\u00F3n 3")),
            react_1["default"].createElement("a", { className: "dropdown-item", href: "#" },
                react_1["default"].createElement("span", { className: "item-text" }, "Notificaciones"),
                react_1["default"].createElement("span", { className: "item-notifications" })),
            react_1["default"].createElement("a", { className: "dropdown-item item-danger", href: "#" },
                react_1["default"].createElement("span", { className: "item-text" }, "Cerrar sesi\u00F3n"),
                react_1["default"].createElement("span", { className: "material-icons-round" }, "logout"))))));
exports.USER_MOBILE = (react_1["default"].createElement("div", { className: "navbar-user-mobile" },
    react_1["default"].createElement("nav", null,
        react_1["default"].createElement("h3", { className: "navbar-user-mobile-title" }, "Perfil"),
        react_1["default"].createElement("ul", { className: "nav flex-column nav-pills nav-user" },
            react_1["default"].createElement("li", { className: "nav-item" },
                react_1["default"].createElement("a", { className: "nav-link nav-link-lg", href: "#" },
                    react_1["default"].createElement("span", null, "Navegaci\u00F3n 1"))),
            react_1["default"].createElement("li", { className: "nav-item" },
                react_1["default"].createElement("a", { className: "nav-link nav-link-lg", href: "#" },
                    react_1["default"].createElement("span", null, "Navegaci\u00F3n 2"))),
            react_1["default"].createElement("li", { className: "nav-item" },
                react_1["default"].createElement("a", { className: "nav-link nav-link-lg", href: "#" },
                    react_1["default"].createElement("span", null, "Navegaci\u00F3n 3"))),
            react_1["default"].createElement("li", { className: "nav-item" },
                react_1["default"].createElement("a", { className: "nav-link nav-link-lg", href: "#" },
                    react_1["default"].createElement("span", null, "Notificaciones"),
                    react_1["default"].createElement("span", { className: "item-notifications" }))),
            react_1["default"].createElement("li", { className: "nav-item" },
                react_1["default"].createElement("a", { className: "nav-link nav-link-danger nav-link-lg", href: "#" },
                    react_1["default"].createElement("div", { className: "nav-icon" },
                        react_1["default"].createElement("span", { className: "material-icons-round" }, "logout"),
                        react_1["default"].createElement("span", null, "Cerrar sesi\u00F3n"))))))));
function Header(props) {
    var hasLogin = props.hasLogin, hasProfile = props.hasProfile, hasSearch = props.hasSearch, isSectionExtended = props.isSectionExtended, sections = props.sections;
    var shouldShowButtonToggler = hasSearch || hasProfile || sections;
    var shouldShowNavbarContent = hasSearch ||
        hasLogin ||
        hasProfile ||
        isSectionExtended === undefined ||
        !isSectionExtended;
    return (react_1["default"].createElement("header", { className: "navbar navbar-light navbar-expand-lg", role: "banner" },
        react_1["default"].createElement("a", { href: "#main", className: "skip-to-main-content-link" }, "Ir al contenido principal"),
        react_1["default"].createElement("div", { className: "container header-container" },
            exports.LOGO,
            hasLogin && react_1["default"].createElement(exports.Login, { isMobile: true }),
            (hasSearch || hasLogin || hasProfile || sections) && (react_1["default"].createElement(react_1["default"].Fragment, null,
                shouldShowButtonToggler && exports.BUTTON_TOGGLER,
                react_1["default"].createElement("div", { className: "collapse navbar-collapse", id: "navbarContent" },
                    shouldShowNavbarContent && (react_1["default"].createElement("div", { className: "navbar-content" },
                        sections &&
                            (!isSectionExtended || isSectionExtended === undefined) && (react_1["default"].createElement("div", { className: "navbar-sections" },
                            react_1["default"].createElement("nav", null,
                                react_1["default"].createElement("h3", { className: "navbar-sections-title" }, "Secciones"),
                                react_1["default"].createElement("ul", { className: "nav nav-pills nav-sections" }, sections)))),
                        hasSearch && exports.SEARCH,
                        hasLogin && react_1["default"].createElement(exports.Login, null),
                        hasProfile && exports.USER)),
                    isSectionExtended && (react_1["default"].createElement("div", { className: "navbar-content-extended" },
                        react_1["default"].createElement("nav", null,
                            react_1["default"].createElement("h3", { className: "navbar-sections-title" }, "Secciones"),
                            react_1["default"].createElement("ul", { className: "nav nav-pills nav-sections" }, sections)))),
                    hasProfile && exports.USER_MOBILE)))),
        react_1["default"].createElement("div", { className: "header-backdrop" })));
}
exports["default"] = Header;

