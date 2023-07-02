import trackInfoStyes from '@/styles/components/stepper/stepperTrackInfo.module.scss'
import { useState } from 'react';

const StepperTrackInfo = ({activeStep, setActiveStep, setOverallInput}) => {
    const [ infoInput, setInfoInput ] = useState<{trackName?: string, artistName?: string, trackLyrics?: string}>({});

    const onChangeFieldHandler = ( e ) => {
        setInfoInput( prev => ({ ...prev, [ e.target.id ]: e.target.value}) );
        setOverallInput( prev => ({ ...prev, [ e.target.id ]: e.target.value}) );
    }

    const isFormFinished =
        infoInput?.trackName?.length > 0 &&
        infoInput?.artistName?.length > 0 &&
        infoInput?.trackLyrics?.length > 0;

    return (
        <div className={`${trackInfoStyes.trackInfoContainer}`}>
            <div>
                <form className={`${trackInfoStyes.form}`}>
                    <div>
                        <label>Track name</label>
                        <input 
                            id="trackName" 
                            type='text' 
                            onChange={ onChangeFieldHandler } 
                            placeholder="Enter track name..." 
                            required
                        />
                    </div>
                    <div>
                        <label>Artist name</label>
                        <input 
                            id="artistName" 
                            type='text' 
                            onChange={ onChangeFieldHandler } 
                            placeholder="Enter artist name..." 
                            required
                        />
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