import { Artist } from "./artist";
import { Track } from "./track";

export interface Album {
    id: string;
    image_url: string;
    name: string;
    artists: Artist[];
    release_date: Date;
    tracks: Track[]
}