import React, { ReactNode } from "react";
interface DropdownMenuProps {
    buttonText?: string;
    children: ReactNode;
    subMenuRight?: boolean;
}
declare const DropdownSubMenu: React.FC<DropdownMenuProps>;
export default DropdownSubMenu;
