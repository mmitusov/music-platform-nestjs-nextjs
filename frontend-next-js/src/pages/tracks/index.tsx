import tracksPageStyles from '@/styles/pages/tracksPage.module.scss'
import TrackList from '@/components/tracks/TrackList';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useGetState } from '@/hooks/useGetState';
import useGetAction from '@/hooks/useGetAction';

const Tracks = () => {
    const { tracksListState } = useGetState();
    const { fetchTracks, fetchSearchedTracks } = useGetAction();
    const searchInput = useRef<any>('');
    useEffect(() => {
        fetchTracks()
    }, [])

    const searchTrack = () => {
        fetchSearchedTracks({
            trackName: searchInput.current.value
        })
        searchInput.current.value = ''
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchTrack()
          }
    }

    if (tracksListState.fetchErr) {
        return 
            <h1>{tracksListState.fetchErr}</h1>
    }

    return (
        <div className={`${tracksPageStyles.tracksContainer}`}>
            <div className={`${tracksPageStyles.trackSearch}`}>
                <input placeholder='Search by a track name...' ref={searchInput} onKeyDown={onKeyDown}/>
                <button onClick={searchTrack}>Search</button>
            </div>
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