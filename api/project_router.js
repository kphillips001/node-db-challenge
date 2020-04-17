const express = require("express");

const db = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getProjects()
    .then((projects) => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: "projects not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve projects", err });
    });
});

router.get("/:id", (req, res) => {
  db.getProjectById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve project", err });
    });
});

router.post("/", (req, res) => {
  db.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to create new project sry" });
    });
});

router.post("/:id/addtask", (req, res) => {
  db.addTask(req.body)
    .then((task) => {
      if (task) {
        res.status(201).json(task);
      } else {
        res.status(404).json({ message: "task not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "unable to find task", err });
    });
});

module.exports = router;
