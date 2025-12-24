import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectDB();
        const enquiries = await Lead.find({}).sort({ createdAt: -1 });
        console.log(`🔍 Fetched ${enquiries.length} enquiries from database.`);
        return NextResponse.json({ success: true, data: enquiries });
    } catch (error: any) {
        console.error('❌ Error fetching enquiries:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function PATCH(req: Request) {
    try {
        await connectDB();
        const { id, status } = await req.json();
        const updatedEnquiry = await Lead.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );
        return NextResponse.json({ success: true, data: updatedEnquiry });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

export async function DELETE(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        await Lead.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}

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

        const enquiry = await Lead.create(body);
        console.log('✅ Created new enquiry:', enquiry._id);
        return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
    } catch (error: any) {
        console.error('❌ Error creating enquiry:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
    }
}
