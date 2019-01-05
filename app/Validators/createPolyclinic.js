'use strict'

class createPolyclinic {
  get rules () {
    return {
      polyclinic_id: 'required|max:5|min:5',
      polyclinic_name: 'required'
    }
  }

  get messages(){
    return{
      'polyclinic_id.required': 'kode poliklinik harus di isi.',
      'polyclinic_name.required': 'Nama poliklinik harus di isi.',
      'polyclinic_id.max': 'kode poliklinik max 5 karakter.',
      'polyclinic_id.min': 'kode poliklinik min 5 karakter.',
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
    .flashAll()

    return this.ctx.response.redirect('back')
  }
}

module.exports = createPolyclinic
