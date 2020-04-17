exports.seed = function (knex) {
  return knex("task").insert([
    {
      description: "air orange pineapple butterfly",
      notes: "big dog ran",
      project_id: 1,
      completed: true,
    },
    {
      description: "mars dance orange",
      notes: "large coyote",
      project_id: 1,
      completed: false,
    },
    {
      description: "thread billion",
      notes: "yaya",
      project_id: 2,
      completed: false,
    },
  ]);
};