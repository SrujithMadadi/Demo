import React, { useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {connect} from "react-redux";
import * as HomeActions from "Store/ActionCreators/HomeActions";
import Division from "Components/Division/Division";
import "./Models.css";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}
const Models=(props)=>{

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        props.getModelCount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div>
            <AppBar position="static" className="appBarContainer">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tabContainer">
                <Tab label={"All Models " +props.modelCountObj.allModels } {...a11yProps(0)} />
                <Tab label={"AWD "+props.modelCountObj.awd} {...a11yProps(1)} />
                <Tab label={"Electric "+props.modelCountObj.electric} {...a11yProps(2)} />
            </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className="tabpanel">
                <Division type="All Models"/>
            </TabPanel>
            <TabPanel value={value} index={1} className="tabpanel">
                <Division type="AWD"/>
            </TabPanel>
            <TabPanel value={value} index={2} className="tabpanel">
                <Division type="Electric"/>
            </TabPanel>
      </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        modelCountObj:state.homeReducer.modelCount
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getModelCount:()=>dispatch(HomeActions.getModelCount())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Models);