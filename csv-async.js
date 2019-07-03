const fsp = require('fs').promises;
const csv = require('async-csv');

const file = process.argv[2];

const readData = () => {
    return fsp.readFile(file);
};

const parseData = (data) => {
    return csv.parse(data, { columns: true });
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = async () => {
    try {
        const rawData = await readData();
        const data = await parseData(rawData);
        printData(data);
    } catch (e) {
        console.log('No such file');
    }
};

readAndPrintData();