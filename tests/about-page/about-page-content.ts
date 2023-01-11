import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import AboutPage from '../../pages/about-page';
import Env from '../../support/environments';

test.describe('Content on About page', () => {

  //my pages
  let home: AboutPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=About >> nth=0').click();
    //await expect(page).toHaveURL(/.*about/);
    });

    test('Check title 1', async ({ page }) => {
      await expect(page.locator('text=About the Brain Health Initiative >> nth=0')).toBeVisible();
    });

    test('Check description part 1', async ({ page }) => {
      await expect(page.locator('text=Using a science-based approach to quantify the present burden, future trends, and economic impact of brain health conditions, the Brain Health Initiative aims to leverage data to guide policy change. As the world\'s largest independent health data resource, the Institute for Health Metrics and Evaluation (IHME) at the University of Washington is leading this initiative with the help of like-minded organizations.')).toBeVisible();
    });

    test('Check description part 2', async ({ page }) => {
      await expect(page.locator('text=Using IHME\'s global database of scientific evidence and its network of health and policy experts, the initiative is working to:')).toBeVisible();
    });

    test('Check description part 3', async ({ page }) => {
      await expect(page.locator('text=Create urgency by disseminating compelling evidence on the prevalence of brain disorders')).toBeVisible();
    });

    test('Check description part 4', async ({ page }) => {
      await expect(page.locator('text=Measure the true health and economic impact of brain disorders and the progress over time.')).toBeVisible();
    });

    test('Check description part 5', async ({ page }) => {
      await expect(page.locator('text=Groups that share the goal of prioritizing brain conditions and reducing the burden of death and disability are encouraged to participate in this initiative. Brain Health expertise is vital to increasing awareness and demonstrating the urgency of new research and thoughtful policy.')).toBeVisible();
    });

    test('Check title 21', async ({ page }) => {
        await expect(page.locator('text=About the Global Burden of Disease >> nth=0')).toBeVisible();
      });

    test('Check description part 1 title 21', async ({ page }) => {
        await expect(page.locator('text=Unless otherwise noted, all data on this website is derived from the Global Burden of Disease (GBD) study, which is the largest and most comprehensive effort to measure health loss from hundreds of conditions around the world over time. Collected and analyzed by a consortium of more than 8,000 researchers, the data capture premature death and disability from more than 369 diseases and injuries in 204 countries and territories, by age and sex, from 1990 to the present, allowing comparisons over time, across age groups, and among populations. The GBD study is published in The Lancet, and designed in a way that allows data to be used at the global, national, and local levels to understand health trends over time.')).toBeVisible();
      });
    
      test('Check description part 2 title 21', async ({ page }) => {
        await expect(page.locator('text=The Global Burden of Disease Study synthesizes a large number of input sources to estimate mortality, causes of death and illness, and risk factors. The GBD estimation process is based on identifying multiple relevant data sources for each disease or injury including censuses, household surveys, civil registration and vital statistics, disease registries, health service use, air pollution monitors, satellite imaging, disease notifications, and other sources. Each of these types of data are identified from systematic review of published studies, searches of government and international organization websites, published reports, primary data sources such as the Demographic and Health Surveys, and contributions of datasets by GBD collaborators. Each obtained data source is given a unique identifier by a team of librarians and included in the Global Health Data Exchange (GHDx). The GHDx makes publicly available the metadata for each source included in GBD as well as the data, where allowed by the data provider.')).toBeVisible();
      });

    test('Check description part 3 title 21', async ({ page }) => {
        await expect(page.locator('text=A crucial step in the GBD analytical process is correcting for known bias by redistributing deaths from unspecified codes to more specific disease categories, and by adjusting data with alternative case definitions or measurement methods to the reference method. Vital registration with medical certification of cause of death is a crucial resource for the GBD cause of death analysis in many countries. Cause of death data obtained using various revisions of the International Classification of Diseases and Injuries (ICD)9 were mapped to the GBD cause list. Many deaths, however, are assigned to causes that cannot be the underlying cause of death (eg, cardiopulmonary failure) or are inadequately specified (eg, injury from undetermined intent). These deaths were reassigned to the most probable underlying causes of death as part of the data processing for GBD.')).toBeVisible();
      });

    test('Check description part 4 title 21', async ({ page }) => {
        await expect(page.locator('text=For most diseases and injuries, processed data are modelled using standardised tools to generate estimates of each quantity of interest by age, sex, location, and year.')).toBeVisible();
      });

    test('Check title 2', async ({ page }) => {
      await expect(page.locator('text=About this website')).toBeVisible();
    });

    test('CCheck description part 1 title 2', async ({ page }) => {
        await expect(page.locator('text=Acknowledgments')).toBeVisible();
      });

    test('Check description part 2 title 2', async ({ page }) => {
        await expect(page.locator('text=The data and research in this website are taken from the IHME Global Burden of Disease study, supported by the Bill & Melinda Gates Foundation, the University of Melbourne, Public Health England, the Norwegian Institute of Public Health, St. Jude Children\'s Research Hospital, the National Institute on Aging of the National Institutes of Health (award P30AG047845), and the National Institute of Mental Health of the National Institutes of Health (award R01MH110163).')).toBeVisible();
      });

    test('Check description part 3 title 2', async ({ page }) => {
        await expect(page.locator('text=The Brain Health Initiative is a massive effort helping to develop a holistic view of the current and future burden of brain health disorders, and increasing awareness and urgency. The work is supported by several organizations, including Gates Ventures, Microsoft, Roche, AARP, and the American Heart Association (AHA), and the American Academy of Neurology (AAN). Seed funding for the development of the Brain Health Atlas has been provided by Roche.')).toBeVisible();
      });
    
    test('Check description part 4 title 2', async ({ page }) => {
      await expect(page.locator('text=The content is solely the responsibility of the authors and does not necessarily represent the official views of the funders.')).toBeVisible();
    });

    test('Check description part 5 title 2', async ({ page }) => {
        await expect(page.locator('text=Photos from Unsplash by: Benoît Deschasaux, Priscilla Du Preez, Christie Kim, Pakata Goh, Siyuan Hu, Leon Seibert, Natalie Toombs, Jesse Orrico,Arif Riyanto, Andrew Yurkiv, Benjamin Voros, Towfiqu Barbhuiya, Ryoji Iwata, Rad Cyrus, Kristina Tripkovic, Ivana Cajina, Aaron Andrew Ang, and Dominik Schröder.')).toBeVisible();
      });

    test('Check description part 6 title 2', async ({ page }) => {
        await expect(page.locator('text=Global Burden of Disease Study 2019 (GBD 2019) Results')).toBeVisible();
      });

    test('Check description part 7 title 2', async ({ page }) => {
        await expect(page.locator('text=Citation: Institute for Health Metrics and Evaluation (IHME). Findings from the Global Burden of Disease Study 2019. Seattle, WA: IHME, 2022.')).toBeVisible();
      });

    test('Check description part 8 title 2', async ({ page }) => {
      await expect(page.locator('text=For terms and conditions of use, please visit http://www.healthdata.org/about/terms-and-conditions. For any usage that falls outside of these license restrictions, please contact IHME Client Services at services@healthdata.org.')).toBeVisible();
    });

    test('Check title 3', async ({ page }) => {
        await expect(page.locator('text=About IHME Client Services')).toBeVisible();
      });

    test('Check description part 1 title 3', async ({ page }) => {
        await expect(page.locator('text=This website is a product of IHME Client Services, a social enterprise within the University of Washington, which promotes and licenses IHME’s population health data to private sector organizations. Learn more at ihmeclientservices.org')).toBeVisible();
      });

    test('Check description part 2 title 3', async ({ page }) => {
        await expect(page.locator('text=For general information about the Institute: www.healthdata.org/about')).toBeVisible();
      });
    
    test('Check title 4', async ({ page }) => {
      await expect(page.locator('text=Want to get in touch?')).toBeVisible();
    });

    test('Check description part 1 title 4', async ({ page }) => {
        await expect(page.locator('text=For more information about commercial use of IHME’s data and tools, please contact IHME Client Services at services@healthdata.org.')).toBeVisible();
      });

});