import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { parseSpreadsheetData, validatePhrasesAndColors } from './axios/util';
import MyBlock from './MyBlock';
import getGoogleSpreadsheet from './axios';

export default function MyGrid() {

    const [ phrasesAndColors, setPhrasesAndColors] = useState({ phrases: [], colors: [], isLoading: true });

    useEffect(() => {
        getGoogleSpreadsheet()
          .then((result) => {
            let [phrasesData, colorsData] = parseSpreadsheetData(result);
            setPhrasesAndColors({ phrases: phrasesData, colors: colorsData, isLoading: false });
          })
          .catch(() => {
            console.warn("Could not connect to your Google Spreadsheet, refer to Google Sheets API: https://developers.google.com/sheets/api/guides/concepts, using default data.");
            let [phrasesData, colorsData] = validatePhrasesAndColors([], []);

            setPhrasesAndColors({ phrases: phrasesData, colors: colorsData, isLoading: false });
          });
      }, []);

    if (phrasesAndColors.isLoading) {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid sx={{ height: '100vh', width: '100vw' }} container spacing={0}>
            {Array.from(Array(5)).map((_, i) => (
                <Grid item xs={12} md={12} lg={12} key={`row-${i}-${Math.random()}`}>
                    <Grid container spacing={0} key={`row-${i}-container-${Math.random()}`}>

                        {Array.from(Array(5)).map((k) => (
                            <MyBlock
                                phrases={phrasesAndColors.phrases}
                                colors={phrasesAndColors.colors}
                                key={`row-${i}-column-${i}+${Math.random()}`}
                                color={phrasesAndColors.colors.pop()}
                                phrase={phrasesAndColors.phrases.pop()}
                                refreshRate={Math.floor(Math.random() * (5000 - 2000 + 1) + 5000)}/>
                        ))}

                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}

