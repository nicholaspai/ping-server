# ping-server
Cron job that pings a server and sends alerts when it doesn't receive a response. `ProcFile` is included to be easily run for free with Heroku scheduler.

# pingServer
Pings a host, defined in environment variables.

# sendPagerDutyAlert
Triggers a PD alert for the service associated with the environment's integration key.
