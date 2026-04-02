import { test, expect } from '../../fixtures/baseTest';

test.describe('Search products tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.openHomePage();
    })

    test('Search existing product', async ({ homePage }) => {
        await homePage.searchProduct('thor hammer');
        await expect(homePage.foundProducts.first()).toBeVisible();
        await expect(homePage.noProductsFoundCaption).toBeHidden();
    })

    test('Search non-existing product', async ({ homePage }) => {
        await homePage.searchProduct('non-existing product');
        await expect(homePage.foundProducts.first()).toBeHidden();
        await expect(homePage.noProductsFoundCaption).toBeVisible();
    })
})