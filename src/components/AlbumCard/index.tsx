import Image from "next/image";
import { useEffect, useState } from "react";
import { Palette } from "react-palette";

interface Props {
  album: Album;
}

interface Album {
  image_url: string;
  name: string;
  artists: Artist[];
}

interface Artist {
  name: string;
}

export default function AlbumCard({ album }: Props) {
  const [dominantColor, setDominantColor] = useState("");

  useEffect(() => {
    setDominantColor("");
  }, [album?.image_url]);

  return (
    <div className="text-gray-200">
      <Palette src={album?.image_url}>
        {({ data, loading, error }) => {
          console.log(data.vibrant);
          if (loading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return <p>Error loading image.</p>;
          }

          if (data && data.vibrant) {
            setDominantColor(data.muted);
          }

          console.log(dominantColor);

          return (
            <>
              <Image
                src={album?.image_url}
                width={288}
                height={288}
                alt="Picture of the author"
              />
              <div
                className="bg-white justify-center flex rounded-sm  font-normal p-2"
                style={{ backgroundColor: dominantColor }}
              >
                <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  {album?.name}
                </div>
              </div>
            </>
          );
        }}
      </Palette>
    </div>
  );
}
