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
      <div className="text-gray-200 space-y-2">
        {reviews?.map((review) => {
          return <ShortReview review={review} key={review.id} />;
        })}
      </div>
    </Layout>
  );
}
