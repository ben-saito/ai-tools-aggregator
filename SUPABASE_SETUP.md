# Supabase Setup Guide

This guide will help you set up Supabase for the AI Tools Aggregator community features.

## Prerequisites

- A Supabase account (free tier available at [supabase.com](https://supabase.com))

## Step 1: Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Fill in the details:
   - **Name**: `ai-tools-aggregator`
   - **Database Password**: (generate and save this)
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait 2-3 minutes for setup to complete

## Step 2: Run Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy the entire contents of `supabase-schema.sql` from the project root
4. Paste into the SQL editor
5. Click **Run** (or press Cmd/Ctrl + Enter)
6. Verify success: You should see "Success. No rows returned" message

## Step 3: Configure Authentication

### Enable OAuth Providers

#### GitHub OAuth

1. Go to **Authentication** > **Providers** in Supabase dashboard
2. Click **GitHub**
3. Toggle "Enable Sign in with GitHub"
4. You'll need to create a GitHub OAuth App:
   - Go to GitHub Settings > Developer Settings > OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - **Application name**: AI Tools Aggregator
     - **Homepage URL**: `https://your-domain.vercel.app`
     - **Authorization callback URL**: Get from Supabase (shown in the provider settings)
   - Click "Register application"
   - Copy **Client ID** and **Client Secret**
5. Paste Client ID and Secret into Supabase GitHub provider settings
6. Click **Save**

#### Google OAuth

1. Click **Google** in Providers
2. Toggle "Enable Sign in with Google"
3. Create Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Fill in:
     - **Name**: AI Tools Aggregator
     - **Authorized redirect URIs**: Get from Supabase (shown in provider settings)
   - Click "Create"
   - Copy **Client ID** and **Client Secret**
4. Paste into Supabase Google provider settings
5. Click **Save**

## Step 4: Get Environment Variables

1. Go to **Settings** > **API** in Supabase dashboard
2. Copy the following values:

   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public** key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Step 5: Configure Local Environment

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Fill in your Supabase credentials:

   ```env
   PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

   # Optional: GitHub OAuth (already configured in Supabase, but needed for development)
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret

   # Optional: Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

## Step 6: Configure Vercel Environment Variables

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Settings** > **Environment Variables**
3. Add the same variables from your `.env` file:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
4. Click **Save**

## Step 7: Test Authentication

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Visit `http://localhost:4321`
3. Click "Login to Review" button
4. Try signing in with GitHub or Google
5. After successful login, you should see your username in the header

## Step 8: Verify Database

1. Go to **Table Editor** in Supabase dashboard
2. You should see the following tables:
   - `profiles` (empty initially)
   - `reviews` (empty)
   - `review_votes` (empty)
   - `tools_stats` (empty)
3. Create a test review through the UI
4. Check the `reviews` and `profiles` tables to verify data is being saved

## Troubleshooting

### "Missing Supabase environment variables" error

- Make sure `.env` file exists and contains `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`
- Restart your dev server after creating `.env`

### OAuth redirect not working

- Verify the callback URL in your OAuth app settings matches the one provided by Supabase
- Check that the OAuth provider is enabled in Supabase Authentication settings

### Reviews not showing up

- Check browser console for errors
- Verify the database schema was run successfully (check Table Editor)
- Make sure you're logged in when trying to create a review

### RLS (Row Level Security) issues

- The schema includes RLS policies
- If you see "permission denied" errors, check the policies in Supabase SQL Editor
- You can temporarily disable RLS for debugging: `ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;`

## Security Notes

- **Never commit `.env` to git** (already in `.gitignore`)
- Keep your `SUPABASE_ANON_KEY` secret but know it's safe to expose in client-side code
- The `service_role` key should NEVER be used in client-side code
- RLS policies protect data even if the anon key is exposed

## Next Steps

After setup:

1. Deploy to Vercel (environment variables will be applied automatically)
2. Test authentication in production
3. Monitor database usage in Supabase dashboard
4. Set up email templates (optional, for email confirmations)

## Free Tier Limits

Supabase free tier includes:

- 500 MB database storage
- 50,000 monthly active users
- 2 GB bandwidth
- Social OAuth (unlimited)

Perfect for MVP! Upgrade when you need more.
