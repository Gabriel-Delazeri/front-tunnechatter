import Image from "next/image";
import { Review } from "../../types/review";
import Link from "next/link";
import ReviewUtil from "../../utils/ReviewUtil";
import { Edit, ThumbsUp, Trash } from "lucide-react";

interface Props {
  review: Review;
}

export default function UserReview({ review }: Props) {
  return (
    <div className="flex flex-col gap-2 text-gray-200 text-sm sm:text-xl bg-zinc-900 p-4 sm:p-4 rounded-md">
      <div className="flex flex-row gap-2 items-center">
        <Image
          src={review?.user.imageUrl ? review.user.imageUrl : '/img/profile.png'}
          width={42}
          height={42}
          alt="Picture of the author"
          className="flex-shrink-0 rounded-full"
        />
        <div className="flex flex-row gap-1">
          <div className="text-gray-500">Review by</div>
          <Link className="font-medium" href={`/home`}>
            You
          </Link>
        </div>
        <div className="flex flex-row">
          {ReviewUtil.getReviewRatingStars(review)}
        </div>
      </div>
      <div className="break-words p-4 text-center">{review?.comment}</div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-2 justify-end items-center">
          <a href="#">
            <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <div className="text-sm sm:text-lg">{review?.likeCount}</div>
        </div>
        <div className="flex flex-row space-x-2 justify-end items-center">
          <Trash className="w-4 h-4 sm:w-5 sm:h-5" />
          <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </div>
  );
}
