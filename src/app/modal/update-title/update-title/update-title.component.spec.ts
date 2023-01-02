import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTitleComponent } from './update-title.component';

describe('UpdateTitleComponent', () => {
  let component: UpdateTitleComponent;
  let fixture: ComponentFixture<UpdateTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
