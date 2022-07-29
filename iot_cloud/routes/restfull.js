var express = require('express');
var router = express.Router();
const mqtt = require('mqtt');

const host = '8.129.190.82'
const port = '20883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'guat',
  password: '12345678',
  reconnectPeriod: 1000,
})
var stm32_esp8266_obj = {};
//ESP8266
var studentNo = "2019070230421";//替换你的学号
const topic = `/ESP8266/send`//`/${studentNo}/send`
client.on('connect', () => {
  console.log('MQTT Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
  // client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
  //   if (error) {
  //     console.error(error)
  //   }
  // })
})
client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString());
  stm32_esp8266_obj = JSON.parse(payload);
  // console.log(stm32_esp8266_obj);
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json(stm32_esp8266_obj).end();
});

module.exports = router;
