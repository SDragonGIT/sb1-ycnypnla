import { ApplicationSettings } from '@nativescript/core';
import { UserData } from '../models/user.model';

export class UserService {
    private readonly USERS_KEY = 'registered_users';

    hasRegisteredUsers(): boolean {
        const users = this.getUsers();
        return users.length > 0;
    }

    getUsers(): UserData[] {
        const usersJson = ApplicationSettings.getString(this.USERS_KEY);
        return usersJson ? JSON.parse(usersJson) : [];
    }

    async registerUser(userData: UserData): Promise<void> {
        const users = this.getUsers();
        users.push(userData);
        ApplicationSettings.setString(this.USERS_KEY, JSON.stringify(users));
        return Promise.resolve();
    }

    async getUserByEmail(email: string): Promise<UserData | undefined> {
        const users = this.getUsers();
        return users.find(user => user.email === email);
    }
}