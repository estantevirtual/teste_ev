import sqlite3 from 'sqlite3';

class Database {
  private static instance: sqlite3.Database;

  private constructor() {}

  public static getInstance(): sqlite3.Database {
    if (!Database.instance) {
      
      Database.instance = new sqlite3.Database(':memory:');
    }
    return Database.instance;
  }
}


export const db = Database.getInstance();