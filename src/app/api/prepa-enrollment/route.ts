import { NextRequest, NextResponse } from 'next/server';

const DASHBOARD_API_URL = process.env.DASHBOARD_API_URL || 'http://localhost:3001';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Forward the enrollment form to LIEC-ONE candidats API
    const response = await fetch(`${DASHBOARD_API_URL}/api/candidats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || 'Erreur lors de la transmission au dashboard LIEC-ONE' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      ok: true,
      success: true,
      ref: data.ref,
      demRef: data.demRef,
      fullName: data.fullName,
      program: data.program,
      schoolName: data.schoolName,
      message: 'Candidature enregistrée avec succès dans le Dashboard LIEC-ONE',
    });
  } catch (error: any) {
    console.error('Erreur API prepa-enrollment:', error);
    return NextResponse.json(
      {
        error:
          'Impossible de joindre le Dashboard LIEC-ONE. Vérifiez que LIEC-ONE est démarré sur http://localhost:3001',
        details: error?.message,
      },
      { status: 502 }
    );
  }
}
