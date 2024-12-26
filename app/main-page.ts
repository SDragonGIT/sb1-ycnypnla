import { EventData, Page } from '@nativescript/core';
import { MainViewModel } from './main-view-model';
import { UserService } from './services/user-service';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new MainViewModel();
    
    // Navigate to registration if user isn't registered
    const userService = new UserService();
    if (!userService.hasRegisteredUsers()) {
        page.frame.navigate({
            moduleName: "views/registration/registration-page"
        });
    }
}