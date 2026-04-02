import { AuthPage } from './AuthPage';

export class HeaderPage {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('[data-test="nav-sign-in"]');
    }

    async openAuthPage() {
        await this.signInButton.click();
    }
}