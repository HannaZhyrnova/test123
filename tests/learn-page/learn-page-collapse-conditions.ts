import { test, expect, type Page, Browser, BrowserContext, chromium } from '@playwright/test';
import LearnPage from '../../pages/learn-page';
import Env from '../../support/environments';

test.describe('[TC-941] - Conditions collapse', () => {

  //my pages
  let home: LearnPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.dev,{waitUntil: 'domcontentloaded'});
    await page.locator('text=Learn >> nth=0').click();
    });

    test('Check collapse of condition brain health', async ({ page }) => {
        await page.locator('text=brain health >> nth=3').click();
        await expect(page.locator('text=This aggregate cause encompasses the mental health conditions, neurological disorders, and cerebrovascular diseases defined below.')).toBeVisible();
        await page.locator('text=brain health >> nth=3').click();
        await expect(page.locator('text=This aggregate cause encompasses the mental health conditions, neurological disorders, and cerebrovascular diseases defined below.')).toHaveCount(0);
 });

    test('Check collapse of condition Neurological Disorders', async ({ page }) => {
        await page.locator('text=Neurological Disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates death and disability from Alzheimer’s and other dementias, Parkinson’s, epilepsy, multiple sclerosis, motor neuron disease, headache disorders, and other neurological disorders (excluding stroke, meningitis, tetanus, brain cancer, and trauma).')).toBeVisible();
        await page.locator('text=Neurological Disorders >> nth=0').click();
        await expect(page.locator('text=This aggregate cause incorporates death and disability from Alzheimer’s and other dementias, Parkinson’s, epilepsy, multiple sclerosis, motor neuron disease, headache disorders, and other neurological disorders (excluding stroke, meningitis, tetanus, brain cancer, and trauma).')).toHaveCount(0);
    });

    test('Check collapse of condition Alzheimer’s disease and other dementias', async ({ page }) => {
        await page.locator('text=Alzheimer’s disease and other dementias').click();
        await expect(page.locator('text=Dementia is a progressive, degenerative, and chronic neurological disorder typified by cognitive dysfunctions that interfere with daily functioning.')).toBeVisible();
        await page.locator('text=Alzheimer’s disease and other dementias').click();
        await expect(page.locator('text=Dementia is a progressive, degenerative, and chronic neurological disorder typified by cognitive dysfunctions that interfere with daily functioning.')).toHaveCount(0);
    });

    test('Check collapse of condition Parkinson’s disease', async ({ page }) => {
        await page.locator('text=Parkinson’s disease').click();
        await expect(page.locator('text=Parkinson’s disease is a chronic, degenerative, and progressive neurological condition typified by bradykinesia (slowness of movement), rigidity, tremor, and postural instability.')).toBeVisible();
        await page.locator('text=Parkinson’s disease >> nth=0').click();
        await expect(page.locator('text=Parkinson’s disease is a chronic, degenerative, and progressive neurological condition typified by bradykinesia (slowness of movement), rigidity, tremor, and postural instability.')).toHaveCount(0);
    });
    
    test('Check collapse of condition Idiopathic epilepsy', async ({ page }) => {
        await page.locator('text=Idiopathic epilepsy').click();
        await expect(page.locator('text=Idiopathic active epilepsy is characterized by recurrent, unprovoked seizures for which there is no identified underlying disease and is presumed to have a strong genetic basis. This includes cases of active epilepsy with at least one seizure in the previous five years, regardless of treatment.')).toBeVisible();
        await page.locator('text=Idiopathic epilepsy').click();
        await expect(page.locator('text=Idiopathic active epilepsy is characterized by recurrent, unprovoked seizures for which there is no identified underlying disease and is presumed to have a strong genetic basis. This includes cases of active epilepsy with at least one seizure in the previous five years, regardless of treatment.')).toHaveCount(0);
    });

    test('Check collapse of condition Multiple sclerosis', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Multiple sclerosis').click();
        await expect(page.locator('text=Multiple sclerosis is a chronic, degenerative, and progressive neurological condition typified by the damaging of the myelin sheaths of nerves.')).toBeVisible();
        await page.locator('text=Multiple sclerosis >> nth=0').click();
        await expect(page.locator('text=Multiple sclerosis is a chronic, degenerative, and progressive neurological condition typified by the damaging of the myelin sheaths of nerves.')).toHaveCount(0);
    });

    test('Check collapse of condition Motor neuron disease', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Motor neuron disease').click();
        await expect(page.locator('text=A set of chronic, degenerative, and progressive neurological conditions typified by the destruction of motor neurons and the subsequent deterioration of voluntary muscle activity.')).toBeVisible();
        await page.locator('text=Motor neuron disease').click();
        await expect(page.locator('text=A set of chronic, degenerative, and progressive neurological conditions typified by the destruction of motor neurons and the subsequent deterioration of voluntary muscle activity.')).toHaveCount(0);
    });

    test('Check collapse of condition Headache disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Headache disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates disability resulting from migraine, tension-type headache (TTH), and their complication of medication overuse headache.')).toBeVisible();
        await page.locator('text=Headache disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates disability resulting from migraine, tension-type headache (TTH), and their complication of medication overuse headache.')).toHaveCount(0);
    });

    test('Check collapse of condition Migraine', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Migraine').click();
        await expect(page.locator('text=Migraine is a disabling primary headache disorder, typically characterized by recurrent moderate or severe unilateral pulsatile headaches.')).toBeVisible();
        await page.locator('text=Migraine >> nth=0').click();
        await expect(page.locator('text=Migraine is a disabling primary headache disorder, typically characterized by recurrent moderate or severe unilateral pulsatile headaches.')).toHaveCount(0);
    });

    test('Check collapse of condition Tension headaches', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Tension headaches').click();
        await expect(page.locator('text=tension-type headache is characterized by a dull, non-pulsatile, diffuse, band-like (or vice-like) pain of mild to moderate intensity in the head or neck.')).toBeVisible();
        await page.locator('text=Tension headaches').click();
        await expect(page.locator('text=tension-type headache is characterized by a dull, non-pulsatile, diffuse, band-like (or vice-like) pain of mild to moderate intensity in the head or neck.')).toHaveCount(0);
    });

    test('Check collapse of condition Other neurological disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Other neurological disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates death and disability from Alzheimer’s and other dementias, Parkinson’s, epilepsy, multiple sclerosis, motor neuron disease, headache disorders, and other neurological disorders (excluding stroke, meningitis, tetanus, brain cancer, and trauma).')).toBeVisible();
        await page.locator('text=Other neurological disorders >> nth=0').click();
        await expect(page.locator('text=This aggregate cause incorporates death and disability from Alzheimer’s and other dementias, Parkinson’s, epilepsy, multiple sclerosis, motor neuron disease, headache disorders, and other neurological disorders (excluding stroke, meningitis, tetanus, brain cancer, and trauma).')).toHaveCount(0);
    });

    test('Check collapse of condition Mental disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Mental disorders >> nth=0').click();
        await expect(page.locator('text=This aggregate cause incorporates disability from schizophrenia; anxiety, bipolar, depressive, autism spectrum, attention deficit hyperactivity, conduct, and other mental disorders; idiopathic developmental intellectual disability; and deaths and disability from eating disorders.')).toBeVisible();
        await page.locator('text=Mental disorders >> nth=0').click();
        await expect(page.locator('text=This aggregate cause incorporates disability from schizophrenia; anxiety, bipolar, depressive, autism spectrum, attention deficit hyperactivity, conduct, and other mental disorders; idiopathic developmental intellectual disability; and deaths and disability from eating disorders.')).toHaveCount(0);
    });

    test('Check collapse of condition Schizophrenia', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Schizophrenia').click();
        await expect(page.locator('text=Schizophrenia is a chronic psychotic disorder that involves positive symptoms (e.g., delusions, hallucinations) and negative symptoms (e.g., flat affect, loss of interest).')).toBeVisible();
        await page.locator('text=Schizophrenia >> nth=0').click();
        await expect(page.locator('text=Schizophrenia is a chronic psychotic disorder that involves positive symptoms (e.g., delusions, hallucinations) and negative symptoms (e.g., flat affect, loss of interest).')).toHaveCount(0);
    });

    test('Check collapse of condition Depressive disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Depressive disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates disability from major depressive disorder (MDD) and dysthymia.')).toBeVisible();
        await page.locator('text=Depressive disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates disability from major depressive disorder (MDD) and dysthymia.')).toHaveCount(0);
    });

    test('Check collapse of condition Major depressive disorder', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Major depressive disorder >> nth=1').click();
        await expect(page.locator('text=Major depressive disorder involves the experience of depressed mood or loss of interest or pleasure almost all day, every day, for at least two weeks at a time.')).toBeVisible();
        await page.locator('text=Major depressive disorder >> nth=1').click();
        await expect(page.locator('text=Major depressive disorder involves the experience of depressed mood or loss of interest or pleasure almost all day, every day, for at least two weeks at a time.')).toHaveCount(0);
    });

    test('Check collapse of condition Dysthymia', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Dysthymia').click();
        await expect(page.locator('text=Dysthymia is a mood disorder incorporating disability from chronic depression. The symptoms are less severe than major depressive disorder but are of longer duration.')).toBeVisible();
        await page.locator('text=Dysthymia >> nth=0').click();
        await expect(page.locator('text=Dysthymia is a mood disorder incorporating disability from chronic depression. The symptoms are less severe than major depressive disorder but are of longer duration.')).toHaveCount(0);
    });

    test('Check collapse of condition Bipolar disorder', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Bipolar disorder').click();
        await expect(page.locator('text=Bipolar disorder is a mood disorder incorporating disability from manic, hypomanic, or major depressive episodes.')).toBeVisible();
        await page.locator('text=Bipolar disorder >> nth=0').click();
        await expect(page.locator('text=Bipolar disorder is a mood disorder incorporating disability from manic, hypomanic, or major depressive episodes.')).toHaveCount(0);
    });

    test('Check collapse of condition Anxiety disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Anxiety disorders >> nth=0').click();
        await expect(page.locator('text=Anxiety disorders incorporate disability caused by experiences of intense fear and distress in combination with other physiological symptoms. Anxiety disorders refer to the following anxiety disorder subtypes: panic disorder, agoraphobia, generalized anxiety disorder, specific phobia, social phobia, separation anxiety, obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD).')).toBeVisible();
        await page.locator('text=Anxiety disorders >> nth=0').click();
        await expect(page.locator('text=Anxiety disorders incorporate disability caused by experiences of intense fear and distress in combination with other physiological symptoms. Anxiety disorders refer to the following anxiety disorder subtypes: panic disorder, agoraphobia, generalized anxiety disorder, specific phobia, social phobia, separation anxiety, obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD).')).toHaveCount(0);
    });

    test('Check collapse of condition Eating disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Eating disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates deaths and disability from anorexia nervosa (AN) and bulimia nervosa (BN). These are characterized by abnormal eating behaviors and concerns over food, eating, and body image.')).toBeVisible();
        await page.locator('text=Eating disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates deaths and disability from anorexia nervosa (AN) and bulimia nervosa (BN). These are characterized by abnormal eating behaviors and concerns over food, eating, and body image.')).toHaveCount(0);
    });

    test('Check collapse of condition Anorexia nervosa', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Anorexia nervosa').click();
        await expect(page.locator('text=Anorexia nervosa is an eating disorder incorporating deaths and disability from refusal to maintain minimally normal body weight, intense fear of gaining weight, and disturbances in how one’s body weight or shape is experienced.')).toBeVisible();
        await page.locator('text=Anorexia nervosa >> nth=0').click();
        await expect(page.locator('text=Anorexia nervosa is an eating disorder incorporating deaths and disability from refusal to maintain minimally normal body weight, intense fear of gaining weight, and disturbances in how one’s body weight or shape is experienced.')).toHaveCount(0);
    });

    test('Check collapse of condition Bulimia nervosa', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Bulimia nervosa').click();
        await expect(page.locator('text=Bulimia nervosa is an eating disorder incorporating deaths and disability from recurrent binge eating, inappropriate compensatory behavior to prevent weight gain, and undue influence of body shape and weight on self-evaluation.')).toBeVisible();
        await page.locator('text=Bulimia nervosa >> nth=0').click();
        await expect(page.locator('text=Bulimia nervosa is an eating disorder incorporating deaths and disability from recurrent binge eating, inappropriate compensatory behavior to prevent weight gain, and undue influence of body shape and weight on self-evaluation.')).toHaveCount(0);
    });

    test('Check collapse of condition Autism spectrum disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Autism spectrum disorders').click();
        await expect(page.locator('text=Autism spectrum disorders are a group of neurodevelopmental disorders with onset occurring in early childhood. They incorporate disability from pervasive impairment in several areas of development, including social interaction and communication skills, along with restricted and repetitive patterns of behaviors or interests.')).toBeVisible();
        await page.locator('text=Autism spectrum disorders >> nth=0').click();
        await expect(page.locator('text=Autism spectrum disorders are a group of neurodevelopmental disorders with onset occurring in early childhood. They incorporate disability from pervasive impairment in several areas of development, including social interaction and communication skills, along with restricted and repetitive patterns of behaviors or interests.')).toHaveCount(0);
    });

    test('Check collapse of condition Attention-deficit/hyperactivity disorder (ADHD)', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Attention-deficit/hyperactivity disorder (ADHD)').click();
        await expect(page.locator('text=ADHD is an externalizing disorder, incorporating disability from persistent inattention and/or hyperactivity/impulsivity.')).toBeVisible();
        await page.locator('text=Attention-deficit/hyperactivity disorder (ADHD)').click();
        await expect(page.locator('text=ADHD is an externalizing disorder, incorporating disability from persistent inattention and/or hyperactivity/impulsivity.')).toHaveCount(0);
    });

    test('Check collapse of condition Conduct disorder', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Conduct disorder').click();
        await expect(page.locator('text=Conduct disorder occurs in those under 18 years of age and incorporates disability from antisocial behavior that violates the basic rights of others or major age-appropriate societal norms.')).toBeVisible();
        await page.locator('text=Conduct disorder >> nth=0').click();
        await expect(page.locator('text=Conduct disorder occurs in those under 18 years of age and incorporates disability from antisocial behavior that violates the basic rights of others or major age-appropriate societal norms.')).toHaveCount(0);
    });

    test('Check collapse of condition Idiopathic developmental intellectual disability', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Idiopathic developmental intellectual disability').click();
        await expect(page.locator('text=A condition of below-average intelligence or mental ability. Consistent with the American Association on Intellectual and Developmental Disabilities, we define developmental intellectual disability as a condition originating before age 18 (thus, does not include impairment due to stroke, Alzheimer\'s, etc.)')).toBeVisible();
        await page.locator('text=Idiopathic developmental intellectual disability').click();
        await expect(page.locator('text=A condition of below-average intelligence or mental ability. Consistent with the American Association on Intellectual and Developmental Disabilities, we define developmental intellectual disability as a condition originating before age 18 (thus, does not include impairment due to stroke, Alzheimer\'s, etc.)')).toHaveCount(0);
    });

    test('Check collapse of condition Other mental disorders', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Other mental disorders').click();
        await expect(page.locator('text=This aggregate cause incorporates disability from schizophrenia; anxiety, bipolar, depressive, autism spectrum, attention deficit hyperactivity, conduct, and other mental disorders; idiopathic developmental intellectual disability; and deaths and disability from eating disorders.')).toBeVisible();
        await page.locator('text=Other mental disorders >> nth=0').click();
        await expect(page.locator('text=This aggregate cause incorporates disability from schizophrenia; anxiety, bipolar, depressive, autism spectrum, attention deficit hyperactivity, conduct, and other mental disorders; idiopathic developmental intellectual disability; and deaths and disability from eating disorders.')).toHaveCount(0);
    });

    test('Check collapse of condition Traumatic brain injury (TBI)', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Traumatic brain injury (TBI)').click();
        await expect(page.locator('text=A form of acquired brain injury that occurs when a sudden trauma causes damage to the brain. TBI can result when the head suddenly and violently hits an object, or when an object pierces the skull and enters brain tissue. Definition from the National Institute of Neurological Disorders and Stroke.')).toBeVisible();
        await page.locator('text=Traumatic brain injury (TBI)').click();
        await expect(page.locator('text=A form of acquired brain injury that occurs when a sudden trauma causes damage to the brain. TBI can result when the head suddenly and violently hits an object, or when an object pierces the skull and enters brain tissue. Definition from the National Institute of Neurological Disorders and Stroke.')).toHaveCount(0);
    });

    test('Check collapse of condition Spinal cord injury', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Spinal cord injury').click();
        await expect(page.locator('text=A spinal cord injury (SCI) is damage to the tight bundle of cells and nerves that sends and receives signals from the brain to and from the rest of the body. SCI can be caused by direct injury to the spinal cord itself or from damage to the tissue and bones (vertebrae) that surround the spinal cord. This damage can result in temporary or permanent changes in sensation, movement, strength, and body functions below the site of injury. Some injuries that cause little or no cell death may allow for an almost complete recovery while those that occur higher on the spinal cord and are more serious can cause paralysis in most of the body. Definition from the National Institute of Neurological Disorders and Stroke.')).toBeVisible();
        await page.locator('text=Spinal cord injury >> nth=0').click();
        await expect(page.locator('text=A spinal cord injury (SCI) is damage to the tight bundle of cells and nerves that sends and receives signals from the brain to and from the rest of the body. SCI can be caused by direct injury to the spinal cord itself or from damage to the tissue and bones (vertebrae) that surround the spinal cord. This damage can result in temporary or permanent changes in sensation, movement, strength, and body functions below the site of injury. Some injuries that cause little or no cell death may allow for an almost complete recovery while those that occur higher on the spinal cord and are more serious can cause paralysis in most of the body. Definition from the National Institute of Neurological Disorders and Stroke.')).toHaveCount(0);
    });

    test('Check collapse of condition Brain and nervous system cancers', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Brain and nervous system cancers').click();
        await expect(page.locator('text=Death and disability resulting from malignant neoplasms of the brain and central nervous system.')).toBeVisible();
        await page.locator('text=Brain and nervous system cancers').click();
        await expect(page.locator('text=Death and disability resulting from malignant neoplasms of the brain and central nervous system.')).toHaveCount(0);
    });

    test('Check collapse of condition Meningitis', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Meningitis').click();
        await expect(page.locator('text=Meningitis is an inflammation of the meninges, the membrane surrounding the brain and spinal cord.')).toBeVisible();
        await page.locator('text=Meningitis >> nth=0').click();
        await expect(page.locator('text=Meningitis is an inflammation of the meninges, the membrane surrounding the brain and spinal cord.')).toHaveCount(0);
    });

    test('Check collapse of condition Encephalitis', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Encephalitis').click();
        await expect(page.locator('text=Encephalitis is a disease caused by acute inflammation of the brain.')).toBeVisible();
        await page.locator('text=Encephalitis >> nth=0').click();
        await expect(page.locator('text=Encephalitis is a disease caused by acute inflammation of the brain.')).toHaveCount(0);
    });

    test('Check collapse of condition Stroke', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Stroke >> nth=3').click();
        await expect(page.locator('text=Stroke is defined according to WHO criteria of rapidly developing clinical signs of (usually focal) disturbance of cerebral function lasting >24 hours or leading to death.')).toBeVisible();
        await page.locator('text=Stroke >> nth=3').click();
        await expect(page.locator('text=Stroke is defined according to WHO criteria of rapidly developing clinical signs of (usually focal) disturbance of cerebral function lasting >24 hours or leading to death.')).toHaveCount(0);
    });

    test('Check collapse of condition Ischemic stroke', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Ischemic stroke').click();
        await expect(page.locator('text=Ischemic stroke is an episode of neurological dysfunction due to focal cerebral, spinal, or retinal infarction.')).toBeVisible();
        await page.locator('text=Ischemic stroke >> nth=0').click();
        await expect(page.locator('text=Ischemic stroke is an episode of neurological dysfunction due to focal cerebral, spinal, or retinal infarction.')).toHaveCount(0);
    });

    test('Check collapse of condition Intracerebral hemorrhage', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Intracerebral hemorrhage').click();
        await expect(page.locator('text=Intracerebral hemorrhage is a stroke with a focal collection of blood in the brain not due to trauma.')).toBeVisible();
        await page.locator('text=Intracerebral hemorrhage >> nth=0').click();
        await expect(page.locator('text=Intracerebral hemorrhage is a stroke with a focal collection of blood in the brain not due to trauma.')).toHaveCount(0);
    });

    test('Check collapse of condition Subarachnoid hemorrhage', async ({ page }) => {
        await page.locator('text=Show more').click();
        await page.locator('text=Subarachnoid hemorrhage').click();
        await expect(page.locator('text=Subarachnoid hemorrhage is a non-traumatic stroke due to bleeding into the subarachnoid space of the brain.')).toBeVisible();
        await page.locator('text=Subarachnoid hemorrhage >> nth=0').click();
        await expect(page.locator('text=Subarachnoid hemorrhage is a non-traumatic stroke due to bleeding into the subarachnoid space of the brain.')).toHaveCount(0);
    });

    test('[TC-940] - Check show more/less functionality for conditions', async ({ page }) => {
        await page.locator('text=Show more').click();
        await expect(page.locator('text=Multiple sclerosis')).toBeVisible();
        await page.locator('text=Show less').click();
        await expect(page.locator('text=Multiple sclerosis')).toHaveCount(0);
    });

});