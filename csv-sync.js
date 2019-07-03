const fs = require('fs');
const csv = require('csv/lib/sync');

const file = process.argv[2];

const readData = () => {
    return fs.readFileSync(file);
};

const parseData = (data) => {
    return csv.parse(data, { columns: true });
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = () => {
    try {
        const rawData = readData();
        const data = parseData(rawData);
        printData(data);
    } catch (e) {
        console.log('No such file');
    }
};

readAndPrintData();