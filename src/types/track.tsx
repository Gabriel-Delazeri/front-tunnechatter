import { Artist } from "./artist"

export interface Track {
    id: string 
    duration_ms: number
    external_url: string
    image_url: string 
    name: string 
    number: number
    slug: string 
    spotify_id: string 
    artists: Artist[]
}