import { createReadStream, createWriteStream } from "fs";

export const copyFile = () => {
    const readStream = createReadStream('./data/big.csv');
    const writeStream = createWriteStream('./data/copy.csv');

    readStream.on('data', (chunk) => {
        writeStream.write(chunk);
        if (writeStream.write(chunk) === false) {
            readStream.pause();
        }
    }

    );

    writeStream.on('drain', () => {
        console.log('drain');
        readStream.resume();
    }

    );


    readStream.on('close', () => {
        console.log('done');
    });

    readStream.on('error', (error) => {
        console.log('error', error);
    });


}

copyFile();