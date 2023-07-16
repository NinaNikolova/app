import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { appEmailValidator } from './app-email-validator'

@Directive({
  selector: '[appEmail]'
})
export class AppEmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // appEmailValidator()
  }

}
