import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { ActuatorLogRepositoryImpl } from "../../../../domain/repository/actuator_logs.respository";
import { ActuatorLogsController } from "../../../../controllers/actuator_logs.controller";

export const ActuatorLogsRouter = (router: any) => {
  const repository = new ActuatorLogRepositoryImpl();
  const controllers = ActuatorLogsController(repository);

  router.post(
    "/actuator-logs",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ActuatorLogs']
        #swagger.summary = 'Create a new sidebar'
        #swagger.description = 'Adds a new sidebar to the database.'
        #swagger.path = '/v1/actuator-logs'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new sidebar data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/ActuatorLogsCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "ActuatorLogs created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorLogsEntities'},
            }
        }
    */
      controllers.createActuatorLogs(req, res, next);
    }
  );
  router.get(
    "/actuator-logs",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ActuatorLogs']
        #swagger.summary = 'Get all sidebar'
        #swagger.description = 'Fetch all actuator-logs.'
        #swagger.path = '/v1/actuator-logs'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.responses[200] = {
            description: "Get sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/ActuatorLogsEntities'}],
            }
        }
    */
      controllers.getActuatorLogs(req, res, next);
    }
  );

  router.get(
    "/actuator-logs/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ActuatorLogs']
        #swagger.summary = 'Get sidebar by ID'
        #swagger.description = 'Fetch sidebar by ID.'
        #swagger.path = '/v1/actuator-logs/:id'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'ActuatorLogs ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorLogsEntities'},
            }
        }
    */
      controllers.getActuatorLogsDetail(req, res, next);
    }
  );
  router.put(
    "/actuator-logs/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ActuatorLogs']
        #swagger.summary = 'Update sidebar of ID'
        #swagger.description = 'Update sidebar of ID.'
        #swagger.path = '/v1/actuator-logs/:id'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'ActuatorLogs ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for sidebar',
            required: true,
            schema: {$ref: '#/components/schemas/ActuatorLogsCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorLogsEntities'},
            }
        }
    */
      controllers.updateActuatorLogs(req, res, next);
    }
  );
  router.delete(
    "/actuator-logs/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ActuatorLogs']
        #swagger.summary = 'Delete sidebar by ID'
        #swagger.description = 'Delete sidebar by ID.'
        #swagger.path = '/v1/actuator-logs/:id'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'ActuatorLogs ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['Authorization'] = {
          in: 'header',
          description: 'Bearer token',
          required: true,
          type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorLogsEntities'},
            }
        }
    */
      controllers.deleteActuatorLogs(req, res, next);
    }
  );

  return router;
};
