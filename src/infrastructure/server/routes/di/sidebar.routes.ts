import { Response, Request, NextFunction } from "express";
import { SidebarController } from "../../../../controllers/master data/sidebar.controller";
import { SidebarRepositoryImpl } from "../../../../domain/repository/sidebar.repository";
import { authenticateToken } from "../../../middleware/jwt_middleware";

export const SidebarRouter = (router: any) => {
  const userSidebarRepository = new SidebarRepositoryImpl();
  const controllers = SidebarController(userSidebarRepository);

  router.post(
    "/sidebars",
    authenticateToken,

    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sidebars']
        #swagger.summary = 'Create a new sidebar'
        #swagger.description = 'Adds a new sidebar to the database.'
        #swagger.path = '/v1/sidebars'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new sidebar data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/SidebarCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Sidebar created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SidebarEntities'},
            }
        }
    */
      controllers.createSidebar(req, res, next);
    }
  );
  router.get(
    "/sidebars",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sidebars']
        #swagger.summary = 'Get all sidebar'
        #swagger.description = 'Fetch all sidebars.'
        #swagger.path = '/v1/sidebars'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
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
            description: 'filtering sidebar',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/SidebarEntities'}],
            }
        }
    */
      controllers.getSidebars(req, res, next);
    }
  );
  router.get(
    "/sidebar",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sidebars']
        #swagger.summary = 'Get current user's sidebar'
        #swagger.description = 'Fetch current user's sidebars.'
        #swagger.path = '/v1/sidebar'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Get sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/SidebarEntities'}],
            }
        }
    */
      controllers.getSidebarByToken(req, res, next);
    }
  );
  router.get(
    "/sidebars/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sidebars']
        #swagger.summary = 'Get sidebar by ID'
        #swagger.description = 'Fetch sidebar by ID.'
        #swagger.path = '/v1/sidebars/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Sidebar ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SidebarEntities'},
            }
        }
    */
      controllers.getSidebarsDetail(req, res, next);
    }
  );
  router.put(
    "/sidebars/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sidebars']
        #swagger.summary = 'Update sidebar of ID'
        #swagger.description = 'Update sidebar of ID.'
        #swagger.path = '/v1/sidebars/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Sidebar ID',
            required: true,
            type: 'string'
        }

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for sidebar',
            required: true,
            schema: {$ref: '#/components/schemas/SidebarCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SidebarEntities'},
            }
        }
    */
      controllers.updateSidebar(req, res, next);
    }
  );
  router.delete(
    "/sidebars/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Sidebars']
        #swagger.summary = 'Delete sidebar by ID'
        #swagger.description = 'Delete sidebar by ID.'
        #swagger.path = '/v1/sidebars/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Sidebar ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete sidebar successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/SidebarEntities'},
            }
        }
    */
      controllers.deleteSidebar(req, res, next);
    }
  );

  return router;
};
