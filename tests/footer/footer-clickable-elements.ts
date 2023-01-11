import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import HomePage from '../../pages/home-page';
import Env from '../../support/environments';

test.describe('[TC-1002] - Check all clickable elemnts on footer and where they provide the user', () => {

//my pages
let home: HomePage;

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    });

    test('About the Brain Health Initiative linked text opens About page', async ({ page }) => {
        await page.locator('text=About the Brain Health Initiative').click();
        await expect(page).toHaveURL(/.*about#bhi/);
    });

    test('About the Global Burden of Disease (GBD) linked text opens About page', async ({ page }) => {
        await page.locator('text=About the Global Burden of Disease (GBD)').click();
        await expect(page).toHaveURL(/.*about#gbd/);
    });

    test('Trends linked text opens Data page', async ({ page }) => {
        await page.locator('text=Trends >> nth=4').click();
        await expect(page).toHaveURL(/.*data\?chart_type=line/);
    });

    test('Compare burden linked text opens Data page', async ({ page }) => {
        await page.locator('text=Compare burden').click();
        await expect(page).toHaveURL(/.*data\?chart_type=bar/);
    });

    test('Geographic variation linked text opens Learn page', async ({ page }) => {
        await page.locator('text=Geographic variation').click();
        await expect(page).toHaveURL(/.*data\?chart_type=map/);
    });

    test('Population trends linked text opens Data page', async ({ page }) => {
        await page.locator('text=Population trends >> nth=1').click();
        await expect(page).toHaveURL(/.*data\?chart_type=population/);
    });

    test('Alzheimer\'s and other dementias linked text opens Alzheimer\'s and other dementias page', async ({ page }) => {
        await page.locator('text=Alzheimer\'s and other dementias').click();
        await expect(page).toHaveURL(/.*alzheimer/);
    });

    test('Stroke linked text opens Stroke page', async ({ page }) => {
        await page.locator('text=stroke >> nth=4').click();
        await expect(page).toHaveURL(/.*stroke/);
    });

    test('Depression disorders linked text opens Depression disorders page', async ({ page }) => {
        await page.locator('text=Depression disorders').click();
        await expect(page).toHaveURL(/.*depression/);
    });

    test('Definitions linked text opens Learn page', async ({ page }) => {
        await page.locator('text=Definitions').click();
        await expect(page).toHaveURL(/.*learn#definitions/);
    });

});