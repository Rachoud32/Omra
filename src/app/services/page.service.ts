import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private isSpecificComponentPresentSubject = new BehaviorSubject<boolean>(false);
  isSpecificComponentPresent$ = this.isSpecificComponentPresentSubject.asObservable();

  setSpecificComponentPresent(isPresent: boolean): void {
    this.isSpecificComponentPresentSubject.next(isPresent);
  }
}