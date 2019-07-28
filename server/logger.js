const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const level = process.env.LOG_LEVEL || 'debug';
const myFormat = printf(({ level, message, timestamp, label }) => {
    return `[${timestamp}] [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    level: level,
    format: combine(
        timestamp(),
        format.splat(),
        myFormat
    ),
    transports: [
        new transports.Console()
    ]
});

module.exports = function(fileName) {
    return createLogger({
        level: level,
        format: combine(
            timestamp(),
            label({label: fileName}),
            myFormat
        ),
        transports: [
            new transports.Console()
        ]
    });
}