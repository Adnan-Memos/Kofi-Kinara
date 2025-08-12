// app/api/cafes/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY!;
  const { searchParams } = new URL(req.url);
  const nextPageToken = searchParams.get('pageToken');

  const baseUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  const query = 'cafes in Hyderabad';

  const url = nextPageToken
    ? `${baseUrl}?pagetoken=${nextPageToken}&key=${apiKey}`
    : `${baseUrl}?query=${query}&type=cafe&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
      return NextResponse.json({ error: data.status }, { status: 500 });
    }

    return NextResponse.json({
      cafes: data.results,
      nextPageToken: data.next_page_token || null,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch cafes' }, { status: 500 });
  }
}
