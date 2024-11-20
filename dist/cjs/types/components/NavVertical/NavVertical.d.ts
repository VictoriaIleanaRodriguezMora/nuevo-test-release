import React from "react";
interface NavItem {
    text: string;
    path: string;
    active?: boolean;
    iconLeft?: string;
    isDisabled?: boolean;
    children?: NavItem[];
}
interface NavigationProps {
    items: NavItem[];
}
declare const NavigationVertical: React.FC<NavigationProps>;
export default NavigationVertical;
