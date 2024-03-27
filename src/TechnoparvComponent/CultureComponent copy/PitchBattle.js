import { Grid, Paper } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { TechnoparvCss } from "../TechnoparvCss";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Video from "./videos/ArmWrestling.mp4"




export default function PitchBattle() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    var classes = TechnoparvCss()

    return (

        
        <div id="ArmWrestling">
             <div className='main'>
                <div className='overlay'></div>
                <video src={ArmWrestlingVideo} autoPlay loop muted />
                <div className='content'>
                    {/* <h1 className="v-heading3">ilay</h1> */}
                    <h1 className="v-heading">Welcome In Pitch Battle</h1>
                    {/* <h1 className="v-heading2">I.P.S Group Of Colleges</h1> */}

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
                <Paper elevation={4} style={{ padding: !matches?"4%":"10%", width:!matches?"90%":"100%" }}>
                    <Grid container spacing={2} xs={12} style={{display:"flex"}}>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <Grid item xs={!matches?6:12}>
                                <img alt={"image"} src="https://sergiocaredda.eu/wp-content/uploads/2020/01/workshop-facilitation.jpg" width="100%"></img>
                            </Grid>
                            <Grid xs={!matches?6:12}>
                                <h2 style={{fontFamily:"sans-serif",margin:"5%",color:"darkgreen"}}>Pitch Battle</h2>
                                <div className="aboutp">
                                    Truss will be kept in between two chair or stools,keeping in mind that the gap between the stools will be 20cm or more than that.Then load will be applid upside down with the help of the iron treads which will be tied at the four side of the truss by making along loop and another side there will be a flat wooden board where the load will be placed. Truss which can bear the more loads without failing will be declared as the winner of the competition.
                                </div>
                            </Grid>
                        </div>

                        <Grid item xs={!matches?6:12}>
                            <Paper elevation={4} style={{ display: "flex", width: "100%", height: "auto", borderRadius: "3%" }} ><div className={classes.eventCard}>Detail</div>

                                <div>
                                    <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: 'auto', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts" >

                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Venue:" secondary=" CAD/CAM lab & CNC" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Timimg" secondary="10AM to 4PM" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Date" secondary="28th-29th September 2018" />
                                        </ListItem>
                                    </List>
                                </div></Paper>
                        </Grid>
                        <Grid item xs={!matches?6:12}>
                            <Paper elevation={4} style={{ display: "flex", width: "100%", height: "auto", borderRadius: "3%" }} ><span className={classes.eventCard} style={{ background: "#f368e0" }}>Sports</span>
                                <div>
                                    <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts" >

                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Deepak Tomar" secondary="+91-9755374889" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Apurv Sharma" secondary="+91-9755374889" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="vikash Tomar" secondary="+91-9755374889" />
                                        </ListItem>
                                    </List>
                                </div></Paper>
                        </Grid>
                        <Grid item xs={!matches?6:12}>
                            <Paper elevation={4} style={{ display: "flex", width: "100%", height: "auto", borderRadius: "3%" }} ><span className={classes.eventCard} style={{ background: "#ee5253" }}>Cordinater</span>
                                <div>
                                    <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts" >

                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Work" secondary="Jan 7, 2014" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                        </ListItem>
                                    </List>
                                </div>
                            </Paper>
                        </Grid>


                        <Grid item xs={!matches?6:12}>
                            <Paper elevation={4} style={{ display: "flex", width: "100%", height: "auto", borderRadius: "3%" }}><span className={classes.eventCard} style={{ background: "#e056fd" }}>Star Night</span>
                                <div>
                                    <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts" >

                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Work" secondary="Jan 7, 2014" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                        </ListItem>
                                    </List>
                                </div></Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={4} style={{ display: "flex", width: "100%", height: "auto", borderRadius: "3%" }}><span className={classes.eventCard} style={{ background: "#e056fd" }}>Rules & Regulation</span>
                                <div>
                                    <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: '100%', bgcolor: 'background.paper' }} aria-label="contacts" >

                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText secondary="Participants must bring their College/School ID" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText secondary="All Participants should be present in all the sessions. Failing this, no certificate shall be awarded to the participant" />
                                        </ListItem>

                                    </List>
                                </div></Paper>
                        </Grid>
                    </Grid>
                </Paper>

            </div>
        </div>
    )
}