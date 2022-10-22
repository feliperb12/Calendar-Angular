/*import { IEvent } from "../interfaces/ievent.interface";
import * as _ from 'lodash';

import * as moment from 'moment';

export class Eventos implements IEvent{



  constructor(data){
    _.set(this,'data', data);

  }

  get id(): string{
    return _.get(this, 'data.id');
  }
  set id(value: string){
     _.set(this, 'data.id',value);
  }

  get descricao(): string{
    return _.get(this, 'data.descricao');
  }
  set descricao(value: string){
     _.set(this, 'data.descricao',value);
  }

  get dataInicio(): Date{
    return _.has(this, 'data.inicioDate')? _.get(this,'data.inicioDate'):moment(this.dataInicio);
  }
  set dataInicio(value: Date){
     _.set(this, 'data.inicioDate',value);
  }


  get dataFim(): Date{
    return _.has(this, 'data.dataFim')? _.get(this,'data.dataFim'):moment(this.dataFim);
  }

  set dataFim(value: Date){
     _.set(this, 'data.dataFim',value);
  }


  getData(){
    return _.get(this,'data');
  }

}
*/
