import * as React from 'react';
import React__default, { ReactNode } from 'react';

type Sizes = "default" | "small" | "large";
type SizeComponents = "sm" | "md" | "lg";
type PanelBgColor = "light" | "white";
type PanelMedia = {
    src: string;
    alt?: string;
    className?: string;
    size?: number;
};

interface AccessData {
    size?: Sizes;
    className?: string;
    children?: ReactNode | ReactNode[];
}
declare function Access({ size }: AccessData): React__default.JSX.Element;

declare function AccessContent({ children, className }: AccessData): React__default.JSX.Element;

interface AccessDescriptionData extends AccessData {
    description: string;
}
declare function Accessdescription({ description, className, }: AccessDescriptionData): React__default.JSX.Element;

interface AccessTitleData extends AccessData {
    title: string;
}
declare function AccessTitle({ title, className }: AccessTitleData): React__default.JSX.Element;

interface AlertData {
    children: React__default.ReactNode;
    isDimissible?: boolean;
    alertInfo?: boolean;
    alertWarning?: boolean;
    alertSuccess?: boolean;
    alertDanger?: boolean;
}
declare function Alert({ children, isDimissible, alertInfo, alertWarning, alertSuccess, alertDanger, }: AlertData): React__default.JSX.Element;

interface AudioData {
    title: string;
    description?: string | null;
    children: React__default.ReactNode;
}
declare function Audio({ children, title, description }: AudioData): React__default.JSX.Element;

interface BannerData {
    children: React__default.ReactNode;
    iconBanner: string;
    description: React__default.ReactNode;
    isDark?: boolean;
}
declare function Banner({ children, iconBanner, description, isDark, }: BannerData): React__default.JSX.Element;

interface ProgressBarProps {
    value: number;
    isSuccess?: boolean;
    isInfo?: boolean;
    description?: string;
}
declare function ProgressBar({ value, isSuccess, isInfo, description, }: ProgressBarProps): React__default.JSX.Element;

interface StatusMessageData {
    title: string;
    description: string;
    StatusList: {
        titleList: string;
    }[];
    isWarning?: boolean;
    isDanger?: boolean;
    isInfo?: boolean;
    isSuccess?: boolean;
    isInstitutional?: boolean;
    children: React__default.ReactNode;
}
declare function StatusMessage({ title, description, StatusList, isWarning, isDanger, isInfo, isSuccess, isInstitutional, children, }: StatusMessageData): React__default.JSX.Element;

interface StepListData {
    size?: Sizes;
    isLight?: boolean;
    isNumber?: boolean;
    stepsList: {
        title: string;
        description: string;
    }[];
}
declare function StepList({ size, stepsList, isLight, isNumber, }: StepListData): React__default.JSX.Element;

type ButtonType = "primary" | "success" | "danger" | "secondary" | "link";
interface ButtonProps {
    type?: ButtonType;
    isOutline?: boolean;
    text?: string;
    size?: SizeComponents;
    isExpandable?: boolean;
    icon?: string;
    hasSpinner?: boolean;
    ariaLabel?: string;
    isIconPositionRight?: boolean;
    isSpinnerPositionRight?: boolean;
    url?: string;
    target?: string;
    download?: string;
    isDisabled?: boolean;
    dataTarget?: string;
    dataToggle?: string;
    dataDismiss?: string;
}
declare function Button(props: React.PropsWithChildren<ButtonProps>): React.JSX.Element;

interface GalleryImages {
    id?: number;
    url: string;
    alt?: string;
    author?: string;
    title?: string;
    description?: string;
}
interface GalleryProps {
    interactive?: boolean;
    images?: GalleryImages[];
}
declare function Gallery(props: React__default.PropsWithChildren<GalleryProps>): React__default.JSX.Element;

interface BreadcrumbItemType {
    name: string;
    link: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItemType[];
}
declare function Breadcrumb(props: React.PropsWithChildren<BreadcrumbProps>): React.JSX.Element;

