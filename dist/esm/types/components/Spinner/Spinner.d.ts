import React from "react";
import { SizeComponents } from "../../utils/utils";
export type SpinnerType = "primary" | "secondary" | "success" | "danger" | "info" | "light" | "dark";
export interface SpinnerProps {
    type?: SpinnerType;
    size?: SizeComponents;
    isBlock?: boolean;
}
export default function Spinner(props: React.PropsWithChildren<SpinnerProps>): React.JSX.Element;
