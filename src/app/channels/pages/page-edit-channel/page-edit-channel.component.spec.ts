import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditChannelComponent } from './page-edit-channel.component';

describe('PageEditChannelComponent', () => {
  let component: PageEditChannelComponent;
  let fixture: ComponentFixture<PageEditChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
