import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import FactsheetPage from '../../pages/factsheet-page';
import Env from '../../support/environments';

test.describe('Content on Factsheet page', () => {

  //my pages
  let home: FactsheetPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Factsheet >> nth=0').click();
    await expect(page).toHaveURL(/.*factsheet/);
    await expect(page.locator('text=Understand brain health in the United States')).toBeVisible();
    });
    
    test('Check title on the hero image', async ({ page }) => {
        await expect(page.locator('text=Different countries, different drivers of brain health burden')).toBeVisible();
      });
  
    test('Check description on the hero image', async ({ page }) => {
        await expect(page.locator('text=The burden of brain disorders is projected to increase. Progress in addressing this burden varies dramatically by country and region. Use IHME data to take a closer look at the impact of brain health in your country now and in the future.')).toBeVisible();
      });
  
    test('Check title 3', async ({ page }) => {
        await expect(page.locator('text=How will the age structure in the United States change?')).toBeVisible();
      });

    test('Check description for title 3 - part1', async ({ page }) => {
        await expect(page.locator('text=As a country’s population grows, cases of brain health disorders are expected to rise.')).toBeVisible();
      });

    test('Check description for title 3 - part2', async ({ page }) => {
        await expect(page.locator('text=Globally, the population is shifting to older ages, with the world expected to have 2.37B people older than 65 in 2100. Understanding these patterns is crucial in planning for resource and healthcare needs.')).toBeVisible();
      });

    test('Check title 4', async ({ page }) => {
        await expect(page.locator('text=How do the most prevalent brain conditions in the United States compare to the global ranking?')).toBeVisible();
      });
      
    test('Check first sentences for title 4', async ({ page }) => {
        await expect(page.locator('text=Ranking of the top 5 brain health conditions in the United States compared to Global burden:')).toBeVisible();
      });
    
    test('Check title 5', async ({ page }) => {
        await expect(page.locator('text=Which brain conditions cause the greatest burden in the United States, and how does that vary by age?')).toBeVisible();
      });

    test('Check dynamic text block under title 5', async ({ page }) => {
        await expect(page.locator('text=Conditions of the brain impact people of all ages. Ages 60 to 64 experience the greatest burden due to brain conditions in the United States.')).toBeVisible();
      });
    
    test('Check title 6', async ({ page }) => {
        await expect(page.locator('text=The burden of dementia is increasing in all countries around the world. How will this impact future spending on care?')).toBeVisible();
      });

    test('Check text block under title 6 - paragraph1', async ({ page }) => {
        await expect(page.locator('text=All countries will experience increases in the diagnosis and treatment rates of dementia within the next 25 years. This increase could present challenges to healthcare systems around the world unless they are prepared.')).toBeVisible();
      });

    test('Check text block under title 6 - paragraph2', async ({ page }) => {
        await expect(page.locator('text=Consider this: dementia spending is expected to represent 11% of all healthcare spending by 2050.')).toBeVisible();
      });

    test('Check text block under title 6 - paragraph3', async ({ page }) => {
        await expect(page.locator('text=Now consider the magnitude of resources needed to ensure not only adequate care for aging populations, but support for their caregivers.')).toBeVisible();
      });
});