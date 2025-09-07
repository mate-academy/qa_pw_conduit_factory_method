import { test } from '../../_fixtures/fixtures';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/view/InternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2, usersNumber: 2 });

let article;

test.beforeEach(async ({ pages, users, factories }) => {
  await signUpUser(pages[0], users[0], 1);
  await signUpUser(pages[1], users[1], 2);

  article = factories.article.generateArticle();

  await createArticle(pages[0], article, 1);
});

test('View an article created by another registered user', async ({
  pages,
  users,
}) => {
  const page = new InternalViewArticlePage(pages[1], 2);

  await page.open(article.url);
  await page.articleHeader.assertTitleIsVisible(article.title);
  await page.articleContent.assertArticleTextIsVisible(article.text);
  await page.articleHeader.assertAuthorNameIsVisible(users[0].username);
});
