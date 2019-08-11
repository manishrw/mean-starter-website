const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
require('winston-daily-rotate-file');
const path = require('path');
const fs = require('fs');

const level = process.env.LOG_LEVEL || 'debug';
const myFormat = printf(({ level, message, timestamp, label }) => {
    return `${level.toUpperCase()} [${timestamp}] [${label}] : ${message}`;
});

const logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const transportDailyRotate = new (transports.DailyRotateFile)({
    filename: 'application-%DATE%.log',
    dirname: logDirectory,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

module.exports = function(fileName) {
    if (fileName.indexOf('server') > 0) {
        fileName = 'server' + fileName.split('server')[1];
    }
    return createLogger({
        level: level,
        format: combine(
            timestamp(),
            label({label: fileName}),
            myFormat
        ),
        transports: [
            new transports.Console(),
            transportDailyRotate
        ]
    });
};