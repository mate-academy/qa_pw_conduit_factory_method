import { test as base } from '@playwright/test';
import { ArticleFactory } from '../../src/factoryItems/ArticleFactory';
import { UserFactory } from '../../src/factoryItems/UserFactory';
import { UserSettingsFactory } from '../../src/factoryItems/UserSettingsFactory';

export const test = base.extend<{
  factories;
}>({
  factories: async ({}, use) => {
    const factories = {
      user: new UserFactory(),
      userSettings: new UserSettingsFactory(),
      article: new ArticleFactory(),
    };

    await use(factories);
  },
});
