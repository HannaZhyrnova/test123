import { Page } from "@playwright/test";

export default class FactsheetPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }


//locators

public get exploreLinkedText() {
    return this.page.locator('"Explore global trends"');
}

public get learnLinkedText() {
    return this.page.locator('input[name="Learn more"]');
}

public get signInButton() {
    return this.page.locator('button:text("Sign In")');
}

public get registerLink() {
    return this.page.locator('text=New User? Click here to register.');
}

public get forgotPasswordLink() {
    return this.page.locator('text=Forgot Password?');
}

//functions

public async clickExploreLinkedText(){
    const element = this.exploreLinkedText;
    await element?.click();
}

}