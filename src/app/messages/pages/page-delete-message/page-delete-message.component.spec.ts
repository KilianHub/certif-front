import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteMessageComponent } from './page-delete-message.component';

describe('PageDeleteMessageComponent', () => {
  let component: PageDeleteMessageComponent;
  let fixture: ComponentFixture<PageDeleteMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeleteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
