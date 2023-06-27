import playerStyles from '@/styles/layout/player.module.scss'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TrackProgress from './TrackProgress';

const Player = () => {
    const track = { _id: '1', name: 'Name', artist: 'Artist', text: 'Text', listened: 1, picture: 'https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000&t=st=1687600589~exp=1687601189~hmac=fde81f2d1af731b995ceafe98e1298175b1a37233df0037bf403e7041a405585', audio: '', comments: []}
    const active = true;

    return (
        <div>
            <div className={`${playerStyles.playerContainer}`}>
                <div onClick={(e) => e.preventDefault()}>
                    {active
                        ? <PauseCircleIcon fontSize="large"/>
                        : <PlayCircleIcon fontSize="large"/>
                    }
                </div>
                <div className={`${playerStyles.track}`}>
                    <h3>{track.name}</h3>
                    <h4>{track.artist}</h4>
                </div>

                <TrackProgress currPosition={0} fullLenght={10} onChange={() => {}}/>

                <div className={`${playerStyles.volume}`}>
                    <VolumeMuteIcon />
                    <TrackProgress currPosition={0} fullLenght={10} onChange={() => {}}/>
                    <VolumeUpIcon />
                </div>
            </div>
        </div>
    );
}
 
export default Player;