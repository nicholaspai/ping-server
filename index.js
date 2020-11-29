const {sendAlertPingServerFailed} = require('./sendPagerDutyAlert')
const {pingServer} = require('./pingServer')
require("dotenv").config();

// Import constants from environment:
const HOST_TO_PING = process.env.HOST_TO_MONITOR;
const PD_SERVICE_TO_TRIGGER = process.env.PAGER_DUTY_INTEGRATION_KEY;

async function main() {
    console.log(HOST_TO_PING)
    try {
        const serverIsAlive = await pingServer(HOST_TO_PING);
        if (!serverIsAlive) {
            const pagerDutyResult = await sendAlertPingServerFailed(HOST_TO_PING, PD_SERVICE_TO_TRIGGER);
            console.log(`(main) PagerDuty alert triggered: `, pagerDutyResult) ;   
        }
    } catch(err) {
        console.error(`(main) Error: `, pagerDutyResult);
    } finally {
        return;
    }
}

// Run:
main()
    .then(() => process.exit())
    .catch(() => process.exit(1))