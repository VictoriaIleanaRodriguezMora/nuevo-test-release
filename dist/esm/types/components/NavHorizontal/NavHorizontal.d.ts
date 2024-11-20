import React from "react";
import { SizeComponents } from "../../utils/utils";
interface NavItemHorizontal {
    text: string;
    path: string;
    iconLeft?: string;
    disabled?: boolean;
    size?: SizeComponents;
    bordered?: boolean;
}
interface NavigationProps {
    items: NavItemHorizontal[];
}
declare const NavigationHorizontal: React.FC<NavigationProps>;
export default NavigationHorizontal;
