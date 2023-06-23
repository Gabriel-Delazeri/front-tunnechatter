import { Artist } from "./artist";
import { Review } from "./review";
import { Track } from "./track";

export interface Album {
    id: string;
    image_url: string;
    name: string;
    artists: Artist[];
    release_date: Date;
    tracks: Track[];
    userReview: Review
}