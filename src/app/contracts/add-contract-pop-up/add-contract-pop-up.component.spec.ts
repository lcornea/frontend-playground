import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddContractPopUpComponent} from './add-contract-pop-up.component';

describe('AddContractPopUpComponent', () => {
  let component: AddContractPopUpComponent;
  let fixture: ComponentFixture<AddContractPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddContractPopUpComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContractPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
