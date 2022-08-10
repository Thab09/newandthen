import { useEffect } from "react";

function Popular() {
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
    console.log(detailData);
    console.log(detailData.results[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="popular"></div>
      Popular
    </div>
  );
}

export default Popular;
