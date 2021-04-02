/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenericFormComponent } from './generic-form.component';

describe('GenericFormComponent', () => {
  let component: GenericFormComponent;
  let fixture: ComponentFixture<GenericFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
