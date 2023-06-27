import trackProgressStyles from '@/styles/layout/trackProgress.module.scss'

interface TrackProgressProps {
    currPosition: number;
    fullLenght: number;
    onChange: (e) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({currPosition, fullLenght, onChange}) => {
    return (
        <div className={`${trackProgressStyles.trackProgressContainer}`}>
            <input 
                type='range'
                min={currPosition}
                max={fullLenght}
                value={currPosition}
                onChange={onChange}
            />
            <div>{currPosition} / {fullLenght}</div>
        </div>
    );
}
 
export default TrackProgress;