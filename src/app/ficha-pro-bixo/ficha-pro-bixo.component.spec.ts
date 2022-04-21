import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaProBixoComponent } from './ficha-pro-bixo.component';

describe('FichaProBixoComponent', () => {
  let component: FichaProBixoComponent;
  let fixture: ComponentFixture<FichaProBixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaProBixoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaProBixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
