import axios from "axios";
import { PlayButtonIcon } from "../assets/playButton";
import { Card } from "../components/Card/Card";
import "./HomeStyles.css";
import { useEffect, useState } from "react";
import { Anime } from "../models";

export function HomePage() {
  const [topAnimes, setTopAnimes] = useState<Anime[]>([]);

  const getTopAnimes = {
    method: 'GET',
    url: `https://api.jikan.moe/v4/top/anime`,
  };

  useEffect(() => {
    axios.request(getTopAnimes)
      .then(response => {
        console.log('TOP animes ', response.data.data.slice(0, 10))
        setTopAnimes(response.data.data.slice(0, 10));
      })
      .catch(error => {
        console.error('Error en el front end:', error);
      });
  }, []);

  return (
    <div className="flex flex-col bg-black">
      <div className="flex h-[850px] w-full relative">
        <div className="h-full absolute left-10 z-50 flex flex-col justify-center text-white p-20 w-1/2">
          <p className="font-light mb-2">#1 Spotlight</p>
          <h2 className=" font-semibold text-7xl mb-16">{topAnimes.length > 0 && topAnimes[0].title}</h2>
          <p className="text-justify truncate">{topAnimes.length > 0 && topAnimes[0].synopsis }</p>
          <div className="flex gap-4 mt-14">
            <button className="p-3 rounded-full border-2 border-blue-400 flex items-center justify-center gap-2"> <PlayButtonIcon /> Watch Now</button>
            <button>+ Add to List</button>
          </div>
        </div>
        <img className="object-cover w-full" src={topAnimes.length > 0 ? topAnimes[0].trailer.images?.maximum_image_url : ""} alt="coverAnime" />
        <div className="h-full w-full absolute z-40 gradiantCover"></div>
      </div>
      <div className="flex flex-col p-20 gap-20">
        <div className="flex flex-col gap-6 overflow-hidden">
          <div className="flex justify-between">
            <div className="text-white border-b-2 border-blue-400 font-bold text-3xl w-fit py-2">Top animes</div>
            <div className="text-white text-xl self-end">View more</div>
          </div>
          <div className="flex gap-10">
            {topAnimes.map((anime) =>
              <Card key={anime.mal_id} anime={anime} />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-10 overflow-hidden">
          <div className="text-white border-b-2 border-blue-400 font-bold text-3xl w-fit py-2">Top airing</div>
          {/* <div className="flex gap-10">
            <Card image={""} name={"Shingeki no kyojin"} />
            <Card image={""} name={"Banana fish"} />
            <Card image={""} name={"One piece"} />
            <Card image={""} name={"Naruto"} />
            <Card image={""} name={"Dragon ball Z"} />
          </div> */}
        </div>
      </div>
    </div>
  )
}