import React, { ReactNode } from "react";
interface DropdownProps {
    buttonText?: string;
    icon?: string;
    children: ReactNode;
    isExpandable?: boolean;
    menuRight?: boolean;
    dataTarget: string;
}
declare const DropdownDouble: React.FC<DropdownProps>;
export default DropdownDouble;
