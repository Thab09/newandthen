import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";

function Categories() {
  const [category, setCategory] = useState([]);
  let id = 0;
  const getData = async () => {
    let data = await fetch(
      "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml"
    ).then((res) =>
      res.text().then((data) => {
        return new XMLParser().parseFromString(data);
      })
    );
    setCategory(
      data.children[0].children.filter((story) => story.name === "item")
    );
    // const finalData2 = new XMLParser().parseFromString(data2);
    // await data2.text().then((data) => {
    //   let xml = new XMLParser().parseFromString(data);
    //   console.log(xml);
    // });
    // const detailData2 = await data2.json();
    // console.log(detailData2);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(category);
  return (
    <div className="category">
      {category.map((story) => {
        id++;
        return (
          <div className="card" key={id}>
            <a href={story.children[1].value} target="_blank" rel="noreferrer">
              <h5>{story.children[0].value}</h5>
              <h5>{story.children[5].value}</h5>
              <p>{story.children[4].value}</p>
              <p>{story.children[6].value}</p>
            </a>
          </div>
        );
      })}
      <h4>home</h4>
    </div>
  );
}

export default Categories;
