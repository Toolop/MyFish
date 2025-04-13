import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { ActuatorRepositoryImpl } from "../../../../domain/repository/actuator.respository";
import { ActuatorController } from "../../../../controllers/actuator.controller";

export const ActuatorRouter = (router: any) => {
  const repository = new ActuatorRepositoryImpl();
  const controllers = ActuatorController(repository);

  router.post(
    "/actuator",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Actuator']
        #swagger.summary = 'Create a new actuator'
        #swagger.description = 'Adds a new actuator to the database.'
        #swagger.path = '/v1/actuator'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new actuator data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/ActuatorCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Actuator created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorEntities'},
            }
        }
    */
      controllers.createActuator(req, res, next);
    }
  );
  router.get(
    "/actuator",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Actuator']
        #swagger.summary = 'Get all actuator'
        #swagger.description = 'Fetch all actuator.'
        #swagger.path = '/v1/actuator'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[200] = {
            description: "Get actuator successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/ActuatorEntities'}],
            }
        }
    */
      controllers.getActuator(req, res, next);
    }
  );

  router.get(
    "/actuator/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Actuator']
        #swagger.summary = 'Get actuator by ID'
        #swagger.description = 'Fetch actuator by ID.'
        #swagger.path = '/v1/actuator/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Actuator ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get actuator successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorEntities'},
            }
        }
    */
      controllers.getActuatorDetail(req, res, next);
    }
  );
  router.put(
    "/actuator/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Actuator']
        #swagger.summary = 'Update actuator of ID'
        #swagger.description = 'Update actuator of ID.'
        #swagger.path = '/v1/actuator/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Actuator ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for actuator',
            required: true,
            schema: {$ref: '#/components/schemas/ActuatorCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update actuator successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorEntities'},
            }
        }
    */
      controllers.updateActuator(req, res, next);
    }
  );
  router.delete(
    "/actuator/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Actuator']
        #swagger.summary = 'Delete actuator by ID'
        #swagger.description = 'Delete actuator by ID.'
        #swagger.path = '/v1/actuator/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Actuator ID',
            required: true,
            type: 'string'
        }
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Delete actuator successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ActuatorEntities'},
            }
        }
    */
      controllers.deleteActuator(req, res, next);
    }
  );

  return router;
};
