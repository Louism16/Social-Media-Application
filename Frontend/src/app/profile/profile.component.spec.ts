import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    });

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with user profile data', () => {
    expect(component.userProfile.firstName).toBe('Louis');
    expect(component.userProfile.lastName).toBe('Marca');
    expect(component.userProfile.email).toBe('lom225@lehigh.edu');
    expect(component.userProfile.genderIdentity).toBe('Male');
    expect(component.userProfile.sexualOrientation).toBe('Heterosexual');
  });

  it('should toggle isEditing on editProfile()', () => {
    expect(component.isEditing).toBe(false);
    component.editProfile();
    expect(component.isEditing).toBe(true);
  });

  it('should toggle isEditing on cancelEdit()', () => {
    component.isEditing = true;
    component.cancelEdit();
    expect(component.isEditing).toBe(false);
  });

  // Add more test cases as needed for updateProfile(), etc.
});