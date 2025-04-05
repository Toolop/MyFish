import { Response, Request, NextFunction } from "express";
import { RoleUserController } from "../../../../controllers/master data/role_user.controller";
import { RoleUserRepositoryImpl } from "../../../../domain/repository/role_user.repository";

export const RoleUserRouter = (router: any) => {
  const userRoleRepository = new RoleUserRepositoryImpl();
  const controllers = RoleUserController(userRoleRepository);

  router.post(
    "/roleusers",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Role User']
        #swagger.summary = 'Create a new Role User connection'
        #swagger.description = 'Adds a new role-user entry to the database.'
        #swagger.path = '/v1/roleusers'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/RRoleUserCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Role-User created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/RRoleUserEntities'},
            }
        }
    */
      controllers.createRoleUser(req, res, next);
    }
  );
  router.get(
    "/roleusers",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Role User']
        #swagger.summary = 'Get all Role User connections'
        #swagger.description = 'Fetch all role-user entries from the database.'
        #swagger.path = '/v1/roleusers'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']

        #swagger.responses[200] = {
            description: "Get Role-User successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/RRoleUserEntities'}],
            }
        }
    */
      controllers.getRoleUsers(req, res, next);
    }
  );
  router.get(
    "/roleusers/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Role User']
        #swagger.summary = 'Get Role User connection by ID'
        #swagger.description = 'Fetch role-user entry by ID.'
        #swagger.path = '/v1/roleusers/:id'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID of the role-user entry to fetch',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get Role-User successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/RRoleUserEntities'},
            }
        }
    */
      controllers.getRoleUsersDetail(req, res, next);
    }
  );
  router.put(
    "/roleusers/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Role User']
        #swagger.summary = 'Update Role User of ID'
        #swagger.description = 'Update role-user entry of ID.'
        #swagger.path = '/v1/roleusers/:id'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID of the role-user entry to update',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/RRoleUserCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Get Role-User successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/RRoleUserEntities'},
            }
        }
    */
      controllers.updateRoleUser(req, res, next);
    }
  );
  router.delete(
    "/roleusers/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Role User']
        #swagger.summary = 'Delete Role User by ID'
        #swagger.description = 'Delete role-user entry by ID.'
        #swagger.path = '/v1/roleusers/:id'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID of the role-user entry to delete',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete Role-User successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/RRoleUserEntities'},
            }
        }
    */
      controllers.deleteRoleUser(req, res, next);
    }
  );

  return router;
};
