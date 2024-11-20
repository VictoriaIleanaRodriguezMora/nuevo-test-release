import React from "react";
import { AccessData } from "../Access";
export interface AccessTitleData extends AccessData {
    title: string;
}
export default function AccessTitle({ title, className }: AccessTitleData): React.JSX.Element;
