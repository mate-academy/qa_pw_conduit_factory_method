import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(tagNumber = 0) {
    const article = {
      title: this.generateTitle(),
      description: this.generateDescription(),
      text: this.generateText(),
      tags: this.generateTags(tagNumber),
    };

    return article;
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

  generateTags(tagNumber) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}
