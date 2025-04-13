import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { ThingsLogRepositoryImpl } from "../../../../domain/repository/things_log.repository";
import { ThingsLogController } from "../../../../controllers/things_log.controller";

export const ThingsLogRouter = (router: any) => {
  const repository = new ThingsLogRepositoryImpl();
  const controllers = ThingsLogController(repository);

  router.post(
    "/things-log",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ThingsLog']
        #swagger.summary = 'Create a new things logs'
        #swagger.description = 'Adds a new things logs to the database.'
        #swagger.path = '/v1/things-log'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new things logs data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/ThingsLogCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "ThingsLog created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsLogEntities'},
            }
        }
    */
      controllers.createThingsLog(req, res, next);
    }
  );
  router.get(
    "/things-log",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ThingsLog']
        #swagger.summary = 'Get all things logs'
        #swagger.description = 'Fetch all things-log.'
        #swagger.path = '/v1/things-log'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[200] = {
            description: "Get things logs successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/ThingsLogEntities'}],
            }
        }
    */
      controllers.getThingsLog(req, res, next);
    }
  );

  router.get(
    "/things-log/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ThingsLog']
        #swagger.summary = 'Get things logs by ID'
        #swagger.description = 'Fetch things logs by ID.'
        #swagger.path = '/v1/things-log/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'params',
            description: 'ThingsLog ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get things logs successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsLogEntities'},
            }
        }
    */
      controllers.getThingsLogDetail(req, res, next);
    }
  );
  router.put(
    "/things-log/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ThingsLog']
        #swagger.summary = 'Update things logs of ID'
        #swagger.description = 'Update things logs of ID.'
        #swagger.path = '/v1/things-log/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ThingsLog ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for things logs',
            required: true,
            schema: {$ref: '#/components/schemas/ThingsLogCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update things logs successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsLogEntities'},
            }
        }
    */
      controllers.updateThingsLog(req, res, next);
    }
  );
  router.delete(
    "/things-log/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['ThingsLog']
        #swagger.summary = 'Delete things logs by ID'
        #swagger.description = 'Delete things logs by ID.'
        #swagger.path = '/v1/things-log/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ThingsLog ID',
            required: true,
            type: 'string'
        }
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Delete things logs successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsLogEntities'},
            }
        }
    */
      controllers.deleteThingsLog(req, res, next);
    }
  );

  return router;
};
