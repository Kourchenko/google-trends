import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import TypeWriterEffect from 'react-typewriter-effect';

export default function MyGrid(props) {
    const typeSpeed = 70;

    const [phrase, setPhrase] = useState(props.phrase);
    const [color, setColor] = useState(props.color);

    useEffect(() => {
        let newPhrase = props.phrases.shift();
        let newColor = props.colors.shift();

        if (!newPhrase) {
            setPhrase(phrase);
        }

        if (!newColor) {
            setColor(color);
        }

        const timeOutId = setTimeout(() => {
           // Push color back into the queue.
           props.colors.push(color);
           // Set new phrase.
           setColor(newColor);

            // Push phrase back into the queue.
            props.phrases.push(phrase);
            // Set new phrase.
            setPhrase(newPhrase);

        }, props.refreshRate);

        return () => clearTimeout(timeOutId);
    }, [phrase, color]);

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
                        text={phrase}
                        key={"key-" + phrase}
                        typeSpeed={typeSpeed}/>
                </Paper>
            </Grid>
        </Slide>
    );
}
