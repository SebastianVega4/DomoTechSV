import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsDomoticsComponent } from './what-is-domotics';

describe('WhatIsDomotics', () => {
  let component: WhatIsDomoticsComponent;
  let fixture: ComponentFixture<WhatIsDomoticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsDomoticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsDomoticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
