import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import DataPage from '../../pages/data-page';
import HomePage from '../../pages/home-page';
import Env from '../../support/environments';

test.describe('Appearence od header on Data page', () => {

//my pages
let data: DataPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
        await page.locator('text=Data >> nth=0').click();
    });

    test('Header on Data page', async ({ page }) => {
        await expect(page.locator('text=Get the facts on brain health around the world')).toBeVisible();
    });

});