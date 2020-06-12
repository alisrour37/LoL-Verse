import React from "react";
import NewsElastic from "./NewsElastic.js";




import { useSelector } from "react-redux";
import SingleNews from "./SingleNews.js";

export default function NewsMain(){

    const newsselection = useSelector((state) => state.newsImage);

    //const changeInputValue = (newValue) => {dispatch({ type: 'UPDATE_INPUT', data: newValue,});};
    return (
      <>
        <div className="content">
      
          {newsselection ? <SingleNews /> : <NewsElastic />}
        </div>
      </>
    );
  }
