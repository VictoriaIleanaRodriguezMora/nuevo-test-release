import React, { ReactNode } from "react";
import { Sizes } from "../../utils/utils.js";
import "./Access.scss";
export interface AccessData {
    size?: Sizes;
    className?: string;
    children?: ReactNode | ReactNode[];
}
export default function Access({ size }: AccessData): React.JSX.Element;
