import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvkyComponent } from './prvky.component';

describe('PrvkyComponent', () => {
  let component: PrvkyComponent;
  let fixture: ComponentFixture<PrvkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvkyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrvkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
