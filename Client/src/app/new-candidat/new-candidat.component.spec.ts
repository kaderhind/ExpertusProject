import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCandidatComponent } from './new-candidat.component';

describe('NewCandidatComponent', () => {
  let component: NewCandidatComponent;
  let fixture: ComponentFixture<NewCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
