import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehagaPckComponent } from './mehaga-pck.component';

describe('MehagaPckComponent', () => {
  let component: MehagaPckComponent;
  let fixture: ComponentFixture<MehagaPckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MehagaPckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MehagaPckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
