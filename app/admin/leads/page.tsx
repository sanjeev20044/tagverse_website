'use client';

import { useEffect, useState } from 'react';
import LeadsTable from '@/components/admin/LeadsTable';
import { RefreshCcw } from 'lucide-react';

export default function LeadsPage() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/leads');
            const data = await res.json();
            if (data.success) {
                setLeads(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch leads', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif font-medium text-midnight">Leads</h1>
                    <p className="text-subtext mt-1">View and manage contact form submissions.</p>
                </div>
                <button
                    onClick={fetchLeads}
                    className="p-2 rounded-lg bg-white border border-black/10 hover:bg-porcelain transition-all text-subtext hover:text-midnight"
                    title="Refresh"
                >
                    <RefreshCcw size={20} className={loading ? "animate-spin" : ""} />
                </button>
            </div>

            {loading && leads.length === 0 ? (
                <div className="w-full h-64 flex items-center justify-center text-subtext">
                    Loading...
                </div>
            ) : (
                <LeadsTable leads={leads} />
            )}
        </div>
    );
}
