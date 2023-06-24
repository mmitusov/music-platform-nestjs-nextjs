import { Track } from "@/typings/tracks";
import trackListStyles from '@/styles/components/trackList.module.scss'
import Link from "next/link";

interface TrackListProps {
    tracks: Track[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
        <div>
            <div className={`${trackListStyles.mainGrig}`}>
                {tracks.map((track) => (
                    <div className={`${trackListStyles.trackItem}`}>
                        <h1>{track.name}</h1>
                        <p><Link href="/tracks/create">Download</Link></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TrackList;