import React from "react";
import { PanelBgColor, PanelMedia } from "../../utils/utils";
export type SmallPanelTypes = "vertical" | "horizontal";
export type PanelListItems = {
    src: string;
    text?: string;
    className?: string;
    download?: string;
    title?: string;
};
export type PanelList = {
    title?: string;
    items: PanelListItems[];
};
interface SmallPanelProps {
    title?: string;
    description?: string | JSX.Element;
    bgColor?: PanelBgColor;
    picture?: PanelMedia;
    type?: SmallPanelTypes;
    list?: PanelList;
}
export default function SmallPanel(props: React.PropsWithChildren<SmallPanelProps>): React.JSX.Element;
export {};
