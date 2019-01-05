'use strict'

class createDoctor {
  get rules () {
    return {
      doctor_id: 'required|max:20|min:5|unique:doctors',
      doctor_name: 'required'
    }
  }

  get messages(){
    return {
      'doctor_id.required': 'Kode dokter harus di isi.',
      'doctor_name.required': 'Nama dokter harus di isi.',
      'doctor_name.regex': 'Nama dokter hanya boleh di isi dengan huruf.',
    }
  }

  async fails(error){
      this.ctx.session.withErrors(error)
      .flashAll()

      return this.ctx.response.redirect('back')
  }
}

module.exports = createDoctor
