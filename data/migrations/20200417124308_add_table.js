exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.text("project_name", 55).notNullable();
      tbl.text("description", 155);
      tbl.boolean("completed").defaultTo(false).notNullable();
    })
    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.text("resource_name", 55).unique().notNullable();
      tbl.text("description", 155);
    })
    .createTable("task", (tbl) => {
      tbl.increments();
      tbl.text("description", 155).notNullable();
      tbl.text("notes", 155);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.boolean("completed").defaultTo(false).notNullable();
    })
    .createTable("project_resource", (tbl) => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};