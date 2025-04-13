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
        #swagger.summary = 'Create a new actuator logs'
        #swagger.description = 'Adds a new actuator logs to the database.'
        #swagger.path = '/v1/actuator-logs'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new actuator logs data to be added',
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
        #swagger.summary = 'Get all actuator logs'
        #swagger.description = 'Fetch all actuator-logs.'
        #swagger.path = '/v1/actuator-logs'
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
            description: 'filtering actuator logs',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.parameters['actuatorId'] = {
            in: 'query',
            description: 'filtering type actuatorId',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get actuator logs successful",
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
        #swagger.summary = 'Get actuator logs by ID'
        #swagger.description = 'Fetch actuator logs by ID.'
        #swagger.path = '/v1/actuator-logs/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ActuatorLogs ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get actuator logs successful",
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
        #swagger.summary = 'Update actuator logs of ID'
        #swagger.description = 'Update actuator logs of ID.'
        #swagger.path = '/v1/actuator-logs/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ActuatorLogs ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for actuator logs',
            required: true,
            schema: {$ref: '#/components/schemas/ActuatorLogsCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update actuator logs successful",
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
        #swagger.summary = 'Delete actuator logs by ID'
        #swagger.description = 'Delete actuator logs by ID.'
        #swagger.path = '/v1/actuator-logs/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ActuatorLogs ID',
            required: true,
            type: 'string'
        }
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Delete actuator logs successful",
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
