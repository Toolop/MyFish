import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { AutomationRepositoryImpl } from "../../../../domain/repository/automation.repository";
import { AutomationController } from "../../../../controllers/automation.controller";

export const AutomationRouter = (router: any) => {
  const repository = new AutomationRepositoryImpl();
  const controllers = AutomationController(repository);

  router.post(
    "/automations",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Automation']
        #swagger.summary = 'Create a new sidebar'
        #swagger.description = 'Adds a new sidebar to the database.'
        #swagger.path = '/v1/automations'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new sidebar data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/AutomationCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Automation created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/AutomationEntities'},
            }
        }
    */
      controllers.createAutomation(req, res, next);
    }
  );
  router.get(
    "/automations",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Automation']
        #swagger.summary = 'Get all sidebar'
        #swagger.description = 'Fetch all automations.'
        #swagger.path = '/v1/automations'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.responses[200] = {
            description: "Get sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/AutomationEntities'}],
            }
        }
    */
      controllers.getAutomation(req, res, next);
    }
  );

  router.get(
    "/automations/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Automation']
        #swagger.summary = 'Get sidebar by ID'
        #swagger.description = 'Fetch sidebar by ID.'
        #swagger.path = '/v1/automations/:id'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'Automation ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/AutomationEntities'},
            }
        }
    */
      controllers.getAutomationDetail(req, res, next);
    }
  );
  router.put(
    "/automations/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Automation']
        #swagger.summary = 'Update sidebar of ID'
        #swagger.description = 'Update sidebar of ID.'
        #swagger.path = '/v1/automations/:id'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'Automation ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for sidebar',
            required: true,
            schema: {$ref: '#/components/schemas/AutomationCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/AutomationEntities'},
            }
        }
    */
      controllers.updateAutomation(req, res, next);
    }
  );
  router.delete(
    "/automations/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Automation']
        #swagger.summary = 'Delete sidebar by ID'
        #swagger.description = 'Delete sidebar by ID.'
        #swagger.path = '/v1/automations/:id'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'Automation ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['Authorization'] = {
          in: 'header',
          description: 'Bearer token',
          required: true,
          type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/AutomationEntities'},
            }
        }
    */
      controllers.deleteAutomation(req, res, next);
    }
  );

  return router;
};
