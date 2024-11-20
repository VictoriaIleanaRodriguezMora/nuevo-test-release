import React from "react";
interface ItemsData {
    title: string;
    iconLeft?: string;
    iconRight?: string;
    align?: "right" | "left";
    link: string;
    disabled?: boolean;
}
declare const ItemsAccess: React.FC<ItemsData>;
export default ItemsAccess;
