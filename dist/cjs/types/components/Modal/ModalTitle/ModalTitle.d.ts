import React from "react";
import { ModalChildrenProps } from "../Modal";
export interface ModalTitleProps extends ModalChildrenProps {
    title: string;
    className?: string;
}
export default function ModalTitle({ title, className, children, }: ModalTitleProps): React.JSX.Element;
