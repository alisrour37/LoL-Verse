import React from 'react';
import { Elasticsearch, Results } from "react-elasticsearch";

export default class Notifications extends React.Component{

render(){
  return(
    <div>
    <Elasticsearch url={'http://www.omdbapi.com/?apikey=[yourkey]&'}>
    <Results
      id="result"
      items={data => data.map(item => <>{item._source.title}</>)}
    />
  </Elasticsearch>
  </div>
  )
}
}