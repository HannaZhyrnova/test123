import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import DataPage from '../../../pages/data-page';
import Env from '../../../support/environments';

test.describe('Clickable elements on Population trends tab', () => {

//my pages
let data: DataPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
        await page.locator('text=Data >> nth=0').click();
        await page.locator('text=Population trends >> nth=0').click();
        await expect(page.locator('text=Use the population trends chart to understand what population trends are driving changes in brain health.')).toBeVisible();
    });

    test('Click on learn more on highlighted infobox', async ({ page }) => {
        await page.locator('text=Learn more').click();
        await expect(page).toHaveURL(/.*learn#uncertainty_interval/);
    });

});