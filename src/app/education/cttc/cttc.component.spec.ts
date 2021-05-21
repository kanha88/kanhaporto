import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CttcComponent } from './cttc.component';

describe('CttcComponent', () => {
  let component: CttcComponent;
  let fixture: ComponentFixture<CttcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CttcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CttcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
