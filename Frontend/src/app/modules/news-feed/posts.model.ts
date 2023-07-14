export interface Post{
    body: string;
    img_url?: string;
    num_likes: number;
    post_time: Date;
    tags?: string[];
    user: string;
    video_url?: string;
    _id: string;
}

