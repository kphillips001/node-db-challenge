  
const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  addResource,
  getProjects,
  getProjectById,
  addProject,
  getTasks,
  getTaskById,
  addTask,
};

function getResources() {
  return db("resource");
}

function getResourceById(id) {
  return db("resource").where({ id }).first();
}

function addResource(resource) {
  return db("resource")
    .insert(resource)
    .then((id) => {
      return getResourceById(id[0]);
    });
}

function getProjects() {
  return db("project");
}

function getProjectById(id) {
  return db("project").where({ id }).first();
}

function addProject(project) {
  return db("project")
    .insert(project)
    .then((id) => {
      return getProjectById(id[0]);
    });
}

function getTasks() {
  return db("task as t")
    .join("project as p", "t.project_id", "=", "p.id")
    .select(
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      "p.project_name",
      "p.description as project_description"
    );
}

function getTaskById(id) {
  return db("task as t")
    .join("project as p", "t.project_id", "=", "p.id")
    .select(
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      "p.project_name",
      "p.description as project_description"
    )
    .where({ "t.id": id });
}

function addTask(task) {
  return db("task")
    .insert(task)
    .then((id) => {
      return getTaskById(id[0]);
    });
}