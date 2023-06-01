import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import React from 'react';
import Slider from 'react-slick';
import Head from "next/head";

const CarouselAlbums = () => {
    
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api.get('/albums').then((response) => setAlbums(response.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Head>
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
      <Slider {...settings}>
        {albums.map((album) => (
          <div key={album.id} className="px-4">
            <div>
              <a href={`/album/${album.slug}`}>
                <img className="w-full h-auto rounded-lg" src={album.image_url} alt={album.name} />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselAlbums;