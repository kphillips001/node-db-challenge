exports.seed = function (knex) {
  return knex("resource").insert([
    { resource_name: "computer", description: "yada yada" },
    { resource_name: "microphone", description: "yada yada" },
    { resource_name: "video camera", description: "yada yada" },
  ]);
};