interface ModalChildrenProps {
    children?: ReactNode | ReactNode[];
}
interface ModalProps {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    isUnbordered?: boolean;
    isBlock?: boolean;
    buttonTitle?: string;
    buttonClassName?: string;
}
declare function Modal(props: React__default.PropsWithChildren<ModalProps>): React__default.JSX.Element;

interface ModalBoxProps {
    children?: ReactNode | ReactNode[];
    tabIndex?: number | -1;
    id: string;
    isModalSm?: boolean;
}
declare function ModalBox({ children, tabIndex, id, isModalSm, }: ModalBoxProps): React__default.JSX.Element;

declare function ModalBody({ children }: ModalChildrenProps): React__default.JSX.Element;

declare function ModalFooter({ children }: ModalChildrenProps): React__default.JSX.Element;

declare function ModalHeader({ children }: ModalChildrenProps): React__default.JSX.Element;

interface ModalTitleProps extends ModalChildrenProps {
    title: string;
    className?: string;
}
declare function ModalTitle({ title, className, children, }: ModalTitleProps): React__default.JSX.Element;

type SpinnerType = "primary" | "secondary" | "success" | "danger" | "info" | "light" | "dark";
interface SpinnerProps {
    type?: SpinnerType;
    size?: SizeComponents;
    isBlock?: boolean;
}
declare function Spinner(props: React__default.PropsWithChildren<SpinnerProps>): React__default.JSX.Element;

interface StepperProps {
    title?: string;
    nextStepTitle?: string;
    steps?: number;
    activeStep?: number;
}
declare function Stepper(props: React.PropsWithChildren<StepperProps>): React.JSX.Element;

type HighlightedPanelType = "banner" | "grouping" | "lateral";
type PanelIframe = {
    src: string;
    title?: string;
};
interface HighlightedPanelProps {
    title?: string;
    description?: string | JSX.Element;
    bgColor?: PanelBgColor;
    type?: HighlightedPanelType;
    picture?: PanelMedia;
    video?: PanelMedia;
    iframe?: PanelIframe;
}
declare function HighlightedPanel(props: React.PropsWithChildren<HighlightedPanelProps>): React.JSX.Element;

type SmallPanelTypes = "vertical" | "horizontal";
type PanelListItems = {
    src: string;
    text?: string;
    className?: string;
    download?: string;
    title?: string;
};
type PanelList = {
    title?: string;
    items: PanelListItems[];
};
interface SmallPanelProps {
    title?: string;
    description?: string | JSX.Element;
    bgColor?: PanelBgColor;
    picture?: PanelMedia;
    type?: SmallPanelTypes;
    list?: PanelList;
}
declare function SmallPanel(props: React__default.PropsWithChildren<SmallPanelProps>): React__default.JSX.Element;

interface HeaderProps {
    hasLogin?: boolean;
    hasProfile?: boolean;
    hasSearch?: boolean;
    isSectionExtended?: boolean;
    sections?: React__default.ReactNode;
}
declare function Header(props: React__default.PropsWithChildren<HeaderProps>): React__default.JSX.Element;

interface BlockData {
    className?: string;
}
interface BlockComponentData extends BlockData {
    title: string;
    description: string;
    children?: ReactNode | ReactNode[];
}
declare function Block({ title, description, children, }: BlockComponentData): React__default.JSX.Element;

interface BlockBoxData extends BlockData {
    children?: ReactNode | ReactNode[];
    style?: React__default.CSSProperties;
}
declare function BlockBox({ className, children, style }: BlockBoxData): React__default.JSX.Element;

interface BlockTitleData extends BlockData {
    title: string;
}
declare function BlockTitle({ title, className }: BlockTitleData): React__default.JSX.Element;

interface BlockDescriptionData extends BlockData {
    description: string;
}
declare function BlockDescription({ description, className, }: BlockDescriptionData): React__default.JSX.Element;

interface DropdownProps$1 {
    buttonText?: string;
    icon?: string;
    children: ReactNode;
    isExpandable?: boolean;
    menuRight?: boolean;
}
declare const Dropdown: React__default.FC<DropdownProps$1>;

