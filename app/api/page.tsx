'use client';
import Link from 'next/link';

export default function APIDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A2A2A] to-[#3A3A3A] text-[#E8E0D8] p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#C47A4E] hover:underline text-sm mb-8 inline-block">← Back to Home</Link>
        <h1 className="font-serif text-4xl mb-8">meditrack API</h1>
        <p className="text-[#8A8278] mb-12">RESTful API endpoints for Connected Health Platform. All endpoints return JSON.</p>
        <div className="space-y-8">
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/patients</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/patients → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/patients → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/patients/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/patients/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/appointments</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/appointments → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/appointments → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/appointments/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/appointments/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/records</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/records → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/records → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/records/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/records/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/diagnostics</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/diagnostics → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/diagnostics → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/diagnostics/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/diagnostics/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/staff</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/staff → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/staff → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/staff/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/staff/[id] → Delete</span></div>
            </div>
          </div>

        </div>
        <footer className="mt-16 pt-8 border-t border-white/[0.04] text-center text-sm text-[#8A8278]">
          <p>Built by <span style={{color:'#7EB8A0'}}>Raymora</span> — Premium Web Engineering</p>
        </footer>
      </div>
    </div>
  );
}
