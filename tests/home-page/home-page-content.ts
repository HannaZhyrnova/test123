import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import HomePage from '../../pages/home-page';
import Env from '../../support/environments';

test.describe('[TC-858] - Content on Home page', () => {

  //my pages
  let home: HomePage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    });

    test('Check title on the hero image', async ({ page }) => {
      await expect(page.locator('text=Understanding brain health around the world')).toBeVisible();
    });

    test('Check description on the hero image', async ({ page }) => {
      await expect(page.locator('text=Conditions affecting the brain and nervous system cause more death and illness globally than cardiovascular disease, cancers, and all other conditions.')).toBeVisible();
    });


    test('Check text block under the hero image', async ({ page }) => {
      await expect(page.locator('text=More than 16% of all health loss around the world is associated with brain conditions. In 2019, brain conditions caused more disability-adjusted life-years (396 million DALYs) than other widely-acknowledged health threats such as cancer (251 million DALYs) or cardiovascular disease (393 million DALYs).Those numbers will increase as populations continue to grow and age, challenging families, employers, and health systems to respond.')).toBeVisible();
    });

    test('Check appearence of What is brain health? header', async ({ page }) => {
      await expect(page.locator('text=What is brain health?')).toBeVisible();
    });

    test('Check appearence of content text block under What is brain health? header - part 1', async ({ page }) => {
      await expect(page.locator('text=The brain plays a role in everything we do: our thinking and feeling; our speaking and movement; our breathing, heart function, and our immune system. If our brain is affected by disease or injury, it can damage our lives and the lives of those around us.')).toBeVisible();
    });

    test('Check appearence of content text block under What is brain health? header - part 2', async ({ page }) => {
      await expect(page.locator('text=Brain health encompasses mental health conditions, neurological disorders, and cerebrovascular diseases. Dementia, stroke, and depression are all conditions of the brain that rank among the top causes of death and disability globally.')).toBeVisible();
    });

    test('Check appearence of content text block under What is brain health? header - part 3', async ({ page }) => {
      await expect(page.locator('text=Researchers have been working to understand these conditions for a long time, but for too long, they have been examined individually — not as a collection of disorders that can be traced back to the brain.')).toBeVisible();
    });

    test('Check appearence of The prevalence of brain conditions continues to rise header on image', async ({ page }) => {
      await expect(page.locator('text=The prevalence of brain conditions continues to rise')).toBeVisible();
    });

    test('Check appearence of text block under The prevalence of brain conditions continues to rise header on image - part1', async ({ page }) => {
      await expect(page.locator('text=Brain conditions impact people of every age and in every country, and have profound effects on our health and well-being. Population trends play a role, as well as country-level preventive measures and health spending.')).toBeVisible();
    });

    test('Check appearence of text block under The prevalence of brain conditions continues to rise header on image - part2', async ({ page }) => {
      await expect(page.locator('text=People over the age of 25 in China have the highest global risk of suffering a stroke in their lifetime.')).toBeVisible();
    });

    test('Check appearence of text block under The prevalence of brain conditions continues to rise header on image - part3', async ({ page }) => {
      await expect(page.locator('text=Headache disorders, anxiety disorders, depression, and stroke are among the top 10 causes of death and disability in Germany.')).toBeVisible();
    });

    test('Check appearence of text block under The prevalence of brain conditions continues to rise header on image - part4', async ({ page }) => {
      await expect(page.locator('text=In Japan, Alzheimer\'s disease ranks as the top cause of death. The total number of deaths due to Alzheimer\'s disease and other dementias has increased by 480% since 1990.')).toBeVisible();
    });

    test('Check appearence of text block under The prevalence of brain conditions continues to rise header on image - part5', async ({ page }) => {
      await expect(page.locator('text=The United States has the highest global rates of disability from mental disorders such as depression, bipolar disorder, and eating disorders.')).toBeVisible();
    });

    test('Check appearence of text block under The prevalence of brain conditions continues to rise header on image - part6', async ({ page }) => {
      await expect(page.locator('text=How do we improve brain health around the world? The first step is grasping the scope of the problem. Data on the burden of brain health are critical to informing evidence-based planning and resource allocation. Explore global trends to better understand the toll of brain disorders and learn more about the conditions that make up brain health.')).toBeVisible();
    });

    test('Check appearence of Dive into country-specific trends header', async ({ page }) => {
      await expect(page.locator('text=Dive into country-specific trends')).toBeVisible();
    });

    test('Check appearence of description for United states card under Dive into country-specific trends header', async ({ page }) => {
      await expect(page.locator('text=Explore what is driving changes in brain health outcomes in the United States.')).toBeVisible();
    });

    test('Check appearence of description for China card under Dive into country-specific trends header', async ({ page }) => {
      await expect(page.locator('text=Explore what health spending will look like in China.')).toBeVisible();
    });

    test('Check appearence of description for Japan card under Dive into country-specific trends header', async ({ page }) => {
      await expect(page.locator('text=Learn how the population structure is changing in Japan.')).toBeVisible();
    });

    test('Check appearence of description for Germany card under Dive into country-specific trends header', async ({ page }) => {
      await expect(page.locator('text=Learn which age groups experience the largest burden of brain health disorders in Germany.')).toBeVisible();
    });

    test('Check appearence of text block under country cards', async ({ page }) => {
      await expect(page.locator('text=Explore the factsheet to view brain health trends in countries around the world.')).toBeVisible();
    });

    test('Check dynamic text with data for Depression', async ({ page }) => {
      await expect(page.locator('text=Depression is among the top causes of health loss worldwide. 279.6 million people are living with depression today, a 64% increase since 1990.')).toBeVisible();
    });

    test('Check dynamic text with data for Alzheimer\'s disease and other dementias', async ({ page }) => {
      await expect(page.locator('text= The number of people with Alzheimer\'s disease and other dementias increased by 161% between 1990 and 2019, largely due to population aging.')).toBeVisible();
    });

    test('Check dynamic text with data for Parkinson’s disease', async ({ page }) => {
      await expect(page.locator('text=Parkinson’s disease is the fastest growing condition of the brain, affecting 3.3 to 8.5 million people, corresponding to an increase of 155% between 1990 and 2019.')).toBeVisible();
    });

    test('Check dynamic text with data for strokes', async ({ page }) => {
      await expect(page.locator('text=The number of strokes globally increased by 95% from 1990 to 2019.')).toBeVisible();
    });

    test('Check dynamic text with data for depression', async ({ page }) => {
      await expect(page.locator('text=The number of strokes globally increased by 95% from 1990 to 2019.')).toBeVisible();
    });

});