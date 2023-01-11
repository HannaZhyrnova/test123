import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import Env from '../../support/environments';

test.describe('[TC-859] - Check all clickable elemnts on Home page and where they provide the user', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{ waitUntil: 'domcontentloaded' });
        await page.locator('text=About >> nth=0').click();
        await expect(page).toHaveURL(/.*about/);
    });

    test('The Lancet linked text opens the lancet page', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=The Lancet').click()
        ]);
        await expect(page1).toHaveURL('https://www.thelancet.com/gbd');
    });

    test('Global Health Data Exchange (GHDx) linked text opens', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=Global Health Data Exchange (GHDx)').click()
        ])
        await expect(page1).toHaveURL('https://ghdx.healthdata.org/gbd-2019/data-input-sources');
    });

    test('http://www.healthdata.org/about/terms-and-conditions link opens IHME page with terms and conditions', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=http://www.healthdata.org/about/terms-and-conditions').click()
        ])
        await expect(page1).toHaveURL('https://www.healthdata.org/data-tools-practices/data-practices/terms-and-conditions');
    });

    test('ihmeclientservices.org link opens IHME clint services page', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=ihmeclientservices.org').click()
        ])
        await expect(page1).toHaveURL('https://www.ihmeclientservices.org/');
    });

    test('www.healthdata.org/about link opens TODO page', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=www.healthdata.org/about >> nth=1').click()
        ])
        await expect(page1).toHaveURL('https://www.healthdata.org/about');
    });

    test('Ability to click on contact us button', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=Contact us').click()
        ])
        await expect(page1).toHaveURL('https://www.ihmeclientservices.org/contact.html');
    });
    
});