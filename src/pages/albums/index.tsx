import { useEffect, useState } from "react";
import Layout from "../../layouts";
import { api } from "../../services/api";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    api.get("/albums").then((response) => {
      setAlbums(response.data.content);
    });
  }, []);

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-10 text-white">
        <div className="flex mb-4 justify-end">
          <input
            type="text"
            placeholder="Filtrar álbuns"
            value={filter}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-indigo-500"
          />
        </div>
        <div className="grid grid-cols-5 gap-6">
          {filteredAlbums.map((album) => {
            return (
              <Link
                href={"/albums/" + album.id}
                key={album.id}
                className="flex-col hover:border-2 border-indigo-400"
              >
                <Image
                  src={album?.image_url}
                  width={288}
                  height={288}
                  alt="Picture of the author"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
