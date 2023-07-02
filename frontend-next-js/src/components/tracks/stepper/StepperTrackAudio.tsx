import trackAudioStyes from '@/styles/components/stepper/stepperTrackAudio.module.scss'
import { useRef, useState } from 'react'

const StepperTrackAudio = ({activeStep, setActiveStep, setOverallInput, sendNewTrack}) => {
    const [audioInput, setAudioInput] = useState(null)
    const audioRef = useRef<HTMLInputElement>()

    const onChange = (e) => {
        setAudioInput(e.target.files?.[0])
        setOverallInput( prev => ({ ...prev, [ e.target.id ]: e.target.files?.[0]}) );
    }
    
    return (
        <div className={`${trackAudioStyes.trackAudioContainer}`}>
            <button onClick={() => audioRef.current?.click()}> {/* При помощи onClick - мы нажимаем на спрятаный инпут*/}
                <input 
                    id="trackAudio"
                    type='file' 
                    accept={'audio/*'} 
                    ref={audioRef} 
                    onChange={onChange}
                    hidden
                />
                Upload audio
            </button>
            <div className={`${trackAudioStyes.navigationButtons}`}>
                <button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep-1)}>Previous step</button>
                <button disabled={!audioInput} onClick={() => sendNewTrack()}>Create track</button>
            </div>
        </div>
    );
}
 
export default StepperTrackAudio;