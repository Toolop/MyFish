import { Response, Request, NextFunction } from "express";
import { RoleSidebarController } from "../../../../controllers/master data/role_sidebar.controller";
import { RoleSidebarRepositoryImpl } from "../../../../domain/repository/role_sidebar.repository";
import { authenticateToken } from "../../../middleware/jwt_middleware";

export const RoleSidebarRouter = (router: any) => {
  const roleSidebarRepository = new RoleSidebarRepositoryImpl();
  const controllers = RoleSidebarController(roleSidebarRepository);

  router.post(
    "/rolesidebars",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Role Sidebars']
          #swagger.summary = 'Create a new Role Sidebar connection'
          #swagger.description = 'Adds a new role-sidebar entry to the database.'
          #swagger.path = '/v1/rolesidebars'
          #swagger.method = 'post'
          #swagger.consumes = ['application/json']
          #swagger.produces = ['application/json']

          #swagger.parameters['body'] = {
              in: 'body',
              description: 'The new data to be added',
              required: true,
              schema: {$ref: '#/components/schemas/RRoleSidebarCreateEntities'}
          }
          #swagger.responses[201] = {
              description: "Role-Sidebar created successfully",
              schema: {
                  status: "string",
                  message: "string",
                  data: {$ref: '#/components/schemas/RRoleSidebarEntities'},
              }
          }
      */
      controllers.createRoleSidebar(req, res, next);
    }
  );
  router.get(
    "/rolesidebars",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Role Sidebars']
          #swagger.summary = 'Get all Role Sidebar connection'
          #swagger.description = 'Fetch all role-sidebar entries from the database.'
          #swagger.path = '/v1/rolesidebars'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']

          #swagger.responses[200] = {
              description: "Get Role-Sidebar successfully",
              schema: {
                  status: "string",
                  message: "string",
                  data: [{$ref: '#/components/schemas/RRoleSidebarEntities'}],
              }
          }
      */
      controllers.getRoleSidebars(req, res, next);
    }
  );
  router.get(
    "/rolesidebar",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Role Sidebars']
          #swagger.summary = 'Get current user's Role Sidebars'
          #swagger.description = 'Fetch current user's role-sidebar entries from the database.'
          #swagger.path = '/v1/rolesidebar'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']
          #swagger.parameters['Authorization'] = {
              in: 'header',
              description: 'Bearer token',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Get Role-Sidebar successfully",
              schema: {
                  status: "string",
                  message: "string",
                  data: [{$ref: '#/components/schemas/RRoleSidebarEntities'}],
              }
          }
      */
      controllers.getRoleSidebarByToken(req, res, next);
    }
  );
  router.get(
    "/rolesidebars/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Role Sidebars']
        #swagger.summary = 'Get Role Sidebars by ID'
        #swagger.description = 'Fetch role-sidebar data by ID.'
        #swagger.path = '/v1/rolesidebars/:id'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID of the role-sidebar to fetch',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get Role-Sidebar successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/RRoleSidebarEntities'},
            }
        }
      */
      controllers.getRoleSidebarsDetail(req, res, next);
    }
  );
  router.put(
    "/rolesidebars/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Role Sidebars']
          #swagger.summary = 'Update Role Sidebars of ID'
          #swagger.description = 'Update role-sidebar of ID.'
          #swagger.path = '/v1/rolesidebars/:id'
          #swagger.method = 'put'
          #swagger.produces = ['application/json']
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'ID of the role-sidebar to update',
              required: true,
              type: 'string'
          }
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'The new data to be used for update',
              required: true,
              schema: {$ref: '#/components/schemas/RRoleSidebarCreateEntities'}
          }
          #swagger.responses[200] = {
              description: "Update Role-Sidebar successfully",
              schema: {
                  status: "string",
                  message: "string",
                  data: {$ref: '#/components/schemas/RRoleSidebarEntities'},
              }
          }
      */
      controllers.updateRoleSidebar(req, res, next);
    }
  );
  router.delete(
    "/rolesidebars/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Role Sidebars']
          #swagger.summary = 'Delete Role Sidebars by ID'
          #swagger.description = 'Delete role-sidebar by ID.'
          #swagger.path = '/v1/rolesidebars/:id'
          #swagger.method = 'delete'
          #swagger.produces = ['application/json']
          #swagger.parameters['id'] = {
              in: 'path',
              description: 'ID of the role-sidebar to delete',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Delete Role-Sidebar successfully",
              schema: {
                  status: "string",
                  message: "string",
                  data: {$ref: '#/components/schemas/RRoleSidebarEntities'},
              }
          }
      */
      controllers.deleteRoleSidebar(req, res, next);
    }
  );
  router.post(
    "/rolesidebars/upsert-batch",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Role Sidebars']
          #swagger.summary = 'Upsert Batch Role Sidebars'
          #swagger.description = 'Update role-sidebar (if already exists) or create new role-sidebar.'
          #swagger.path = '/v1/rolesidebars/upsert-batch'
          #swagger.method = 'post'
          #swagger.produces = ['application/json']
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'Array of data to be used for upsert',
              required: true,
              schema: [{$ref: '#/components/schemas/RoleSidebarCreateOrUpdateEntities'}]
          }

          #swagger.responses[201] = {
              description: "Upsert Batch Role-Sidebar successful",
              schema: {
                  status: "string",
                  message: "string",
                  data: {$ref: '#/components/schemas/RRoleSidebarEntities'},
              }
          }
      */
      controllers.upsertBatchRoleSidebar(req, res, next);
    }
  );

  return router;
};
