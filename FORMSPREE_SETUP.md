# Formspree Integration Setup Guide

## Overview
Your contact forms are now integrated with Formspree for backend form handling using a single form. This guide will help you complete the setup.

## Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Single Form
Create ONE form in Formspree that will handle all contact inquiries:

### Well Source Contact Form
- **Form Name**: "Well Source - All Contact Forms"
- **Form Type**: Choose "Custom Form"
- **Fields to Add** (add all these fields):
  - `firstName` (Text) - for contact form
  - `lastName` (Text) - for contact form
  - `name` (Text) - for ranges and repair forms
  - `email` (Email) - for all forms
  - `phone` (Text) - for contact and ranges forms
  - `company` (Text) - for ranges form
  - `interest` (Text) - for ranges form
  - `message` (Textarea) - for all forms
  - `formType` (Text) - to identify which form was used
- **Form ID**: Copy this ID (e.g., `xqkzrqjz`)

## Step 3: Update Configuration
Edit `lib/formspree.ts` and replace the placeholder ID:

```typescript
export const FORMSPREE_CONFIG = {
  FORM_ID: 'your_actual_form_id',
} as const;
```

## Step 4: Test Forms
1. Test each form on your website
2. Check Formspree dashboard for submissions
3. Verify email notifications are working

## Features Included
✅ **Form Validation**: Required fields and email validation
✅ **Success Messages**: User feedback on successful submission
✅ **Error Handling**: Graceful error handling with user feedback
✅ **Form Reset**: Forms clear after successful submission
✅ **Custom Subjects**: Each form has a descriptive email subject
✅ **TypeScript Support**: Fully typed configuration

## Form Locations
- **Contact Form**: `/contact` page
- **Ranges Form**: `/ranges` page (RangesForm component)
- **Repair Form**: Home page (RepairRefurbSection component)

## Email Notifications
Each form sends emails with:
- **Contact Form**: "New Contact Form Submission - Well Source Industries"
- **Ranges Form**: "New Ranges Information Request - Well Source Industries"  
- **Repair Form**: "New Repair & Refurbishment Inquiry - Well Source Industries"

## Troubleshooting
- **Forms not submitting**: Check form IDs are correct
- **No emails received**: Check spam folder and Formspree settings
- **Validation errors**: Ensure all required fields are filled

## Support
- Formspree Documentation: https://formspree.io/help
- Formspree Support: support@formspree.io
