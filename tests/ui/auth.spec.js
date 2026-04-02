import { test, expect } from '../../fixtures/baseTest';

test.describe('Authentication tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.openHomePage();
        await homePage.header.openAuthPage();
        })
        
        test('Login with valid credentials', async ({ authPage, dashboardPage, homePage }) => {
            await authPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

            await expect(dashboardPage.pageTitle).toHaveText('Sales over the years');
            await expect(homePage.partialHeader).toBeVisible();
    })

        test('Login with invalid credentials', async ({ authPage }) => {
            await authPage.login('', '');

            await expect(authPage.emailAlert).toBeVisible();
            await expect(authPage.passwordAlert).toBeVisible();
        })
})