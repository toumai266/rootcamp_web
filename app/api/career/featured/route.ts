
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { updateCareerFeatured, deleteCareerFeatured, FeaturedInfo } from '@/lib/db';

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { jobId, featuredInfo } = body; // featuredInfo: { name: string, ... }

        if (!jobId || !featuredInfo || !featuredInfo.name) {
            return NextResponse.json({ success: false, message: 'Invalid data' }, { status: 400 });
        }

        // Auth check
        const cookie = req.cookies.get('user_session');
        if (!cookie) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const session = JSON.parse(cookie.value);
        if (session.name !== featuredInfo.name) {
            return NextResponse.json({ success: false, message: 'Forbidden: You can only edit your own career comments' }, { status: 403 });
        }

        const success = await updateCareerFeatured(jobId, featuredInfo);

        if (success) {
            // 캐시 즉시 무효화 - 편집 내용 바로 반영
            revalidatePath('/careers');
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, message: 'Update failed' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();
        const { jobId, name } = body;

        if (!jobId || !name) {
            return NextResponse.json({ success: false, message: 'Invalid data' }, { status: 400 });
        }

        // Auth check
        const cookie = req.cookies.get('user_session');
        if (!cookie) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const session = JSON.parse(cookie.value);
        if (session.name !== name) {
            return NextResponse.json({ success: false, message: 'Forbidden: You can only delete your own career comments' }, { status: 403 });
        }

        const success = await deleteCareerFeatured(jobId, name);

        if (success) {
            // 캐시 즉시 무효화 - 삭제 내용 바로 반영
            revalidatePath('/careers');
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, message: 'Delete failed (Item might not exist)' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
