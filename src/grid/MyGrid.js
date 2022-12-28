import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import MyBlock from './MyBlock';
import getGoogleSpreadsheet from './axios';

import defaultData from './defaultData';
import defaultColors from './defaultColors';

export default function MyGrid() {
    const MIN_LIST_SIZE = 200;

    const [phrases, setPhrases] = useState([]);
    const [colors, setColors] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const parseSpreadsheetData = (result) => {
        const resultData = result != null
                && result.data != null
                && result.data.values != null
            ? result.data.values
        : [];

        const phrasesData = [];
        const colorsData = [];

        resultData.forEach((item) => {
            if (item && item.length > 0) {
                phrasesData.push(item[0]);
            }

            if (item && item.length > 1) {
                colorsData.push(item[1]);
            }
        });

        return [phrasesData, colorsData];
    };

    const duplicateList = (list) => {
        if (list.length > MIN_LIST_SIZE) {
            return list;
        }

        return duplicateList(list.concat(list));
    }

    useEffect(() => {
        getGoogleSpreadsheet()
          .then((result) => {
            let [phrasesData, colorsData] = parseSpreadsheetData(result);

            if (phrasesData == null || phrasesData.length <= 0) {
                phrasesData = defaultData;
            }

            if (colorsData == null || colorsData.length <= 0) {
                colorsData = defaultColors;
            }

            if (phrasesData.length < MIN_LIST_SIZE) {
                phrasesData = duplicateList(phrasesData);
            }

            if (colorsData.length < MIN_LIST_SIZE) {
                colorsData = duplicateList(colorsData);
            }

            setPhrases(phrasesData);
            setColors(colorsData);
            setLoading(false);
          })
          .catch((err) => {
            console.warn("Could not connect to your Google Spreadsheet, refer to Google Sheets API: https://developers.google.com/sheets/api/guides/concepts");
            console.warn("Falling back to default data.");
            setPhrases(defaultData);
            setLoading(false);
          });
      }, []);

    if (isLoading) {
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
        <Grid sx={{ flexGrow: 1, height: '100vh' }} container spacing={0} key={"grid-key"}>
            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>
                {Array.from(Array(5)).map((k) => (
                    <MyBlock phrases={phrases} colors={colors} key={k} color={colors.pop()} phrase={phrases.pop()} refreshRate={Math.floor(Math.random() * (5000 - 1500 + 1) + 5000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>
                {Array.from(Array(5)).map((k) => (
                    <MyBlock phrases={phrases} colors={colors} key={k} color={colors.pop()} phrase={phrases.pop()} refreshRate={Math.floor(Math.random() * (5000 - 2000 + 1) + 5000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>

                {Array.from(Array(5)).map((k) => (
                    <MyBlock phrases={phrases} colors={colors} key={k} color={colors.pop()} phrase={phrases.pop()} refreshRate={Math.floor(Math.random() * (4000 - 2000 + 1) + 4000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>

                {Array.from(Array(5)).map((k) => (
                    <MyBlock phrases={phrases} colors={colors} key={k} color={colors.pop()} phrase={phrases.pop()} refreshRate={Math.floor(Math.random() * (6000 - 2000 + 1) + 6000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>

                {Array.from(Array(5)).map((k) => (
                    <MyBlock phrases={phrases} colors={colors} key={k} color={colors.pop()} phrase={phrases.pop()} refreshRate={Math.floor(Math.random() * (4500 - 2000 + 1) + 4500)}/>
                ))}
                </Grid>
            </Grid>
        </Grid>
    );
}