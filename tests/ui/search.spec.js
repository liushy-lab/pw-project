import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Search products tests', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.openHomePage();
        
    })

    test('Search existing product', async ({ page }) => {
        await homePage.searchProduct('thor hammer');
        await expect(homePage.foundProducts.first()).toBeVisible();
        await expect(homePage.noProductsFoundCaption).toBeHidden();
    })

    test('Search non-existing product', async ({ page }) => {
        await homePage.searchProduct('non-existing product');
        await expect(homePage.foundProducts.first()).toBeHidden();
        await expect(homePage.noProductsFoundCaption).toBeVisible();
    })
})