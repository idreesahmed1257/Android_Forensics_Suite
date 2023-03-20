import * as React from 'react';
import Box from '@mui/material/Box';


import logo from '../src/Images/logos/rmbg.png'
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import reg1 from '../src/css/timline.module.css'
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BuildIcon from '@mui/icons-material/Build';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';




const HomePage = () => {
    const [file, setFile] = React.useState();

    const handleFileChange = (e) => {
        if(e.target.files.length < 1){
            return;
          }
        else if (e.target.files.length > 1) {
          const file = e.target.files[0];
          console.log(file.type, 'file type');
          switch(file.type){

            case 'image/png':
              //('image type is png');
              setFile(e.target.files[0].name);
              break;
            case 'image/jpg':
              //('image/jpg')
              setFile(e.target.files[0].name);
              break;
            case 'image/jpeg':
              //('image is jpeg')
              setFile(e.target.files[0].name);
              break;
            default:
              // image extension is not valid
              alert('image extension is not valid');
          }
        }
        // else if (e.target.files[0].name) {
           
        // }
    };

    const [already, setalready] = React.useState(false);


    return (
        <>

            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                <div className='bg-image'>


                    <div className={` ${reg1.top} pt-4`}>
                        {/* <!-- progress bar --> */}
                        <div className={reg1.stepperWrapper}>
                            <div className={`${reg1.stepperItem}  ${reg1.active} `}>
                                <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}><SettingsInputAntennaIcon /></div>
                                <div className={reg1.stepperTextActive} style={{ color: '#DA5277' }}>Connect & Extract</div>
                            </div>
                            <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                <div className={`${reg1.stepCounter} `}><TouchAppIcon /></div>
                                <div style={{ color: '#DA5277' }} className={reg1.stepperText}>Select Image</div>
                            </div>
                            <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                <div className={reg1.stepCounter}><TaskAltIcon /></div>
                                <div className={reg1.stepperText} style={{ color: '#DA5277' }}>Validate</div>
                            </div>
                            <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                <div className={reg1.stepCounter}><BuildIcon /></div>
                                <div className={reg1.stepperText} style={{ color: '#DA5277' }}>Tools</div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex f-column align-center gap-3  con-center pt-5' >
                        <img src={logo} alt="Hello" width={300} ></img>
                        <div className={`d-flex f-column align-center gap-2 ${already ? 'disabled' : null} `}>
                            <h1 style={{ color: '#DA5277' }}>No Device is Connected</h1>
                            <div className='fileUploader'>
                                <label for="inputTag" style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                                    Select Output Path of Image
                                    <input id="inputTag" style={{ display: 'none' }} onChange={handleFileChange} type="file" />
                                </label>
                                <span >{file}</span>
                            </div>
                            <Button variant="outlined" style={{ color: '#DA5277', borderColor: '#DA5277', fontWeight: 'bold' }}>Connect & Extract</Button>
                        </div>
                        <FormControlLabel
                            value="end"
                            sx={{ color: '#DA5277' }}
                            control={<Checkbox sx={{ color: '#DA5277' }} />}
                            label="Already have Image?"
                            labelPlacement="end"
                            onChange={() => setalready(!already)}

                        />
                        <div className='d-flex con-end align-left'>
                            <Link to='/selectimage' style={{ textDecoration: 'none' }}>
                                <Button variant="contained" style={{ color: 'black', backgroundColor: '#DA5277', borderColor: 'black', fontWeight: 'bold' }}>Next</Button>
                            </Link>
                        </div>
                    </div>


                </div>
            </Box>

        </>
    )
}

export default HomePage
