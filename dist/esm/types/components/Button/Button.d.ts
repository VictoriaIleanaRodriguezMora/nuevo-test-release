import * as React from "react";
import { SizeComponents } from "../../utils/utils";
export type ButtonType = "primary" | "success" | "danger" | "secondary" | "link";
export interface ButtonProps {
    type?: ButtonType;
    isOutline?: boolean;
    text?: string;
    size?: SizeComponents;
    isExpandable?: boolean;
    icon?: string;
    hasSpinner?: boolean;
    ariaLabel?: string;
    isIconPositionRight?: boolean;
    isSpinnerPositionRight?: boolean;
    url?: string;
    target?: string;
    download?: string;
    isDisabled?: boolean;
    dataTarget?: string;
    dataToggle?: string;
    dataDismiss?: string;
}
export default function Button(props: React.PropsWithChildren<ButtonProps>): React.JSX.Element;
