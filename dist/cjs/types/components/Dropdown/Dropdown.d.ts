import React, { ReactNode } from "react";
interface DropdownProps {
    buttonText?: string;
    icon?: string;
    children: ReactNode;
    isExpandable?: boolean;
    menuRight?: boolean;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
