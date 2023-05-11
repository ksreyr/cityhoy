import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import {useRouter} from "next/router";

const actions = [
    { icon: <FileCopyIcon />, name: 'Create', path: '/post/create' },
];

export default function BasicSpeedDial() {
    const router = useRouter()
    return (
        <Box sx={{  transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 16, right: 16 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => router.push(action.path)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}