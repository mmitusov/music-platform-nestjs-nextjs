import trackInfoStyes from '@/styles/components/stepper/stepperTrackInfo.module.scss'
import { useState } from 'react';

const StepperTrackInfo = ({activeStep, setActiveStep}) => {
    const [ data, setData ] = useState<{trackName: string, artistName: string, trackLyrics: string} | {}>({});

    const onChangeFieldHandler = ( event ) => {
        setData( prev => ({ ...prev, [ event.target.id ]: event.target.value  }) );
        console.log(data, isFormFinished)
    }

    const handleKeypress = (e: any) => {
        if (e.keyCode === 13) {
            // sendForm();
        }
    };

    const isFormFinished =
        data?.trackName?.length > 0 &&
        data?.artistName?.length > 0 &&
        data?.trackLyrics?.length > 0;

    return (
        <div className={`${trackInfoStyes.trackInfoContainer}`}>
            
            <div>
                <form className={`${trackInfoStyes.form}`}>
                    <div>
                        <label>Track name</label>
                        <input type='text' id="trackName" onChange={ onChangeFieldHandler } placeholder="Enter track name..." required/>
                    </div>
                    <div>
                        <label>Artist name</label>
                        <input type='text' id="artistName" onChange={ onChangeFieldHandler } placeholder="Enter artist name..." required/>
                    </div>
                    <div >
                        <label>Song lyrics</label>
                        <textarea 
                            id="trackLyrics" 
                            onChange={ onChangeFieldHandler } 
                            rows={ 8 } 
                            maxLength={ 100 }
                            placeholder="Enter song lyrics..."
                        />
                    </div>
                </form>
            </div>

            <div className={`${trackInfoStyes.navigationButtons}`}>
                <button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep-1)}>Previous step</button>
                <button disabled={activeStep >= 2 || !isFormFinished} onClick={() => setActiveStep(activeStep+1)}>Next step</button>
            </div>
        </div>
    );
}
 
export default StepperTrackInfo;