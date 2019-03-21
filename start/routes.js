'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.group(() => {
  Route.get('evento', 'EventoController.index');
  Route.get('evento/:id', 'EventoController.show');
  Route.post('evento', 'EventoController.store');
  Route.put('evento/:id', 'EventoController.update');
  Route.delete('evento/:id', 'EventoController.destroy');  
}).prefix('api/v1')