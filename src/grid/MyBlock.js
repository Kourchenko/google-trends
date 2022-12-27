import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

import TypeWriterEffect from 'react-typewriter-effect';
import defaultColors from './defaultColors';

export default function MyGrid(props) {
    const typeSpeed = 70;
    const colors = [...defaultColors];

    const [color, setColor] = useState(colors.splice(Math.random() * colors.length, 1).pop());
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        let data = props.data.shift();

        if (data === undefined) {
            setValue(value);
        }
        const _color = colors.splice(Math.random() * colors.length, 1).pop();
        const timeOutId = setTimeout(() => {
            props.data.push(value);
            setValue(data);
            colors.push(color);
            setColor(_color);
        }, props.refreshRate);

        return () => clearTimeout(timeOutId);
    }, [value]);

    return (
        <Slide direction="up" in={true}>
            <Grid xs sm md lg key={"my-block-" + props.key} item sx={{ flexGrow: 1, height: '10vh' }}>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                        boxShadow: 'none',
                        color: color,
                        borderRadius: 0,
                        height: '20vh',
                        width: '100%',
                        backgroundColor: color,
                        transition: '1s',
                        animation: 'slide-in 0.5s normal',
                    }}
                >

                    <TypeWriterEffect
                        style={{
                            verticalAlign: 'middle'
                        }}
                        textStyle={{
                            fontFamily: 'Roboto',
                            color: '#fff',
                            fontWeight: 900,
                            fontSize: '2vw',
                            textAlign: 'center'
                        }}
                        startDelay={50}
                        cursorColor="white"
                        text={value}
                        key={"key-" + value}
                        typeSpeed={typeSpeed}/>
                </Paper>
            </Grid>
        </Slide>
    );
}
