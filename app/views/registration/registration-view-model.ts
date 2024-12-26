import { Observable, Frame } from '@nativescript/core';
import { UserData } from '../../models/user.model';
import { validateTime, validateEmail } from '../../utils/validators';
import { AuthService } from '../../services/auth.service';

export class RegistrationViewModel extends Observable {
    private _name = '';
    private _birthTime = '';
    private _birthPlace = '';
    private _email = '';
    private _errorMessage = '';
    private _hasError = false;
    private _selectedGenderIndex = -1;
    private authService: AuthService;

    public genderOptions = ['Male', 'Female', 'Other'];

    constructor() {
        super();
        this.authService = new AuthService();
    }

    // ... existing getters/setters for name, birthTime, birthPlace, selectedGenderIndex ...

    get email(): string { return this._email; }
    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
            this.validateForm();
        }
    }

    get isFormValid(): boolean {
        return (
            this._name.length > 0 &&
            this._selectedGenderIndex >= 0 &&
            this._birthPlace.length > 0 &&
            validateTime(this._birthTime) &&
            (this._email === '' || validateEmail(this._email))
        );
    }

    async signInWithGoogle() {
        try {
            const user = await this.authService.signInWithGoogle();
            if (user) {
                this._email = user.email;
                this.notifyPropertyChange('email', this._email);
            }
        } catch (error) {
            this._errorMessage = "Google sign in failed. Please try again.";
            this._hasError = true;
            this.notifyPropertyChange('errorMessage', this._errorMessage);
            this.notifyPropertyChange('hasError', this._hasError);
        }
    }

    register() {
        if (!this.isFormValid) {
            this._errorMessage = "Please fill in all required fields correctly";
            this._hasError = true;
            this.notifyPropertyChange('errorMessage', this._errorMessage);
            this.notifyPropertyChange('hasError', this._hasError);
            return;
        }

        const userData: UserData = {
            name: this._name,
            sex: this.genderOptions[this._selectedGenderIndex],
            birthPlace: this._birthPlace,
            birthTime: this._birthTime,
            email: this._email || undefined
        };

        Frame.topmost().navigate({
            moduleName: "views/birth-chart/birth-chart-page",
            context: userData
        });
    }
}