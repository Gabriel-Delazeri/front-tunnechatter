import Image from "next/image";
import { Star, StarHalf, ThumbsUp } from "lucide-react";
import { Review } from "../../types/review";
import { api } from "../../services/api";
import { useState } from "react";
import { getAlbumReleaseYear } from "../../services/album";
import Link from "next/link";

interface Props {
  review: Review;
}

export default function ShortReview({ review }: Props) {
  const [likesCount, setLikesCount] = useState(review.likeCount);

  const ratingStarsMap = {
    0: 0,
    0.5: 0.5,
    1.0: 1,
    1.5: 1.5,
    2.0: 2,
    2.5: 2.5,
    3.0: 3,
    3.5: 3.5,
    4.0: 4,
    4.5: 4.5,
    5.0: 5,
  };

  function getReviewRatingStars(review: Review) {
    const rating = review?.rating;

    if (ratingStarsMap.hasOwnProperty(rating)) {
      const starCount = ratingStarsMap[rating];

      if (rating % 1 === 0.5) {
        return (
          <>
            {Array.from({ length: starCount - 1 }).map((_, index) => (
              <Star key={index} width={12} scale={12} fill="white" />
            ))}
            <StarHalf width={12} fill="white" />
          </>
        );
      }

      return Array.from({ length: starCount }).map((_, index) => (
        <Star key={index} width={12} fill="white" />
      ));
    }

    return null;
  }

  function likeUnlike(e: Event) {
    e.preventDefault();

    api.post("/reviews/" + review.id + "/like").then((response) => {
      setLikesCount(response.data.likeCount);
    });
  }

  return (
    <div className="flex flex-row gap-2 text-gray-200 text-sm sm:text-xl bg-zinc-900 p-2 sm:p-4 rounded-md">
      <Image
        src={review?.album.image_url}
        width={144}
        height={144}
        alt="Picture of the author"
        className="flex-shrink-0 w-24 h-24 sm:w-40 sm:h-40"
      />
      <div className="flex flex-col flex-1 px-2 overflow-hidden">
        <div className="flex flex-row space-x-1 line-clamp-1">
          <div
            className="font-semibold"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {review?.album.name}
          </div>
        </div>
        <div className="flex flex-row space-x-2 items-center justify-between">
          <div className="flex">{getReviewRatingStars(review)}</div>
          <div className="flex space-x-1">
            <Image
              src={review?.user?.imageUrl ? review.user.imageUrl : ""}
              width={144}
              height={144}
              alt="Picture of the author"
              className="h-3 w-3 sm:h-6 sm:w-6 rounded-full"
            />
            <div className="text-xs sm:text-lg font-normal">
              {review?.user?.username}
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-1 mb-2 overflow-hidden italic text-gray-400 sm:justify-center sm:items-center">
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
            {review?.comment}
          </div>
        </div>
        <div className="flex flex-row space-x-2 justify-end items-center text-xs">
          <a href="#" onClick={likeUnlike}>
            <ThumbsUp className="w-3 h-3 sm:w-5 sm:h-5" />
          </a>
          <div className="text-sm sm:text-lg">{likesCount}</div>
        </div>
      </div>
    </div>
  );
}
