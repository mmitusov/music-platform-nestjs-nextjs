import TrackList from '@/components/tracks/TrackList';
import tracksPageStyles from '@/styles/pages/tracksPage.module.scss'
import Link from 'next/link';
import { useEffect } from 'react';
import { useGetState } from '@/hooks/useGetState';
import useGetAction from '@/hooks/useGetAction';

const Tracks = () => {
    const { tracksListState } = useGetState();
    const { fetchTracks } = useGetAction();
    useEffect(() => {
        fetchTracks()
    }, [])

    if (tracksListState.fetchErr) {
        return 
            <h1>{tracksListState.fetchErr}</h1>
    }

    return (
        <div className={`${tracksPageStyles.tracksContainer}`}>
            <div className={`${tracksPageStyles.mainGrig}`}>
                <div>
                    <h1>Track List</h1>
                    <p><Link href="/tracks/create">Upload</Link></p>
                </div>
                <TrackList tracks={tracksListState.tracksList}/>
            </div>
        </div>
    );
}
 
export default Tracks;