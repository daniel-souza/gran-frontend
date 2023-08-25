import mongoose from 'mongoose';
import sqlite3 from 'sqlite3';
import mock from './mock.json' assert { type: 'json' };

const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;

class Connection {
    constructor() {
    }
    mock() {
        return mock;
    }
}
export default new Connection();