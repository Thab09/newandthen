import { useEffect, useState } from "react";
import "../home.css";
function Home() {
  const [topStories, setTopStories] = useState([]);
  let id = 0;
  const getData = async () => {
    const data = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
      {
        headers: {
          "Access-Control-Request-Method": "GET",
          //   "Access-Control-Request-Headers": "Content-Type, x-requested-with",
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
  console.log(topStories);
  return (
    <div className="home">
      {topStories.map((story) => {
        id++;
        return (
          <div className="card" key={id}>
            <a href={story.url} target="_blank" rel="noreferrer">
              <img src={story.multimedia[0].url} alt="" />
              <h4>{story.title}</h4>
              <h5>{story.byline}</h5>
            </a>
          </div>
        );
      })}
      <h4>home</h4>
    </div>
  );
}

export default Home;
