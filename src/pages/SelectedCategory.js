import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import { NewsContainer, Card } from "../styles/News.styled";
import { useParams } from "react-router-dom";

function SelectedCategory() {
  const [news, setNews] = useState([]);
  let params = useParams();
  let id = 0;

  const getData = async (category) => {
    let data = await fetch(
      `https://rss.nytimes.com/services/xml/rss/nyt/${category}.xml`
    ).then((res) =>
      res.text().then((data) => {
        return new XMLParser().parseFromString(data);
      })
    );
    setNews(data.children[0].children.filter((story) => story.name === "item"));
  };
  useEffect(() => {
    getData(params.category);
  }, [params.category]);
  return (
    <NewsContainer>
      {news.map((story) => {
        id++;
        return (
          <Card key={id} catCard>
            <a href={story.children[1].value} target="_blank" rel="noreferrer">
              <h4>{story.children[0].value}</h4>
              <h5>{story.children[5].value}</h5>
              <p>{story.children[4].value}</p>
            </a>
          </Card>
        );
      })}
    </NewsContainer>
  );
}

export default SelectedCategory;
