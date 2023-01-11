import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('[TC-942] - Depression page appearence', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    await page.locator('text=Depression >> nth=1').click();
    await expect(page).toHaveURL(/.*depression/);
    });

    test('Check content 1', async ({ page }) => {
        await expect(page.locator('text=Depression, also known as major depressive disorder, is among the most prevalent brain disorders and a major contributor to disability worldwide. In 2019, depression was the second-leading cause of death and disability globally. As populations have grown, case numbers have increased. More than 279 million people around the world are living with depressive disorders today, up 63% from 1990. This increase outpaces the rate of population growth. The COVID-19 pandemic led to a stark rise in depressive disorders in 2020—a 28% increase, disproportionately affecting women and children.')).toBeVisible();
    });

    test('Check content 2', async ({ page }) => {
        await expect(page.locator('text=“We found that [mental disorders, such as depression] are most prevalent and most impactful between the ages of 15 and 65, at a time of life when we are expected to be the most productive in the population. We need to plan for the future, and we need to plan for our mental health response.”')).toBeVisible();
    });

    test('Check content 3', async ({ page }) => {
        await expect(page.locator('text=—Alize J. Ferrari, PhD, research associate for the Psychiatric Epidemiology and Burden of Disease Research (PEABOD) Group based at the Queensland Centre for Mental Health Research, Queensland, Australia and Affiliate Assistant Professor at the Institute for Health Metrics and Evaluation (IHME) at the University of Washington.')).toBeVisible();
    });

    test('Check content 4', async ({ page }) => {
        await expect(page.locator('text=Depression can be highly disabling, affecting all areas of a person’s life. And the burden goes beyond the individual with depression, affecting the daily lives of caregivers, as well as governments and employers.')).toBeVisible();
    });

    test('Check content 5', async ({ page }) => {
        await expect(page.locator('text=Explore the Global Burden of Disease data to see how depression affects your country’s health today, and what it might look like tomorrow.')).toBeVisible();
    });

    test('Check content 6', async ({ page }) => {
        await expect(page.locator('text=Recent research articles on depression:')).toBeVisible();
    });

    test('Check content 7', async ({ page }) => {
        await expect(page.locator('text=Global, regional, and national burden of 12 mental disorders in 204 countries and territories, 1990–2019: a systematic analysis for the Global Burden of Disease Study 2019')).toBeVisible();
    });

    test('Check content 8', async ({ page }) => {
        await expect(page.locator('text=Global prevalence and burden of depressive and anxiety disorders in 204 countries and territories in 2020 due to the COVID-19 pandemic')).toBeVisible();
    });

    test('Check content 9', async ({ page }) => {
        await expect(page.locator('text=The global gap in treatment coverage for major depressive disorder in 84 countries from 2000–2019: A systematic review and Bayesian meta-regression analysis')).toBeVisible();
    });

    test('Check linked text Global Burden of Disease data', async ({ page }) => {
        await page.locator('text=Global Burden of Disease data').click();
        await expect(page).toHaveURL(/.*data\?chart_type=line&cause_id=567/);
    });

    test('Check returning to Learn page', async ({ page }) => {
        await page.locator('text=Back to Learn').click();
        await expect(page).toHaveURL(/.*learn/);
    });

});