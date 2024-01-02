"use client";
import AnimeList from "../../components/AnimeList";
import HeaderMenu from "../../components/Utilities/Menu/HeaderMenu";
import Pagination from "../../components/Utilities/Menu/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const Populer = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <HeaderMenu title={`Anime Populer #${page}`} />
      <section>
        <AnimeList api={topAnime} />
      </section>
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Populer;
