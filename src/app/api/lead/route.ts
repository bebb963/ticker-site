import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Lead Captured:', body)
    
    // Simula o salvamento de lead. Se tivéssemos um banco de dados (ex: Supabase, CRM),
    // salvaríamos os dados do lead aqui antes de prosseguir.
    
    return NextResponse.json({ success: true, message: 'Lead captured successfully' })
  } catch (error) {
    console.error('Error capturing lead:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to capture lead' },
      { status: 400 }
    )
  }
}
