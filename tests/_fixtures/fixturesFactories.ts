import { test as base } from '@playwright/test';
import { UserFactory } from '../../src/factoryItems/UserFactory';
import { UserSettingsFactory } from '../../src/factoryItems/UserSettingsFactory';
import { ArticleFactory } from '../../src/factoryItems/ArticleFactory';

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
