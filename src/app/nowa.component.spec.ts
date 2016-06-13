import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NowaAppComponent } from '../app/nowa.component';

beforeEachProviders(() => [NowaAppComponent]);

describe('App: Nowa', () => {
  it('should create the app',
      inject([NowaAppComponent], (app: NowaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'nowa works!\'',
      inject([NowaAppComponent], (app: NowaAppComponent) => {
    expect(app.title).toEqual('nowa works!');
  }));
});
