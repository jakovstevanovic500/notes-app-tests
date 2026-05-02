export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByTestId('register-email');
    this.passwordInput = page.getByTestId('register-password');
    this.nameInput = page.getByTestId('register-name');
    this.confirmPasswordInput = page.getByTestId('register-confirm-password');
    this.submitButton = page.getByTestId('register-submit');
  }

  async register(name, email, password) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.submitButton.click();
  }
}