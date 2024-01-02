import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-3 gap-4 px-4">
      {api.data?.map((data) => {
        return (
          <Link
            href={`/detail/${data.mal_id}`}
            className="cursore-pointer text-color-primary hover:text-color-accent transition-all"
            key={data.mal_id}
          >
            <Image
              src={data.images.webp.image_url}
              alt=""
              width={350}
              height={350}
              className="w-full max-h-80 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
