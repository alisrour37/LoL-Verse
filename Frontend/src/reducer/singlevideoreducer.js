const initialState = 
{
    
    videoID: false
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
    return state;
};

export default singlevideoreducer;