import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  // recomendedAnime = { data: recomendedAnime.slice(0, 10) };
  recomendedAnime = reproduce(recomendedAnime, 10);
  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="Anime Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* Rekomendasi anime */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
};

export default Home;
