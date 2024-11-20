import React, { ReactNode } from "react";
export interface ModalChildrenProps {
    children?: ReactNode | ReactNode[];
}
export interface ButtonFooterModal {
    className?: string;
    title?: string;
    isDataDismiss?: boolean;
}
export interface ModalProps {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    isUnbordered?: boolean;
    isBlock?: boolean;
    buttonTitle?: string;
    buttonClassName?: string;
}
export default function Modal(props: React.PropsWithChildren<ModalProps>): React.JSX.Element;
