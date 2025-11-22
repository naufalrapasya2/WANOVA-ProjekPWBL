// app/api/archives/route.ts

import { NextRequest, NextResponse } from 'next/server';

// Simulasi database sederhana (di memori)
let archives = [
  {
    id: 1,
    title: "Dokumen Kontrak Kerja",
    description: "Kontrak kerja antara PT ABC dan karyawan.",
    category: "Legal",
    dateCreated: "2025-01-15",
    filePath: "/uploads/contract.pdf",
    tags: ["kontrak", "legal", "karyawan"]
  },
  {
    id: 2,
    title: "Laporan Keuangan Q1 2025",
    description: "Laporan keuangan triwulan pertama tahun 2025.",
    category: "Keuangan",
    dateCreated: "2025-04-10",
    filePath: "/uploads/finance_q1.pdf",
    tags: ["keuangan", "laporan", "q1"]
  }
];

export async function GET() {
  return NextResponse.json(archives);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

   // Validasi input dasar
  if (!body.title || !body.description || !body.category) {
    return NextResponse.json(
      { error: "Title, description, and category are required" },
      { status: 400 }
    );
  }



