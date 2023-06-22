import { Artist } from "./artist";

export interface Album {
    id: string;
    image_url: string;
    name: string;
    artists: Artist[];
    release_date: Date;
}