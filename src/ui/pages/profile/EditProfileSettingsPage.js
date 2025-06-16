import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';
import { InternalHeader } from '../../components/header/InternalHeader';

export class EditProfileSettingsPage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/settings';
    this.header = new InternalHeader(this.page, userId);
    this.profilePictureUrlField = this.page.getByPlaceholder(
      'URL of profile picture',
    );
    this.usernameField = page.getByPlaceholder('Username');
    this.bioTextArea = this.page.getByPlaceholder('Short bio about you');
    this.emailField = page.getByPlaceholder('Email');
    this.newPasswordField = page.getByPlaceholder('New Password');
    this.updateSettingsButton = page.getByRole('button', {
      name: 'Update Settings',
    });
  }

  async fillProfilePictureUrlField(url) {
    await this.step(`Fill the 'URL for profile picture' field`, async () => {
      await this.profilePictureUrlField.fill(url);
    });
  }

  async fillBioTextArea(url) {
    await this.step(`Fill the 'Bio' text area`, async () => {
      await this.bioTextArea.fill(url);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click the 'Update Settings' button`, async () => {
      await this.updateSettingsButton.click();
    });
  }

  async assertProfilePictureUrlHasText(text) {
    await this.step(
      `Assert the 'URL for profile picture' contains corrext text`,
      async () => {
        await expect(this.profilePictureUrlField).toHaveValue(text);
      },
    );
  }

  async assertBioHasText(text) {
    await this.step(`Assert the 'Bio' contains corrext text`, async () => {
      await expect(this.bioTextArea).toHaveValue(text);
    });
  }
}
