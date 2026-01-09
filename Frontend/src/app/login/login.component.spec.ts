// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { ElementRef } from '@angular/core';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//     });

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a title', () => {
//     expect(component.title).toEqual('loginGoogle');
//   });

//   it('should call googleAuthSDK on ngOnInit', () => {
//     spyOn(component, 'googleAuthSDK');
//     component.ngOnInit();
//     expect(component.googleAuthSDK).toHaveBeenCalled();
//   });

//   it('should call callLoginButton on button click', () => {
//     spyOn(component, 'callLoginButton');
//     const loginButton: ElementRef = new ElementRef(document.createElement('button'));
//     component.loginElement = loginButton;
//     fixture.detectChanges();

//     const button = fixture.nativeElement.querySelector('button');
//     button.click();

//     expect(component.callLoginButton).toHaveBeenCalled();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule] // Add RouterTestingModule
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial empty username and password', () => {
    expect(component.username).toEqual('');
    expect(component.password).toEqual('');
  });

  it('should navigate to home page when login button is clicked', () => {
    spyOn(component['router'], 'navigate'); // Spy on router.navigate method

    component.username = 'testUser';
    component.password = 'testPassword';
    component.login(); // Simulate login button click

    expect(component['router'].navigate).toHaveBeenCalledWith(['/home']);
  });
});