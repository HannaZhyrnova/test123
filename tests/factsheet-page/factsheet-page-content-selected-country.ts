import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import FactsheetPage from '../../pages/factsheet-page';
import Env from '../../support/environments';

test.describe('[TC-945] - Content on Factsheet page', () => {

  //my pages
  let home: FactsheetPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Factsheet >> nth=0').click();
    await expect(page).toHaveURL(/.*factsheet/);
    await expect(page.locator('text=Understand brain health in the United States')).toBeVisible();
    });
    
    test('Change selected country', async ({ page }) => {
        await page.locator('text=the United States >> nth=0').click();
        await page.locator('text=China').click();
        await expect(page.locator('text=How will the age structure in China change?')).toBeVisible();
      });

});