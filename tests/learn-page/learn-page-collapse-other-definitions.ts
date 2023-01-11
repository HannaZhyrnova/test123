import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('[TC-941] - other definitions collapse', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    });

    test('Check collapse of Nursing facility based care rate', async ({ page }) => {
        await page.locator('text=Nursing facility based care rate').click();
        await expect(page.locator('text=Fraction of diagnosed and undiagnosed patients being treated for dementia in a facility.')).toBeVisible();
        await page.locator('text=Nursing facility based care rate').click();
        await expect(page.locator('text=Fraction of diagnosed and undiagnosed patients being treated for dementia in a facility.')).toHaveCount(0);
    });

    test('Check collapse of Community based care', async ({ page }) => {
        await page.locator('text=Community based care >> nth=0').click();
        await expect(page.locator('text=Fraction of diagnosed and undiagnosed patients being treated for dementia in the community.')).toBeVisible();
        await page.locator('text=Community based care >> nth=0').click();
        await expect(page.locator('text=Fraction of diagnosed and undiagnosed patients being treated for dementia in the community.')).toHaveCount(0);
    });

    test('Check collapse of Community based care vs. nursing facility based care, Unit Costs', async ({ page }) => {
        await page.locator('text=Community based care vs. nursing facility based care, Unit Costs').click();
        await expect(page.locator('text=Average annual cost for treating a dementia patient broken out by nursing facility and community.')).toBeVisible();
        await page.locator('text=Community based care vs. nursing facility based care, Unit Costs').click();
        await expect(page.locator('text=Average annual cost for treating a dementia patient broken out by nursing facility and community.')).toHaveCount(0);
    });

    test('Check collapse of Attributable dementia spending', async ({ page }) => {
        await page.locator('text=Attributable dementia spending').click();
        await expect(page.locator('text=Spending attributable dementia that encompasses diagnosed cases in a facility and community and undiagnosed cases in a facility.')).toBeVisible();
        await page.locator('text=Attributable dementia spending').click();
        await expect(page.locator('text=Spending attributable dementia that encompasses diagnosed cases in a facility and community and undiagnosed cases in a facility.')).toHaveCount(0);
    });

    test('Check collapse of Uncertainty interval', async ({ page }) => {
        await page.locator('text=Uncertainty interval').click();
        await expect(page.locator('text=A range of values that reflects the certainty of an estimate. Larger uncertainty intervals can result from limited data availability, small studies, and conflicting data, while smaller uncertainty intervals can result from extensive data availability, large studies, and data that are consistent across sources.')).toBeVisible();
        await page.locator('text=Uncertainty interval >> nth=0').click();
        await expect(page.locator('text=A range of values that reflects the certainty of an estimate. Larger uncertainty intervals can result from limited data availability, small studies, and conflicting data, while smaller uncertainty intervals can result from extensive data availability, large studies, and data that are consistent across sources.')).toHaveCount(0);
    });

});