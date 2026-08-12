import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

const testParameters = [
  { tagsNumber: 1, testNameEnding: 'one tag' },
  { tagsNumber: 2, testNameEnding: 'two tags' },
  { tagsNumber: 10, testNameEnding: 'ten tags' },
];
let article;

testParameters.forEach(({ tagsNumber, testNameEnding }) => {
  test.describe('Create an article with tags', () => {
    test.beforeEach(async ({ page, user, factories }) => {
      article = factories.article.generateArticle({ tags: tagsNumber });

      await signUpUser(page, user);
    });

    test(`Create an article with ${testNameEnding}`, async ({
      internalHomePage,
      createArticlePage,
      internalViewArticlePage,
    }) => {
      await internalHomePage.header.clickNewArticleLink();
      await createArticlePage.fillTitleField(article.title);
      await createArticlePage.fillDescriptionField(article.description);
      await createArticlePage.fillTextField(article.text);
      await createArticlePage.fillTagsField(article.tags);
      await createArticlePage.clickPublishArticleButton();
      await internalViewArticlePage.articleHeader.assertTitleIsVisible(
        article.title,
      );
      await internalViewArticlePage.articleContent.assertArticleTextIsVisible(
        article.text,
      );
      await internalViewArticlePage.articleContent.assertArticleTagsAreVisible(
        article.tags,
      );
    });
  });
});
