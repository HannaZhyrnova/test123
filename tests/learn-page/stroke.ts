import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('[TC-944] - Stroke page appearence', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    await page.locator('text=Stroke >> nth=1').click();
    await expect(page).toHaveURL(/.*stroke/);
    });

    test('Check content 1', async ({ page }) => {
        await expect(page.locator('text=Total numbers of stroke cases and deaths have both increased significantly since 1990. Stroke is the second-leading cause of death, comprising 11.6% of all deaths worldwide. However, stroke isn’t always fatal. In 2019, 101 million people were living with the consequences of having suffered a stroke. The lingering effects can include vision or speech loss, as well as confusion or paralysis.')).toBeVisible();
    });

    test('Check content 2', async ({ page }) => {
        await expect(page.locator('text=Globally, one out of every four people over age 25 is likely to suffer a stroke in their lifetime.')).toBeVisible();
    });

    test('Check content 3', async ({ page }) => {
        await expect(page.locator('text=Stroke mortality rates have been decreasing, a sign of successful treatments, but prevention has been much less effective. That leaves enormous potential to reduce the burden. More than three-quarters of strokes worldwide could be prevented by addressing behavioral risk factors such as smoking, poor diet, and low physical activity.')).toBeVisible();
    });

    test('Check content 4', async ({ page }) => {
        await expect(page.locator('text=But if current trends continue, IHME research predicts there will be more than 200 million stroke survivors and 13 million deaths from stroke annually by 2050. Without urgent implementation of prevention strategies, low-income countries will be particularly hard-hit.')).toBeVisible();
    });

    test('Check content 5', async ({ page }) => {
        await expect(page.locator('text=“Across countries, there is an extremely high lifetime risk for stroke, which is a startling finding. It is clear that younger adults need to think about long-term health risks.” — Dr. Gregory Roth, Associate Professor in the Division of Cardiology and Adjunct Associate Professor of Health Metrics Sciences at the Institute for Health Metrics and Evaluation (IHME) at the University of Washington School of Medicine.')).toBeVisible();
    });

    test('Check content 6', async ({ page }) => {
        await expect(page.locator('text=Explore Global Burden of Disease data to see how stroke affects your country’s health today, and what it will look like tomorrow.')).toBeVisible();
    });

    test('Check content 7', async ({ page }) => {
        await expect(page.locator('text=Recent research articles on stroke:')).toBeVisible();
    });

    test('Check content 8', async ({ page }) => {
        await expect(page.locator('text=Global, regional, and national burden of stroke and its risk factors, 1990–2019: a systematic analysis for the Global Burden of Disease Study 2019')).toBeVisible();
    });

    test('Check content 9', async ({ page }) => {
        await expect(page.locator('text=Temporal trend and attributable risk factors of stroke burden in China, 1990–2019: an analysis for the Global Burden of Disease Study 2019')).toBeVisible();
    });

    test('Check linked text Global Burden of Disease data', async ({ page }) => {
        await page.locator('text=Global Burden of Disease data').click();
        await expect(page).toHaveURL(/.*data\?chart_type=line&cause_id=495/);
    });

    test('Check returning to Learn page', async ({ page }) => {
        await page.locator('text=Back to Learn').click();
        await expect(page).toHaveURL(/.*learn/);
    });

});