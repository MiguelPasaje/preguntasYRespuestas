import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraComponent } from './BotoneraComponent';

describe('BotoneraComponent', () => {
  let component: BotoneraComponent;
  let fixture: ComponentFixture<BotoneraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotoneraComponent],
    });
    fixture = TestBed.createComponent(BotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
