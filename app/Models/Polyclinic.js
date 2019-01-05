'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Polyclinic extends Model {
  static get primaryKey() {
    return 'polyclinic_id';
  }

  static get incrementing () {
    return false
  }

  doctors() {
    return this.hasMany('App/Models/Doctor');
  }

  patientQueue() {
    return this.hasMany('App/Models/PatientQueue')
  }
}

module.exports = Polyclinic
