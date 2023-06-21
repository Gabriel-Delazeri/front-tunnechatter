import AlbumCard from "../../../components/AlbumCard";
import { Album } from "../../../types/album";

interface Props {
    albums: Album[]
}

export default function HomeAlbumPanel({ albums } : Props) {
    return (
        <div className="grid grid-cols-4 gap-6 mt-10">
            <AlbumCard album={albums[5]} />
            <AlbumCard album={albums[10]} />
            <AlbumCard album={albums[12]} />
            <AlbumCard album={albums[4]} />
        </div>
    )
}