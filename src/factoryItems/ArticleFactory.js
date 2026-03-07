import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(tagsCount = 0) {
    const tags = Array.from({ length: tagsCount }, () => faker.lorem.word());

    return {
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(4),
      text: faker.lorem.sentences(2),
      tags,
    };
  }
}
