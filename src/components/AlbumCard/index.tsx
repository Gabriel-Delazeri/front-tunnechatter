import Image from "next/image";
import { Album } from "../../types/album";
import Link from "next/link";

interface Props {
  album: Album;
}

export default function AlbumCard({ album }: Props) {
  return (
    <div className="text-gray-200">
      <div className="hover:border-2 border-gray-300">
        <Link href={"/albums/" + album.id}>
          <Image
            src={album?.image_url}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </div>
  );
}
