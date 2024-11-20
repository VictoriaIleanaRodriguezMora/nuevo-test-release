import React from "react";
import { AccessData } from "../Access";
export interface AccessDescriptionData extends AccessData {
    description: string;
}
export default function Accessdescription({ description, className, }: AccessDescriptionData): React.JSX.Element;
