import { Observable } from '@nativescript/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

export class AuthService extends Observable {
    private auth: firebase.Auth;

    constructor() {
        super();
        this.auth = firebase.auth();
    }

    async signInWithGoogle(): Promise<firebase.User | null> {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await this.auth.signInWithProvider(provider);
            return result.user;
        } catch (error) {
            console.error('Google sign in error:', error);
            return null;
        }
    }

    async signOut(): Promise<void> {
        await this.auth.signOut();
    }

    getCurrentUser(): firebase.User | null {
        return this.auth.currentUser;
    }
}