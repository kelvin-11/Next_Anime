import React from "react";
import Image from "next/image";
import { getAnimeResponse } from "../../../libs/api-libs";
import VideoPlayer from "../../../components/Utilities/Menu/VideoPlayer";
import CollectionButton from "../../../components/AnimeList/CollectionButton";
import { authUserSession } from "../../../libs/auth-libs";
import prisma from "../../../libs/prisma";
import CommentInput from "../../../components/AnimeList/CommentInput";
import CommenBox from "../../../components/AnimeList/CommentBox";

const Detail = async ({ params: { id } }) => {
  const detailAnime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {detailAnime.data.title}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={detailAnime.data.images.webp.image_url}
            anime_title={detailAnime.data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
          <h3>Peringkat</h3>
          <p>{detailAnime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
          <h3>SKOR</h3>
          <p>{detailAnime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
          <h3>ANGGOTA</h3>
          <p>{detailAnime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
          <h3>EPISODE</h3>
          <p>{detailAnime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2">
          <h3>DURASI</h3>
          <p>{detailAnime.data.duration}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={detailAnime.data.images.webp.image_url}
          alt={detailAnime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded-md object-cover"
        />
        <p className="text-justify text-xl p-1">{detailAnime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="text-color-primary text-2xl mb-2">Komentar Penonton</h3>
        <CommenBox anime_mal_id={id} />

        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={detailAnime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Detail;
