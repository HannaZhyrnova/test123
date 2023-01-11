import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import HomePage from '../../pages/home-page';
import Env from '../../support/environments';

test.describe('[TC-930] - Check all clickable elemnts on Home page and where they provide the user', () => {

//my pages
let home: HomePage;

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    });

    test('Dementia linked text opens Dementia page', async ({ page }) => {
        await page.locator('text=Dementia >> nth=0').click();
        await expect(page).toHaveURL(/.*alzheimer/);
    });

    test('Stroke linked text opens Stroke page', async ({ page }) => {
        await page.locator('text=stroke >> nth=0').click();
        await expect(page).toHaveURL(/.*stroke/);
    });

    test('Depression linked text opens Depression page', async ({ page }) => {
        await page.locator('text=depression >> nth=0').click();
        await expect(page).toHaveURL(/.*depression/);
    });

    test('Explore global trends linked text opens Data page', async ({ page }) => {
        await page.locator('text=Explore global trends').click();
        await expect(page).toHaveURL(/.*data\?chart_type=map/);
    });

    test('Learn more linked text opens Learn page', async ({ page }) => {
        await page.locator('text=Learn more').click();
        await expect(page).toHaveURL(/.*learn/);
    });

    test('factsheet linked text opens Factsheet page', async ({ page }) => {
        await page.locator('text=factsheet >> nth=1').click();
        await expect(page).toHaveURL(/.*factsheet/);
    });

    test('Check appearence of factsheet page with preselected country after click on the United States card', async ({ page }) => {
        await page.locator('text=the United States >> nth=1').click();
        await expect(page.locator('text=Understand brain health in the United States')).toBeVisible();
    });

    test('Check appearence of factsheet page with preselected country after click on Japan card', async ({ page }) => {
        await page.locator('text=Japan >> nth=1').click();
        await expect(page.locator('text=Understand brain health in Japan')).toBeVisible();
    });

    test('Check appearence of factsheet page with preselected country after click on China card', async ({ page }) => {
        await page.locator('text=China >> nth=1').click();
        await expect(page.locator('text=Understand brain health in China')).toBeVisible();
    });

    test('Check appearence of factsheet page with preselected country after click on Germany card', async ({ page }) => {
        await page.locator('text=Germany >> nth=1').click();
        await expect(page.locator('text=Understand brain health in Germany')).toBeVisible();
    });
});