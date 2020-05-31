const initialState = 
{
    counter: 20
}

const singlevideoreducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return{
            videoID: state.videoID
        }
    }
    return state;
};

export default singlevideoreducer;