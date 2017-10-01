/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JokelistComponent } from './jokelist.component';

describe('JokelistComponent', () => {
  let component: JokelistComponent;
  let fixture: ComponentFixture<JokelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
