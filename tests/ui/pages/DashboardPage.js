export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = page.locator('[data-test="page-title"]');
        this.latestOrdersTable = page.locator('.table-hover');
    }

}