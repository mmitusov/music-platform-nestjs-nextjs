import trackPictureStyes from '@/styles/components/stepper/stepperTrackPicture.module.scss'
import Image from 'next/image';
import { useRef, useState } from 'react';

const StepperTrackPicture = ({activeStep, setActiveStep, setOverallInput}) => {
    const [pictureInput, setPictureInput] = useState(null)
    const [pictureName, setPictureName] = useState('')
    const [displayPicture, setDisplayPicture] = useState<any>(null)
    const imgRef = useRef<HTMLInputElement>()

    const onChange = (e) => {
        setPictureName(e.target.files[0].name)
        setPictureInput(e.target.files?.[0])
        setDisplayPicture(URL.createObjectURL(e.target.files[0]))
        setOverallInput( prev => ({ ...prev, [ e.target.id ]: e.target.files?.[0]}) );
    }
    
    return (
        <div className={`${trackPictureStyes.trackPictureContainer}`}>
            <div className={`${trackPictureStyes.uploadPicture}`}>
                <span>
                    <Image 
                        src={ displayPicture || '' } 
                        alt=''
                        fill
                    /> 
                </span>
                <button onClick={() => imgRef.current?.click()}> {/* При помощи onClick - мы нажимаем на спрятаный инпут*/}
                    <input 
                        id="trackPicture"
                        type='file' 
                        accept={'image/*'} 
                        ref={imgRef} 
                        onChange={onChange}
                        hidden
                    />
                    {pictureName || 'Upload image'}
                </button>
            </div>

            <div className={`${trackPictureStyes.navigationButtons}`}>
                <button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep-1)}>Previous step</button>
                <button disabled={activeStep >= 2 || !pictureInput} onClick={() => setActiveStep(activeStep+1)}>Next step</button>
            </div>
        </div>
    );
}
 
export default StepperTrackPicture;