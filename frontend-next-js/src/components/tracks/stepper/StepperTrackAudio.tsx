import trackAudioStyes from '@/styles/components/stepper/stepperTrackAudio.module.scss'
import { useRef, useState } from 'react'

const StepperTrackAudio = ({activeStep, setActiveStep}) => {
    const [audio, setAudio] = useState(null)
    const audioInput = useRef<HTMLInputElement>()

    const onChange = (e) => {
        console.log(e.target.files)
        setAudio(e.target.files?.[0])
    }
    
    return (
        <div className={`${trackAudioStyes.trackAudioContainer}`}>
            <button onClick={() => audioInput.current?.click()}>
                <input 
                    type='file' 
                    accept={'audio/*'} 
                    ref={audioInput} 
                    onChange={onChange}
                    hidden
                />
                Upload audio
            </button>
            <div className={`${trackAudioStyes.navigationButtons}`}>
                <button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep-1)}>Previous step</button>
                <button disabled={activeStep >= 2} onClick={() => setActiveStep(activeStep+1)}>Next step</button>
            </div>
        </div>
    );
}
 
export default StepperTrackAudio;