import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListMessagesComponent } from './page-list-messages.component';

describe('PageListMessagesComponent', () => {
  let component: PageListMessagesComponent;
  let fixture: ComponentFixture<PageListMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
