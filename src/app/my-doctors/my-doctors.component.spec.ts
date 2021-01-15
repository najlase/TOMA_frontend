import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoctorsComponent } from './my-doctors.component';

describe('DoctorsComponent', () => {
  let component: MyDoctorsComponent;
  let fixture: ComponentFixture<MyDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
