import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'portfolio';

let cached = global._mongoCache;
if (!cached) cached = global._mongoCache = { client: null, db: null };

async function getDb() {
  if (cached.db) return cached.db;
  const client = new MongoClient(uri);
  await client.connect();
  cached.client = client;
  cached.db = client.db(dbName);
  return cached.db;
}

function json(body, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    },
  });
}

export async function OPTIONS() { return json({}, 200); }

export async function GET(request, { params }) {
  const path = params?.path || [];
  const route = path.join('/');

  if (!route || route === '') {
    return json({ ok: true, service: 'pradeep-awasthi-portfolio' });
  }

  if (route === 'contact') {
    try {
      const db = await getDb();
      const messages = await db.collection('contact_messages')
        .find({}, { projection: { _id: 0 } })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray();
      return json({ ok: true, count: messages.length, messages });
    } catch (e) {
      return json({ ok: false, error: e.message }, 500);
    }
  }

  return json({ ok: false, error: 'Not found', path: route }, 404);
}

export async function POST(request, { params }) {
  const path = params?.path || [];
  const route = path.join('/');

  if (route === 'contact') {
    try {
      const body = await request.json();
      const { name, email, message } = body || {};
      if (!name || !email || !message) {
        return json({ ok: false, error: 'name, email and message are required' }, 400);
      }
      const db = await getDb();
      const doc = {
        id: uuidv4(),
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        message: String(message).slice(0, 5000),
        createdAt: new Date().toISOString(),
      };
      await db.collection('contact_messages').insertOne(doc);
      return json({ ok: true, id: doc.id });
    } catch (e) {
      return json({ ok: false, error: e.message }, 500);
    }
  }

  return json({ ok: false, error: 'Not found', path: route }, 404);
}
