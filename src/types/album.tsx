import { Artist } from "./artist";

export interface Album {
    image_url: string;
    name: string;
    artists: Artist[];
    release_date: Date;
}