const initialState = {
    videoID: null
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