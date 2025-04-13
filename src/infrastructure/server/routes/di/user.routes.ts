import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { UserRepositoryImpl } from "../../../../domain/repository/user.repository";
import { UserController } from "../../../../controllers/user/user.controller";
export const UsersRouter = (router: any) => {
  const userRepository = new UserRepositoryImpl();
  const controllers = UserController(userRepository);

  router.post("/users", (req: Request, res: Response, next: NextFunction) => {
    /*  #swagger.auto = false

        #swagger.tags = ['Users']
        #swagger.summary = 'Create a new user'
        #swagger.description = 'Adds a new user to the database.'
        #swagger.path = '/v1/users'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new user data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/UserCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "User created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/UserEntities'},
            }
        }
    */
    controllers.createUser(req, res, next);
  });
  router.get(
    "/users",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Users']
        #swagger.summary = 'Get all users'
        #swagger.description = 'Fetch all users from the database.'
        #swagger.path = '/v1/users'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['page'] = {
            in: 'query',
            description: 'Query parameters for filtering users',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            description: 'Query parameters for filtering users',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.parameters['search'] = {
            in: 'query',
            description: 'Query parameters for filtering users',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get users successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/UserEntities'}
                ],
            }
        }
    */
      controllers.getUsers(req, res, next);
    }
  );
  router.get(
    "/user",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Users']
          #swagger.summary = 'Get current user'
          #swagger.description = 'Fetch currently authenticated user.'
          #swagger.path = '/v1/user'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]

          #swagger.responses[200] = {
              description: "Get user successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/UserEntities'},
              }
          }
      */
      controllers.getUserByToken(req, res, next);
    }
  );
  router.get(
    "/users/:username",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Users']
          #swagger.summary = 'Get user by username'
          #swagger.description = 'Fetch user by username.'
          #swagger.path = '/v1/users/{username}'
          #swagger.method = 'get'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['username'] = {
              in: 'path',
              description: 'User username',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Get user successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/UserEntities'},
              }
          }
      */
      controllers.getUsersDetail(req, res, next);
    }
  );
  router.put(
    "/users/:username",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Users']
          #swagger.summary = 'Update user of username'
          #swagger.description = 'Update user of username.'
          #swagger.path = '/v1/users/{username}'
          #swagger.method = 'put'
          #swagger.consumes = ['application/json']
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['username'] = {
              in: 'path',
              description: 'User username',
              required: true,
              type: 'string'
          }
          #swagger.parameters['body'] = {
              in: 'body',
              description: 'The new data for the user',
              required: true,
              schema: {$ref: '#/components/schemas/UserCreateEntities'}
          }

          #swagger.responses[200] = {
              description: "Update user successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/UserEntities'},
              }
          }
      */
      controllers.updateUser(req, res, next);
    }
  );
  router.delete(
    "/users/:username",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

          #swagger.tags = ['Users']
          #swagger.summary = 'Delete user by username'
          #swagger.description = 'Delete user by username.'
          #swagger.path = '/v1/users/{username}'
          #swagger.method = 'delete'
          #swagger.produces = ['application/json']
          #swagger.security = [{ "bearerAuth": [] }]
          #swagger.parameters['username'] = {
              in: 'path',
              description: 'User username',
              required: true,
              type: 'string'
          }

          #swagger.responses[200] = {
              description: "Delete user successful",
              schema: {
                  "status": "string",
                  "message": "string",
                  "data": {$ref: '#/components/schemas/UserEntities'},
              }
          }
      */
      controllers.deleteUser(req, res, next);
    }
  );

  return router;
};
