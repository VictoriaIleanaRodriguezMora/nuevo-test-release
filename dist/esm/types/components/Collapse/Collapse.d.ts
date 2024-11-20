import React from "react";
export interface CollapseProps {
    idCollapse?: string;
    isWhite?: boolean;
    itemsCollapse?: CollapseItemProps[];
}
export interface CollapseItemProps {
    id?: string;
    icon?: string;
    label?: string;
    title?: string;
    isTitleH4?: boolean;
    subtitle?: string;
    content?: React.ReactNode;
    children?: CollapseItems[] | CollapseInputs[];
    contentItems?: CollapseItems[];
    contentInputs?: CollapseInputs[];
}
export interface CollapseItems {
    label?: string;
    title?: string;
    subtitle?: string;
}
export interface CollapseInputs {
    icon?: string;
    title?: string;
    subtitle?: string;
    id?: string;
    name?: string;
}
export default function Collapse(props: React.PropsWithChildren<CollapseProps>): React.JSX.Element;
