import React from "react";
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ToggleButton,
  SelectedFilters
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
import { Grid, Typography } from "@material-ui/core";

export default function Elastic() {
  const dispatch= useDispatch();
  
  

      return (
    <div className="main-container">
      <ReactiveBase
        app="lolversefinal13"
        credentials="nPOozXKyn:63194dcd-bf49-4cec-8500-e2564cb4f332"
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
        <Typography variant="h4" style={{color:'white',fontFamily:'Ubuntu', marginBottom:'20px'}}>Watch the latest League of Legends highlights!</Typography>
        <Grid container style={{ width: "100%", marginBottom: "20px" }}>
          <Grid item xs={4}>
          <DataSearch
             innerClass={{
                title: 'search-title',
                input: 'search-input'
            }}
            className="search-field"

            componentId="mainSearch"
            dataField={["snippet.title"]}
            categoryField="title"
            style={{marginTop:'2px',width:'70%'}}
            queryFormat="and"
            placeholder="Type to search for a highlight"
            autosuggest={false}
            filterLabel="search"
            showIcon={false}
          />
          </Grid>
       <Grid item xs={1} style={{color:'white',fontWeight:'bold',marginTop:'10px', marginRight:'-10px'}}>
         <Typography style={{color:'white',fontWeight:'bold', marginRight:'-10px'}}>Filter by Team</Typography>
         </Grid>
         <Grid item xs={4}>
         <ToggleButton
    componentId="Selected Team"
    dataField="snippet.title"
           
    data={[
        { label: 'Fnatic', value: 'FNC' },
        { label: 'G2', value: 'G2' },
        { label: 'SK', value: 'SK' },
    ]}
    multiSelect={true}
    showFilter={false}
     
     style={{color:'white'}}
/>

</Grid>
</Grid>


        <div>
          <ReactiveList
            componentId="results"
            dataField="snippet.title"
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
