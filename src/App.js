import React, { useEffect, useState } from "react";

import { ArticlesPageRequest } from "./proto/articlespb/articles_pb";
import { ArticlesPageServiceClient } from "./proto/articlespb/articles_grpc_web_pb";

import "./App.css";

var client = new ArticlesPageServiceClient("http://localhost:10000");

function App() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    var request = new ArticlesPageRequest();
    var metadata = { "custom-header-1": "value1" };
    request.setQueryString("Quantum Mechanics");
    request.setPage(1);

    client.getArticles(request, metadata, function (err, response) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        setArticles(response.getResultsList());
      }
    });
  };

  return (
    <div className="App">
      <button onClick={getArticles}>Click to load articles</button>
      {articles?.map((article) => JSON.stringify(article, undefined, 2))}
    </div>
  );
}

export default App;
