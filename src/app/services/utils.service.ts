import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService
{

  constructor() { }

  typeof(val: any): any
  {
    return typeof (val);
  }

  isBool(val: any): boolean
  {
    return typeof (val) == 'boolean';
  }
}
