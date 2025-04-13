import { Response, Request, NextFunction } from "express";
import { RoleController } from "../../../../controllers/master data/role.controller";
import { RoleRepositoryImpl } from "../../../../domain/repository/role.repository";
import { authenticateToken } from "../../../middleware/jwt_middleware";

export const RoleRouter = (router: any) => {
  const userRoleRepository = new RoleRepositoryImpl();
  const controllers = RoleController(userRoleRepository);

  router.post(
    "/roles",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Roles']
        #swagger.summary = 'Create a new role'
        #swagger.description = 'Adds a new role to the database.'
        #swagger.path = '/v1/roles'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new role data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/RoleCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Role created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/RoleEntities'},
            }
        }
    */
      controllers.createRole(req, res, next);
    }
  );
  router.get(
    "/roles",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Roles']
        #swagger.summary = 'Get all roles'
        #swagger.description = 'Fetch all roles from the database.'
        #swagger.path = '/v1/roles'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Get roles successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/RoleEntities'}
                ],
            }
        }
    */
      controllers.getRoles(req, res, next);
    }
  );
  router.get(
    "/role",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Roles']
        #swagger.summary = 'Get current role'
        #swagger.description = 'Fetch currently authenticated role.'
        #swagger.path = '/v1/role'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Get role successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/RoleEntities'},
            }
        }
    */
      controllers.getRoleByToken(req, res, next);
    }
  );
  router.get(
    "/roles/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Roles']
        #swagger.summary = 'Get role by ID'
        #swagger.description = 'Fetch role by ID.'
        #swagger.path = '/v1/roles/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Role ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get role successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/RoleEntities'},
            }
        }
    */
      controllers.getRolesDetail(req, res, next);
    }
  );
  router.put(
    "/roles/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Roles']
        #swagger.summary = 'Update role of ID'
        #swagger.description = 'Update role of ID.'
        #swagger.path = '/v1/roles/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Role ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for the role',
            required: true,
            schema: {$ref: '#/components/schemas/RoleCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update role successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/RoleEntities'},
            }
        }
    */
      controllers.updateRole(req, res, next);
    }
  );
  router.delete(
    "/roles/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Roles']
        #swagger.summary = 'Delete role by ID'
        #swagger.description = 'Delete role by ID.'
        #swagger.path = '/v1/roles/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Role ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete role successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/RoleEntities'},
            }
        }
    */
      controllers.deleteRole(req, res, next);
    }
  );

  return router;
};
