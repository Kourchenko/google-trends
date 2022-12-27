import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import MyBlock from './MyBlock';
import getGoogleSpreadsheet from './axios';

import defaultData from './defaultData';

export default function MyGrid() {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);


    const parseSpreadsheetData = (result) => {
        const resultData = result != null
                && result.data != null
                && result.data.values != null
            ? result.data.values
        : [];

        return resultData.map((item) => {
            if (item && item.length > 0) {
                return item[0];
            }
        });
    };

    useEffect(() => {
        getGoogleSpreadsheet()
          .then((result) => {
            const resultData = parseSpreadsheetData(result);

            if (resultData.length) {
                setData(resultData);
            } else {
                setData(defaultData);
            }

            setLoading(false);
          })
          .catch((err) => {
            console.warn("Could not connect to your Google Spreadsheet, refer to Google Sheets API: https://developers.google.com/sheets/api/guides/concepts");
            console.warn("Falling back to default data.");
            setData(defaultData);
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
        <Grid sx={{ flexGrow: 1, height: '100vh' }} container spacing={0}>
            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>
                {Array.from(Array(5)).map((k) => (
                    <MyBlock data={data} key={k} value={data.pop()} refreshRate={Math.floor(Math.random() * (5000 - 1500 + 1) + 5000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>
                {Array.from(Array(5)).map((k) => (
                    <MyBlock data={data} key={k} value={data.pop()} refreshRate={Math.floor(Math.random() * (5000 - 2000 + 1) + 5000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>

                {Array.from(Array(5)).map((k) => (
                    <MyBlock data={data} key={k} value={data.pop()} refreshRate={Math.floor(Math.random() * (4000 - 2000 + 1) + 4000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>

                {Array.from(Array(5)).map((k) => (
                    <MyBlock data={data} key={k} value={data.pop()} refreshRate={Math.floor(Math.random() * (6000 - 2000 + 1) + 6000)}/>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={0}>

                {Array.from(Array(5)).map((k) => (
                    <MyBlock data={data} key={k} value={data.pop()} refreshRate={Math.floor(Math.random() * (4500 - 2000 + 1) + 4500)}/>
                ))}
                </Grid>
            </Grid>
        </Grid>
    );
}