import { RequestHandler } from "express";
import { createManyService, createOneService } from "../_services/create";

export const createOneController: RequestHandler = async (req, res, next) => {
	try {
		const data = await createOneService(req.body);

		res.status(201).json({ success: true, data: data });
	} catch (err) {
		next(err);
	}
};

export const createManyController: RequestHandler = async (req, res, next) => {
	try {
		if (req.body.admins.length === 0) {
			return res.status(400).json({
				success: false,
				message: "There are no roles to be created.",
			});
		}

		const data = await createManyService(req.body.admins);

		res.status(201).json({ success: true, data: data });
	} catch (err) {
		next(err);
	}
};
