import * as React from 'react';
import Box from '@mui/material/Box';


import logo from '../src/Images/logos/rmbg.png'
import Button from '@mui/material/Button';

import reg1 from '../src/css/timline.module.css'
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BuildIcon from '@mui/icons-material/Build';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';




const Validate = () => {


    const [isCorrupted, setisCorrupted] = React.useState(false);



    return (
        <>

            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                <div className='bg-image'>


                    <div className={` ${reg1.top} pt-4`}>
                        {/* <!-- progress bar --> */}
                        <div className={reg1.stepperWrapper}>
                            <Link to='/' style={{ textDecoration: 'none' }} className={`${reg1.stepperItem}  ${reg1.active} ${reg1.steperline}`}>
                                <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}><SettingsInputAntennaIcon /></div>
                                <div className={reg1.stepperTextActive} style={{ color: '#DA5277' }}>Connect & Extract</div>
                            </Link>
                            <Link to='/selectimage' style={{ textDecoration: 'none' }} className={`${reg1.stepperItem} ${reg1.active} ${reg1.steperline}`}>
                                <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}><TouchAppIcon /></div>
                                <div style={{ color: '#DA5277' }} className={reg1.stepperTextActive}>Select Image</div>
                            </Link>
                            <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}><TaskAltIcon /></div>
                                <div className={reg1.stepperTextActive} style={{ color: '#DA5277' }}>Validate</div>
                            </div>
                            <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                <div className={reg1.stepCounter}><BuildIcon /></div>
                                <div className={reg1.stepperText} style={{ color: '#DA5277' }}>Tools</div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex f-column align-center gap-3  con-center pt-5' >
                        <img src={logo} alt="Hello" width={300} ></img>

                        <h1 style={{ color: '#DA5277' }}>{isCorrupted ? "The File is Currupted" : "The File is OK"}</h1>
                        <div className={`d-flex con-end align-left ${isCorrupted ? "disabled" : null}`}>
                            <Link to='/tools' style={{ textDecoration: 'none' }}>
                                <Button variant="contained" style={{ color: 'black', backgroundColor: '#DA5277', borderColor: 'black', fontWeight: 'bold', }}>Next</Button>
                            </Link>
                        </div>
                    </div>


                </div>
            </Box>

        </>
    )
}

export default Validate
