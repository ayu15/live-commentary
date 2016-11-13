/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListenerComponent } from './listener.component';

describe('ListenerComponent', () => {
  let component: ListenerComponent;
  let fixture: ComponentFixture<ListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
