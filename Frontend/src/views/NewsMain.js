import React from "react";
import NewsElastic from "./NewsElastic.js";
import singlevideoreducer from '../reducer/singlevideoreducer';
import { useSelector} from "react-redux";
import SingleNews from "./SingleNews.js";
import { createStore } from 'redux';
export default function NewsMain(){

    const newsselection = useSelector((state) => state.newsImage);
    



    return (
      <>
        <div className="content">
      
          {newsselection ? <SingleNews /> : <NewsElastic />}
        </div>
      </>
    );
  }
