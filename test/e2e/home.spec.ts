import { expect, test } from "@playwright/test"

test("home page shows footer and license", async ({ page }) => {
  await page.goto("/")

  const footer = page.getByTestId("app-footer")
  await expect(footer).toContainText("NewsNow")
  await expect(page.getByRole("link", { name: "MIT LICENSE" })).toBeVisible()
})
