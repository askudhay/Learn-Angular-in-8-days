import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logInfo(msg: String){
    console.log('--- DI Example ---' + msg);
  }
}
