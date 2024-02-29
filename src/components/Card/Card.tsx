import { Anime } from "../../models";

interface CardProps {
    anime: Anime;
}

export const Card: React.FC<CardProps> = ({ anime }) => {
    return (
        <div className="min-w-[170px] w-full min-h-[250px] mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-4/5 object-cover" src={anime.images.jpg.large_image_url} alt={anime.title} />
            <div className=" py-4">
                <a href={`/anime/${anime.mal_id}`} className="font-bold text text-sm mb-2 text-white">{anime.title}</a>
            </div>
        </div>
    );
};