interface ItemsData$3 {
    title: string;
    iconLeft?: string;
    iconRight?: string;
    align?: "right" | "left";
    link: string;
    disabled?: boolean;
}
declare const Items: React__default.FC<ItemsData$3>;

interface ItemsData$2 {
    title: string;
    iconLeft?: string;
    iconRight?: string;
    align?: "right" | "left";
    link: string;
    disabled?: boolean;
}
declare const ItemsDanger: React__default.FC<ItemsData$2>;

interface ItemsData$1 {
    title: string;
    iconLeft?: string;
    iconRight?: string;
    align?: "right" | "left";
    link: string;
    disabled?: boolean;
}
declare const ItemsAccess: React__default.FC<ItemsData$1>;

interface DropdownProps {
    buttonText?: string;
    icon?: string;
    children: ReactNode;
    isExpandable?: boolean;
    menuRight?: boolean;
    dataTarget: string;
}
declare const DropdownDouble: React__default.FC<DropdownProps>;

interface ItemsData {
    title: string;
    iconLeft?: string;
    iconRight?: string;
    align?: "right" | "left";
    link: string;
    disabled?: boolean;
}
declare const ItemsSub: React__default.FC<ItemsData>;

interface DropdownMenuProps {
    buttonText?: string;
    children: ReactNode;
    subMenuRight?: boolean;
}
declare const DropdownSubMenu: React__default.FC<DropdownMenuProps>;

interface CollapseProps {
    idCollapse?: string;
    isWhite?: boolean;
    itemsCollapse?: CollapseItemProps[];
}
interface CollapseItemProps {
    id?: string;
    icon?: string;
    label?: string;
    title?: string;
    isTitleH4?: boolean;
    subtitle?: string;
    content?: React__default.ReactNode;
    children?: CollapseItems[] | CollapseInputs[];
    contentItems?: CollapseItems[];
    contentInputs?: CollapseInputs[];
}
interface CollapseItems {
    label?: string;
    title?: string;
    subtitle?: string;
}
interface CollapseInputs {
    icon?: string;
    title?: string;
    subtitle?: string;
    id?: string;
    name?: string;
}
declare function Collapse(props: React__default.PropsWithChildren<CollapseProps>): React__default.JSX.Element;

interface Phone {
    title: string;
    number: number;
}
interface FooterLinks {
    title: string;
    src: string;
    icon?: string;
}
interface FooterProps {
    phoneItems?: Phone[];
    networkItems?: FooterLinks[];
    legalItems?: FooterLinks[];
    isPhoneSectionHidden?: boolean;
    isNetworkSectionHidden?: boolean;
    isLegalSectionHidden?: boolean;
    hasIndicator?: boolean;
}
declare function Footer(props: React.PropsWithChildren<FooterProps>): React.JSX.Element;

interface NavItem {
    text: string;
    path: string;
    active?: boolean;
    iconLeft?: string;
    isDisabled?: boolean;
    children?: NavItem[];
}
interface NavigationProps$1 {
    items: NavItem[];
}
declare const NavigationVertical: React__default.FC<NavigationProps$1>;

interface NavItemHorizontal {
    text: string;
    path: string;
    iconLeft?: string;
    disabled?: boolean;
    size?: SizeComponents;
    bordered?: boolean;
}
interface NavigationProps {
    items: NavItemHorizontal[];
}
declare const NavigationHorizontal: React__default.FC<NavigationProps>;

export { Access, AccessContent, Accessdescription as AccessDescription, AccessTitle, Alert, Audio, Banner, Block, BlockBox, BlockDescription, BlockTitle, Breadcrumb, Button, Collapse, Dropdown, DropdownDouble, Items as DropdownItem, ItemsAccess as DropdownItemAccess, ItemsDanger as DropdownItemDanger, ItemsSub as DropdownItemSub, DropdownSubMenu as DropdownMenu, Footer, Gallery, Header, HighlightedPanel, Modal, ModalBody, ModalBox, ModalFooter, ModalHeader, ModalTitle, NavigationHorizontal, NavigationVertical, ProgressBar, SmallPanel, Spinner, StatusMessage, Stepper, StepList as StepsList };
