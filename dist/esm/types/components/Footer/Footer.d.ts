import * as React from "react";
export interface Phone {
    title: string;
    number: number;
}
export interface FooterLinks {
    title: string;
    src: string;
    icon?: string;
}
export interface FooterProps {
    phoneItems?: Phone[];
    networkItems?: FooterLinks[];
    legalItems?: FooterLinks[];
    isPhoneSectionHidden?: boolean;
    isNetworkSectionHidden?: boolean;
    isLegalSectionHidden?: boolean;
    hasIndicator?: boolean;
}
export default function Footer(props: React.PropsWithChildren<FooterProps>): React.JSX.Element;
