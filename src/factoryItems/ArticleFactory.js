import { faker } from '@faker-js/faker';

export class ArticleFactory {

  generateArticle(tagNumber = 0) {

    const tags = [];
    for (let i = 0; i < tagNumber; i++) {
      tags.push(this.generateTag());
    }
    const title = this.generateTitle();
    const description = this.generateDescription();
    const text = this.generateText();

    return {
      title,
      description,
      text,
      tags,
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

  generateTag() {
    return faker.lorem.word();
  }
}
