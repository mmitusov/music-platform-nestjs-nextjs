export interface Comment {
    _id: string;
    username: string;
    text: string;
}

export interface Track {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listened: number;
    picture: string;
    audio: string;
    comments: Comment[];
}