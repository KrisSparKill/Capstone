import { Router } from "express";
import Brand from "../models/Brand.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const newBrand = new Brand(request.body);
    const data = await newBrand.save();
    response.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json(error.errors);
  }
});

router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await Brand.find(query);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const data = await Brand.findById(request.params.id);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const data = await Brand.findByIdAndRemove(request.params.id, {});
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Brand.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          contact: body.contact,
          email: body.email,
          agency: body.agency,
          abbreviation: body.abbreviation,
          primaryBkgrnd: body.primaryBkgrnd,
          secondaryBkgrnd: body.secondaryBkgrnd
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
