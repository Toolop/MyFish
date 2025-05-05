import { SensorDataEntities } from "../../domain/entities/sensor_data.entities";
import DataListSensor from "../data/sensor.data";

const dotenv = require("dotenv");
const mqtt = require("mqtt");
const clientId = `mqttAgriciatech_${Math.random().toString(16).slice(3)}`;

const subscribeSensor = async () => {
  try {
    dotenv.config();
    const client = mqtt.connect({
      clientId,
      host: process.env.MQTT,
      port: 8883,
      username: process.env.MQTT_USERNAME,
      protocol: "mqtts",
      password: process.env.MQTT_PASSWORD,
    });

    const topic = process.env.MQTT_SENSOR_TOPIC;

    client.on("connect", () => {
      console.log("Connected");
      client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
      });
    });

    client.on("message", async (topic: string, payload: string) => {
      try {
        let getData = await JSON.parse(payload.toString());
        if (getData[0]) {
          for (const i in getData) {
            const x = parseFloat(getData[i].value);
            let value = 0;

            if (
              getData[i].status == "online" ||
              getData[i].status == "Online"
            ) {
              const fix_sensor: SensorDataEntities = await {
                sensorId: getData[i].sensorId,
                value: value,
                status: getData[i].status,
                createdAt: new Date(),
              };
              DataListSensor[getData[i].sensorId] = fix_sensor;
            } else if ((await getData[i].status) == "offline") {
              const fix_sensor: SensorDataEntities = await {
                sensorId: parseInt(getData[i].sensorId),
                value: 0,
                status: getData[i].status,
                createdAt: new Date(),
              };
              DataListSensor[getData[i].sensorId] = fix_sensor;
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export default subscribeSensor;
