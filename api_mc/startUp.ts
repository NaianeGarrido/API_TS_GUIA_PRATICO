import 'reflect-metadata'
import { container } from 'tsyringe'
import express, { Application, Request, Response } from 'express'
import database from './infra/db'
import {NewsController} from './controller/newsController'
import {VideosController} from './controller/videosController'
import {GaleriaController} from './controller/galeriaController'
import './shared/container'

class StartUp {

  public app: Application
  private _db: database = new database()

  constructor() {
    this.app = express()
    this._db.createConnection()
    this.routes()
  }

  private news = container.resolve(NewsController)
  private videos = container.resolve(VideosController)
  private galerira = container.resolve(GaleriaController)

  routes() {
    this.app.route("/").get((req, res) => {
      res.json({ versao: '0.0.1' })
    })
    /*news*/
    this.app.route("/api/v1/news/:page/:qtd").get((req: Request, res: Response) => {
      return this.news.get(req, res)
    })

    this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
      return this.news.getById(req, res)
    })
    /*videos*/
    this.app.route("/api/v1/videos/:page/:qtd").get((req: Request, res: Response) => {
      return this.videos.get(req, res)
    })
    this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
      return this.videos.getById(req, res)
    })
    /*galeria*/
    this.app.route("/api/v1/galeria/:page/:qtd").get((req: Request, res: Response) => {
      return this.galerira.get(req, res)
    })
    this.app.route("/api/v1/galeria/:id").get((req: Request, res: Response) => {
      return this.galerira.getById(req, res)
    })
  }
}
export default new StartUp()