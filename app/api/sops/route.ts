import { NextResponse } from 'next/server'

export async function GET() {
  // This would typically fetch data from Drupal or another backend service
  const sops = [
    { title: "Sample Collection SOP", department: "Laboratory" },
    { title: "Data Entry and Validation SOP", department: "Data Management" },
    { title: "Patient Counseling SOP", department: "Clinical" },
  ]

  return NextResponse.json(sops)
}

