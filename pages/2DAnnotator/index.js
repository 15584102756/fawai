import React from 'react'
import Header from '../header'
import MainAnnotator from '../../component/Layout/mid'
import Categories from '../../component/Layout/PageLeft'
import Position from '../../component/Layout/PageRight'
import DataSet from "../../styles/DataSet.module.css";
import { Provider } from 'react-redux'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import SaveIcon from '@material-ui/icons/Save';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default function Annotator() {
    return (
        <Provider store={store} >
            {/* <Header /> */}
            <Grid container wrap="nowrap" direction="column" style={{ position: "absolute",top:"0px",bottom:"0px"}}>
                <div className={DataSet.sheet}>
                    <div style={{display: "flex",alignItems: "center",height:"100%"}}>
                        <div style={{flexGrow: "1"}}></div>
                        <div className={DataSet.numb_list}>1 / 5589</div>
                        <div>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={DataSet.sub}
                                startIcon={<SaveIcon />}
                            >
                                保存并退出
                            </Button>
                        </div>
                        <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={DataSet.pagenet}
                            startIcon={<ArrowBackIosIcon />}
                        >
                            上一页
                        </Button>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={DataSet.pagenet}
                            endIcon={<ArrowForwardIosIcon />}
                        >
                            下一页
                        </Button>
                        
                    </div>
                </div>
                <div style={{height:"100%",display:"flex"}}>            
                    <MainAnnotator />
                    <Categories />
                    {/* <Position /> */}
                </div>

                
            </Grid>
        </Provider >
    )
}