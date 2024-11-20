import React from "react";
import { Sizes } from "../../utils/utils";
export interface Option {
    isDisabled?: boolean;
    value: string;
    label: string;
}
export interface DropdownOptionProps {
    options: Option[];
    isRadio?: boolean;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    iconType?: "material" | "boxicon";
    size?: Sizes;
    idDropdown?: string;
    isDisabled?: boolean;
}
export interface CheckboxStates {
    [key: string]: boolean;
}
declare const DropdownForm: ({ options, isRadio, children, icon, iconType, size, idDropdown, isDisabled, }: DropdownOptionProps) => JSX.Element;
export default DropdownForm;
