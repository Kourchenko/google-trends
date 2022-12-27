import axios from "axios";

// Environment Variables (.env)
const {
    REACT_APP_GOOGLE_SPREADSHEET_ID,
    REACT_APP_GOOGLE_SECRET_KEY,
    REACT_APP_GOOGLE_SPREADSHEET_RANGE
} = process.env;

// Google Sheets API v4
const GOOGLE_SHEETS_API = `https://sheets.googleapis.com/v4/spreadsheets/${REACT_APP_GOOGLE_SPREADSHEET_ID}/values/${REACT_APP_GOOGLE_SPREADSHEET_RANGE}?key=${REACT_APP_GOOGLE_SECRET_KEY}`;

const getGoogleSpreadsheet = () => axios.get(GOOGLE_SHEETS_API);

export default getGoogleSpreadsheet;