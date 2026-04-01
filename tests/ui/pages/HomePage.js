import { Header } from './Header';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.partialHeader = page.getByText(/Practice Black Box Testing/);
        this.searchInput = page.locator('[data-test="search-query"]');
        this.searchButton = page.locator('[data-test="search-submit"]');
        this.searchCaption = page.locator('[data-test="search-caption"]');
        this.foundProducts = page.locator('[data-test^="product-"]');
        this.noProductsFoundCaption = page.locator('[data-test="no-results"]');
    }

    async openHomePage() {
        await this.page.goto('/');
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }
}