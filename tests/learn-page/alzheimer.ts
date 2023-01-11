import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('[TC-943] - Alzheimer\'s and other dementias page appearence', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    await page.locator('text=Alzheimer\'s and other dementias >> nth=0').click();
    await expect(page).toHaveURL(/.*alzheimer/);
    });

    test('Check content 1', async ({ page }) => {
        await expect(page.locator('text=The burden of dementia is increasing globally as populations grow and age. This increase will present a challenge to healthcare systems globally. The number of adults living with dementia worldwide is expected to nearly triple, from an estimated 57 million people today to 153 million people by 2050.')).toBeVisible();
    });

    test('Check content 2', async ({ page }) => {
        await expect(page.locator('text=“As populations continue to age worldwide, neurological disorders will place even more pressure on health care services in the near future.” — Dr. Theo Vos, Professor of Health Metrics Sciences at the Institute for Health Metrics and Evaluation (IHME) at the University of Washington.')).toBeVisible();
    });

    test('Check content 3', async ({ page }) => {
        await expect(page.locator('text=People with late-stage Alzheimer’s often lose the ability to care for themselves. Like other conditions originating in the brain, Alzheimer’s does not just impact the mind but also the body. Over time, people with Alzheimer’s begin to lose the ability to walk, feed themselves, and even swallow, leading to more hospitalizations. There are treatments that can help, though currently there is no cure.')).toBeVisible();
    });

    test('Check content 4', async ({ page }) => {
        await expect(page.locator('text=Dementia is the seventh leading cause of death worldwide and one of the major causes of disability and dependency among older people globally. The global cost is tremendous—dementia spending exceeds US$1tril worldwide, and in every community, dementia undermines physical and social wellbeing.')).toBeVisible();
    });

    test('Check content 5', async ({ page }) => {
        await expect(page.locator('text=But Alzheimer’s is not inevitable as we age.')).toBeVisible();
    });

    test('Check content 6', async ({ page }) => {
        await expect(page.locator('text=Research has shown that a reduction in behavioral factors, such as smoking, physical inactivity, excessive alcohol consumption, and obesity can help to mitigate the risk. Improved access to education globally could also reduce dementia prevalence by 6.2 million cases globally by 2050.')).toBeVisible();
    });

    test('Check content 7', async ({ page }) => {
        await expect(page.locator('text=Explore Global Burden of Disease data to see how dementia affects your location’s health today, and what it will look like tomorrow.')).toBeVisible();
    });

    test('Check content 8', async ({ page }) => {
        await expect(page.locator('text=Recent research articles on Alzheimer\'s and other dementias:')).toBeVisible();
    });

    test('Check content 9', async ({ page }) => {
        await expect(page.locator('text=Estimation of the global prevalence of dementia in 2019 and forecasted prevalence in 2050: an analysis for the Global Burden of Disease Study 2019')).toBeVisible();
    });

    test('Check content 10', async ({ page }) => {
        await expect(page.locator('text=Global and regional spending on dementia care from 2000–2019 and expected future health spending scenarios from 2020–2050: An economic modeling exercise')).toBeVisible();
    });

    test('Check content 11', async ({ page }) => {
        await expect(page.locator('text=Dementia prevention, intervention, and care: 2020 report of the Lancet Commission')).toBeVisible();
    });

    test('Check content 12', async ({ page }) => {
        await expect(page.locator('text=Dementia, WHO Key Facts, https://www.who.int/news-room/fact-sheets/detail/dementia')).toBeVisible();
    });

    test('Check linked text Global Burden of Disease data', async ({ page }) => {
        await page.locator('text=Global Burden of Disease data').click();
        await expect(page).toHaveURL(/.*data\?chart_type=line&cause_id=543/);
    });

    test('Check link to dementia', async ({ page }) => {
        const [page1] = await Promise.all([
            page.waitForEvent('popup'),
            await page.locator('text=https://www.who.int/news-room/fact-sheets/detail/dementia').click()
        ]);
        await expect(page1).toHaveURL('https://www.who.int/news-room/fact-sheets/detail/dementia');
    });

    test('Check returning to Learn page', async ({ page }) => {
        await page.locator('text=Back to Learn').click();
        await expect(page).toHaveURL(/.*learn/);
    });

});