import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import DataPage from '../../../pages/data-page';
import Env from '../../../support/environments';

test.describe('Clickable elements on Timeline tab', () => {

//my pages
let data: DataPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
        await page.locator('text=Data >> nth=0').click();
        await expect (page.getByText('Use the Timeline chart to understand what the future of brain health looks like.')).toBeVisible();
    });

    test('Click on learn more on highlighted infobox', async ({ page }) => {
        await page.locator('text=Learn more').click();
        await expect(page).toHaveURL(/.*learn#uncertainty_interval/);
    });

});