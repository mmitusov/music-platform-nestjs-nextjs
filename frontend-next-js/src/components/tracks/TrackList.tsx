import { Track } from "@/typings/tracks";
import trackListStyles from '@/styles/components/trackList.module.scss'
import Link from "next/link";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Image from "next/image";

interface TrackListProps {
    tracks: Track[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    const active = true;

    return (
        <div>
            <div className={`${trackListStyles.mainGrig}`}>
                {tracks.map((track) => (
                    <Link 
                        href={{ pathname: `/tracks/${ track._id }` }} 
                        className={`${trackListStyles.trackItem}`} 
                        key={track._id}
                    >
                        <div onClick={(e) => e.preventDefault()}>
                            {active
                                ? <PauseCircleIcon fontSize="large"/>
                                : <PlayCircleIcon fontSize="large"/>
                            }
                        </div>
                        <span>
                            <Image src={ track?.picture } alt='' fill/> 
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