import { Star, StarHalf } from "lucide-react";
import { Review } from "../types/review";

class ReviewUtil {
  static getReviewRatingStars(review: Review) {
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
}

export default ReviewUtil;
