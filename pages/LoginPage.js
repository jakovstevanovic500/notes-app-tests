export class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.submitButton = page.getByTestId('login-submit');
    }   

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}