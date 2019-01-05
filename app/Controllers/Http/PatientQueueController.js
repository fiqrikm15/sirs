'use strict'

const Polyclinic = use('App/Models/Polyclinic')
const patientQueue = use('App/Models/PatientQueue')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with patientqueues
 */
class PatientQueueController {
  /**
   * Show a list of all patientqueues.
   * GET patientqueues
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new patientqueue.
   * GET patientqueues/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const polyclinics = await Polyclinic.all()
    return view.render('queue.new', {polyclinics: polyclinics.toJSON()})
  }

  /**
   * Create/save a new patientqueue.
   * POST patientqueues
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, session }) {
    const input = request.all();

    const pq = new PatientQueueController();
    
  }

  /**
   * Display a single patientqueue.
   * GET patientqueues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing patientqueue.
   * GET patientqueues/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update patientqueue details.
   * PUT or PATCH patientqueues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a patientqueue with id.
   * DELETE patientqueues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PatientQueueController
