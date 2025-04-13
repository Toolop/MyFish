import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { LocationRepositoryImpl } from "../../../../domain/repository/location.repository";
import { LocationController } from "../../../../controllers/location.controller";

export const LocationRouter = (router: any) => {
  const userLocationRepository = new LocationRepositoryImpl();
  const controllers = LocationController(userLocationRepository);

  router.post(
    "/locations",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['locations']
        #swagger.summary = 'Create a new location'
        #swagger.description = 'Adds a new location to the database.'
        #swagger.path = '/v1/locations'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new location data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/LocationCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Location created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/LocationEntities'},
            }
        }
    */
      controllers.createLocation(req, res, next);
    }
  );
  router.get(
    "/locations",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['locations']
        #swagger.summary = 'Get all locations'
        #swagger.description = 'Fetch all locations from the database.'
        #swagger.path = '/v1/locations'
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
            description: 'filtering location',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }

        #swagger.responses[200] = {
            description: "Get locations successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/LocationEntities'}
                ],
            }
        }
    */
      controllers.getLocation(req, res, next);
    }
  );
  router.get(
    "/location",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['locations']
        #swagger.summary = 'Get current location'
        #swagger.description = 'Fetch currently authenticated location.'
        #swagger.path = '/v1/location'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Get location successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/LocationEntities'},
            }
        }
    */
      controllers.getLocationByToken(req, res, next);
    }
  );
  router.get(
    "/locations/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['locations']
        #swagger.summary = 'Get location by ID'
        #swagger.description = 'Fetch location by ID.'
        #swagger.path = '/v1/locations/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Location ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get location successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/LocationEntities'},
            }
        }
    */
      controllers.getLocationDetail(req, res, next);
    }
  );
  router.put(
    "/locations/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['locations']
        #swagger.summary = 'Update location of ID'
        #swagger.description = 'Update location of ID.'
        #swagger.path = '/v1/locations/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Location ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for the location',
            required: true,
            schema: {$ref: '#/components/schemas/LocationCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update location successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/LocationEntities'},
            }
        }
    */
      controllers.updateLocation(req, res, next);
    }
  );
  router.delete(
    "/locations/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['locations']
        #swagger.summary = 'Delete location by ID'
        #swagger.description = 'Delete location by ID.'
        #swagger.path = '/v1/locations/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Location ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete location successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/LocationEntities'},
            }
        }
    */
      controllers.deleteLocation(req, res, next);
    }
  );

  return router;
};
