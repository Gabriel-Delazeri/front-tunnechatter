import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

interface Props {
  album: any;
}

export default function ShortReview({ album }: Props) {
  return (
    <div className="flex flex-row mt-10">
      <Image
        src={album?.image_url}
        width={144}
        height={144}
        alt="Picture of the author"
        className="flex-shrink-0"
      />
      <div className="flex flex-col px-6 justify-center text-gray-200">
        <div className="flex flex-row space-x-2">
          <div className="font-semibold">{album?.name}</div>
          <div className="font-light">2019</div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <img
            className="h-4 w-4 rounded-full"
            src="https://avatars.githubusercontent.com/u/92875263?v=4"
            alt="Logo do Usuário"
          />
          <div>Gabriel</div>
          <div className=" flex">
            <Star width={12} />
            <Star width={12} />
            <Star width={12} />
            <StarHalf width={12} />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center h-32 w-72 overflow-hidden text-gray-200">
          <div className="text-center overflow-hidden text-ellipsis font-light italic">
            Lorem ipsum Lorem ipsum Lorem ipsum
          </div>
        </div>
      </div>
    </div>
  );
}
