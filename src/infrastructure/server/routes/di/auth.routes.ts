import { Response, Request, NextFunction } from "express";
import { UserRepositoryImpl } from "../../../../domain/repository/user.repository";
import { AuthRepositoryImpl } from "../../../../domain/repository/auth.repository";
import { AuthController } from "../../../../controllers/user/auth.controller";

export const AuthRouter = (router: any) => {
  const userRepository = new UserRepositoryImpl();
  const authRepository = new AuthRepositoryImpl();
  const controllers = AuthController(userRepository, authRepository);

  /**
   * @openapi
   * '/api/user/login':
   *  post:
   *     tags:
   *     - User Controller
   *     summary: Login as a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *            type: object
   *            required:
   *              - username
   *              - password
   *            properties:
   *              username:
   *                type: string
   *                default: johndoe
   *              password:
   *                type: string
   *                default: johnDoe20!@
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  router.post("/login", (req: Request, res: Response, next: NextFunction) => {
    /*  #swagger.auto = false

        #swagger.tags = ['Auth']
        #swagger.summary = 'Login'
        #swagger.description = 'Login as a user'
        #swagger.path = '/v1/login'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new user data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/authEntities'}
        }
        #swagger.responses[200] = {
            description: "Login successful",
            schema: {
                status: "string",
                message: "string",
                accessToken: "string",
            }
        }
    */
    controllers.login(req, res, next);
  });
  router.post("/refresh", (req: Request, res: Response, next: NextFunction) => {
    /*  #swagger.auto = false

        #swagger.tags = ['Auth']
        #swagger.summary = 'Refresh Access Token'
        #swagger.description = 'Refresh access token'
        #swagger.path = '/v1/refresh'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['Cookie'] = {
            in: 'cookie',
            description: 'Refresh token',
            required: true,
            type: 'string'
        }
        #swagger.responses[200] = {
            description: "Token refreshed successfully",
            schema: {
                status: "string",
                message: "string",
                accessToken: "string",
            }
        }
    */
    controllers.refresh(req, res, next);
  });

  return router;
};
