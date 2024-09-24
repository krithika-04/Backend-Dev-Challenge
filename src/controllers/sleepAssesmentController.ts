import { Request, Response } from "express";
import sleepModel from "../model/sleepModel";
import logger from "../utils/logger";
import { sleepAssesmentSchema } from "../validators/sleepValidator";
import { formatResponse, formatErrorResponse } from '../utils/formatter';
export const sleepAssesment = async (req: Request, res: Response) => {
  try {
    sleepAssesmentSchema.parse(req.body);
    const {  isComplete,...assesmentData } = req.body;
    const update = await sleepModel.findByIdAndUpdate(
      req.params.id,
      assesmentData
    );
    if (isComplete) {
      res
        .status(200)
        .json(formatResponse({assesmentId:req.params.id,sleepEffciency:50},"on boarding process complete")) //hard code sleep efficiency
    }
    res.status(200).json(formatResponse({}, 'assesment step completed'));
  } catch (error: any) {
    console.log("error while updating assesment");
    logger.error(error.message);
    return res.status(500).json(formatErrorResponse('Something went wrong'));
  }
};
