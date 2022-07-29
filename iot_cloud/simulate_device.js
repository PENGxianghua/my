/*模拟STM32设备向EMQ发送数据 */
const mqtt = require('mqtt');

const host = '8.129.190.82'
const port = '20883'
const clientId = `stm32_esp8266_${Math.random().toString(16).slice(3)}`

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
var studentNo = "2019078938294";//替换你的学号
const subcribe_topic = `/${studentNo}/receive`;
const publish_topic = `/${studentNo}/send`;

client.on('connect', () => {
  console.log('MQTT Connected')
  client.subscribe([subcribe_topic], () => {
    console.log(`Subscribe to topic '${subcribe_topic}'`)
  });

  setInterval(()=>{
        
        var publish_obj={
            error:0,
            temperature:Math.floor(Math.random() * 37),
            humiture:Math.floor(Math.random() * 30)+5,
            
        }
        client.publish(publish_topic, JSON.stringify(publish_obj), { qos: 0, retain: false }, (error) => {
            if (error) {
            console.error(error)
            }
        })
  },5000);
  
})
client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString());
  stm32_esp8266_obj = JSON.parse(payload);
  // console.log(stm32_esp8266_obj);
})