const express = require("express");

const db = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getResources()
    .then((resources) => {
      if (resources) {
        res.status(200).json(resources);
      } else {
        res.status(404).json({ message: "resources not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve resources", err });
    });
});

router.get("/:id", (req, res) => {
  db.getResourceById(req.params.id)
    .then((resource) => {
      if (resource) {
        res.status(200).json(resource);
      } else {
        res.status(404).json({ message: "resource not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to find resource", err });
    });
});

router.post("/", (req, res) => {
  db.addResource(req.body)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "unable to create resource", err });
    });
});
module.exports = router;