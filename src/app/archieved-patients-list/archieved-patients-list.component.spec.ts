import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievedPatientsListComponent } from './archieved-patients-list.component';

describe('ArchievedPatientsListComponent', () => {
  let component: ArchievedPatientsListComponent;
  let fixture: ComponentFixture<ArchievedPatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchievedPatientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchievedPatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
