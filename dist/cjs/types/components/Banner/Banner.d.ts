import React from "react";
interface BannerData {
    children: React.ReactNode;
    iconBanner: string;
    description: React.ReactNode;
    isDark?: boolean;
}
export default function Banner({ children, iconBanner, description, isDark, }: BannerData): React.JSX.Element;
export {};
