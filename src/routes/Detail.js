import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});

  const getMovie = useCallback(async () => {
    const {
      data: { movie },
    } = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Movies
          id={movieInfo.id}
          mediumCoverImage={movieInfo.medium_cover_image}
          title={movieInfo.title}
          summary={movieInfo.description_full}
          genres={movieInfo.genres}
        />
      )}
    </div>
  );
}

export default Detail;
