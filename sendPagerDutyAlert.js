const { event } = require("@pagerduty/pdjs");

/**
 * Triggers an alert to PagerDuty service associated with `ROUTING_KEY` that server @ `serverUrl` failed to respond.
 * @param {String} host Host that failed to respond to ping.
 * @param {String} integrationKey Integration key for PagerDuty service to trigger an alert for.
 * @return {String} dedupKey unique dedupKey for triggered alert to PagerDuty service.
 */
async function sendAlertPingServerFailed(host, integrationKey) {
    try {
        const res = await event({
            data: {
                routing_key: integrationKey,
                event_action: 'trigger',
                payload: {
                    summary: `${host} failed to respond`,
                    class: "ping failure",
                    source: host,
                    severity: 'critical',
                },
            },
        }); 

        console.log(`(pagerDutyAPI) Triggered new alert: ${JSON.stringify(res.data)}`);
  
        return res.data.dedup_key;
    } catch(err) {
        throw new Error(`(pagerDutyAPI) Error: `, err);
    }
}

module.exports = {
    sendAlertPingServerFailed
}
