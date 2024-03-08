import { OcorrenciaEntrevista } from "./ocorrencia-entrevista"

export interface UltimaOcorrencia{
    dtDesaparecimento: Date
    localDesaparecimentoConcat: string
    ocorrenciaEntrevDesapDTO?: OcorrenciaEntrevista
}