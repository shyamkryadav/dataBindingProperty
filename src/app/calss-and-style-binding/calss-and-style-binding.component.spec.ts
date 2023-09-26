import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalssAndStyleBindingComponent } from './calss-and-style-binding.component';

describe('CalssAndStyleBindingComponent', () => {
  let component: CalssAndStyleBindingComponent;
  let fixture: ComponentFixture<CalssAndStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalssAndStyleBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalssAndStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
