import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddChannelComponent } from './page-add-channel.component';

describe('PageAddChannelComponent', () => {
  let component: PageAddChannelComponent;
  let fixture: ComponentFixture<PageAddChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
