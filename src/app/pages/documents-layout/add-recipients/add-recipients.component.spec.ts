import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipientsComponent } from './add-recipients.component';

describe('AddRecipientsComponent', () => {
  let component: AddRecipientsComponent;
  let fixture: ComponentFixture<AddRecipientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRecipientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
