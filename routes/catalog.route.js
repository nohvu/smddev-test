const { Router } = require("express");
const router = Router();
const Catalog = require("../models/Catalog");

router.get("/catalog", async (req, res) => {
  try {
    const devices = await Catalog.find();
    return res.json(devices);
  } catch (error) {
    console.error(error);
  }
});

router.get("/catalog/:title", async (req, res) => {
  try {
    const reg = new RegExp(req.params.title, "i");
    const devices = await Catalog.find({
      $or: [{ $or: [{ title: reg }, { memory: reg }] }],
    });
    return res.json(devices);
  } catch (error) {
    console.error(error);
  }
});

router.post("/creater", async (req, res) => {
  try {
    const { device } = req.body;
    const { title, description, memory, imgURL } = device;
    if (!title && !description && !memory && !imgURL) {
      return res.status(500).statusMessage;
    }
    const catalog = await new Catalog({
      title,
      description,
      memory,
      imgURL,
    });
    await catalog.save();
    res.json(catalog);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
