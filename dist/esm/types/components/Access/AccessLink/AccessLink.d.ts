import React from "react";
import { AccessData } from "../Access";
export interface AccessLinkData extends AccessData {
    url?: string;
}
export default function AccessLink({ children, className, url }: AccessLinkData): React.JSX.Element;
