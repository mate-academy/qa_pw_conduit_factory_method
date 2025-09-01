import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

const testParameters = [
  { tagsNumber: 1, testNameEnding: 'one tag' },
  { tagsNumber: 2, testNameEnding: 'two tags' },
  { tagsNumber: 10, testNameEnding: 'ten tags' },
];

testParameters.forEach(({ tagsNumber, testNameEnding }) => {
  test.describe('Create an article with tags', () => {
    test.beforeEach(async ({ page, user }) => {
      await signUpUser(page, user);
    });

    test(`Create an article with ${testNameEnding}`, async ({
      internalHomePage,
      createArticlePage,
      internalViewArticlePage,
      article
    }) => {
      const createdArticle = article.generateArticle(tagsNumber);

      await internalHomePage.header.clickNewArticleLink();
      await createArticlePage.fillTitleField(createdArticle.title);
      await createArticlePage.fillDescriptionField(createdArticle.description);
      await createArticlePage.fillTextField(createdArticle.text);
      await createArticlePage.fillTagsField(createdArticle.tags);
      await createArticlePage.clickPublishArticleButton();
      await internalViewArticlePage.articleHeader.assertTitleIsVisible(
        createdArticle.title,
      );
      await internalViewArticlePage.articleContent.assertArticleTextIsVisible(
        createdArticle.text,
      );
      await internalViewArticlePage.articleContent.assertArticleTagsAreVisible(
        createdArticle.tags,
      );
    });
  });
});
