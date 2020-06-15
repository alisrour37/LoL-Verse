const initialState = 
{
    
    videoID: false,
    newsImage: false,
            newsBody: false,
            newsTitle: false,
            imgsrc: false,
            newsTime: false,
            newsID: false

}

const singlevideoreducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SELECT':
            return Object.assign({}, state, {
                videoID: action.data
              })
          case 'DESELECT':
            return{
                videoID: false
            }
            case 'DESELECTNEWS':
                return{
                    newsID: false
                }
            case 'SELECTNEWS':
                return Object.assign({}, state, {
                    videoID: false,    
                    newsImage: action.image,
                   newsBody: action.body,
                   newsTime: action.time,
                    newsTitle: action.title,
                    newsID: action.id
                      })
            case 'IMGSRC':
                return{
                    imgsrc: action.data
                }
        default:
          return state
    
};
}
export default singlevideoreducer;

