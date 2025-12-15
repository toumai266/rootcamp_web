
import { NextRequest, NextResponse } from 'next/server';
import { updateTeamMember, TeamMember } from '@/lib/db'; // Make sure to update tsconfig paths if needed or use relative path

// We need to define types or import them. Since lib/db exports them, we can import.
// However, standard Next.js might complain about importing server code if used in client, but this is an API route (server).

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { member } = body;

        if (!member || !member.id) {
            return NextResponse.json({ success: false, message: 'Invalid data' }, { status: 400 });
        }

        // Auth check (Optional: verify cookie matches member.name)
        const cookie = req.cookies.get('user_session');
        if (!cookie) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const session = JSON.parse(cookie.value);
        if (session.name !== member.name) {
            return NextResponse.json({ success: false, message: 'Forbidden: You can only edit your own profile' }, { status: 403 });
        }

        console.log('Update Request:', member.name, member.id);
        const success = await updateTeamMember(member);
        console.log('Update Result:', success);

        if (success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, message: 'Update failed' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
