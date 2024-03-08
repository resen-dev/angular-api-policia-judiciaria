import { UltimaOcorrencia } from "./ultima-ocorrencia"

export interface Person{
    id: number
    nome: string
    idade: null
    sexo: string
    urlFoto?: string
    ultimaOcorrencia: UltimaOcorrencia
}