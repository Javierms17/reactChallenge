const LevelReducer = (state = 0, action) => {
    switch (action.type){
        case 'SET_LEVEL':
            return action.payload;  
        default: 
        return state; 

    }
}
export default LevelReducer;