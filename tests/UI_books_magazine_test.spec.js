import { test, expect } from "@playwright/test";
import { allure } from 'allure-playwright';
import { faker } from '@faker-js/faker';
import { BooksMagazinePage } from '@pages/books_magazine'
import { User } from '@utility/user';

let booksMagazinePage = BooksMagazinePage;
let user = User;

test.describe('Tests for the books magazine', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(process.env.DEMO_QA_URL)
        booksMagazinePage = new BooksMagazinePage(page);
        user = new User();
    }) 

    test('Регистрация нового пользователя', async ({ page }) => {
        allure.tags('cart')

        await test.step('Нажать на кнопку \'Book Store Application\'', async () => {
            await page.getByText('Book Store Application').click(); 
        })
        await test.step('Проверить видимость хидера с текстом \'Book Store Application\'', async () => {
            expect(page.locator('.main-header')).toHaveText('Book Store');
        })
        await test.step('Нажать на кнопку \'Login\'', async () => {
            await page.locator('#login').click()
        })
        await test.step('Нажать на кнопку \'New user\'', async () => {
            await page.locator('#newUser').click()
        })

        console.log(user)
        await test.step('Заполнить форму регистрации валидными данными', async () => {
           await booksMagazinePage.fillRegisterForm(user.getFirstName, user.getLastName, user.getUserName, user.getPassword);
        })
    })
        
})
