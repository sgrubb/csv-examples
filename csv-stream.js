const fs = require('fs');
const csv = require('csv');

const file = process.argv[2];

const readAndParseData = () => {
    return new Promise((resolve, reject) => {
        const data = [];

        const parser = csv.parse({columns: true});
        fs.createReadStream(file)
            .pipe(parser)
            .on('readable', () => {
                let record;
                while (record = parser.read()) {
                    data.push(record);
                }
            })
            .on('end', () => resolve(data))
            .on('error', (e) => reject(e));
    });
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = async () => {
    try {
        const data = await readAndParseData();
        printData(data);
    } catch (e) {
        console.log('No such file');
    }
};

readAndPrintData();