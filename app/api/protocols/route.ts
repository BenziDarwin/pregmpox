import { NextResponse } from 'next/server'

export async function GET() {
  // This would typically fetch data from Drupal or another backend service
  const protocols = [
    { title: "MPXV PCR Testing Protocol", version: "v2.3" },
    { title: "Pregnancy Monitoring Guidelines", version: "v1.5" },
    { title: "Neonatal Follow-up Protocol", version: "v1.2" },
  ]

  return NextResponse.json(protocols)
}

