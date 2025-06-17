# Practice with using of creational design patterns

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task you will practice implementing the creational design patterns: Factory method and Builder for the Conduit application. 

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`


## Main Task
1. Move new article data generation from `./src/common/testData/generateNewArticleData.js` to the factory method `generateArticle()`.
 - Create class `ArticleFactory` under the `./src/factoryItems/ArticleFactory.js`
 - Create factory method `generateArticle()` in the `ArticleFactory` class. This method should generate articles with a number of tags provided in parameters, and 0 by default. 
 - Add the `ArticleFactory` initialization to the `factories` fixture in the `./tests/_fixtures/fixturesFactories.ts`.
 - Remove usage of the `./src/common/testData/generateNewArticleData.js` from all fixtures and tests. Update them to use factory method.
2. Run all the tests and make sure thet pass. Use npm scripts for tests triggering againts stage env.

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
