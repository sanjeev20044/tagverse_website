import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        // Handle 'name' field by splitting it if firstName/lastName are missing
        if (body.name && (!body.firstName || !body.lastName)) {
            const names = body.name.trim().split(/\s+/);
            body.firstName = names[0] || '';
            body.lastName = names.slice(1).join(' ') || ' ';
        }

        // Map 'message' to 'projectDetails' if needed
        if (body.message && !body.projectDetails) {
            body.projectDetails = body.message;
        }

        const lead = await Lead.create(body);
        const leadId = (lead as any)._id || (Array.isArray(lead) ? lead[0]._id : null);
        console.log('✅ Created new lead from contact form:', leadId);
        return NextResponse.json({ success: true, data: lead }, { status: 201 });
    } catch (error: any) {
        console.error('❌ Error creating lead from contact form:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}
