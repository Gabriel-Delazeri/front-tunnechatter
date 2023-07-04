import { useState } from "react";
import TracksTable from "./TracksTable";
import { Album } from "../../../types/album";
import ReviewList from "./ReviewList";
import { Review } from "../../../types/review";

interface Props {
  album: Album;
  reviews: Review[]
}

export default function AlbumMenu({ album, reviews }: Props) {
  const [showReviews, setShowReviews] = useState(true);
  const [showTracks, setShowTracks] = useState(false);

  const toggleReviews = () => {
    setShowReviews(true);
    setShowTracks(false);
  };

  const toggleTracks = () => {
    setShowTracks(true);
    setShowReviews(false);
  };    

  return (
    <div className="mt-10 text-gray-200">
      <div className="flex space-x-2 p-2 font-medium">
        <div
          className={`text-sm bg-gray-200 p-3 rounded-xl ${
            !showReviews ? "bg-zinc-900" : "text-zinc-900"
          }`}
          onClick={toggleReviews}
        >
          Reviews
        </div>
        <div
          className={`text-sm bg-gray-200 p-3 rounded-xl ${
            !showTracks ? "bg-zinc-900" : "text-zinc-900"
          }`}
          onClick={toggleTracks}
        >
          Tracks
        </div>
      </div>

      {showReviews && (
        <div className="relative">
            <ReviewList reviews={reviews} userReview={album?.userReview} album={album}/>
        </div>
      )}

      {showTracks && (
        <div className="relative overflow-x-auto">
          <TracksTable album={album} />
        </div>
      )}
    </div>
  );
}
