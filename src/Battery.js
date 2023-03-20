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


import ToolItem from './ToolItem';
import { Button } from '@mui/material';



const Battery = () => {
    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                <div className='bg-image'>
                    {/* <DrawerHeader /> */}

                    <div className='d-flex f-column con-center pt-4 align-center gap-3'>
                        <h1 style={{ color: '#DA5277' }}>System</h1>
                        <div className='outputBox'>
                        </div>
                        <div>
                            <Button variant="outlined" style={{ color: '#DA5277', borderColor: '#DA5277', fontWeight: 'bold' }}>Save as pdf</Button>

                        </div>
                    </div>



                </div>
            </Box>
        </>
    )
}

export default Battery
