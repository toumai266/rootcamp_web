
import { TeamMember, Career, FeaturedInfo } from '@/data/types';
import { supabase } from './supabase';
import fs from 'fs';
import path from 'path';

// Types re-export
export type { TeamMember, Career, FeaturedInfo };

// Helper to seed data if DB is empty
async function seedIfNeeded() {
    // Check if team_members is empty
    const { count: memberCount, error: memberError } = await supabase
        .from('team_members')
        .select('*', { count: 'exact', head: true });

    if (!memberError && memberCount === 0) {
        console.log('Seeding Team Members to Supabase...');
        const data = fs.readFileSync(path.join(process.cwd(), 'data/team.json'), 'utf-8');
        const members: TeamMember[] = JSON.parse(data);
        const { error: insertError } = await supabase.from('team_members').insert(members);
        if (insertError) console.error('Error seeding members:', insertError);
    }

    // Check if careers is empty
    const { count: careerCount, error: careerError } = await supabase
        .from('careers')
        .select('*', { count: 'exact', head: true });

    if (!careerError && careerCount === 0) {
        console.log('Seeding Careers to Supabase...');
        const data = fs.readFileSync(path.join(process.cwd(), 'data/careers.json'), 'utf-8');
        const careers: Career[] = JSON.parse(data);

        // Map camelCase to snake_case for specific columns if needed
        const dbCareers = careers.map(c => ({
            id: c.id,
            title: c.title,
            description: c.description,
            responsibilities: c.responsibilities,
            skills: c.skills,
            certifications: c.certifications,
            career_paths: c.careerPaths, // Map here
            featured: c.featured || []
        }));

        const { error: insertError } = await supabase.from('careers').insert(dbCareers);
        if (insertError) console.error('Error seeding careers:', insertError);
    }
}

// Read functions
export async function getTeamMembers(): Promise<TeamMember[]> {
    try {
        await seedIfNeeded();
        // REMOVED .order('name') to handle sorting manually
        const { data, error } = await supabase
            .from('team_members')
            .select('*');

        if (error) {
            console.error('Supabase error fetching members:', error);
            return [];
        }

        // Manual Sort Order: 이수민 -> 유희현 -> 권준현 -> 김주하
        const orderMap: Record<string, number> = {
            '이수민': 1,
            '유희현': 2,
            '권준현': 3,
            '김주하': 4
        };

        const sortedData = (data as TeamMember[]).sort((a, b) => {
            const orderA = orderMap[a.name] || 99;
            const orderB = orderMap[b.name] || 99;
            return orderA - orderB;
        });

        return sortedData;
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
}

export async function getCareers(): Promise<Career[]> {
    try {
        await seedIfNeeded();
        const { data, error } = await supabase
            .from('careers')
            .select('*');

        if (error) {
            console.error('Supabase error fetching careers:', error);
            return [];
        }

        // Map back from DB (snake_case) to App (camelCase)
        const careers = data.map((item: any) => ({
            ...item,
            careerPaths: item.career_paths // Map back
        })) as Career[];

        // Manual Sort: Match data/careers.json order
        try {
            const fileData = fs.readFileSync(path.join(process.cwd(), 'data/careers.json'), 'utf-8');
            const fileCareers: Career[] = JSON.parse(fileData);
            const orderMap = new Map(fileCareers.map((c, i) => [c.id, i]));

            return careers.sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));
        } catch (e) {
            console.warn('Could not sort by original JSON order, returning default sort');
            return careers;
        }
    } catch (error) {
        console.error('Error fetching careers:', error);
        return [];
    }
}

// Write functions
export async function updateTeamMember(updatedMember: TeamMember): Promise<boolean> {
    try {
        const { error } = await supabase
            .from('team_members')
            .update({
                role: updatedMember.role,
                bio: updatedMember.bio,
                skills: updatedMember.skills,
                github: updatedMember.github,
                blog: updatedMember.blog
            })
            .eq('id', updatedMember.id);

        if (error) {
            console.error('Error updating member:', error);
            return false;
        }
        return true;
    } catch (error) {
        console.error('Error in updateTeamMember:', error);
        return false;
    }
}

export async function updateCareerFeatured(jobId: string, featuredInfo: FeaturedInfo): Promise<boolean> {
    try {
        // 1. Get current featured list
        const { data, error } = await supabase.from('careers').select('featured').eq('id', jobId).single();
        if (error || !data) return false;

        let currentFeatured: FeaturedInfo[] = data.featured || [];

        // 2. Modify list
        const index = currentFeatured.findIndex(f => f.name === featuredInfo.name);
        if (index !== -1) {
            currentFeatured[index] = featuredInfo;
        } else {
            currentFeatured.push(featuredInfo);
        }

        // 3. Update
        const { error: updateError } = await supabase
            .from('careers')
            .update({ featured: currentFeatured })
            .eq('id', jobId);

        return !updateError;
    } catch (error) {
        console.error('Error updating career featured:', error);
        return false;
    }
}

export async function deleteCareerFeatured(jobId: string, name: string): Promise<boolean> {
    try {
        // 1. Get current
        const { data, error } = await supabase.from('careers').select('featured').eq('id', jobId).single();
        if (error || !data) return false;

        let currentFeatured: FeaturedInfo[] = data.featured || [];
        const initialLength = currentFeatured.length;

        // 2. Filter
        currentFeatured = currentFeatured.filter(f => f.name !== name);

        if (currentFeatured.length === initialLength) return false;

        // 3. Update
        const { error: updateError } = await supabase
            .from('careers')
            .update({ featured: currentFeatured })
            .eq('id', jobId);

        return !updateError;
    } catch (error) {
        console.error('Error deleting career featured:', error);
        return false;
    }
}
