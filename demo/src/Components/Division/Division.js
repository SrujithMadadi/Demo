import React, { useEffect } from "react";
import {connect} from "react-redux";
import * as HomeActions from "Store/ActionCreators/HomeActions";
import "./Division.css"
import Car from "Components/Car/Car";

const Division=(props)=>{

    useEffect(()=>{
        props.getModels(props.type)
    },[props])

    return(
        <div className="modelContainer">
            {Object.keys(props.models).map((modelObj)=>{
                return(
                    <div key={modelObj}>
                        <div className="modelText">{modelObj}</div>
                        <div className="modelItems">
                            {props.models[modelObj].map((model)=>{
                                return <Car {...model}/>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

const mapStateToProps=(state)=>{
    return {
        models:state.homeReducer.models
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getModels:(type)=>dispatch(HomeActions.getModels(type))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Division)