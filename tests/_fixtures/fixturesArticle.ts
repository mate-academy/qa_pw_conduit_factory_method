import { test as base } from './fixturesFactories';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/view/InternalViewArticlePage';

export const test = base.extend<{
  articleWithoutTags;
  articleWithOneTag;
  createArticlePage;
  internalViewArticlePage;
}>({
  articleWithoutTags: async ({ factories }, use) => {
    const article = factories.article.generateArticle(0);
    await use(article);
  },

  articleWithOneTag: async ({ factories }, use) => {
    const article = factories.article.generateArticle(1);
    await use(article);
  },

  createArticlePage: async ({ page }, use) => {
    await use(new CreateArticlePage(page));
  },

  internalViewArticlePage: async ({ page }, use) => {
    await use(new InternalViewArticlePage(page));
  },
});
