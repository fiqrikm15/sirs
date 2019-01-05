'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PolyclinicSchema extends Schema {
  up () {
    this.create('polyclinics', (table) => {
      table.string('polyclinic_id', 15).primary().unique()
      // table.integer('polyclinic_code', 15).unsigned().primary().unique()
      table.string('polyclinic_name').notNullable()
      table.integer('doctors')
      table.timestamps()
    })
  }

  down () {
    this.drop('polyclinics')
  }
}

module.exports = PolyclinicSchema
