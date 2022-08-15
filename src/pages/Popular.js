import { useEffect, useState } from "react";

import { NewsContainer, Card } from "../styles/News.styled";

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

  return (
    <NewsContainer>
      {popular.map((story) => {
        return (
          <Card key={story.id}>
            <a href={story.url} target="_blank" rel="noreferrer">
              <img
                src={
                  story.media[0] === undefined
                    ? ""
                    : story.media[0]["media-metadata"][2].url
                }
                alt=""
              />
              <h4>{story.title}</h4>
              <h5>{story.byline}</h5>
              <p>{story.abstract}</p>
            </a>
          </Card>
        );
      })}
    </NewsContainer>
  );
}

export default Popular;
