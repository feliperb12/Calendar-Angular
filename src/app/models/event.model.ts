import { IEvent } from "../interfaces/ievent.interface";
import * as _ from 'lodash';

export class Event implements IEvent{



  constructor(data){
    _.set(this,'data', data);

  }

  get descricao(): string{
    return _.get(this, 'data.descricao');
  }
  set descricao(value: string){
     _.set(this, 'data.descricao',value);
  }


  get inicio(): Date{
    return _.get(this, 'data.inicio');
  }
  set inicio(value: Date){
     _.set(this, 'data.inicio',value);
  }


  get fim(): Date{
    return _.get(this, 'data.fim');
  }
  set fim(value: Date){
     _.set(this, 'data.fim',value);
  }

}
