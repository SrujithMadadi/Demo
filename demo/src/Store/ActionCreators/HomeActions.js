import Axios from "AxiosConfig/Axios";
import * as Actions from "Store/Actions/Actions";

export const getModelCount=()=>{
    return dispatch=>{
        Axios.get("/getModalCount").then(response=>{
            dispatch({type:Actions.GETMODELCOUNT,count:response.data})
        })
    }
}

export const getModels=(type)=>{
    return dispatch=>{
        Axios.post("/getModels",{type}).then((response)=>{
            dispatch({type:Actions.GETMODELS,models:response.data})
        })
    }
}
