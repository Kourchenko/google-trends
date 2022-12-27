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
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
