import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  personDetailsMessage(person: Person){
    return `*PESSOA DESAPARECIDA*
    *Nome*: ${person.nome}
    *Data do desaparecimento:* ${new Date(person.ultimaOcorrencia.dtDesaparecimento.toString()).toLocaleDateString('pt-BR')}
    *Local do desaparecimento:* ${person.ultimaOcorrencia.localDesaparecimentoConcat}
    *Informações adicionais:* ${person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO ? person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao : 'Não informado'}
    *Vestimentas no momento do desaparecimento:* ${person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO ? person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido : 'Não informado'}
    *Para mais informações acesse*: ${window.location.href}`.split('\n').map(line => line.trim()).join('\n');
  }

  sharePersonDetailWhatsApp(person: Person) {  
    window.open(`https://wa.me/?text=${encodeURIComponent(this.personDetailsMessage(person))}`, '_blank');
  }

  sharePersonDetailFacebook(person: Person,) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(this.personDetailsMessage(person))}`, '_blank');
  }
  
}
