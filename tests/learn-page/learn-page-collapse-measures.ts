import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('[TC-941] - Definitions and conditions collapse', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    });

    test('Check collapse of condition DALY', async ({ page }) => {
        await page.locator('text=DALY').click();
        await expect(page.locator('text=DALY is an abbreviation for disability-adjusted life year. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. DALYs equal the sum of years of life lost (YLLs) and years lived with disability (YLDs). One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels.')).toBeVisible();
        await page.locator('text=DALY >> nth=0').click();
        await expect(page.locator('text=DALY is an abbreviation for disability-adjusted life year. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. DALYs equal the sum of years of life lost (YLLs) and years lived with disability (YLDs). One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels.')).toHaveCount(0);
    });

    test('Check collapse of condition YLL', async ({ page }) => {
        await page.locator('text=YLL').click();
        await expect(page.locator('text=Years of life lost (YLLs) are years lost due to premature mortality. YLLs are calculated by subtracting the age at death from the longest possible life expectancy for a person at that age. For example, if the longest life expectancy for men in a given country is 75, but a man dies of cancer at 65, this would be 10 years of life lost due to cancer.')).toBeVisible();
        await page.locator('text=YLL >> nth=0').click();
        await expect(page.locator('text=Years of life lost (YLLs) are years lost due to premature mortality. YLLs are calculated by subtracting the age at death from the longest possible life expectancy for a person at that age. For example, if the longest life expectancy for men in a given country is 75, but a man dies of cancer at 65, this would be 10 years of life lost due to cancer.')).toHaveCount(0);
    });

    test('Check collapse of condition YLD', async ({ page }) => {
        await page.locator('text=YLD').click();
        await expect(page.locator('text=YLD is an abbreviation for years lived with disability, which can also be described as years lived in less than ideal health. This includes conditions such as influenza, which may last for only a few days, or epilepsy, which can last a lifetime. It is measured by taking the prevalence of the condition multiplied by the disability weight for that condition. Disability weights reflect the severity of different conditions and are developed through surveys of the general public.')).toBeVisible();
        await page.locator('text=YLD >> nth=0').click();
        await expect(page.locator('text=YLD is an abbreviation for years lived with disability, which can also be described as years lived in less than ideal health. This includes conditions such as influenza, which may last for only a few days, or epilepsy, which can last a lifetime. It is measured by taking the prevalence of the condition multiplied by the disability weight for that condition. Disability weights reflect the severity of different conditions and are developed through surveys of the general public.')).toHaveCount(0);
    });

    test('Check collapse of condition Prevalence', async ({ page }) => {
        await page.locator('text=Prevalence >> nth=0').click();
        await expect(page.locator('text=Prevalence is the total number of cases of a disease or injury in a population.')).toBeVisible();
        await page.locator('text=Prevalence >> nth=0').click();
        await expect(page.locator('text=Prevalence is the total number of cases of a disease or injury in a population.')).toHaveCount(0);
    });

    test('Check collapse of condition Incidence', async ({ page }) => {
        await page.locator('text=Incidence').click();
        await expect(page.locator('text=Incidence is the total number of new cases of a disease or injury in a given period.')).toBeVisible();
        await page.locator('text=Incidence >> nth=0').click();
        await expect(page.locator('text=Incidence is the total number of new cases of a disease or injury in a given period.')).toHaveCount(0);
    });

    test('Check collapse of condition Risk factor', async ({ page }) => {
        await page.locator('text=Risk factor >> nth=0').click();
        await expect(page.locator('text=A risk factor is any modifiable behavior or condition that increases the likelihood that a person will experience a negative health event. That event could be getting an illness, having an accident that causes injury or death or dying prematurely for any reason. If over time, people engage in less risky behavior, or if fewer people live in risky conditions, then the incidence of health problems associated with that risk factor should go down.')).toBeVisible();
        await page.locator('text=Risk factor >> nth=0').click();
        await expect(page.locator('text=A risk factor is any modifiable behavior or condition that increases the likelihood that a person will experience a negative health event. That event could be getting an illness, having an accident that causes injury or death or dying prematurely for any reason. If over time, people engage in less risky behavior, or if fewer people live in risky conditions, then the incidence of health problems associated with that risk factor should go down.')).toHaveCount(0);
    });

});