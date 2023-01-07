import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteChannelComponent } from './page-delete-channel.component';

describe('PageDeleteChannelComponent', () => {
  let component: PageDeleteChannelComponent;
  let fixture: ComponentFixture<PageDeleteChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeleteChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
