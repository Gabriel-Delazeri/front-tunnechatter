import ReactStars from 'react-stars';
import { api } from '../../services/api';
import { Album } from '../../types/album';

interface Props {
  album: Album;
}

export default function FormReview({ album }: Props) {
  const ratingChanged = (newRating) => {
    api.post(`/reviews`, {
      album: {
        id: album?.id
      },
      comment: "",
      rating: newRating
    }).then((response) => console.log(response));
    console.log(newRating);
  };

  return (
    <div className="flex flex-row gap-2 text-gray-200 text-sm sm:text-xl bg-zinc-900 p-4 sm:p-4 rounded-md justify-between">
      <div className="">Review this</div>
      <div className="flex flex-row">
        <ReactStars count={5} onChange={ratingChanged} />
      </div>
    </div>
  );
}
