import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import DataPage from '../../../pages/data-page';
import Env from '../../../support/environments';

test.describe('Description on Timeline tab', () => {

//my pages
let data: DataPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
        await page.locator('text=Data >> nth=0').click();
        await page.locator('text=Timeline >> nth=0').click();
        await expect (page.getByText('Use the Timeline chart to understand what the future of brain health looks like.')).toBeVisible();
    });

    test('Description on Timeline tab part1', async ({ page }) => {
        await expect(page.locator('text=Understanding health data is the first step in identifying where further attention and investment could make the greatest impact. This tool provides data for 20 countries and will expand over time to include 204 countries and territories. Use the timeline chart to understand what the future of brain health looks like.')).toBeVisible();
    });

    test('Description on highlighted infobox', async ({ page }) => {
        await expect(page.locator('text=Uncertainty intervals shown in this chart reflect data availability and consistency, among other factors. Learn More.')).toBeVisible();
    });

});