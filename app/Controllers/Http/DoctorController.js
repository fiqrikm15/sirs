'use strict'
const Polyclinic = use('App/Models/Polyclinic')
const Doctor = use('App/Models/Doctor')

class DoctorController {
  /**
   * Show a list of all doctors.
   * GET doctors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new doctor.
   * GET doctors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async add ({ request, response, view }) {
    const polyclinics = await Polyclinic.all();
    return view.render('doctor.new', {polyclinics: polyclinics.toJSON()});
  }

  /**
   * Create/save a new doctor.
   * POST doctors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   *  @param {Response} ctx.session
   */
  async store ({ request, response, session }) {
    const input = await request.all();
    
    const doc = new Doctor();
    doc.doctor_id = input.doctor_id;
    doc.doctor_name = input.doctor_name;
    doc.polyclinic_id = input.polyclinic_id;

    if(doc.save()){
      session.flash({message: "Dokter berhasil ditambahkan."});
      return response.redirect('back');
    }else{
      session.flash({error: "Dokter gagal ditambahkan."});
      return response.redirect('back');
    }
  }
}

module.exports = DoctorController
