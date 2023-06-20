import Navbar from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import Image from "next/image";
import AlbumCard from "../../components/AlbumCard";
import { Star, StarHalf } from 'lucide-react'
import ShortReview from "../../components/ShortReview";

export default function HomeLayout() {
  const { user } = useContext(AuthContext);
  const [albums, setAlbums] = useState([]);
  const [popularReviews, setPopularReviews] = useState([]);

  useEffect(() => {
    api.get("/albums").then((response) => {
      setAlbums(response.data.content);
    });
  }, []);

  useEffect(() => {
    api.get("/reviews/popular").then((response) => {
      setPopularReviews(response.data)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-10">
        <div className="flex-shrink-0">
          <div className="py-6 font-normal text-xl justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Most popular last 30 days
          </div>
          <hr />
        </div>
        <div className="grid grid-cols-4 gap-6 mt-10">
          <AlbumCard album={albums[19]} />
          <AlbumCard album={albums[10]} />
          <AlbumCard album={albums[12]} />
          <AlbumCard album={albums[4]} />
        </div>
        <div className="flex-shrink-0">
          <div className="py-6 font-normal text-xl justify-center mt-10 text-white ">
            Reviews trending this week
          </div>
          <hr />
        </div>
        <ShortReview review={popularReviews[0]}/>
        <ShortReview review={popularReviews[1]}/>
        <ShortReview review={popularReviews[2]}/>
      </div>
    </div>
  );
}
