import React from "react";
interface SectionsProps {
    children: React.ReactNode;
    isExtended?: boolean;
}
interface LoginProps {
    isMobile?: boolean;
}
interface HeaderProps {
    hasLogin?: boolean;
    hasProfile?: boolean;
    hasSearch?: boolean;
    isSectionExtended?: boolean;
    sections?: React.ReactNode;
}
export declare const NAV_ITEM: React.JSX.Element;
export declare const NavSection: React.FC<SectionsProps>;
export declare const LOGO: React.JSX.Element;
export declare const BUTTON_TOGGLER: React.JSX.Element;
export declare const SEARCH: React.JSX.Element;
export declare const Login: React.FC<LoginProps>;
export declare const USER: React.JSX.Element;
export declare const USER_MOBILE: React.JSX.Element;
export default function Header(props: React.PropsWithChildren<HeaderProps>): React.JSX.Element;
export {};
