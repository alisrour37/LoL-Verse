import React from "react";
import {connect} from 'react-redux';
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



