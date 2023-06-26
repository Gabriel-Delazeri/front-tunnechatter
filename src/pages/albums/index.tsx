import { useEffect, useState } from "react";
import Layout from "../../layouts";
import { api } from "../../services/api";
import Image from "next/image";
import Link from "next/link";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [albumsPerPage] = useState(20);
  const [totalAlbums, setTotalAlbums] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await api.get("/albums", {
        params: {
          page: currentPage,
          size: albumsPerPage,
        },
      });
      setAlbums(response.data.content);
      setTotalAlbums(response.data.totalElements);
    };

    fetchAlbums();
  }, [currentPage, albumsPerPage]);

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(totalAlbums / albumsPerPage);

    if (totalPages <= 1) {
      return null;
    }

    return (
      <div className="flex justify-center mt-6">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm gap-2"
          aria-label="Pagination"
        >
          {Array.from({ length: totalPages }, (_, i) => i).map((page) => (
            <Link
              key={page}
              href="#"
              onClick={() => handlePageChange(page)}
              className={`bg-transparent text-gray-500 hover:bg-indigo-500 relative inline-flex items-center px-4 py-2 border border-gray-300 rounded-sm text-sm font-medium focus:outline-none ${
                currentPage === page ? "z-10 bg-indigo-500 text-white" : ""
              }`}
            >
              {page + 1}
            </Link>
          ))}
        </nav>
      </div>
    );
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-10 text-white">
        <div className="flex mb-4 justify-end">
          <input
            type="text"
            placeholder="Search for an album"
            value={filter}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-300"
          />
        </div>
        <div className="grid grid-cols-5 gap-6">
          {filteredAlbums.map((album) => (
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
          ))}
        </div>
        {renderPagination()}
      </div>
    </Layout>
  );
}