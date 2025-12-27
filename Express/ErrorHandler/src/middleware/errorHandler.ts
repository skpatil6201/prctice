import { message } from './../../node_modules/aws-sdk/clients/customerprofiles.d';
import { statusCode } from './../../node_modules/aws-sdk/clients/mediastoredata.d';
import { Request, Response, NextFunction } from "express"
export const errorHandler = (
    err: any,
    req: Request,
    res: Response
) => {

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({

        success: true,
        message: err.message || "INternal Server Error"
    })
}