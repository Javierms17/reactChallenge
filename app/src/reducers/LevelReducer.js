const LevelReducer = (state = 1, action) => {
    switch (action.type){
        case 'SET_LEVEL':
            return action.payload;
        
        default: 
        return state; 

    }
}
export default LevelReducer;