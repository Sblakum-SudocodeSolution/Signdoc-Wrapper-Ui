import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLayoutComponent } from './template-layout.component';

describe('TemplateLayoutComponent', () => {
  let component: TemplateLayoutComponent;
  let fixture: ComponentFixture<TemplateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
