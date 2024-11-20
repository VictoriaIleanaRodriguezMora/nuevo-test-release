import React, { ReactNode } from "react";
export interface ModalBoxProps {
    children?: ReactNode | ReactNode[];
    tabIndex?: number | -1;
    id: string;
    isModalSm?: boolean;
}
export default function ModalBox({ children, tabIndex, id, isModalSm, }: ModalBoxProps): React.JSX.Element;
