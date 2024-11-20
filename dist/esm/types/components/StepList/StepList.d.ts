import React from "react";
import { Sizes } from "../../utils/utils";
interface StepListData {
    size?: Sizes;
    isLight?: boolean;
    isNumber?: boolean;
    stepsList: {
        title: string;
        description: string;
    }[];
}
export default function StepList({ size, stepsList, isLight, isNumber, }: StepListData): React.JSX.Element;
export {};
