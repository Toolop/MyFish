import { Response, Request, NextFunction } from "express";

import { authenticateToken } from "../../../middleware/jwt_middleware";
import { ScheduleRepositoryImpl } from "../../../../domain/repository/schedule.repository";
import { ScheduleController } from "../../../../controllers/schedule.controller";

export const ScheduleRouter = (router: any) => {
  const repository = new ScheduleRepositoryImpl();
  const controllers = ScheduleController(repository);

  router.post(
    "/schedules",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Schedule']
        #swagger.summary = 'Create a new schedule'
        #swagger.description = 'Adds a new schedule to the database.'
        #swagger.path = '/v1/schedules'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new schedule data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/ScheduleCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Schedule created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ScheduleEntities'},
            }
        }
    */
      controllers.createSchedule(req, res, next);
    }
  );
  router.get(
    "/schedules",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Schedule']
        #swagger.summary = 'Get all schedule'
        #swagger.description = 'Fetch all schedules.'
        #swagger.path = '/v1/schedules'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
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
            description: 'filtering schedule',
            required: false,
            schema: {
                $ref: '#/components/schemas/UserQueryEntities'
            }
        }
        #swagger.responses[200] = {
            description: "Get schedule successful",
            schema: {
                status: "string",
                message: "string",
                data: [{$ref: '#/components/schemas/ScheduleEntities'}],
            }
        }
    */
      controllers.getSchedule(req, res, next);
    }
  );

  router.get(
    "/schedules/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Schedule']
        #swagger.summary = 'Get schedule by ID'
        #swagger.description = 'Fetch schedule by ID.'
        #swagger.path = '/v1/schedules/{id}'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Schedule ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get schedule successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ScheduleEntities'},
            }
        }
    */
      controllers.getScheduleDetail(req, res, next);
    }
  );
  router.put(
    "/schedules/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Schedule']
        #swagger.summary = 'Update schedule of ID'
        #swagger.description = 'Update schedule of ID.'
        #swagger.path = '/v1/schedules/{id}'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Schedule ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for schedule',
            required: true,
            schema: {$ref: '#/components/schemas/ScheduleCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update schedule successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ScheduleEntities'},
            }
        }
    */
      controllers.updateSchedule(req, res, next);
    }
  );
  router.delete(
    "/schedules/:id",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['Schedule']
        #swagger.summary = 'Delete schedule by ID'
        #swagger.description = 'Delete schedule by ID.'
        #swagger.path = '/v1/schedules/{id}'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Schedule ID',
            required: true,
            type: 'string'
        }
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[200] = {
            description: "Delete schedule successful",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/ScheduleEntities'},
            }
        }
    */
      controllers.deleteSchedule(req, res, next);
    }
  );

  return router;
};
