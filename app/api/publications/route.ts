import { NextResponse } from 'next/server'

export async function GET() {
  // This would typically fetch data from Drupal or another backend service
  const publications = [
    { title: "MPXV in Pregnancy: A Systematic Review", date: "2023-06-15" },
    { title: "Clinical Features of Clade Ib MPXV Infection", date: "2023-05-03" },
    { title: "Pregnancy Outcomes in MPXV-Infected Women", date: "2023-04-22" },
  ]

  return NextResponse.json(publications)
}

