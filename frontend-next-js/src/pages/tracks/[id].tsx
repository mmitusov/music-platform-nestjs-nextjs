import { Track } from "@/typings/tracks";
import trackInfoStyles from '@/styles/pages/trackInfoStyles.module.scss'
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const DynamicTrackId = () => {
    const userName = useRef(null);
    const userComment = useRef(null);

    const tracks: Track = {_id: '1', name: 'Name', artist: 'Artist', text: 'Text', listened: 1, picture: 'https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000&t=st=1687600589~exp=1687601189~hmac=fde81f2d1af731b995ceafe98e1298175b1a37233df0037bf403e7041a405585', audio: '', comments: []}

    const sendComment = () => {
        console.log(userName.current.value);
        console.log(userComment.current.value);
        userName.current.value = '';
        userComment.current.value = '';
    }

    const handleKeypress = (e: any) => {
        if (e.keyCode === 13) {
            sendComment();
        }
    };

    return (
        <div className={`${trackInfoStyles.mainContainer}`}>
            <Link href="/tracks">
                <button>Back to the list</button>
            </Link>

            <div className={`${trackInfoStyles.trackInfo}`}>
                <span>
                    <Image src={tracks.picture} alt='' fill/>
                </span>
                <div>
                    <h1>Track name - {tracks.name}</h1>
                    <h1>Artist - {tracks.artist}</h1>
                    <h1>Listened - {tracks.listened} times</h1>
                </div>
            </div>

            <div className={`${trackInfoStyles.trackText}`}>
                <h1>Lyrics</h1>
                <p>{tracks.text}</p>                
            </div>

            <h1>Comment section</h1>
            <div className={`${trackInfoStyles.inputField}`}>
                <input 
                    type='text' placeholder="Your name..."  
                    onKeyDown={(e)=> handleKeypress(e)}
                    ref={userName}
                />
                <textarea 
                    rows={ 8 } 
                    maxLength={ 100 }
                    onKeyDown={(e)=> handleKeypress(e)}
                    ref={userComment}
                />
            </div>
            <button onClick={() => sendComment()}>
                Send comment
            </button>

            {tracks.comments.map(comment => 
                <div>
                    <div>User</div>
                    <div>Comment</div>
                </div>
            )}
        </div>
    );
}
 
export default DynamicTrackId;