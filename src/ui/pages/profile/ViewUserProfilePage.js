import { BasePage } from '../BasePage';
import { InternalHeader } from '../../components/header/InternalHeader';

export class ViewUserProfilePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new InternalHeader(this.page, userId);
    this.profileImage = this.page.getByRole('img', {
      name: `User's profile image`,
    });
    this.bio = this.page.getByRole('img', {
      name: `User's profile image`,
    });
  }

  setUrl(username) {
    this._url = `/profile/${username}`;
  }
}
