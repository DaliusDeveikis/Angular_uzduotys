import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatisticComponent } from './task-statistic.component';

describe('TaskStatisticComponent', () => {
  let component: TaskStatisticComponent;
  let fixture: ComponentFixture<TaskStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
