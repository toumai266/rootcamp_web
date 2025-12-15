
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables: CHECK NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
}

// Service Role Key grants admin access, bypassing RLS.
// This is safe because this code only runs on the server (API Routes).
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false, // No need to persist session on server
        autoRefreshToken: false,
    },
    global: {
        fetch: (url, options) => {
            return fetch(url, {
                ...options,
                cache: 'no-store',
            })
        }
    }
})
