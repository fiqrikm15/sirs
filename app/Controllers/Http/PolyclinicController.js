'use strict'

const polyclinic = use('App/Models/Polyclinic')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with polyclinics
 */
class PolyclinicController {
  /**
   * Show a list of all polyclinics.
   * GET polyclinics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new polyclinic.
   * GET polyclinics/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('polyclinic.new')
  }

  /**
   * Create/save a new polyclinic.
   * POST polyclinics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, session }) {
    const input = await request.all();

    const poly = new polyclinic();
    poly.polyclinic_id = input.polyclinic_id;
    poly.polyclinic_name = input.polyclinic_name;
    poly.doctors = 0;
    
    if(poly.save()){
      session.flash({message: "Poliklinik berhasil ditambahkan."});
      return response.redirect('back');
    }else{
      session.flash({error: "Poliklinik gagal ditambahkan."});
      return response.redirect('back');
    }
  }

  /**
   * Display a single polyclinic.
   * GET polyclinics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing polyclinic.
   * GET polyclinics/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update polyclinic details.
   * PUT or PATCH polyclinics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a polyclinic with id.
   * DELETE polyclinics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PolyclinicController
