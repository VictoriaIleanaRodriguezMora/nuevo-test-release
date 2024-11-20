import * as React from "react";
import { PanelBgColor, PanelMedia } from "../../utils/utils";
export type HighlightedPanelType = "banner" | "grouping" | "lateral";
export type PanelIframe = {
    src: string;
    title?: string;
};
interface HighlightedPanelProps {
    title?: string;
    description?: string | JSX.Element;
    bgColor?: PanelBgColor;
    type?: HighlightedPanelType;
    picture?: PanelMedia;
    video?: PanelMedia;
    iframe?: PanelIframe;
}
export default function HighlightedPanel(props: React.PropsWithChildren<HighlightedPanelProps>): React.JSX.Element;
export {};
