const { test, expect } =require('@playwright/test');


test('handle checkbox',async({page})=>{

    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForTimeout(5000);

   await page.locator("//input[@placeholder='username']").fill("Admin");

   await driver.quit();
})