import stepWrapperStyes from '@/styles/components/stepper/stepWrapper.module.scss'
import React, { useState } from "react";
import Stepper from 'react-stepper-horizontal';
import StepperTrackInfo from "./StepperTrackInfo";
import StepperTrackPicture from "./StepperTrackPicture";
import StepperTrackAudio from "./StepperTrackAudio";
import { useRouter } from 'next/router';
import axios from "axios";

interface overallInput {
    artistName?: string | any; 
    trackName?: string | any; 
    trackLyrics?: string | any;
    trackPicture?: React.FormEvent<HTMLInputElement> | any
    trackAudio?: React.FormEvent<HTMLInputElement> | any;
}

const StepWrapper = () => {
    const router = useRouter()
    const [overallInput, setOverallInput] = useState<overallInput>({});
    const [activeStep, setActiveStep] = useState<number>(0)
    const steps = [
        { title: 'Track info', onClick: () => setActiveStep(0) },
        { title: 'Add track picture', onClick: () => setActiveStep(1) },
        { title: 'Add audio track', onClick: () => setActiveStep(2) },
    ];

    const sendNewTrack = () => {
        const formData = new FormData()
        formData.append('artist', overallInput.artistName)
        formData.append('name', overallInput.trackName)
        formData.append('text', overallInput.trackLyrics)
        formData.append('picture', overallInput.trackPicture)
        formData.append('audio', overallInput.trackAudio)
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL_TRACKS}`, formData)
            .then(() => router.push('/tracks'))
            .catch((err) => console.log(err))
        //Так как мы сперва дожидаемся респонса о том, что трек уже создан
        //То когда мы переходим на '/tracks', то там уже сразу подгружается обновленные данные с бека
        //И мы сразу видим загруженный трек
    }

    return (
        <div>
            {activeStep < steps.length && (
                <Stepper steps={steps} activeStep={activeStep} />
            )}

            <div className={`${stepWrapperStyes.singleSteps}`}>
                {activeStep === 0 && <StepperTrackInfo activeStep={activeStep} setActiveStep={setActiveStep} setOverallInput={setOverallInput}/>}
                {activeStep === 1 && <StepperTrackPicture activeStep={activeStep} setActiveStep={setActiveStep} setOverallInput={setOverallInput}/>}
                {activeStep === 2 && <StepperTrackAudio activeStep={activeStep} setActiveStep={setActiveStep} setOverallInput={setOverallInput} sendNewTrack={sendNewTrack}/>}
            </div>
        </div>
    );
}

export default StepWrapper;