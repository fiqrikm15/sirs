'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientQueueSchema extends Schema {
  up () {
    this.create('patient_queues', (table) => {
      table.increments()
      table.integer('patient_id', 20)
      table.string('polyclinic_id', 15).references('polyclinic_id').inTable('polyclinics')
      table.integer('queue_number')
      table.timestamps()
    })
  }

  down () {
    this.drop('patient_queues')
  }
}

module.exports = PatientQueueSchema
