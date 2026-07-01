import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Creat an article with required fields', async ({
  page,
  user,
  factories,
  internalHomePage,
  createArticlePage,
  internalViewArticlePage,
}) => {
  const article = factories.article.generateArticle();

  await signUpUser(page, user);
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
