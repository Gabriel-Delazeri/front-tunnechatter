import { Edit, Star, StarHalf, Trash } from "lucide-react";
import { Album } from "../../../types/album";

interface Props {
    album: Album
}

export default function UserReviewCard({ album } : Props) {
  return (
    <div className="bg-zinc-900 px-8 py-6 rounded-lg flex flex-col gap-2 w-80 overflow-hidden mt-2 bg-opacity-40">
      <div className="flex flex-row justify-center">
        {album?.userReview?.comment}
      </div>
      <div className="flex flex-row justify-center">
        <Star fill="white" width={16}></Star>
        <Star fill="white" width={16}></Star>
        <Star fill="white" width={16}></Star>
        <Star fill="white" width={16}></Star>
        <div className="relative flex">
          <Star width={16}></Star>
          <StarHalf width={16} fill="white" className="absolute"></StarHalf>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-2">
        <Edit width={16} />
        <Trash width={16} />
      </div>
    </div>
  );
}
