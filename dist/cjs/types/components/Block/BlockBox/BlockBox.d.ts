import React, { ReactNode } from "react";
import { BlockData } from "../Block";
export interface BlockBoxData extends BlockData {
    children?: ReactNode | ReactNode[];
    style?: React.CSSProperties;
}
export default function BlockBox({ className, children, style }: BlockBoxData): React.JSX.Element;
