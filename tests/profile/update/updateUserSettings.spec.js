import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

let settings;

test.beforeEach(async ({ page, user, factories }) => {
  await signUpUser(page, user);

  settings = factories.userSettings.generateUserSettings({ user });
});

test('Update URL and Bio settings for registered user', async ({
  editSettingsPage,
  viewUserProfilePage,
}) => {
  await editSettingsPage.open();
  await editSettingsPage.fillProfilePictureUrlField(settings.profilPictureUrl);
  await editSettingsPage.fillBioTextArea(settings.bio);
  await editSettingsPage.clickUpdateSettingsButton();
  await viewUserProfilePage.setUrl(settings.username);
  await viewUserProfilePage.assertOpened();
  await editSettingsPage.open();
  await editSettingsPage.assertProfilePictureUrlHasText(
    settings.profilPictureUrl,
  );
  await editSettingsPage.assertBioHasText(settings.bio);
});
