import TrackList from '@/components/tracks/TrackList';
import tracksPageStyles from '@/styles/pages/tracksPage.module.scss'
import Link from 'next/link';
import { useEffect } from 'react';
import { useGetState } from '@/hooks/useGetState';
import useGetAction from '@/hooks/useGetAction';

const Tracks = () => {
    const { tracksList } = useGetState();
    const { fetchTracks } = useGetAction();
    useEffect(() => {
        fetchTracks()
    }, [])

    if (tracksList.fetchErr) {
        return 
            <h1>{tracksList.fetchErr}</h1>
    }

    return (
        <div className={`${tracksPageStyles.tracksContainer}`}>
            <div className={`${tracksPageStyles.mainGrig}`}>
                <div>
                    <h1>Track List</h1>
                    <p><Link href="/tracks/create">Upload</Link></p>
                </div>
                <TrackList tracks={tracksList.tracksList}/>
            </div>
        </div>
    );
}
 
export default Tracks;