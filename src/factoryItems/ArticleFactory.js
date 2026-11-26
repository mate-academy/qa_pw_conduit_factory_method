import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(tagNumber = 0) {
    const tags = Array.from({ length: tagNumber }, () => faker.lorem.word());

    const article = {
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(4),
      text: faker.lorem.sentences(2),
      tags,
    };

    return article;
  }
}
