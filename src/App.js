import { useEffect } from "react";
import XMLParser from "react-xml-parser";

function App() {
  const getData = async () => {
    const data = await fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3MLi7RBiPNGQ9lrMAHNCnKzdp3aYfXGq",
      {
        headers: {
          "Access-Control-Request-Method": "GET",
          "Access-Control-Request-Headers": "Content-Type, x-requested-with",
        },
      }
    );
    const detailData = await data.json();
    console.log(detailData);
  };
  const getData1 = async (category) => {
    const data1 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3MLi7RBiPNGQ9lrMAHNCnKzdp3aYfXGq",
      {
        headers: {
          "Access-Control-Request-Method": "GET",
          "Access-Control-Request-Headers": "Content-Type, x-requested-with",
        },
      }
    );
    const detailData1 = await data1.json();
    console.log(detailData1);
  };
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
  const getData3 = async () => {
    const data3 = await fetch(
      "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=3MLi7RBiPNGQ9lrMAHNCnKzdp3aYfXGq"
    );
    const detailData3 = await data3.json();
    console.log(detailData3);
  };
  useEffect(() => {
    getData();
    getData1();
    getData2();
    getData3();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
      </header>
    </div>
  );
}

export default App;
