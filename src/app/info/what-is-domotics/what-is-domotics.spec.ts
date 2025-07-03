import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsDomotics } from './what-is-domotics';

describe('WhatIsDomotics', () => {
  let component: WhatIsDomotics;
  let fixture: ComponentFixture<WhatIsDomotics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsDomotics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsDomotics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
