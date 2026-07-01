import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(numberOfTags = 0) {
    return {
      title: this.generateTitle(),
      description: this.generateDescription(),
      text: this.generateText(),
      tags: this.generateTags(numberOfTags),
    };
  }

  generateTitle() {
    return faker.lorem.words(5);
  }

  generateDescription() {
    return faker.lorem.sentence(4);
  }

  generateText() {
    return faker.lorem.sentences(2);
  }

  generateTags(numberOfTags = 0) {
    return Array.from({ length: numberOfTags }, () => faker.lorem.word());
  }
}
