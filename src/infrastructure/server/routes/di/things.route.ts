import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { ThingsRepositoryImpl } from "../../../../domain/repository/things.repository";
import { ThingsController } from "../../../../controllers/things.controller";

export const ThingsRouter = (router: any) => {
  const repository = new ThingsRepositoryImpl();
  const controllers = ThingsController(repository);

  router.post(
    "/things",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Things']
        #swagger.summary = 'Create a new things'
        #swagger.description = 'Adds a new things to the database.'
        #swagger.path = '/v1/things'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new things data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/ThingsCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Things created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsEntities'},
            }
        }
    */
      controllers.createThings(req, res, next);
    }
  );
  router.get(
    "/things",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Things']
        #swagger.summary = 'Get all things'
        #swagger.description = 'Fetch all things.'
        #swagger.path = '/v1/things'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[200] = {
            description: "Get things successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/ThingsEntities'}],
            }
        }
    */
      controllers.getThings(req, res, next);
    }
  );

  router.get(
    "/things/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Things']
        #swagger.summary = 'Get things by ID'
        #swagger.description = 'Fetch things by ID.'
        #swagger.path = '/v1/things/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Things ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get things successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsEntities'},
            }
        }
    */
      controllers.getThingsDetail(req, res, next);
    }
  );
  router.put(
    "/things/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Things']
        #swagger.summary = 'Update things of ID'
        #swagger.description = 'Update things of ID.'
        #swagger.path = '/v1/things/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Things ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for things',
            required: true,
            schema: {$ref: '#/components/schemas/ThingsCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update things successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsEntities'},
            }
        }
    */
      controllers.updateThings(req, res, next);
    }
  );
  router.delete(
    "/things/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Things']
        #swagger.summary = 'Delete things by ID'
        #swagger.description = 'Delete things by ID.'
        #swagger.path = '/v1/things/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Things ID',
            required: true,
            type: 'string'
        }
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Delete things successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ThingsEntities'},
            }
        }
    */
      controllers.deleteThings(req, res, next);
    }
  );

  return router;
};
