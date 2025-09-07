import { test } from '../../_fixtures/fixtures';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/view/ExternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2, usersNumber: 1 });

let article;

test.beforeEach(async ({ pages, users, factories }) => {
  await signUpUser(pages[0], users[0], 1);

  article = factories.article.generateArticle();

  article.url = await createArticle(pages[0], article, 1);
});

test('View an article as not registered user', async ({
  pages,
  users,
}) => {
  const page = new ExternalViewArticlePage(pages[1], 2);

  await page.open(article.url);
  await page.articleHeader.assertTitleIsVisible(article.title);
  await page.articleContent.assertArticleTextIsVisible(article.text);
  await page.articleHeader.assertAuthorNameIsVisible(users[0].username);
});
