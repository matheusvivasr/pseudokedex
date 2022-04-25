import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudokedexComponent } from './pseudokedex.component';

describe('PseudokedexComponent', () => {
  let component: PseudokedexComponent;
  let fixture: ComponentFixture<PseudokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PseudokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
