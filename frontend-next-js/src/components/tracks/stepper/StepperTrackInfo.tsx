const StepperTrackInfo = ({activeStep, setActiveStep}) => {
    // const btnDisbaled =
    // sender.name.length > 0 &&
    // sender.city.length > 0 &&
    // sender.zipCode.length > 0 &&
    // sender.state.length > 0;

    return (
        <div>
            StepperTrackInfo
            {activeStep !== 0 && <button onClick={() => setActiveStep(activeStep-1)}>Previous step</button>}
            {activeStep < 2 && <button onClick={() => setActiveStep(activeStep+1)}>Next step</button>}
        </div>
    );
}
 
export default StepperTrackInfo;