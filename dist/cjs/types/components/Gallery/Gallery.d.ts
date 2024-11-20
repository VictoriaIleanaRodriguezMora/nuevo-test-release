import React from "react";
export interface GalleryImages {
    id?: number;
    url: string;
    alt?: string;
    author?: string;
    title?: string;
    description?: string;
}
export interface GalleryProps {
    interactive?: boolean;
    images?: GalleryImages[];
}
export default function Gallery(props: React.PropsWithChildren<GalleryProps>): React.JSX.Element;
