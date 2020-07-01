//Main News Page, used the name icons for material ui purposes
import React from "react";

import { createStore } from 'redux';
import {Provider} from 'react-redux';

import singlevideoreducer from '../reducer/singlevideoreducer';
import NewsMain from "./NewsMain";

export default function Icons() {
  
  const store = createStore(singlevideoreducer);


  return (
    <>
    
    <Provider store={store}><NewsMain /></Provider>

    </>
  );
}



