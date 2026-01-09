import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing'; //for changing pages


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      appRoutingModule
    ],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'team23-IdeaBoard'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('team23-IdeaBoard');
  });

});