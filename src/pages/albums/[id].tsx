import { useRouter } from "next/router";
import Layout from "../../layouts";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Image from "next/image";
import { Album } from "../../types/album";
import { getAlbumReleaseYear } from "../../services/album";
import ArtistUtil from "../../utils/ArtistUtil";
import TrackUtil from "../../utils/TrackUtil";
import { Clock1, Star, StarHalf } from "lucide-react";
import UserReviewCard from "./components/UserReviewCard";
import Link from "next/link";

export default function AlbumPage() {
  const router = useRouter();
  const { id } = router.query;
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    api.get("/albums/by-id/" + id).then((response) => {
      setAlbum(response.data);
    });
  }, [id]);

  album?.tracks.sort((a, b) => a.number - b.number);

  return (
    <Layout>
      <div className="flex flex-row justify-center sm:justify-normal">
        <div className="flex flex-col sm:flex-row sm:space-x-4 text-gray-200 items-center sm:items-start">
          <Image
            src={album?.image_url}
            width={144}
            height={144}
            alt="Picture of the author"
            className="flex-shrink-0 sm:w-80"
          />
          <div className="sm:flex-col sm:space-y-2 p-2">
            <div className="flex flex-row mt-3 text-lg sm:text-2xl font-medium">
              {album?.name}
            </div>
            <div className="flex flex-row text-base font-light sm:text-xl">
              {album?.artists[0].name} (
              {getAlbumReleaseYear(album?.release_date)})
            </div>
            <div className="flex flex-row items-start">
              <Star fill="white" className="w-4 sm:w-6"></Star>
              <Star fill="white" className="w-4 sm:w-6"></Star>
              <Star fill="white" className="w-4 sm:w-6"></Star>
              <Star fill="white" className="w-4 sm:w-6"></Star>
              <div className="relative flex">
                <Star className="w-4 sm:w-6"></Star>
                <StarHalf
                  fill="white"
                  className="absolute w-4 sm:w-6"
                ></StarHalf>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-gray-200">
        <div className="flex space-x-2 p-2 font-medium">
          <div className="text-sm bg-gray-200 text-zinc-900 p-3 rounded-xl">
            Tracks
          </div>
          <div className="text-sm bg-zinc-900 p-3 rounded-xl">Reviews</div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="text-sm text-left mt-4 w-full">
            <thead className="text-xs uppercase">
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="px-6 py-2">
                  Name
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex flex-row justify-end">
                    <Clock1 width={14} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {album?.tracks.map((track) => {
                return (
                  <tr key={track.id}>
                    <td>{track.number}</td>
                    <td
                      scope="row"
                      className="px-6 py-2 font-medium whitespace-nowrap flex-1"
                    >
                      <div className="flex flex-row">{track.name}</div>
                      <div className="flex flex-row font-light">
                        {ArtistUtil.getArtistsName(track.artists)}
                      </div>
                    </td>
                    <td className="px-6 py-2">
                      <div className="flex flex-row justify-end">
                        {TrackUtil.getMinutage(track.duration_ms)}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
