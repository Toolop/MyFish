import { Response, Request, NextFunction } from "express";
import { CardRepositoryImpl } from "../../../../domain/repository/card.repository";
import { CardController } from "../../../../controllers/card.controller";

export const CardsRouter = (router: any) => {
  const cardRepository = new CardRepositoryImpl();
  const controllers = CardController(cardRepository);

  router.post("/cards", (req: Request, res: Response, next: NextFunction) => {
    /*  #swagger.auto = false

        #swagger.tags = ['Cards']
        #swagger.summary = 'Create a new card'
        #swagger.description = 'Adds a new card to the database.'
        #swagger.path = '/v1/cards'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new card data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/CardCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Card created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/CardEntities'},
            }
        }
    */
    controllers.createCard(req, res, next);
  });
  router.get("/cards", (req: Request, res: Response, next: NextFunction) => {
    /*  #swagger.auto = false

        #swagger.tags = ['Cards']
        #swagger.summary = 'Get all cards'
        #swagger.description = 'Fetch all cards from the database.'
        #swagger.path = '/v1/cards'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['page'] = {
            in: 'query',
            description: 'Query parameters for filtering cards',
            required: false,
            schema: {
                $ref: '#/components/schemas/CardQueryEntities'
            }
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            description: 'Query parameters for filtering cards',
            required: false,
            schema: {
                $ref: '#/components/schemas/CardQueryEntities'
            }
        }
        #swagger.parameters['search'] = {
            in: 'query',
            description: 'Query parameters for filtering cards',
            required: false,
            schema: {
                $ref: '#/components/schemas/CardQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get cards successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/CardEntities'}
                ],
            }
        }
    */
    controllers.getCard(req, res, next);
  });
  router.get(
    "/cards/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Cards']
          #swagger.summary = 'Get card by id'
          #swagger.description = 'Fetch card by id.'
          #swagger.path = '/v1/cards/{id}'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Card id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Get card successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/CardEntities'},
              }
          }
      */
      controllers.getCardDetail(req, res, next);
    }
  );
  router.put(
    "/cards/:id",

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Cards']
          #swagger.summary = 'Update card of id'
          #swagger.description = 'Update card of id.'
          #swagger.path = '/v1/cards/{id}'
          #swagger.method = 'put'
          #swagger.consumes = ['application/json']
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Card id',
              required: true,
              type: 'string'
          }
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'The new data for the card',
              required: true,
              schema: {$ref: '#/components/schemas/CardCreateEntities'}
          }

          #swagger.responses[200] = {
              description: "Update card successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/CardEntities'},
              }
          }
      */
      controllers.updateCard(req, res, next);
    }
  );
  router.delete(
    "/cards/:id",

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Cards']
          #swagger.summary = 'Delete card by id'
          #swagger.description = 'Delete card by id.'
          #swagger.path = '/v1/cards/{id}'
          #swagger.method = 'delete'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Card id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Delete card successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/CardEntities'},
              }
          }
      */
      controllers.deleteCard(req, res, next);
    }
  );

  return router;
};
