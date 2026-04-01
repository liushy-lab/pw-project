import { test, expect } from '@playwright/test';

test.describe('Smoke test', () => {
    test('Main page loads correctly', async ({page}) => {
        await page.goto('/');

        const partialHeader = page.getByText(/Practice Black Box Testing/);
        await expect(partialHeader).toContainText('Practice Black Box Testing');

        const productsContainer = page.locator('.container[data-test]');
        await expect(productsContainer).toBeVisible();
    })
})