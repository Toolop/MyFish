import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { SensorRepositoryImpl } from "../../../../domain/repository/sensor.repository";
import { SensorController } from "../../../../controllers/sensor.controller";

export const SensorRouter = (router: any) => {
  const repository = new SensorRepositoryImpl();
  const controllers = SensorController(repository);

  router.post(
    "/sensors",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sensor']
        #swagger.summary = 'Create a new sensor'
        #swagger.description = 'Adds a new sensor to the database.'
        #swagger.path = '/v1/sensors'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new sensor data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/SensorCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Sensor created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SensorEntities'},
            }
        }
    */
      controllers.createSensor(req, res, next);
    }
  );
  router.get(
    "/sensors",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sensor']
        #swagger.summary = 'Get all sensor'
        #swagger.description = 'Fetch all sensors.'
        #swagger.path = '/v1/sensors'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['page'] = {
            in: 'query',
            description: 'paging data',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            description: 'limit data',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.parameters['search'] = {
            in: 'query',
            description: 'filtering sensor',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
            
        #swagger.responses[200] = {
            description: "Get sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/SensorEntities'}],
            }
        }
    */
      controllers.getSensor(req, res, next);
    }
  );

  router.get(
    "/sensors/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sensor']
        #swagger.summary = 'Get sensor by ID'
        #swagger.description = 'Fetch sensor by ID.'
        #swagger.path = '/v1/sensors/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Sensor ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SensorEntities'},
            }
        }
    */
      controllers.getSensorDetail(req, res, next);
    }
  );
  router.put(
    "/sensors/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sensor']
        #swagger.summary = 'Update sensor of ID'
        #swagger.description = 'Update sensor of ID.'
        #swagger.path = '/v1/sensors/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Sensor ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for sensor',
            required: true,
            schema: {$ref: '#/components/schemas/SensorCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SensorEntities'},
            }
        }
    */
      controllers.updateSensor(req, res, next);
    }
  );
  router.delete(
    "/sensors/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sensor']
        #swagger.summary = 'Delete sensor by ID'
        #swagger.description = 'Delete sensor by ID.'
        #swagger.path = '/v1/sensors/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Sensor ID',
            required: true,
            type: 'string'
        }
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Delete sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SensorEntities'},
            }
        }
    */
      controllers.deleteSensor(req, res, next);
    }
  );

  return router;
};
