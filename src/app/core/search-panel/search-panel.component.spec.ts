import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchPanelComponent} from './search-panel.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {getByTestId, getNodeText} from '@testing-library/dom';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPanelComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    spyOn(component, 'onSearch').and.callThrough();
    component.value = 'test';
    fixture.autoDetectChanges(true);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind value', () => {
    const input = getByTestId(fixture.nativeElement, 'search-input') as HTMLInputElement;
    expect(input.value)
      .toBe('test');
  });

  it('should input value', () => {
    const input = getByTestId(fixture.nativeElement, 'search-input') as HTMLInputElement;
    input.value = 'new test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.value)
      .toBe('new test');
  });

  it('should clear value', () => {
    getByTestId(fixture.nativeElement, 'clear-btn').click();
    fixture.detectChanges();
    expect(getNodeText(getByTestId(fixture.nativeElement, 'search-input')))
      .toBeFalsy();
    expect(component.value).toBeFalsy();
  });

  it('should react on search button click', () => {
    getByTestId(fixture.nativeElement, 'search-btn').click();
    expect(component.onSearch).toHaveBeenCalled();
  });

});
