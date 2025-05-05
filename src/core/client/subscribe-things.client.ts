import { ThingsLogCreateEntities } from "../../domain/entities/things_logs.entities";
import DataListThings from "../data/things.data";

const dotenv = require("dotenv");
const mqtt = require("mqtt");
const clientId = `mqttAgriciatech_${Math.random().toString(16).slice(3)}`;

const subscribeThings = async () => {
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

    const topic = process.env.MQTT_THINGS_TOPIC;

    client.on("connect", () => {
      console.log("Connected");
      client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
      });
    });

    client.on("message", async (payload: string) => {
      try {
        let getData = await JSON.parse(payload.toString());
        if (getData[0]) {
          for (const i in getData) {
            getData[i].createdAt = new Date();
            DataListThings[getData[i].thingsId] = getData;
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

export default subscribeThings;
