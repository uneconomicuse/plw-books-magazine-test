import { test } from "@playwright/test";

  /**
   * @param {import('@playwright/test').Page} page
   */

export class BooksMagazinePage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lastname');
        this.username = page.locator('#userName');
        this.password = page.locator('#password');
        this.captcha = page.frameLocator("iframe[title='reCAPTCHA']").locator('.recaptcha-checkbox-border');
    }

    async fillRegisterForm(firstName, lastName, userName, password) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.captcha.click();
    }

    async fillLoginForm(userName, password) {
        await this.username.fill(userName);
        await this.password.fill(password);
    }
}