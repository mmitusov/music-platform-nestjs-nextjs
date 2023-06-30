import { Track } from "@/typings/tracks";
import trackListStyles from '@/styles/components/trackList.module.scss'
import Link from "next/link";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Image from "next/image";
import useGetAction from "@/hooks/useGetAction";
import { useGetState } from "@/hooks/useGetState";

interface TrackListProps {
    tracks: Track[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    const { player } = useGetState();
    const { setActiveTrack, setVolume, setDuration, setCurrentTime, setPause, setPlay } = useGetAction();

    const active = true;

    //При нажатии на трек из списка мы записываем его в глоб хранилище как активный трек и начинаем его проигрывать
    const play = (e, track) => {
        e.preventDefault()
        setActiveTrack(track)
    }

    return (
        <div>
            <div className={`${trackListStyles.mainGrig}`}>
                {tracks.map((track) => (
                    <Link 
                        href={{ pathname: `/tracks/${ track._id }` }} 
                        className={`${trackListStyles.trackItem}`} 
                        key={track._id}
                    >
                        <div onClick={(e) => play(e, track)}>
                            {player.isPaused
                                ? <PlayCircleIcon fontSize="large"/>
                                : <PauseCircleIcon fontSize="large"/> 
                            }
                        </div>
                        <span>
                            <Image src={ 'http://localhost:3000/' + track?.picture } alt='' fill/> 
                        </span>
                        <div className={`${trackListStyles.trackName}`}>
                            <h3>{track.name}</h3>
                            <h4>{track.artist}</h4>
                        </div>
                        {active && <p>1.10 / 3.30</p>}
                        <div className={`${trackListStyles.deleteIcon}`} onClick={(e) => e.stopPropagation()}>
                            <DeleteForeverIcon fontSize="large" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
 
export default TrackList;