'use strict'

const Evento = use('App/Models/Evento')
var sudo = require('sudo-js');
sudo.setPassword('vasquez123');
const exec = require('child_process').exec

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with eventos
 */
class EventoController {
  /**
   * Show a list of all eventos.
   * GET eventos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let evento = await Evento.all()
    return response.status(200).json(evento)
  }

  /**
   * Render a form to be used for creating a new evento.
   * GET eventos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new evento.
   * POST eventos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let evento = await Evento.create(request.all())
    console.log(request)
    
    // exec('echo "'+"12 * * * *"+' python3 /home/isaac/consPlanta/bomba.py" >> /home/isaac/consPlanta/cron')
    // var command = ['crontab', '>>', '/home/isaac/consPlanta/cron'];
    // sudo.exec(command, function(err, pid, result) {
    //   console.log(result); // output '';
    // });

    return response.created(evento)

  }

  /**
   * Display a single evento.
   * GET eventos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    let { id } = params
    let evento = await Evento.findOrFail(id)
    if (!evento) {
      return response.status(404).json({data: 'Resource not found'})
    }
    return response.ok(evento)
  }

  /**
   * Render a form to update an existing evento.
   * GET eventos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update evento details.
   * PUT or PATCH eventos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let { id } = params
    let evento = await Evento.findOrFail(id)
    
    evento.merge(request.all())
    await evento.save()
    return response.status(200).json(evento)
  }

  /**
   * Delete a evento with id.
   * DELETE eventos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let { id } = params
    let evento = await Evento.find(id)
    if(!evento) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await evento.delete()
    return response.status(200).json(null)
  }
}

module.exports = EventoController
