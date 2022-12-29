import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import TypeWriterEffect from 'react-typewriter-effect';

export default function MyGrid(props) {
    const [ phraseAndColor, setPhraseAndColor] = useState({ phrase: props && props.phrase ? props.phrase : "", color: props && props.color ? props.color : "" });

    useEffect(() => {
        let newPhrase = props.phrases.shift();
        let newColor = props.colors.shift();

        if (!newPhrase || !newColor) {
            setPhraseAndColor({ phrase: phraseAndColor.phrase, color: phraseAndColor.color });
        }

        const timeOutId = setTimeout(() => {
            // Push phrase & color back into the queue.
            props.phrases.push(phraseAndColor.phrase);
            props.colors.push(phraseAndColor.color);

            // Set new phrase & color.
            setPhraseAndColor({ phrase: newPhrase, color: newColor });
        }, props.refreshRate);

        return () => clearTimeout(timeOutId);
    // eslint-disable-next-line
    }, [phraseAndColor]);

    return (
        <Slide direction="up" in={true}>
            <Grid xs sm md lg key="my-block" item sx={{ flexGrow: 1, height: '10vh' }}>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                        boxShadow: 'none',
                        color: phraseAndColor.color,
                        borderRadius: 0,
                        height: '20vh',
                        width: '100%',
                        backgroundColor: phraseAndColor.color,
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
                        startDelay={70}
                        cursorColor="white"
                        text={phraseAndColor.phrase}
                        key={"key-" + phraseAndColor.phrase}
                        typeSpeed={70}/>
                </Paper>
            </Grid>
        </Slide>
    );
}
