import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstituicoesPage } from './instituicoes.page';

describe('InstituicoesPage', () => {
  let component: InstituicoesPage;
  let fixture: ComponentFixture<InstituicoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
