const ping = require('ping');

/**
 * Pints `host` and returns its status.
 * @param {String} host Host to ping.
 * @return {Boolean} True if host responds, False if not.
 */
async function pingServer(host) {
    try {
        const res = await ping.promise.probe(host);
        console.log(res)

        console.log(`(ping) Server is ${res.alive ? "alive" : "down"}: ${JSON.stringify(res.output)}`);

        return res.alive;
    } catch (err) {
        throw new Error(`(ping) Error: `, err);
    }
}

module.exports = {
    pingServer
}