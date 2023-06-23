import { Artist } from "../types/artist";

class ArtistUtil {
    static getArtistsName (artists : Artist[]) {
        var artistsString = '';

        artists.forEach((element, index) => {
            artistsString += element.name;
            if (index !== artists.length - 1) {
                artistsString += ', ';
            }
        });

        return artistsString;
    };

} 

export default ArtistUtil;