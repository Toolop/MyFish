import { Response, Request, NextFunction } from "express";
import { authenticateToken } from "../../../middleware/jwt_middleware";
import { GreenhouseRepositoryImpl } from "../../../../domain/repository/greenhouse.repository";
import { GreenhouseController } from "../../../../controllers/greenhouse.controller";

export const GreenhouseRouter = (router: any) => {
  const userGreenhouseRepository = new GreenhouseRepositoryImpl();
  const controllers = GreenhouseController(userGreenhouseRepository);

  router.post(
    "/greenhouses",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['greenhouses']
        #swagger.summary = 'Create a new greenhouse'
        #swagger.description = 'Adds a new greenhouse to the database.'
        #swagger.path = '/v1/greenhouses'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new greenhouse data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/GreenhouseCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Greenhouse created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/GreenhouseEntities'},
            }
        }
    */
      controllers.createGreenhouse(req, res, next);
    }
  );
  router.get(
    "/greenhouses",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['greenhouses']
        #swagger.summary = 'Get all greenhouses'
        #swagger.description = 'Fetch all greenhouses from the database.'
        #swagger.path = '/v1/greenhouses'
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
            description: 'filtering greenhouse',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.parameters['locationId'] = {
            in: 'query',
            description: 'filtering by locationIdr',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }

        #swagger.responses[200] = {
            description: "Get greenhouses successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/GreenhouseEntities'}
                ],
            }
        }
    */
      controllers.getGreenhouse(req, res, next);
    }
  );
  router.get(
    "/greenhouse",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['greenhouses']
        #swagger.summary = 'Get current greenhouse'
        #swagger.description = 'Fetch currently authenticated greenhouse.'
        #swagger.path = '/v1/greenhouse'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Get greenhouse successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/GreenhouseEntities'},
            }
        }
    */
      controllers.getGreenhouseByToken(req, res, next);
    }
  );
  router.get(
    "/greenhouses/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['greenhouses']
        #swagger.summary = 'Get greenhouse by ID'
        #swagger.description = 'Fetch greenhouse by ID.'
        #swagger.path = '/v1/greenhouses/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Greenhouse ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get greenhouse successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/GreenhouseEntities'},
            }
        }
    */
      controllers.getGreenhouseDetail(req, res, next);
    }
  );
  router.put(
    "/greenhouses/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['greenhouses']
        #swagger.summary = 'Update greenhouse of ID'
        #swagger.description = 'Update greenhouse of ID.'
        #swagger.path = '/v1/greenhouses/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Greenhouse ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for the greenhouse',
            required: true,
            schema: {$ref: '#/components/schemas/GreenhouseCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update greenhouse successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/GreenhouseEntities'},
            }
        }
    */
      controllers.updateGreenhouse(req, res, next);
    }
  );
  router.delete(
    "/greenhouses/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['greenhouses']
        #swagger.summary = 'Delete greenhouse by ID'
        #swagger.description = 'Delete greenhouse by ID.'
        #swagger.path = '/v1/greenhouses/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Greenhouse ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete greenhouse successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/GreenhouseEntities'},
            }
        }
    */
      controllers.deleteGreenhouse(req, res, next);
    }
  );

  return router;
};
