import React from "react";
export interface AlertData {
    children: React.ReactNode;
    isDimissible?: boolean;
    alertInfo?: boolean;
    alertWarning?: boolean;
    alertSuccess?: boolean;
    alertDanger?: boolean;
}
export default function Alert({ children, isDimissible, alertInfo, alertWarning, alertSuccess, alertDanger, }: AlertData): React.JSX.Element;
