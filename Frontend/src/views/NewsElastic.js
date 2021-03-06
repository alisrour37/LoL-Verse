import React from "react";
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
} from "@appbaseio/reactivesearch";
import "./App.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";

export default function NewsElastic() {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <ReactiveBase
        app="lolversefinal12"
        credentials="DyLJEVTpQ:220d3bbd-1ded-4085-bff1-c3c5a500c9db"
        theme={{
          typography: {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
            fontSize: "16px",
          },
          colors: {
            textColor: "#fff",
            backgroundColor: "#212121",
            primaryTextColor: "#fff",
            primaryColor: "#2196F3",
            titleColor: "#fff",
            alertColor: "#d9534f",
            borderColor: "#666",
          },
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", fontFamily: "Ubuntu", marginBottom: "20px" }}
        >
          Read The Latest League of Legends News!
        </Typography>

        <div style={{ width: "30%", marginBottom: "20px" }}>
          <DataSearch
            innerClass={{
              title: "search-title",
              input: "search-input",
            }}
            className="search-field"
            componentId="mainSearch"
            dataField={["newsTitle"]}
            categoryField="title"
            fuzziness={200}
            debounce={20}
            queryFormat="and"
            placeholder="Type to search for a highlight"
            autosuggest={false}
            filterLabel="search"
            showIcon={false}
          />
        </div>

        <div>
          <ReactiveList
            componentId="results"
            dataField="title"
            react={{
              and: [
                "mainSearch",
                "RangeSlider",
                "language-list",
                "date-filter",
                "genres-list",
                "revenue-list",
              ],
            }}
            pagination={true}
            className="Result_card"
            paginationAt="bottom"
            pages={10}
            size={6}
            Loader="Loading..."
            noResults="No results were found..."
            innerClass={{
              title: "result-title",
              listItem: "result-item",
              list: "list-container",
              sortOptions: "sort-options",
              resultStats: "result-stats",
              resultsInfo: "result-list-info",
              poweredBy: "hidden",
            }}
          >
            {({ data }) => (
              <ReactiveList.ResultCardsWrapper>
                {data.map((item) => (
                  <div
                    style={{ marginRight: "15px" }}
                    className="main-description"
                  >
                    <Card style={{ height: "440px", width: "477px" }}>
                      <CardHeader
                        width="100%"
                        style={{ pointerEvents: "none" }}
                      >
                        <CardImg
                          style={{ height: "229px", width: "447px" }}
                          src={item.newsImage}
                        ></CardImg>
                      </CardHeader>

                      <CardBody>
                        <CardTitle
                          style={{
                            overflow: "hidden",
                            height: "48px",
                            color: "white",
                            fontFamily: "Ubuntu",
                            fontWeight: "bold",
                          }}
                        >
                          {item.newsTitle}
                        </CardTitle>

                        <CardSubtitle
                          style={{
                            marginTop: "15px",
                            color: "white",
                            fontFamily: "Ubuntu",
                          }}
                        >
                          Published by: DotEsports
                          <div style={{ fontSize: "14px" }}>
                            {item.newsTime}
                          </div>
                        </CardSubtitle>
                        <Button
                          style={{ marginBottom: "25px" }}
                          onClick={() =>
                            dispatch({
                              type: "SELECTNEWS",
                              title: item.newsTitle,
                              image: item.newsImage,
                              body: item.newsBody,
                              time: item.newsTime,
                              id: item.newsID
                            })
                          }
                        >
                          Read More
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </ReactiveList.ResultCardsWrapper>
            )}
          </ReactiveList>
        </div>
      </ReactiveBase>
    </div>
  );
}
