const fs = require('fs');
const csv = require('csv-parser');

const file = process.argv[2];

const readAndParseData = () => {
    return new Promise((resolve, reject) => {
        const data = [];

        fs.createReadStream(file)
            .pipe(csv())
            .on('data', (record) => data.push(record))
            .on('end', () => resolve(data))
            .on('error', (e) => reject(e));
    });
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = async () => {
    try {
        const dataPromise = readAndParseData();
        const otherDataPromise = readAndParseData();
        const data = await dataPromise;
        const otherData = await otherDataPromise;
        printData(data);
        printData(otherData);
    } catch (e) {
        console.log('No such file');
    }
};

readAndPrintData();
