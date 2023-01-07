import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListChannelsComponent } from './page-list-channels.component';

describe('PageListChannelsComponent', () => {
  let component: PageListChannelsComponent;
  let fixture: ComponentFixture<PageListChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListChannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
