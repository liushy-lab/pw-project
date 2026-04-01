import { test, expect } from '@playwright/test';
import { HomePage } from './ui/pages/HomePage';
import { AuthPage } from './ui/pages/AuthPage';
import { DashboardPage } from './ui/pages/DashboardPage';

test.describe('Authentication tests', () => {
    let homePage;
    let authPage;
    let dashboardPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.openHomePage();

        authPage = new AuthPage(page);
        await homePage.header.openAuthPage();

        })
        
        test('Login with valid credentials', async ({ page }) => {
            await authPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

            dashboardPage = new DashboardPage(page);
            await expect(dashboardPage.pageTitle).toHaveText('Sales over the years');
            await expect(homePage.partialHeader).toBeVisible();
    })

        test('Login with invalid credentials', async ({ page }) => {
            await authPage.login('', '');

            await expect(authPage.emailAlert).toBeVisible();
            await expect(authPage.passwordAlert).toBeVisible();
        })
})