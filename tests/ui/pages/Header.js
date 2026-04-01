export class Header {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('[data-test="nav-sign-in"]');
    }

    async openSignInPage() {
        await this.signInButton.click();
    }
}