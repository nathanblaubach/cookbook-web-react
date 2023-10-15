import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecardRowComponent } from './notecard-row.component';

describe('NotecardRowComponent', () => {
  let component: NotecardRowComponent;
  let fixture: ComponentFixture<NotecardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotecardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
