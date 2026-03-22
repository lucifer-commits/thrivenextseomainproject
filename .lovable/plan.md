

## Plan: Replace Contact Form with WhatsApp-Only Contact Section

### Overview
Remove the contact form submission functionality and replace it with a clean "Contact Us" page where all contact methods redirect to WhatsApp.

### Changes Required

#### 1. Simplify Contact Page (`src/pages/Contact.tsx`)

**Remove:**
- Form state management (useState for formData, isSubmitting)
- Form validation schema (zod contactSchema)
- Form submission handler (handleSubmit function)
- Supabase client import
- Toast notifications for form submission
- The entire contact form card (left column)
- Honeypot field
- Form-related imports (Loader2, Send, Input, Textarea, Label, z, supabase)

**Keep and Enhance:**
- Header and Footer
- Page title/description section
- WhatsApp "Quick Chat" card (make it the main CTA)
- Contact Details section (WhatsApp, Email, Location)
- Response time indicator

**New Layout:**
- Single-column centered design focused on WhatsApp
- Large WhatsApp CTA button as the primary action
- Contact details card below
- Clean, simple design that drives users to WhatsApp

#### 2. Delete Edge Function

**Remove:**
- `supabase/functions/submit-contact/index.ts`
- Update `supabase/config.toml` to remove the function configuration

#### 3. Database Cleanup (Optional)

**Consider:**
- The `contact_submissions` table will no longer receive new data
- You can keep it for historical records or drop it later
- The RLS policies we added will remain in place but be unused

### Final Contact Page Structure

```
Header
  |
Page Title: "Let's Grow Your Local Business"
Description: "Ready to dominate Google Maps?..."
  |
Main WhatsApp CTA Card (Gradient background)
  - "Chat With Us on WhatsApp"
  - Large WhatsApp button
  - "Get an instant response"
  |
Contact Details Card
  - WhatsApp: +91 7808335684 (links to WhatsApp)
  - Email: thrivenextmanager@gmail.com (links to WhatsApp or mailto)
  - Serving: India, USA, UK, etc.
  |
Response Time Banner
  - "Average Response Time: Within 2-4 hours"
  |
Footer
```

### Benefits

1. **Simpler user experience** - One clear action (WhatsApp)
2. **Faster page load** - No form validation, no database calls
3. **Lower maintenance** - No edge function to maintain
4. **Direct communication** - Users connect with you immediately

