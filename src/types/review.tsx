import { Album } from "./album";
import { User } from "./user";

export interface Review {
    album: Album
    comment: string 
    id: string 
    likeCount: number
    postedAt: Date
    rating: number
    user: User
}