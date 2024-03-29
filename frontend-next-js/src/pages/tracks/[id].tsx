import { Track } from "@/typings/tracks";
import trackInfoStyles from '@/styles/pages/trackInfoStyles.module.scss'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

const DynamicTrackId = () => {
    const [track, setTrack] = useState<Track | null>(null)
    const userName = useRef(null);
    const userComment = useRef(null);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        (async () => {
            try {
                if(id) {
                    const response = await axios.get<Track>(process.env.NEXT_PUBLIC_BACKEND_URL_TRACKS + id);
                    const data = await response.data;
                    setTrack(data)
                }
            } catch(err) {
                console.log(err)
                throw new Error('Wrong track ID!');
            }
        })()
    }, [id])

    const sendComment = async () => {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL_COMMENT, {
                username: userName.current.value,
                text: userComment.current.value,
                trackId: id
            })
            setTrack({...track, comments: [...track?.comments, response.data]})
        } catch(err) {
            console.log(err);
        }
        userName.current.value = '';
        userComment.current.value = '';
    }

    const handleKeypress = (e: any) => {
        if (e.keyCode === 13) {
            sendComment();
        }
    };

    if (!track || !Array.isArray(track.comments)) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className={`${trackInfoStyles.mainContainer}`}>
            <Head>
                <title>{'Music platform: ' + track.artist + ' - ' + track.name}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Welcome to the best Music platform"/>
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="/next.svg"/>
            </Head>

            <Link href="/tracks">
                <button>Back to the list</button>
            </Link>

            <div className={`${trackInfoStyles.trackInfo}`}>
                <span>
                    <Image src={ process.env.NEXT_PUBLIC_BACKEND_URL + track?.picture } alt='' fill/>
                </span>
                <div>
                    <h1>Track name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listened - {track.listened} times</h1>
                </div>
            </div>

            <div className={`${trackInfoStyles.trackText}`}>
                <h1>Lyrics</h1>
                <p>{track.text}</p>                
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

            {track.comments.map(comment => 
                <div key={comment._id}>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                </div>
            )}
        </div>
    );
}
 
export default DynamicTrackId;