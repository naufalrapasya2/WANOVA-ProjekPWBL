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
  }