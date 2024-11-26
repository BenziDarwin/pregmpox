import { NextResponse } from 'next/server'

export async function GET() {
  // This would typically fetch data from Drupal or another backend service
  const policyDocuments = [
    { title: "MPXV Vaccination in Pregnancy Policy", status: "Under Review" },
    { title: "Ethical Guidelines for MPXV Research", status: "Approved" },
    { title: "Data Sharing and Collaboration Policy", status: "Implemented" },
  ]

  return NextResponse.json(policyDocuments)
}

