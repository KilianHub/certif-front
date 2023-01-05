import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBurgerComponent } from './icon-burger.component';

describe('IconBurgerComponent', () => {
  let component: IconBurgerComponent;
  let fixture: ComponentFixture<IconBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
