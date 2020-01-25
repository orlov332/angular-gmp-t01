/* tslint:disable:semicolon variable-name */
import {Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NgControl, ValidationErrors, Validator} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
import {Subject} from 'rxjs';
import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-vc-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => DateInputComponent),
    //   multi: true,
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => DateInputComponent),
    //   multi: true,
    // },
    {provide: MatFormFieldControl, useExisting: DateInputComponent}]
})
export class DateInputComponent implements MatFormFieldControl<Date>, OnInit, OnDestroy, ControlValueAccessor, Validator {

  static nextId = 0;
  focused = false;
  stateChanges = new Subject<void>();
  @HostBinding()
  id = `app-vc-date-input-${DateInputComponent.nextId++}`;
  dateInput = new FormControl('');
  errorState = false;
  controlType = 'app-vc-date-input';
  @HostBinding('attr.aria-describedby')
  describedBy = '';

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>) {

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });

    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  @Input()
  get value(): Date | null {
    return this.dateInput.value;
  }

  set value(date: Date | null) {
    this.dateInput.setValue(date);
    this.stateChanges.next();
  }

  private _placeholder: string;

  @Input()
  get placeholder() {
    return this._placeholder;
  }

  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  get empty() {
    const n = this.dateInput.value;
    return !n.area && !n.exchange && !n.subscriber;
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  private _required = false;

  @Input()
  get required() {
    return this._required;
  }

  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  private _disabled = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.dateInput.disable() : this.dateInput.enable();
    this.stateChanges.next();
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  ngOnInit() {
    this.dateInput.valueChanges.subscribe(value => {
      this.propagateChange(value);
      this.propagateTouch(value);
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.errorState = this.dateInput.value;
    return this.dateInput.invalid ? this.dateInput.errors : null;
  }

  private propagateChange = (_: any) => {
  };

  private propagateTouch = (_: any) => {
  };
}
