import { useEffect } from "react";
import XMLParser from "react-xml-parser";

function Categories() {
  const getData2 = async () => {
    let data2 = await fetch(
      "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
    ).then((res) =>
      res.text().then((data) => {
        return new XMLParser().parseFromString(data);
      })
    );
    // const finalData2 = new XMLParser().parseFromString(data2);
    console.log(data2);
    // await data2.text().then((data) => {
    //   let xml = new XMLParser().parseFromString(data);
    //   console.log(xml);
    // });
    // const detailData2 = await data2.json();
    // console.log(detailData2);
  };
  useEffect(() => {
    getData2();
  }, []);
  return (
    <div>
      <div className="categories"></div>
      Categories
    </div>
  );
}

export default Categories;
