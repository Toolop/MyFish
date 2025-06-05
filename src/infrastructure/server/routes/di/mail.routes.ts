import { Response, Request, NextFunction } from "express";

import { MailRepositoryImpl } from "../../../../domain/repository/mail.repository";
import { MailController } from "../../../../controllers/mail.controller";
import { upload } from "../../../../core/config/multer_local_config";

export const MailsRouter = (router: any) => {
  const mailRepository = new MailRepositoryImpl();
  const controllers = MailController(mailRepository);

  router.post(
    "/mails",
    upload.single("photo"),
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Mails']
        #swagger.summary = 'Create a new mail'
        #swagger.description = 'Adds a new mail to the database.'
        #swagger.path = '/v1/mails'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new mail data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/MailCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Mail created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/MailEntities'},
            }
        }
    */
      controllers.createMail(req, res, next);
    }
  );
  router.get(
    "/mails",

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Mails']
        #swagger.summary = 'Get all mails'
        #swagger.description = 'Fetch all mails from the database.'
        #swagger.path = '/v1/mails'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['page'] = {
            in: 'query',
            description: 'Query parameters for filtering mails',
            required: false,
            schema: {
                $ref: '#/components/schemas/MailQueryEntities'
            }
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            description: 'Query parameters for filtering mails',
            required: false,
            schema: {
                $ref: '#/components/schemas/MailQueryEntities'
            }
        }
        #swagger.parameters['search'] = {
            in: 'query',
            description: 'Query parameters for filtering mails',
            required: false,
            schema: {
                $ref: '#/components/schemas/MailQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get mails successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/MailEntities'}
                ],
            }
        }
    */
      controllers.getMail(req, res, next);
    }
  );
  router.get(
    "/mails/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Mails']
          #swagger.summary = 'Get mail by id'
          #swagger.description = 'Fetch mail by id.'
          #swagger.path = '/v1/mails/{id}'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Mail id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Get mail successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/MailEntities'},
              }
          }
      */
      controllers.getMailDetail(req, res, next);
    }
  );
  router.put(
    "/mails/:id",
    upload.single("photo"),
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Mails']
          #swagger.summary = 'Update mail of id'
          #swagger.description = 'Update mail of id.'
          #swagger.path = '/v1/mails/{id}'
          #swagger.method = 'put'
          #swagger.consumes = ['application/json']
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Mail id',
              required: true,
              type: 'string'
          }
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'The new data for the mail',
              required: true,
              schema: {$ref: '#/components/schemas/MailCreateEntities'}
          }

          #swagger.responses[200] = {
              description: "Update mail successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/MailEntities'},
              }
          }
      */
      controllers.updateMail(req, res, next);
    }
  );
  router.delete(
    "/mails/:id",

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Mails']
          #swagger.summary = 'Delete mail by id'
          #swagger.description = 'Delete mail by id.'
          #swagger.path = '/v1/mails/{id}'
          #swagger.method = 'delete'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'Mail id',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Delete mail successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/MailEntities'},
              }
          }
      */
      controllers.deleteMail(req, res, next);
    }
  );

  return router;
};
