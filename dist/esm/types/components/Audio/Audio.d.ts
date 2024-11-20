import React from "react";
interface AudioData {
    title: string;
    description?: string | null;
    children: React.ReactNode;
}
export default function Audio({ children, title, description }: AudioData): React.JSX.Element;
export {};
