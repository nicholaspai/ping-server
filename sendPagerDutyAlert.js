require("dotenv").config();
const { event } = require("@pagerduty/pdjs");

// API Request Body
const ROUTING_KEY = process.env.PAGER_DUTY_INTEGRATION_KEY;

// Example
event({
    data: {
        routing_key: ROUTING_KEY,
        event_action: 'trigger',
        payload: {
            summary: `salmonshark.org failed to respond`,
            class: "ping failure",
            source: "salmonshark.org",
            severity: 'critical',
        },
    },
  })
    .then(console.log)
    .catch(console.error);
// /**
//  * Triggers an alert to PagerDuty service associated with `ROUTING_KEY` that server @ `serverUrl` failed to respond.
//  * @param {String} serverUrl Server URL that failed to respond
//  * @return {String} dedupKey unique dedupKey for triggered alert to PagerDuty service.
//  */
// async function sendAlertPingServerFailed(serverUrl) {
//     try {
//         const sendEvent = event({
//             data: {
//                 routing_key: ROUTING_KEY,
//                 event_action: 'trigger',
//                 payload: {
//                     summary: `${serverUrl} failed to respond`,
//                     class: "ping failure",
//                     source: serverUrl,
//                     severity: 'critical',
//                 },
//             },
//         })
//         const res = await sendEvent()  

//         // Debug logging
//         console.log(`Sent event: ${JSON.stringify(res.data)}`)

//         return res.data.dedup_key
  
//     } catch(err) {
//         console.error(`PagerDuty API failure:`, err)
//     }
// }

// module.exports = {
//     sendAlertPingServerFailed
// }
