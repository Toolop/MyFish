import { Response, Request, NextFunction } from "express";
import { authenticateToken } from "../../../middleware/jwt_middleware";
import { CompanyRepositoryImpl } from "../../../../domain/repository/company.repository";
import { CompanyController } from "../../../../controllers/company.controller";

export const CompanyRouter = (router: any) => {
  const userCompanyRepository = new CompanyRepositoryImpl();
  const controllers = CompanyController(userCompanyRepository);

  router.post(
    "/companies",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['companies']
        #swagger.summary = 'Create a new company'
        #swagger.description = 'Adds a new company to the database.'
        #swagger.path = '/v1/companies'
        #swagger.method = 'post'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new company data to be added',
            required: true,
            schema: {$ref: '#/components/schemas/CompanyCreateEntities'}
        }
        #swagger.responses[201] = {
            description: "Company created successfully",
            schema: {
                status: "string",
                message: "string",
                data: {$ref: '#/components/schemas/CompanyEntities'},
            }
        }
    */
      controllers.createCompanies(req, res, next);
    }
  );
  router.get(
    "/companies",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['companies']
        #swagger.summary = 'Get all companies'
        #swagger.description = 'Fetch all companies from the database.'
        #swagger.path = '/v1/companies'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']

        #swagger.responses[200] = {
            description: "Get companies successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": [
                    {$ref: '#/components/schemas/CompanyEntities'}
                ],
            }
        }
    */
      controllers.getCompanies(req, res, next);
    }
  );
  router.get(
    "/company",
    authenticateToken,
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['companies']
        #swagger.summary = 'Get current company'
        #swagger.description = 'Fetch currently authenticated company.'
        #swagger.path = '/v1/company'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['Authorization'] = {
            in: 'header',
            description: 'Bearer token',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get company successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/CompanyEntities'},
            }
        }
    */
      controllers.getCompanyByToken(req, res, next);
    }
  );
  router.get(
    "/companies/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['companies']
        #swagger.summary = 'Get company by ID'
        #swagger.description = 'Fetch company by ID.'
        #swagger.path = '/v1/companies/:id'
        #swagger.method = 'get'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'Company ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Get company successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/CompanyEntities'},
            }
        }
    */
      controllers.getCompanyDetail(req, res, next);
    }
  );
  router.put(
    "/companies/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['companies']
        #swagger.summary = 'Update company of ID'
        #swagger.description = 'Update company of ID.'
        #swagger.path = '/v1/companies/:id'
        #swagger.method = 'put'
        #swagger.consumes = ['application/json']
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'Company ID',
            required: true,
            type: 'string'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'The new data for the company',
            required: true,
            schema: {$ref: '#/components/schemas/CompanyCreateEntities'}
        }
        #swagger.responses[200] = {
            description: "Update company successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/CompanyEntities'},
            }
        }
    */
      controllers.updateCompany(req, res, next);
    }
  );
  router.delete(
    "/companies/:id",
    (req: Request, res: Response, next: NextFunction) => {
      /*  #swagger.auto = false

        #swagger.tags = ['companies']
        #swagger.summary = 'Delete company by ID'
        #swagger.description = 'Delete company by ID.'
        #swagger.path = '/v1/companies/:id'
        #swagger.method = 'delete'
        #swagger.produces = ['application/json']
        #swagger.parameters['id'] = {
            in: 'query',
            description: 'Company ID',
            required: true,
            type: 'string'
        }

        #swagger.responses[200] = {
            description: "Delete company successful",
            schema: {
                "status": "string",
                "message": "string",
                "data": {$ref: '#/components/schemas/CompanyEntities'},
            }
        }
    */
      controllers.deleteCompany(req, res, next);
    }
  );

  return router;
};
