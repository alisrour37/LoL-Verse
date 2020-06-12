const initialState = 
{
    
    videoID: false,
    newsImage: false,
            newsBody: false,
            newsTitle: false

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
    if(action.type === 'SELECTNEWS'){
        return Object.assign({}, state, {
            videoID: false,    
            newsImage: action.image,
            newsBody: action.body,
            newsTitle: action.title,
              })
        
    }
    return state;
};

export default singlevideoreducer;