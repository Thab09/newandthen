import { useEffect, useState } from "react";
import { HomeContainer, Card } from "../styles/Home.styled";

function Home() {
  const [topStories, setTopStories] = useState([]);
  let id = 0;

  const getData = async () => {
    const data = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
      {
        headers: {
          "Access-Control-Request-Method": "GET",
          Accept: "application/json",
        },
      }
    );
    const stories = await data.json();
    setTopStories(stories.results);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <HomeContainer>
      {topStories.map((story) => {
        id++;
        return (
          <Card key={id}>
            <a href={story.url} target="_blank" rel="noreferrer">
              <img
                src={story.multimedia === null ? "" : story.multimedia[0].url}
                alt=""
              />
              <h4>{story.title}</h4>
              <h5>{story.byline}</h5>
              <p>{story.abstract}</p>

              {/* <p>{story.published_date}</p> */}
            </a>
          </Card>
        );
      })}
      <h4>home</h4>
    </HomeContainer>
  );
}

export default Home;
