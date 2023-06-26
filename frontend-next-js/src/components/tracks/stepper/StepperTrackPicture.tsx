const StepperTrackInfo = ({activeStep, setActiveStep}) => {
    return (
        <div>
            StepperTrackPicture
            {activeStep !== 0 && <button onClick={() => setActiveStep(activeStep-1)}>Previous step</button>}
            {activeStep < 2 && <button onClick={() => setActiveStep(activeStep+1)}>Next step</button>}
        </div>
    );
}
 
export default StepperTrackInfo;