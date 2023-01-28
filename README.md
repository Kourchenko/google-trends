# Google Trends

An application to visualize Google Trends.
* https://main.d3tax412kkc7na.amplifyapp.com/

## Running Locally

```bash
# 1. Create local environment.
touch .env.local

# 2. Create Credentials & Service Account & Generate API/SECRET KEY following the documentation:
# https://developers.google.com/sheets/api/guides/concepts
REACT_APP_GOOGLE_SECRET_KEY=

# 3. Create a Google Spreadsheet in Google Drive
# https://drive.google.com

# Fill in your Spreadsheet ID and Range
# https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit#gid=0
# Range example: <Sheet1!A2:A>
REACT_APP_GOOGLE_SPREADSHEET_ID=
REACT_APP_GOOGLE_SPREADSHEET_RANGE=

# Start the app
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Tech Stack
* [ReactJS](https://reactjs.org/)
* [Google Sheets API](https://developers.google.com/sheets/api/quickstart/java)
* [AWS Amplify](https://docs.amplify.aws/)