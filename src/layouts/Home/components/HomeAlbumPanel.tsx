import AlbumCard from "../../../components/AlbumCard";
import { Album } from "../../../types/album";

interface Props {
    albums: Album[]
}

export default function HomeAlbumPanel({ albums } : Props) {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 mt-6">
            {albums.map((album?) => {
                return <AlbumCard album={album} key={album.id}/>
            })}
        </div>
    )
}