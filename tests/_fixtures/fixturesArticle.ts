import { test as base } from './fixturesFactories';
import { ArticleFactory } from '../../src/factoryItems/ArticleFactory';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/view/InternalViewArticlePage';

type ArticleData = ReturnType<ArticleFactory['generateArticle']>;

export const test = base.extend<{
  articleWithoutTags: ArticleData;
  articleWithOneTag: ArticleData;
  createArticlePage: CreateArticlePage;
  internalViewArticlePage: InternalViewArticlePage;
}>({
  articleWithoutTags: async ({ factories }, use) => {
    const article = factories.article.generateArticle();

    await use(article);
  },
  articleWithOneTag: async ({ factories }, use) => {
    const article = factories.article.generateArticle(1);

    await use(article);
  },
  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },
  internalViewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new InternalViewArticlePage(page);

    await use(viewArticlePage);
  },
});
