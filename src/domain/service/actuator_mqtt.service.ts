import { ActuatorLogsCreateEntities } from "../entities/actuator_logs.entities";

const mqtt = require("mqtt");
const dotenv = require("dotenv");

export const ActuatorMQTTService = async (data: ActuatorLogsCreateEntities) => {
  let result = "";

  try {
    dotenv.config();
    const topic = `${process.env.MQTT_ACTUATOR_TOPIC}/${data.actuatorId}`;
    const clientId = `mqttItera_${Math.random().toString(16).slice(3)}`;

    const client = mqtt.connect({
      clientId,
      host: process.env.MQTT, // Your MQTT broker address
      port: 8883, // TLS port
      username: process.env.MQTT_USERNAME, // Username for authentication
      protocol: "mqtts", // MQTT over TLS
      password: process.env.MQTT_PASSWORD, // Password for authentication
    });

    client.on("connect", async () => {
      var message = data.statusLifeCycle;
      await client.publish(
        topic,
        JSON.stringify(message),
        { qos: 1, retain: false },
        async (error: any) => {
          if (error) {
            console.error(error);
          } else {
            client.end();
          }
        }
      );
    });

    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
