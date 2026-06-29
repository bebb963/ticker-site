import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Log for local development
    console.log('Ticker Score Submission:', JSON.stringify(body, null, 2))

    // Forward to webhook if configured
    const webhookUrl = process.env.SCORE_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      } catch (webhookError) {
        console.error('Webhook forwarding failed:', webhookError)
        // Don't fail the response if webhook fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Score submitted successfully',
    })
  } catch (error) {
    console.error('Error processing score submission:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 400 }
    )
  }
}
