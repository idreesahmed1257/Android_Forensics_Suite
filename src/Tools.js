import * as React from 'react';
import Box from '@mui/material/Box';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import MemoryIcon from '@mui/icons-material/Memory';
import ContactsIcon from '@mui/icons-material/Contacts';
import SmsIcon from '@mui/icons-material/Sms';
import SensorsIcon from '@mui/icons-material/Sensors';
import CallIcon from '@mui/icons-material/Call';
import EdgesensorLowIcon from '@mui/icons-material/EdgesensorLow';
import AndroidIcon from '@mui/icons-material/Android';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import snapchat from '../src/Images/Icons/snap.svg'
import reg1 from '../src/css/timline.module.css'

import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BuildIcon from '@mui/icons-material/Build';



import ToolItem from './ToolItem';
import { Button } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Link } from 'react-router-dom';



const Tools = () => {

    const [file, setFile] = React.useState();

    const handleFileChange = (e) => {
        if (e.target.files[0].name) {
            setFile(e.target.files[0].name);
        }
    };

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
                            <Link to='/validate' style={{ textDecoration: 'none' }} className={`${reg1.stepperItem} ${reg1.active}  ${reg1.steperline}`}>
                                <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}><TaskAltIcon /></div>
                                <div className={reg1.stepperTextActive} style={{ color: '#DA5277' }}>Validate</div>
                            </Link>
                            <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}><BuildIcon /></div>
                                <div className={reg1.stepperTextActive} style={{ color: '#DA5277' }}>Tools</div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex f-column align-center px-5'>
                        <div className=' d-flex f-column align-center gap-3  con-center pt-3' >
                            {/* <div className='d-flex gap-5'>
                                <ToolItem icon={<BatteryChargingFullIcon sx={{ color: '#DA5277' }} />} toolName='Battery' size="large" sx={{ fontSize: '40px' }} />
                                <ToolItem icon={<LaptopWindowsIcon sx={{ color: '#DA5277' }} />} toolName='Display' />
                                <ToolItem icon={<MemoryIcon sx={{ color: '#DA5277' }} />} toolName='CPU' />
                            </div> */}
                            <div className='d-flex gap-5'>
                                {/* <ToolItem icon={<ContactsIcon sx={{ color: '#DA5277' }} />} toolName='Contacts' /> */}
                                <Link to='/battery' style={{ textDecoration: 'none' }}>
                                    <ToolItem icon={<MemoryIcon sx={{ color: '#DA5277' }} />} toolName='System' />
                                </Link>
                                <ToolItem icon={<ConnectWithoutContactIcon sx={{ color: '#DA5277' }} />} toolName='Phone Comm' />
                            </div>
                            <div className='d-flex gap-5'>
                                {/* <ToolItem icon={<SensorsIcon sx={{ color: '#DA5277' }} />} toolName='Sensors' /> */}
                                {/* <ToolItem icon={<AndroidIcon sx={{ color: '#DA5277' }} />} toolName='Apps' /> */}
                                <ToolItem icon={<EdgesensorLowIcon sx={{ color: '#DA5277' }} />} toolName='Device' />
                            </div>
                            <div className='d-flex gap-5'>
                                <ToolItem icon={<WhatsAppIcon sx={{ color: '#DA5277' }} />} toolName='Whatsapp' />
                                <ToolItem icon={<img src={snapchat} alt='snapChat' width={30} className='snapchat'></img>} toolName='Snapchat' />
                            </div>
                        </div>
                        {/* <div className='pt-4'>
                            <Button variant="contained" style={{ color: 'black', backgroundColor: "#DA5277", borderColor: '#DA5277', fontWeight: 'bold' }}>Get full report</Button>
                        </div> */}
                    </div>


                </div>
            </Box>

        </>
    )
}

export default Tools
