import React from "react";
export interface ProgressBarProps {
    value: number;
    isSuccess?: boolean;
    isInfo?: boolean;
    description?: string;
}
export default function ProgressBar({ value, isSuccess, isInfo, description, }: ProgressBarProps): React.JSX.Element;
