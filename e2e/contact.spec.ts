import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
    test('allows form submission', async ({ page }) => {
        await page.goto('/contact');

        // Check for title to ensure page loaded
        await expect(page.getByRole('heading', { level: 1 })).toContainText(/Contact/i, { timeout: 15000 });

        // Fill the form
        await page.getByPlaceholder('Your full name').fill('Playwright Tester');
        await page.getByPlaceholder('your@email.com').fill('test@playwright.com');
        await page.getByPlaceholder('Tell us about your project...').fill('This is an E2E test message.');

        // Click submit
        await page.getByText('Send Message').click();

        // Verify success message
        await expect(page.getByText('Message sent successfully!')).toBeVisible({ timeout: 10000 });
    });

    test('navigation from home to contact works', async ({ page }) => {
        await page.goto('/');

        // Wait for Hero to be ready
        await expect(page.getByRole('heading', { name: /Crafting/i })).toBeVisible({ timeout: 15000 });

        // Find the link
        // Note: On mobile, ensure we are not clicking a hidden element or the hamburger menu trigger if the link is inside it.
        // The "Start Project" button in the Hero section is visible on all screen sizes.
        // We target it specifically by text and ensuring it's the one in the main content if possible, or just the first visible one.

        const startProjectLink = page.getByRole('link', { name: 'Start Project' }).first();
        await expect(startProjectLink).toBeVisible();
        await startProjectLink.click();

        await expect(page).toHaveURL(/.*contact/, { timeout: 15000 });
        await expect(page.getByRole('heading', { level: 1 })).toContainText(/Contact/i);
    });
});
