import { connectClient, stopClient } from "../server/db";
import { faker } from '@faker-js/faker';

import { LANGUAGES } from "../constants";

async function main() {
  const client = await connectClient();

  await client.collection("advisors").deleteMany({});

  const list = [];
  for (let i = 0; i < 20; i++) {
    list.push({
      id: faker.database.mongodbObjectId(),
      name: faker.person.fullName(),
      status: faker.number.int({ min: 1, max: 2}),
      language: LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)],
      reviewNumber: faker.number.int({ min: 10, max: 1000})
    })
  }

  const resp = await client.collection("advisors").insertMany(list);

  console.info("Inserted advisors:", resp.insertedCount);

  stopClient();
}

main();
