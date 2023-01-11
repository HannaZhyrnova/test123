import { Page } from "@playwright/test";

export default class InviteMemberDialog {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

//locators

public get inviteMembersButton() {
    return this.getElement('text=Invite Members');
}

public get firstNameInput() {
    return this.getElement('input[name="first_name"]');
}

public get lastNameInput() {
    return this.getElement('input[name="last_name"]');
}

public get emailInput() {
    return this.getElement('input[name="email"]');
}

public get passwordInput() {
    return this.getElement('input[name="password"]');
}

public get saveButton() {
    return this.getElement('text=Save');
}

//functions

public async getElement(selector: string) {
    const element = await this.page.waitForSelector(selector);
    if (!element) {
        throw new Error(`No element for "${selector}" selector`);
    }
    return element;
}

public async inviteMember(name: string, lastname: string, email: string, password: string){
    
    const inviteBtn = await this.inviteMembersButton;
    await inviteBtn?.click();

    const nameInput = await this.firstNameInput;
    await nameInput?.fill(name);

    const lastNameInput = await this.lastNameInput;
    await lastNameInput?.fill(lastname);

    const emailInput = await this.emailInput;
    await emailInput?.fill(email);

    const passInput = await this.passwordInput;
    await passInput?.fill(password);

    const saveBtn = await this.saveButton;
    await saveBtn?.click();
}


}