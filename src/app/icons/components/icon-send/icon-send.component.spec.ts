import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSendComponent } from './icon-send.component';

describe('IconSendComponent', () => {
  let component: IconSendComponent;
  let fixture: ComponentFixture<IconSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
