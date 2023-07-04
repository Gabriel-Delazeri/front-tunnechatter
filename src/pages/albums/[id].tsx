import { useRouter } from "next/router";
import Layout from "../../layouts";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Image from "next/image";
import { Album } from "../../types/album";
import { getAlbumReleaseYear } from "../../services/album";
import { Star, StarHalf } from "lucide-react";
import AlbumMenu from "./components/AlbumMenu";
import { Review } from "../../types/review";

export default function AlbumPage() {
  const router = useRouter();
  const { id } = router.query;
  const [album, setAlbum] = useState<Album | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    api.get(`/albums/by-id/${id}`).then((response) => {
      setAlbum(response.data);
    });
  }, [id]);

  useEffect(() => {
    api.get(`/reviews/by-album/${id}`)
      .then((response) => {
        const filteredReviews = response.data.filter(review => review.user.id !== album?.userReview?.user.id);
        const sortedReviews = filteredReviews.sort((a, b) => a.createdAt - b.createdAt);
        setReviews(sortedReviews);
      });
  }, [id, album]);

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
            <div className="flex flex-row mt-3 text-lg sm:text-2xl font-medium justify-center sm:justify-start">
              <div
                className="line-clamp-1 flex-1"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {album?.name}
              </div>
            </div>
            <div className="flex flex-row text-base font-light sm:text-xl justify-center sm:justify-start">
              {album?.artists[0].name} (
              {getAlbumReleaseYear(album?.release_date)})
            </div>
            <div className="flex flex-row justify-center sm:justify-start">
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
          <AlbumMenu album={album} reviews={reviews}/>
      </div>
    </Layout>
  );
}
