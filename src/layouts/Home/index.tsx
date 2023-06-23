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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <div className="py-6 font-normal text-xl justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Most popular last 30 days
          </div>
          <hr />
        </div>
        <HomeAlbumPanel albums={popularAlbums} />
        <div className="flex-shrink-0">
          <div className="py-6 font-normal text-xl justify-center mt-10 text-white ">
            Reviews trending this week
          </div>
          <hr />
        </div>
        {popularReviews.map((review) => {
          return <ShortReview review={review} key={review.id}/>;
        })}
      </div>
    </Layout>
  );
}
