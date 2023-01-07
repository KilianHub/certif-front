import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddMessageComponent } from './page-add-message.component';

describe('PageAddMessageComponent', () => {
  let component: PageAddMessageComponent;
  let fixture: ComponentFixture<PageAddMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
