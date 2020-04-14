import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContractEditorPanelComponent} from './contract-editor-panel.component';

describe('ContractEditorPanelComponent', () => {
  let component: ContractEditorPanelComponent;
  let fixture: ComponentFixture<ContractEditorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContractEditorPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractEditorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
