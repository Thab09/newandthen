import { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
      {
        headers: {
          "Access-Control-Request-Method": "GET",
          "Access-Control-Request-Headers": "Content-Type, x-requested-with",
        },
      }
    );
    const detailData = await data.json();
    setPopular(detailData.results);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(popular);
  return (
    <div className="popular">
      {popular.map((story) => {
        return (
          <div className="card" key={story.id}>
            <a href={story.url} target="_blank" rel="noreferrer">
              <img src={story.media[0]["media-metadata"][0].url} alt="" />
              <h4>{story.title}</h4>
              <h5>{story.byline}</h5>
              <p>{story.abstract}</p>
              <p>{story.published_date}</p>
            </a>
          </div>
        );
      })}
      <h4>home</h4>
    </div>
  );
}

export default Popular;
