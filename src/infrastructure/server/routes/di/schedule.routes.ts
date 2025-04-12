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
        #swagger.summary = 'Create a new sidebar'
        #swagger.description = 'Adds a new sidebar to the database.'
        #swagger.path = '/v1/schedules'
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
        #swagger.summary = 'Get all sidebar'
        #swagger.description = 'Fetch all schedules.'
        #swagger.path = '/v1/schedules'
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
        #swagger.summary = 'Get sidebar by ID'
        #swagger.description = 'Fetch sidebar by ID.'
        #swagger.path = '/v1/schedules/:id'
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
            description: 'Schedule ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get sidebar successful",
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
        #swagger.summary = 'Update sidebar of ID'
        #swagger.description = 'Update sidebar of ID.'
        #swagger.path = '/v1/schedules/:id'
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
            description: 'Schedule ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for sidebar',
            required: true,
            schema: {$ref: '#/components/schemas/ScheduleCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update sidebar successful",
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
        #swagger.summary = 'Delete sidebar by ID'
        #swagger.description = 'Delete sidebar by ID.'
        #swagger.path = '/v1/schedules/:id'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'Schedule ID',
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
                data: {$ref: '#/components/schemas/ScheduleEntities'},
            }
        }
    */
      controllers.deleteSchedule(req, res, next);
    }
  );

  return router;
};
