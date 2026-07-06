import { NextResponse } from 'next/server';

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

export async function OPTIONS() {
  return json({}, 200);
}

export async function GET(request, { params }) {
  const path = (params?.path) || [];
  const route = path.join('/');

  if (!route) {
    return json({ ok: true, service: 'pradeep-awasthi-portfolio' });
  }

  return json({ ok: false, error: 'Not found', path: route }, 404);
}

// Kept for backward compatibility. The frontend now uses mailto: directly,
// so this route is not required for the contact form to work.
export async function POST(request, { params }) {
  const path = (params?.path) || [];
  const route = path.join('/');

  if (route === 'contact') {
    return json({
      ok: true,
      note: 'Contact form now uses mailto:. This endpoint is a no-op stub.',
    });
  }

  return json({ ok: false, error: 'Not found', path: route }, 404);
}
