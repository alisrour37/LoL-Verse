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

export default function Elastic() {
  const dispatch= useDispatch();
  
  

      return (
    <div className="main-container">
      <ReactiveBase
        app="lolversefinal1"
        credentials="zMS8dcMI1:238e3186-9db5-475d-94b4-ea8a17aedf0c"
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
        <div style={{ width: "30%", marginBottom: "20px" }}>
          <DataSearch
             innerClass={{
                title: 'search-title',
                input: 'search-input'
            }}
            className="search-field"

            componentId="mainSearch"
            dataField={["snippet.title"]}
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
            pages={5}
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
                    <Card style={{ height: "491px", width: "477px" }}>
                      <CardHeader
                        width="100%"
                        style={{ pointerEvents: "none" }}
                      >
                        <CardImg
                          style={{ height: "100%" }}
                          src={item.snippet.thumbnails.high.url}
                        ></CardImg>
                      </CardHeader>

                      <CardBody>
                        <CardTitle style={{ overflow: "hidden" }}>
                          {item.snippet.title}
                        </CardTitle>
                        <CardSubtitle>Published By: Onivia</CardSubtitle>
                        <Button onClick={() => dispatch({ type: 'SELECT', data: item.snippet.resourceId.videoId })}>Watch Now</Button>
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
