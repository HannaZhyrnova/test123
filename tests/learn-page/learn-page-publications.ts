import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('[TC-901] - Definitions and conditions expand/collapse', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    });

    test('Go to publication Global and regional spending on dementia care from 2000–2019', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=Global and regional spending on dementia care from 2000–2019').click()
        ]);
        await expect(page1).toHaveURL('https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(22)00067-0/fulltext');
    });

    test('Go to publication Fertility, mortality, migration, and population scenarios for 195 countries and territories from 2017 to 2100:', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text= Fertility, mortality, migration, and population scenarios for 195 countries and territories from 2017 to 2100:').click()
        ]);
        await expect(page1).toHaveURL('https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30677-2/fulltext');
    });

    test('Go to publication Estimation of the global prevalence of dementia in 2019 and forecasted prevalence in 2050:', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=Estimation of the global prevalence of dementia in 2019 and forecasted prevalence in 2050:').click()
        ]);
        await expect(page1).toHaveURL('https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(21)00249-8/fulltext');
    });

    test('Go to publication Global prevalence and burden of depressive and anxiety disorders', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text= Global prevalence and burden of depressive and anxiety disorders').click()
        ]);
        await expect(page1).toHaveURL('https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02143-7/fulltext');
    });

    test('Go to publication Optimizing brain health across the life course: WHO position paper', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=Optimizing brain health across the life course: WHO position paper').click()
        ]);
        await expect(page1).toHaveURL('https://www.who.int/publications/i/item/9789240054561');
    });

    test('Go to publication Global, regional, and national burden of stroke and its risk factors, 1990–2019:', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=Global, regional, and national burden of stroke and its risk factors, 1990–2019:').click()
        ]);
        await expect(page1).toHaveURL('https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(21)00252-0/fulltext');
    });

});