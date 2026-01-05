import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Web Total Solution/i);
    });

    test('preloader finishes and hero is visible', async ({ page }) => {
        // Wait for the specific text that indicates the Hero is ready
        const heroText = page.getByRole('heading', { name: /Crafting/i });
        await expect(heroText).toBeVisible({ timeout: 15000 });
    });

    test('can scroll to services section', async ({ page }) => {
        // Wait for Hero first
        await expect(page.getByRole('heading', { name: /Crafting/i })).toBeVisible({ timeout: 15000 });

        // Find a service card or heading
        const servicesHeading = page.getByRole('heading', { name: /Services/i });

        // Scroll to it
        await servicesHeading.scrollIntoViewIfNeeded();
        await expect(servicesHeading).toBeVisible();
    });
});
