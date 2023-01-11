import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import DataPage from '../../../pages/data-page';
import Env from '../../../support/environments';

test.describe('[TC-996] - Expand definitions on Bar Chart tab', () => {

//my pages
let data: DataPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
        await page.locator('text=Data >> nth=0').click();
        await page.locator('text=Bar Chart >> nth=0').click();
        await expect(page.getByText('Use the bar chart to understand what conditions of the brain are most common.')).toBeVisible();
    });

    test('DALY definition on Bar Chart  tab', async ({ page }) => {
        await page.locator('text=DALY').click();
        await expect(page.locator('text=DALY is an abbreviation for disability-adjusted life year. It is a universal metric that allows researchers and policymakers to compare very different populations and health conditions across time. DALYs equal the sum of years of life lost (YLLs) and years lived with disability (YLDs). One DALY equals one lost year of healthy life. DALYs allow us to estimate the total number of years lost due to specific causes and risk factors at the country, regional, and global levels.')).toBeVisible();
    });

    test('YLL definition on Bar Chart  tab', async ({ page }) => {
        await page.locator('text=YLL').click();
        await expect(page.locator('text=Years of life lost (YLLs) are years lost due to premature mortality. YLLs are calculated by subtracting the age at death from the longest possible life expectancy for a person at that age. For example, if the longest life expectancy for men in a given country is 75, but a man dies of cancer at 65, this would be 10 years of life lost due to cancer.')).toBeVisible();
    });

    test('YLD definition on Bar Chart  tab', async ({ page }) => {
        await page.locator('text=YLD').click();
        await expect(page.locator('text=YLD is an abbreviation for years lived with disability, which can also be described as years lived in less than ideal health. This includes conditions such as influenza, which may last for only a few days, or epilepsy, which can last a lifetime. It is measured by taking the prevalence of the condition multiplied by the disability weight for that condition. Disability weights reflect the severity of different conditions and are developed through surveys of the general public.')).toBeVisible();
    });

    test('Prevalence and Incidence definition on Bar Chart  tab', async ({ page }) => {
        await page.locator('text=Prevalence and Incidence').click();
        await expect(page.locator('text=Prevalence is the total number of cases of a disease or injury in a population. Incidence is the total number of new cases of a disease or injury in a given period.')).toBeVisible();
    });

});