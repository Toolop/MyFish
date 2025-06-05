import { Response, Request, NextFunction } from "express";

import { EnvelopeRepositoryImpl } from "../../../../domain/repository/envelope.repository";
import { EnvelopeController } from "../../../../controllers/envelope.controller";

export const EnvelopesRouter = (router: any) => {
  const envelopeRepository = new EnvelopeRepositoryImpl();
  const controllers = EnvelopeController(envelopeRepository);

  router.post(
    "/envelopes",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Envelopes']
        #swagger.summary = 'Create a new envelope'
        #swagger.description = 'Adds a new envelope to the database.'
        #swagger.path = '/v1/envelopes'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new envelope data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/EnvelopeCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Envelope created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/EnvelopeEntities'},
            }
        }
    */
      controllers.createEnvelope(req, res, next);
    }
  );
  router.get(
    "/envelopes",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Envelopes']
        #swagger.summary = 'Get all envelopes'
        #swagger.description = 'Fetch all envelopes from the database.'
        #swagger.path = '/v1/envelopes'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['page'] = {
            in: 'query',
            description: 'Query parameters for filtering envelopes',
            required: false,
            schema: {
                $ref: '#/components/schemas/EnvelopeQueryEntities'
            }
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            description: 'Query parameters for filtering envelopes',
            required: false,
            schema: {
                $ref: '#/components/schemas/EnvelopeQueryEntities'
            }
        }
        #swagger.parameters['search'] = {
            in: 'query',
            description: 'Query parameters for filtering envelopes',
            required: false,
            schema: {
                $ref: '#/components/schemas/EnvelopeQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get envelopes successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/EnvelopeEntities'}
                ],
            }
        }
    */
      controllers.getEnvelope(req, res, next);
    }
  );
  router.get(
    "/envelopes/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Envelopes']
          #swagger.summary = 'Get envelope by id'
          #swagger.description = 'Fetch envelope by id.'
          #swagger.path = '/v1/envelopes/{id}'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Envelope id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Get envelope successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/EnvelopeEntities'},
              }
          }
      */
      controllers.getEnvelopeDetail(req, res, next);
    }
  );
  router.put(
    "/envelopes/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Envelopes']
          #swagger.summary = 'Update envelope of id'
          #swagger.description = 'Update envelope of id.'
          #swagger.path = '/v1/envelopes/{id}'
          #swagger.method = 'put'
          #swagger.consumes = ['application/json']
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Envelope id',
              required: true,
              type: 'string'
          }
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'The new data for the envelope',
              required: true,
              schema: {$ref: '#/components/schemas/EnvelopeCreateEntities'}
          }

          #swagger.responses[200] = {
              description: "Update envelope successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/EnvelopeEntities'},
              }
          }
      */
      controllers.updateEnvelope(req, res, next);
    }
  );
  router.delete(
    "/envelopes/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Envelopes']
          #swagger.summary = 'Delete envelope by id'
          #swagger.description = 'Delete envelope by id.'
          #swagger.path = '/v1/envelopes/{id}'
          #swagger.method = 'delete'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Envelope id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Delete envelope successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/EnvelopeEntities'},
              }
          }
      */
      controllers.deleteEnvelope(req, res, next);
    }
  );

  return router;
};
