import { useEffect, useState } from "react";
import Layout from "../../layouts";
import { Review } from "../../types/review";
import { api } from "../../services/api";
import ShortReview from "../../components/ShortReview";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    api.get("/reviews").then((response) => setReviews(response.data.content));
  });

  return (
    <Layout>
      <div className="text-gray-200">
        <ul className="flex">
          <li className="-mb-px mr-1">
            <a
              className="bg-zinc-900 inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-200 font-semibold"
              href="#"
            >
              Popular
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-zinc-900 inline-block py-2 px-4 text-gray-200 hover:text-indigo-400 font-semibold"
              href="#"
            >
              New
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-zinc-900 inline-block py-2 px-4 text-gray-200 hover:text-indigo-400 font-semibold"
              href="#"
            >
              Your own
            </a>
          </li>
        </ul>
        {reviews?.map((review) => {
          return <ShortReview review={review} key={review.id} />;
        })}
      </div>
    </Layout>
  );
}
