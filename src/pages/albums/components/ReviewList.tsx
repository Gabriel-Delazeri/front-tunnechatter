import { Star } from "lucide-react";
import GeneralReview from "../../../components/GeneralReview";
import UserReview from "../../../components/UserReview";
import { Review } from "../../../types/review";
import { useState } from "react";
import StarRate from "../../../components/StarRate";
import FormReview from "../../../components/FormReview";
import { Album } from "../../../types/album";

interface Props {
  reviews: Review[];
  userReview: Review | null;
  album: Album | null;
}

export default function ReviewList({ reviews, userReview, album }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div className="flex flex-col space-y-2 mt-3">
      {userReview && <UserReview review={userReview} />}
      {!userReview && (
        <FormReview album={album}/>
      )}
      {reviews?.map((review) => {
        return <GeneralReview review={review} key={review.id} />;
      })}
    </div>
  );
}
