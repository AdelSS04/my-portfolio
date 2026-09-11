# Portfolio content review

Reviewed against the supplied CV on September 11, 2026. The rewrite uses the human-writing and ste-plain-writing skills, with STE-flavored rules for general prose.

## Changes made

- Reframed the introduction around senior .NET and Azure engineering, SaaS development, and industrial device integration.
- Added the scope of EvidentConnect and the device provisioning work, with numbers attributed to the relevant system.
- Added employment dates and aligned employer names and roles with the CV.
- Replaced generic AI consulting promises with the documented industrial IoT experience. AI remains described as technical exploration in the source CV, rather than a proven client service.
- Rewrote project summaries to distinguish independent products, freelance work, and team leadership. Kept the project order and cover assets.
- Removed unsupported claims about Podium360 daily users, SnB uptime, Spur allocations and community adoption, and response-time guarantees.
- Limited education and certification records to the degree and AZ-204 credential in the CV. Removed duplicate certification cards and unconfirmed courses and awards. These can return after confirmation.
- Updated contact prompts for both project enquiries and engineering roles.
- Aligned search metadata, social previews, structured data, and the no-JavaScript fallback with the revised positioning.
- Preserved the wording and attribution of existing testimonials.
- Made project summaries fully readable. The previous two-line limit hid text without providing a detail page.

## Highest-value next improvements

1. Add a short case study for Slotafy and CleanTrack. Explain the user problem, personal responsibility, one difficult technical decision, and a result supported by evidence.
2. Add sanitized product screenshots alongside the illustrated covers. Use example data and keep private customer information out of screenshots.
3. Confirm the measurement period for the 30% Azure cost reduction and the meaning of SnB's monthly transactions. Keep the current numbers only while they remain accurate.
4. Add a public credential link and exact renewal or expiry date for AZ-204. The site currently states only that it was earned in 2023.
5. Add a downloadable CV after confirming its employment dates and total years of experience.
6. Check article links and reading times against the blog. This copy pass preserves the existing titles, destinations, and reading-time estimates.
7. Fix the contact form's failed-request state. It currently clears `isSubmitting` only in the completion callback, which does not run after an HTTP error. A failed send can leave the button disabled. This behavior predates the copy changes.

## Source boundaries

The active Angular application is under `src/UI/src/app`. The separate `src/UI/app` tree and unmounted experience and skills components were not rewritten because they do not render on the current routes. Review those older copies before reusing them; they may contain claims that conflict with the CV.

The existing degree-logo URL is a placeholder. Replace it with a verified local asset in a later visual update.

No deployment was performed as part of this content rewrite.
