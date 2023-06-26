import { ReactElement, useState } from "react";
import Stepper from 'react-stepper-horizontal';
import StepperTrackInfo from "./StepperTrackInfo";
import StepperTrackPicture from "./StepperTrackPicture";
import StepperTrackAudio from "./StepperTrackAudio";

const StepWrapper = () => {
    const [activeStep, setActiveStep] = useState<number>(0)
    const steps = [
        { title: 'Track info', onClick: () => setActiveStep(0) },
        { title: 'Add track picture', onClick: () => setActiveStep(1) },
        { title: 'Add audio track', onClick: () => setActiveStep(2) },
    ];

    return (
        <div>
            {activeStep < steps.length && (
                <Stepper steps={steps} activeStep={activeStep} />
            )}

            {activeStep === 0 && <StepperTrackInfo activeStep={activeStep} setActiveStep={setActiveStep}/>}
            {activeStep === 1 && <StepperTrackPicture activeStep={activeStep} setActiveStep={setActiveStep}/>}
            {activeStep === 2 && <StepperTrackAudio activeStep={activeStep} setActiveStep={setActiveStep}/>}
        </div>
    );
}

export default StepWrapper;