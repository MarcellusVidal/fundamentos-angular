import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipiCustomizadoComponent } from './pipi-customizado.component';

describe('PipiCustomizadoComponent', () => {
  let component: PipiCustomizadoComponent;
  let fixture: ComponentFixture<PipiCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipiCustomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipiCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
