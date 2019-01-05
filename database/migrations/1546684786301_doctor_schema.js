'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorSchema extends Schema {
  up () {
    this.create('doctors', (table) => {
      table.integer('doctor_id', 20).primary()
      table.string('doctor_name').notNullable()
      table.string('polyclinic_id', 15).references('polyclinic_id').inTable('polyclinics')
      // table.integer('polyclinic_code', 15).unsigned().references('polyclinic_code').inTable('polyclinics')
      table.timestamps()
    })
  }

  down () {
    this.drop('doctors')
  }
}

module.exports = DoctorSchema



