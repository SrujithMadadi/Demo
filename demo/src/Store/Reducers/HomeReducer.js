import * as Actions from "Store/Actions/Actions";

const initialState={
    modelCount:{
        allModels:0,
        awd:0,
        electric:0
    },
    models:{}
}

const HomeReducer=(state=initialState,action)=>{
    switch(action.type){
        case Actions.GETMODELCOUNT:
            return {...state,modelCount:action.count}
        case Actions.GETMODELS:
            return {...state,models:action.models}
        default:
            return {...state}
    }
}

export default HomeReducer