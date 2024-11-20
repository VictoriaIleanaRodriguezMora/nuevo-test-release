import * as React from "react";
export interface StepperProps {
    title?: string;
    nextStepTitle?: string;
    steps?: number;
    activeStep?: number;
}
export default function Stepper(props: React.PropsWithChildren<StepperProps>): React.JSX.Element;
