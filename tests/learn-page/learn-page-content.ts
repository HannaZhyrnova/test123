import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('Content on Learn page', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    });

    test('Check header on the hero image', async ({ page }) => {
      await expect(page.locator('text=Learn about the conditions that make up brain health')).toBeVisible();
    });

    test('Check description on the hero image', async ({ page }) => {
      await expect(page.locator('text=Conditions of the brain can affect people of all ages and take many forms. Learn more about the conditions under the umbrella of brain health, including a deep dive into three disorders: depression, Alzheimer\'s, and stroke.')).toBeVisible();
    });

    test('Check appearence of top condition text - depression', async ({ page }) => {
      await expect(page.locator('text=Depression, also known as major depressive disorder, is among the most prevalent brain disorders and a major contributor to disability worldwide. In 2019, depression was the second-leading cause of death and disability globally.')).toBeVisible();
    });

    test('Check appearence of top condition text - Alzheimer\'s and other dementias', async ({ page }) => {
      await expect(page.locator('text=The burden of dementia is increasing globally as populations grow and age. This increase will present a challenge to healthcare systems globally.')).toBeVisible();
    });

    test('Check appearence of top condition text - Stroke', async ({ page }) => {
      await expect(page.locator('text=Total numbers of stroke cases and deaths have both increased significantly since 1990. Stroke is the second-leading cause of death, comprising 11.6% of all deaths worldwide.')).toBeVisible();
    });

    test('Check definition header', async ({ page }) => {
      await expect(page.locator('text=Definitions and conditions of the brain')).toBeVisible();
    });

    test('Check publication content card1', async ({ page }) => {
        await expect(page.locator('text=Global and regional spending on dementia care from 2000–2019 and expected future health spending scenarios from 2020–2050: An economic modelling exercise')).toBeVisible();
      });

    test('Check publication content card2', async ({ page }) => {
        await expect(page.locator('text=Fertility, mortality, migration, and population scenarios for 195 countries and territories from 2017 to 2100: a forecasting analysis for the Global Burden of Disease Study')).toBeVisible();
      });
    
      test('Check publication content card3', async ({ page }) => {
        await expect(page.locator('text=Estimation of the global prevalence of dementia in 2019 and forecasted prevalence in 2050: an analysis for the Global Burden of Disease Study 2019')).toBeVisible();
      });

    test('Check publication content card4', async ({ page }) => {
        await expect(page.locator('text=Global prevalence and burden of depressive and anxiety disorders in 204 countries and territories in 2020 due to the COVID-19 pandemic')).toBeVisible();
      });

    test('Check publication content card5', async ({ page }) => {
        await expect(page.locator('text=Optimizing brain health across the life course: WHO position paper')).toBeVisible();
      });

    test('Check publication content card6', async ({ page }) => {
        await expect(page.locator('text=Global, regional, and national burden of stroke and its risk factors, 1990–2019: a systematic analysis for the Global Burden of Disease Study 2019')).toBeVisible();
      });
});