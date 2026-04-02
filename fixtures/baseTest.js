import { test as baseTest} from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { AuthPage } from '../pages/AuthPage';
import { DashboardPage } from '../pages/DashboardPage';

export const baseTest = baseTest.extend({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    authPage: async ({ page }, use) => {
        const authPage = new AuthPage(page);
        await use(authPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage;
        await use(dashboardPage);
    }
});

export { expect } from '@playwright/test';