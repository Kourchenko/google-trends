import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

import TypeWriterEffect from 'react-typewriter-effect';

const colorMap = {
    "rgb(52, 168, 82)": "var(--google-green-gradient)",
    "rgb(234, 67, 53)": "var(--google-red-gradient)",
    "rgb(66, 133, 244)": "var(--google-blue-gradient)",
    "rgb(250, 187, 5)": "var(--google-yellow-gradient)"
};

export default function MyBlock(props) {
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

    const backgroundStyle = colorMap[phraseAndColor.color] || phraseAndColor.color;

    return (
        <Grid xs sm md lg key="my-block" item sx={{ flexGrow: 1, height: '20vh' }}>
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    boxShadow: 'none',
                    color: '#fff',
                    borderRadius: 0,
                    height: '100%',
                    width: '100%',
                    background: backgroundStyle,
                    transition: 'all 1s cubic-bezier(0.06,0.74,0.24,1)',
                    '&:hover': {
                        filter: 'brightness(1.1)',
                        zIndex: 1,
                        position: 'relative',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }
                }}
            >
            <Link underline="none" href={`https://www.google.com/search?q=${phraseAndColor.phrase}`} target="_blank" rel="noopener noreferrer">
                <div style={{ pointerEvents: 'none' }}>
                    <TypeWriterEffect
                        style={{
                            verticalAlign: 'middle'
                        }}
                        textStyle={{
                            fontFamily: 'Outfit, sans-serif',
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 500
                        }}
                        startDelay={30}
                        cursorColor="rgba(255,255,255,0.5)"
                        text={phraseAndColor.phrase}
                        key={"key-" + phraseAndColor.phrase}
                        typeSpeed={115}/>
                </div>
                </Link>
            </Paper>
        </Grid>
    );
}
