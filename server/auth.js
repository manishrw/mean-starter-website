/*
 * server/auth.js
 */
const requireDir = require('require-dir');
const logger = require("./logger")(__filename);


exports = module.exports = function (app) {
    const logger = app.logger;

    // Basic Auth filter
    const basicAuth = function (req, res, next) {
        // Check if not api request or if api request with GET
        if (req.path.indexOf('/api/') == -1 || req.method.indexOf('GET') != -1) {
            return next();
        }
    
        // check for basic auth header
        if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
            logger.info('Missing Authorization Header');
            return res.status(401).json({ message: 'Missing Authorization Header' });
        }
    
        // verify auth credentials
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        if (username !== app.config.auth.username || password !== app.config.auth.password) {
            logger.info('Unauthorized User');
            logger.debug(username + " " +  password);
            logger.debug('Config: ' + app.config.auth.username + ' ' + app.config.auth.password);
            return res.status(401).json({ message: 'Unauthorized User' });
        }
        next();
    }

    return {basicAuth: basicAuth};
}