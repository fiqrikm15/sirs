'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Doctor extends Model {
  static get primaryKey() {
    return 'doctor_id';
  }

  static get incrementing () {
    return false
  }

  polyclinic() {
    return this.belongsTo('App/Models/Polyclinic')
  }
}

module.exports = Doctor
