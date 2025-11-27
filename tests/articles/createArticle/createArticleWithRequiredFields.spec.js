import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

let article;

test.beforeEach(async ({ page, user, logger, factories }) => {
  article = factories.article.generateArticle(0, logger);

  await signUpUser(page, user);
});

test('Creat an article with required fields', async ({
  internalHomePage,
  createArticlePage,
  internalViewArticlePage,
}) => {
  await internalHomePage.header.clickNewArticleLink();
  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);
  await createArticlePage.clickPublishArticleButton();
  await internalViewArticlePage.articleHeader.assertTitleIsVisible(
    article.title,
  );
  await internalViewArticlePage.articleContent.assertArticleTextIsVisible(
    article.text,
  );
});
