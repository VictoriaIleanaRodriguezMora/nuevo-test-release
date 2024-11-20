import React from "react";
export type Sizes = "default" | "small" | "large";
export declare const sizeToClass: (size: Sizes | "default") => string;
export type SizeComponents = "sm" | "md" | "lg";
export type PanelBgColor = "light" | "white";
export type PanelMedia = {
    src: string;
    alt?: string;
    className?: string;
    size?: number;
};
export declare function getIcon(icon: string): React.JSX.Element;
