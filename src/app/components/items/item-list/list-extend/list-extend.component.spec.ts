import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExtendComponent } from './list-extend.component';

describe('ListExtendComponent', () => {
  let component: ListExtendComponent;
  let fixture: ComponentFixture<ListExtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListExtendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
