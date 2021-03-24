import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuprinsComponent } from './cuprins.component';

describe('CuprinsComponent', () => {
  let component: CuprinsComponent;
  let fixture: ComponentFixture<CuprinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuprinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuprinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
