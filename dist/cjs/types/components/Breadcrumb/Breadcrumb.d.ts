import * as React from "react";
export interface BreadcrumbItemType {
    name: string;
    link: string;
}
export interface BreadcrumbProps {
    items: BreadcrumbItemType[];
}
export default function Breadcrumb(props: React.PropsWithChildren<BreadcrumbProps>): React.JSX.Element;
