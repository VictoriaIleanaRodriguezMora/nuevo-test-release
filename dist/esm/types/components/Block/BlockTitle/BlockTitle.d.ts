import React from "react";
import { BlockData } from "../Block";
export interface BlockTitleData extends BlockData {
    title: string;
}
export default function BlockTitle({ title, className }: BlockTitleData): React.JSX.Element;
