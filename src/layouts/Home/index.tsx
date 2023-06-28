import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import ShortReview from "../../components/ShortReview";
import Layout from "..";
import HomeAlbumPanel from "./components/HomeAlbumPanel";

export default function HomeLayout() {
  const { user } = useContext(AuthContext);
  const [popularAlbums, setPopularAlbums] = useState([]);
  const [popularReviews, setPopularReviews] = useState([]);

  useEffect(() => {
    api.get("/albums/popular?size=4").then((response) => {
      setPopularAlbums(response.data.content);
    });
  }, []);

  useEffect(() => {
    api.get("/reviews").then((response) => {
      setPopularReviews(response.data.content);
    });
  }, []);

  popularReviews.sort((a, b) => b.likeCount - a.likeCount);

  return (
    <Layout>
      <div className="space-y-4 sm:space-y-8">
        <div className="flex-shrink-0">
          <div className="mb-4 font-normal text-md sm:text-xl justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Most popular last 30 days
          </div>
          <hr />
        </div>
        <HomeAlbumPanel albums={popularAlbums} />
        <div className="flex-shrink-0">
          <div className="mb-4 font-normal text-md sm:text-xl justify-center text-white ">
            Reviews trending this week
          </div>
          <hr />
        </div>
      </div>
      <div className="space-y-2 mt-2 sm:space-y-3 sm:mt-8">
        {popularReviews.map((review) => {
          return <ShortReview review={review} key={review.id} />;
        })}
      </div>
    </Layout>
  );
}
