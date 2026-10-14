// ==========================================
// A FARI DATA SUB
// Supabase Configuration
// ==========================================
(function () {
    "use strict";
    // 1. Check whether Supabase library loaded
    if (!window.supabase) {
        console.error(
            "A FARI ERROR: Supabase library did not load."
        );
        return;
    }
    // 2. Correct Supabase Project URL
    const SUPABASE_URL =
        "https://ygruwsvxvzebztsktxlr.supabase.co";
    // 3. Paste your existing Publishable Key here
    const SUPABASE_PUBLISHABLE_KEY =
        "sb_publishable_VLP1FqpIKT4E0nxlVlCrwA_XgmIb_uh";
    // 4. Initialize Supabase client
    try {
        window.supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_PUBLISHABLE_KEY
            );
        console.log(
            "A FARI DATA SUB: Supabase initialized successfully."
        );
    } catch (error) {
        console.error(
            "A FARI Supabase initialization error:",
            error.message
        );
    }
})();