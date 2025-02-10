import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

const csvFilePath = path.join(__dirname, '../data/stock.csv');

// Function to read CSV file and return data as JSON
export const readCSV = () => {
    const fileContent = fs.readFileSync(csvFilePath);
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });
    return records;
};

// Function to write JSON data to CSV file
export const writeCSV = (data) => {
    const csv = stringify(data, { header: true });
    fs.writeFileSync(csvFilePath, csv);
};