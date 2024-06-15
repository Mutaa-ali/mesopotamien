import { Account, Client, Databases, Functions, ID, Query, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6651c8be0032a2e015c0');

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
const functions = new Functions(client);

export { ID, Query, account, client, database, functions, storage };

