import { Response, Request, NextFunction } from "express";
import { TypeSensorController } from "../../../../controllers/type_sensor.controller";
import { TypeSensorRepositoryImpl } from "../../../../domain/repository/type_sensor.repository";
import { authenticateToken } from "../../../middleware/jwt_middleware";

export const TypeSensorRouter = (router: any) => {
  const repository = new TypeSensorRepositoryImpl();
  const controllers = TypeSensorController(repository);

  router.post(
    "/type-sensor",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['TypeSensor']
        #swagger.summary = 'Create a new type sensor'
        #swagger.description = 'Adds a new type sensor to the database.'
        #swagger.path = '/v1/type-sensor'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new type sensor data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/TypeSensorCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "TypeSensor created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/TypeSensorEntities'},
            }
        }
    */
      controllers.createTypeSensor(req, res, next);
    }
  );
  router.get(
    "/type-sensor",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['TypeSensor']
        #swagger.summary = 'Get all type sensor'
        #swagger.description = 'Fetch all type-sensor.'
        #swagger.path = '/v1/type-sensor'
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
            description: 'filtering type sensor',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get type sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/TypeSensorEntities'}],
            }
        }
    */
      controllers.getTypeSensor(req, res, next);
    }
  );

  router.get(
    "/type-sensor/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['TypeSensor']
        #swagger.summary = 'Get type sensor by ID'
        #swagger.description = 'Fetch type sensor by ID.'
        #swagger.path = '/v1/type-sensor/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'TypeSensor ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get type sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/TypeSensorEntities'},
            }
        }
    */
      controllers.getTypeSensorDetail(req, res, next);
    }
  );
  router.put(
    "/type-sensor/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['TypeSensor']
        #swagger.summary = 'Update type sensor of ID'
        #swagger.description = 'Update type sensor of ID.'
        #swagger.path = '/v1/type-sensor/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'TypeSensor ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for type sensor',
            required: true,
            schema: {$ref: '#/components/schemas/TypeSensorCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update type sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/TypeSensorEntities'},
            }
        }
    */
      controllers.updateTypeSensor(req, res, next);
    }
  );
  router.delete(
    "/type-sensor/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['TypeSensor']
        #swagger.summary = 'Delete type sensor by ID'
        #swagger.description = 'Delete type sensor by ID.'
        #swagger.path = '/v1/type-sensor/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'TypeSensor ID',
            required: true,
            type: 'string'
        }
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Delete type sensor successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/TypeSensorEntities'},
            }
        }
    */
      controllers.deleteTypeSensor(req, res, next);
    }
  );

  return router;
};
