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


