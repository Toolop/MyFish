import { Response, Request, NextFunction } from "express";

import { MascotRepositoryImpl } from "../../../../domain/repository/mascot.repository";
import { MascotController } from "../../../../controllers/mascot.controller";

export const MascotsRouter = (router: any) => {
  const mascotRepository = new MascotRepositoryImpl();
  const controllers = MascotController(mascotRepository);

  router.post("/mascots", (req: Request, res: Response, next: NextFunction) => {
    /*  #swagger.auto = false

        #swagger.tags = ['Mascots']
        #swagger.summary = 'Create a new mascot'
        #swagger.description = 'Adds a new mascot to the database.'
        #swagger.path = '/v1/mascots'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new mascot data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/MascotCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Mascot created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/MascotEntities'},
            }
        }
    */
    controllers.createMascot(req, res, next);
  });
  router.get(
    "/mascots",

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Mascots']
        #swagger.summary = 'Get all mascots'
        #swagger.description = 'Fetch all mascots from the database.'
        #swagger.path = '/v1/mascots'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['page'] = {
            in: 'query',
            description: 'Query parameters for filtering mascots',
            required: false,
            schema: {
                $ref: '#/components/schemas/MascotQueryEntities'
            }
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            description: 'Query parameters for filtering mascots',
            required: false,
            schema: {
                $ref: '#/components/schemas/MascotQueryEntities'
            }
        }
        #swagger.parameters['search'] = {
            in: 'query',
            description: 'Query parameters for filtering mascots',
            required: false,
            schema: {
                $ref: '#/components/schemas/MascotQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get mascots successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/MascotEntities'}
                ],
            }
        }
    */
      controllers.getMascot(req, res, next);
    }
  );
  router.get(
    "/mascots/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Mascots']
          #swagger.summary = 'Get mascot by id'
          #swagger.description = 'Fetch mascot by id.'
          #swagger.path = '/v1/mascots/{id}'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Mascot id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Get mascot successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/MascotEntities'},
              }
          }
      */
      controllers.getMascotDetail(req, res, next);
    }
  );
  router.put(
    "/mascots/:id",

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Mascots']
          #swagger.summary = 'Update mascot of id'
          #swagger.description = 'Update mascot of id.'
          #swagger.path = '/v1/mascots/{id}'
          #swagger.method = 'put'
          #swagger.consumes = ['application/json']
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Mascot id',
              required: true,
              type: 'string'
          }
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'The new data for the mascot',
              required: true,
              schema: {$ref: '#/components/schemas/MascotCreateEntities'}
          }

          #swagger.responses[200] = {
              description: "Update mascot successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/MascotEntities'},
              }
          }
      */
      controllers.updateMascot(req, res, next);
    }
  );
  router.delete(
    "/mascots/:id",

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Mascots']
          #swagger.summary = 'Delete mascot by id'
          #swagger.description = 'Delete mascot by id.'
          #swagger.path = '/v1/mascots/{id}'
          #swagger.method = 'delete'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Mascot id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Delete mascot successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/MascotEntities'},
              }
          }
      */
      controllers.deleteMascot(req, res, next);
    }
  );

  return router;
};
