import { Page } from "@playwright/test";

export default class SidePanel {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }


//locators

public get organizationsLink() {
    const orgLink = this.page.waitForSelector('text=Organizations');
    if (orgLink != null){
        return orgLink;
    } else throw new Error("No Element");
}

//functions

public async clickOrgLink(){
    const element = await this.organizationsLink;
    await element?.click();
}


}