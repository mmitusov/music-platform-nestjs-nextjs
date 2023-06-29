import TrackList from '@/components/tracks/TrackList';
import tracksPageStyles from '@/styles/pages/tracksPage.module.scss'
import { Track } from '@/typings/tracks';
import Link from 'next/link';

const Tracks = () => {
    const tracks: Track[]  = [
        {    _id: '1', name: 'Name', artist: 'Artist', text: 'Text', listened: 1, picture: 'https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000&t=st=1687600589~exp=1687601189~hmac=fde81f2d1af731b995ceafe98e1298175b1a37233df0037bf403e7041a405585', audio: 'http://localhost:3000/audio/77473628-55b8-43b2-a68b-46ed7eadc973.mp3', comments: []},
        {    _id: '2', name: 'Name', artist: 'Artist', text: 'Text', listened: 1, picture: 'https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000&t=st=1687600589~exp=1687601189~hmac=fde81f2d1af731b995ceafe98e1298175b1a37233df0037bf403e7041a405585', audio: 'http://localhost:3000/audio/77473628-55b8-43b2-a68b-46ed7eadc973.mp3', comments: []},
        {    _id: '3', name: 'Name', artist: 'Artist', text: 'Text', listened: 1, picture: 'https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000&t=st=1687600589~exp=1687601189~hmac=fde81f2d1af731b995ceafe98e1298175b1a37233df0037bf403e7041a405585', audio: 'http://localhost:3000/audio/77473628-55b8-43b2-a68b-46ed7eadc973.mp3', comments: []}
    ]

    return (
        <div className={`${tracksPageStyles.tracksContainer}`}>
            <div className={`${tracksPageStyles.mainGrig}`}>
                <div>
                    <h1>Track List</h1>
                    <p><Link href="/tracks/create">Upload</Link></p>
                </div>
                <TrackList tracks={tracks}/>
            </div>
        </div>
    );
}
 
export default Tracks;