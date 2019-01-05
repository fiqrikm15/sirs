'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PatientQueue extends Model {
    polyclinic() {
        return this.hasMany('App/Models/Polyclinic')
    }
}

module.exports = PatientQueue
