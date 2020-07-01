//Main Videos Page, used the name Dashboard for material ui purposes
import React from "react";

import { createStore } from 'redux';
import {Provider} from 'react-redux';

import singlevideoreducer from '../reducer/singlevideoreducer';
import VideoMain from "./VideoMain";

function Dashboard() {
  
  const store = createStore(singlevideoreducer);


  return (
    <>
    
    <Provider store={store}><VideoMain /></Provider>

    </>
  );
}


export default Dashboard;



