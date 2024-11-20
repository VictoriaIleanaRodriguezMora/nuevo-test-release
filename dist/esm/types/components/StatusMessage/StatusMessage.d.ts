import React from "react";
interface StatusListComponentData {
    StatusList: {
        titleList: string;
    }[];
}
export declare function StatusListComponent({ StatusList }: StatusListComponentData): React.JSX.Element;
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
    children: React.ReactNode;
}
export default function StatusMessage({ title, description, StatusList, isWarning, isDanger, isInfo, isSuccess, isInstitutional, children, }: StatusMessageData): React.JSX.Element;
export {};
