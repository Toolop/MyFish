import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { SensorDataController } from "../../../../controllers/sensor_data.controller";

export const SensorDataRouter = (router: any) => {
  const controllers = SensorDataController();

  router.get(
    "/sensor_data",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['SensorData']
        #swagger.summary = 'Get all sensor data'
        #swagger.description = 'Fetch all sensor_data.'
        #swagger.path = '/v1/sensor_data'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[200] = {
            description: "Get sensor data successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/SensorDataEntities'}],
            }
        }
    */
      controllers.getSensorData(req, res, next);
    }
  );

  router.get(
    "/sensor_data/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['SensorData']
        #swagger.summary = 'Get sensor data by ID'
        #swagger.description = 'Fetch sensor data by ID.'
        #swagger.path = '/v1/sensor_data/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
          in: 'path',
          type: 'integer',
          description: 'sensorID.' 
        } 
        #swagger.responses[200] = {
            description: "Get sensor data successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SensorDataEntities'},
            }
        }
    */
      controllers.getSensorDataDetail(req, res, next);
    }
  );

  return router;
};
