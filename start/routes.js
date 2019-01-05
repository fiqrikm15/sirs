'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Polyclinic = use('App/Models/Polyclinic');

Route.on('/').render('welcome');

Route.group(() => {
  Route.get('/tambah', 'DoctorController.add');
  Route.post('/store', 'DoctorController.store').validator('createDoctor');
}).prefix('/dokter');

Route.group(() => {
  Route.get('/tambah', 'PolyclinicController.create');
  Route.post('/store', 'PolyclinicController.store').validator('createPolyclinic');
}).prefix('/poliklinik');

Route.group(() => {
  Route.get('/tambah', 'PatientQueueController.create');
  Route.post('/store', 'PatientQueueController.store').validator('createPatientQueue');
}).prefix('/berobat');