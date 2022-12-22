import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShareLibService {
  constructor() {}

  private _name = new BehaviorSubject('');
  readonly name$ = this._name.asObservable();

  addName(name: string) {
    this._name.next(name);
  }
}
