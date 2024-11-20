import React from "react";
import { BlockData } from "../Block";
export interface BlockDescriptionData extends BlockData {
    description: string;
}
export default function BlockDescription({ description, className, }: BlockDescriptionData): React.JSX.Element;
