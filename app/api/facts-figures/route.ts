import { NextResponse } from 'next/server'

export async function GET() {
  // This would typically fetch data from Drupal or another backend service
  const factsFigures = [
    { title: "MPXV Global Prevalence 2023", type: "Infographic" },
    { title: "Pregnancy Outcomes Dashboard", type: "Interactive Chart" },
    { title: "MPXV Transmission Rates", type: "Data Table" },
  ]

  return NextResponse.json(factsFigures)
}

