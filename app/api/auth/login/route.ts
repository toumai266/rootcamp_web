
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getTeamMembers } from '@/lib/db';

export async function POST(req: NextRequest) {
    try {
        const { name, code } = await req.json();

        // Fetch team members to map Name -> ID
        const members = await getTeamMembers();
        const member = members.find(m => m.name === name);

        if (!member) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        // Use English ID for Env Key (e.g., ACCESS_CODE_MEMBER1)
        // Convert to uppercase for standard env var convention
        const envKey = `ACCESS_CODE_${member.id.toUpperCase()}`;
        const correctCode = process.env[envKey];


        // Fallback or Admin Master Key check (optional, but good for testing)
        // const MASTER_KEY = process.env.ACCESS_CODE_MASTER;

        if (code === correctCode) {
            // Success
            const response = NextResponse.json({ success: true, name });

            // Set session cookie
            response.cookies.set('user_session', JSON.stringify({ name }), {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                path: '/',
                maxAge: 60 * 60 * 24 // 1 day
            });

            return response;
        }

        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
