import trackPictureStyes from '@/styles/components/stepper/stepperTrackPicture.module.scss'
import { useRef, useState } from 'react';

const StepperTrackPicture = ({activeStep, setActiveStep}) => {
    const [picture, setPicture] = useState(null)
    const imgInput = useRef<HTMLInputElement>()

    const onChange = (e) => {
        console.log(e.target.files)
        setPicture(e.target.files?.[0])
    }

    return (
        <div className={`${trackPictureStyes.trackPictureContainer}`}>
            <button onClick={() => imgInput.current?.click()}>
                <input 
                    type='file' 
                    accept={'image/*'} 
                    ref={imgInput} 
                    onChange={onChange}
                    hidden
                />
                Upload image
            </button>
            <div className={`${trackPictureStyes.navigationButtons}`}>
                <button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep-1)}>Previous step</button>
                <button disabled={activeStep >= 2} onClick={() => setActiveStep(activeStep+1)}>Next step</button>
            </div>
        </div>
    );
}
 
export default StepperTrackPicture;