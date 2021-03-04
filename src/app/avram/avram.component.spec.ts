import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvramComponent } from './avram.component';

describe('AvramComponent', () => {
  let component: AvramComponent;
  let fixture: ComponentFixture<AvramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
