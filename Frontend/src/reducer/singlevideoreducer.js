const initialState = 
{
    
    videoID: false,
    newsID: false
}

const singlevideoreducer = (state = initialState, action) => {
    if(action.type === 'SELECT'){
        return Object.assign({}, state, {
                videoID: action.data
              })
        
    }
    if(action.type === 'DESELECT'){
        return{
            videoID: false
        }
    }
    if(action.type === 'DESELECTNEWS'){
        return{
            newsID: false
        }
    }
    return state;
};

export default singlevideoreducer;