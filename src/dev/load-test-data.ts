import { connectClient, stopClient } from "../server/db";
import { faker } from '@faker-js/faker';

const languages = ['English', 'German', 'Spanish'];

async function main() {
  const client = await connectClient();

  await client.collection("advisors").deleteMany({});

  let list = [];
  for (let i = 0; i < 20; i++) {
    list.push({
      id: faker.database.mongodbObjectId(),
      name: faker.person.fullName(),
      isOnline: faker.datatype.boolean(),
      language: languages[Math.floor(Math.random() * languages.length)],
      reviewNumber: faker.number.int({ min: 10, max: 1000})
    })
  }

  const resp = await client.collection("advisors").insertMany(list);

  console.info("Inserted advisors:", resp.insertedCount);

  stopClient();
}

main();
