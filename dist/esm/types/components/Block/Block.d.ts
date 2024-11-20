import React, { ReactNode } from "react";
export interface BlockData {
    className?: string;
}
export interface BlockComponentData extends BlockData {
    title: string;
    description: string;
    children?: ReactNode | ReactNode[];
}
export default function Block({ title, description, children, }: BlockComponentData): React.JSX.Element;
