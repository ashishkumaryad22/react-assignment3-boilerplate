import React, { useState, useEffect } from "react";
import Card from "./Card";
import Spinner from "./utill/Spinner";

const Dashboard = (props) => {
  // console.log(props.filterData);
  //   console.log(props.searchText);
  const [article, setArticale] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [page, setPage] = useState(props.PageNo ? props.PageNo : 1);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const search = props.filterData.searchText;
  const category = props.filterData.category;
  const api = props.filterData.api;
  const country = props.filterData.country;
  const pageSize = props.filterData.pageSize;
  // setPage(props.filterData.PageNo);

  const updateNews = async (search, category, api, country, pageSize) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&q=${search}&country=${country}&category=${category}&apikey=${api}&pageSize=${pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setLoading(false);
    setArticale(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };
  //   console.log(search);
  useEffect(() => {
    setPage(
      Math.ceil(totalResults / props.filterData.pageSize) <=
        props.filterData.pageNo
        ? page
        : props.filterData.pageNo
    );
    updateNews(search, category, api, country, pageSize);

    return () => {};
  }, [search, category, country, pageSize, props.filterData.pageNo]);

  const nextClickHandler = async () => {
    setPage(page + 1);
    // console.log(page);
    updateNews(search, category, api, country, pageSize);
  };
  const prevClickHandler = async () => {
    setPage(page - 1 <= 1 ? 1 : page - 1);
    // console.log(page);
    updateNews(search, category, api, country, pageSize);
  };
  return (
    <React.Fragment>
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "40px 0px" }}>
          The News App- Top Headlines...
        </h2>

        {/* <h3>Tne News App- Top Headlines...</h3> */}
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            article.map((e) => {
              return (
                <div className="col-md-4" key={e.url ? e.url : "Not Available"}>
                  <Card
                    title={e.title ? e.title : ""}
                    description={e.description ? e.description : ""}
                    imageUrl={e.urlToImage ? e.urlToImage : "NA"}
                    newsUrl={e.url ? e.url : "NA"}
                    author={e.author ? e.author : "NA"}
                    date={e.publishedAt ? e.publishedAt : "NA"}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-success"
            onClick={prevClickHandler}
          >
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            type="button"
            className="btn btn-success"
            onClick={nextClickHandler}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
