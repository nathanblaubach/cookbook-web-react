import { test, expect, Page } from '@playwright/test';
import { getBaseUrl } from './util/base-url';
import AxeBuilder from '@axe-core/playwright';

async function expectNoAccessibilityViolation(page: Page) {
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
}

test('Recipe Search Page (base url)', async ({ page }) => {
    await page.goto(getBaseUrl());
    await expect(page).toHaveTitle(/McClain Family Cookbook/);
    await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
    await expectNoAccessibilityViolation(page);
});

test('Recipe Search Page', async ({ page }) => {
  await page.goto(`${getBaseUrl()}/recipes`);
  await expect(page).toHaveTitle(/McClain Family Cookbook/);
  await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
  await expectNoAccessibilityViolation(page);
});

test('Recipe Page', async ({ page }) => {
  const recipeId = 0;
  await page.goto(`${getBaseUrl()}/recipes/${recipeId}`);
  await expect(page).toHaveTitle(/McClain Family Cookbook/);
  await expect(page.getByRole('heading', { name: 'Recipe Name' })).toBeVisible();
  await expectNoAccessibilityViolation(page);
});

test('About Page', async ({ page }) => {
  await page.goto(`${getBaseUrl()}/about`);
  await expect(page).toHaveTitle(/McClain Family Cookbook/);
  await expect(page.getByRole('heading', { name: 'The McClain Family Cookbook' })).toBeVisible();
  await expectNoAccessibilityViolation(page);
});
