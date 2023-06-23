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
              <Star key={index} width={12} />
            ))}
            <StarHalf width={12} />
          </>
        );
      }

      return Array.from({ length: starCount }).map((_, index) => (
        <Star key={index} width={12} />
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
    <div className="flex flex-row mt-10">
      <Link href={"/albums/"+review.album.id}>
        <Image
          src={review?.album.image_url}
          width={144}
          height={144}
          alt="Picture of the author"
          className="flex-shrink-0"
        />
      </Link>
      <div className="flex flex-col px-6 justify-center text-gray-200">
        <Link href={"/albums/"+review.album.id} className="flex flex-row space-x-2">
          <div className="font-semibold">{review?.album.name}</div>
          <div className="font-light">
            {getAlbumReleaseYear(review?.album.release_date)}
          </div>
        </Link>
        <div className="flex flex-row space-x-2 items-center mt-2 w-40 justify-between">
          <div className="flex">{getReviewRatingStars(review)}</div>
          <div className="flex space-x-1">
            <Image
              src={review?.user?.imageUrl}
              width={144}
              height={144}
              alt="Picture of the author"
              className="h-4 w-4 rounded-full"
            />
            <div>{review?.user?.username}</div>
          </div>
        </div>
        <div className="flex-1 flex justify-start items-center h-32 overflow-hidden text-gray-200">
          <div className="text-center overflow-hidden text-ellipsis font-light italic">
            {review?.comment}
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <a href="#" onClick={likeUnlike}>
            <ThumbsUp width={12} />
          </a>
          <div className="text-sm">{likesCount} Likes</div>
        </div>
      </div>
    </div>
  );
}
