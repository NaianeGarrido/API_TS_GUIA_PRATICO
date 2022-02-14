import mongoose from 'mongoose'
import { PodCast } from '../models/podcast'

const PodCastSchema = new mongoose.Schema<PodCast>({
  titulo: { type: String },
  texto: { type: String },
  imagem: { type: String },
  duracao: { type: String },
  link: { type: String },
  url: { type: String },
  dataPublicacao: { type: Date },
  tags: { type: String },
  ativo: { type: Boolean }
})
export const PodCastRepository = mongoose.model<PodCast>('podcast', PodCastSchema)