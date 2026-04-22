

# Hide "Case Studies" and "Video Sessions" Sitewide

Comment out (don't delete) every reference so both sections vanish from nav, footer, the Our Work page, and routing.

## Files to Edit

### 1. `src/data/resources.ts`
Comment out the "Video Sessions" and "Case Studies" entries in the `resources` array. This automatically removes them from the desktop mega menu, mobile menu, and footer Resources column (all of which read from this array).

### 2. `src/App.tsx`
Comment out:
- Imports for `VideoSessions`, `VideoSessionDetail`, `CaseStudies`, `CaseStudyDetail`
- The four `<Route>` lines for `/resources/video-sessions`, `/resources/video-sessions/:slug`, `/resources/case-studies`, `/resources/case-studies/:slug`

Result: any direct URL hit falls through to the `NotFound` route.

### 3. `src/pages/OurWork.tsx`
In the `OurWork` page composition (lines 600–614), comment out the three rendered sections:
- `<FeaturedCaseStudy />`
- `<CaseStudiesGrid />`
- `<VideoSessionsSection />`

Leave the function definitions (`FeaturedCaseStudy`, `CaseStudiesGrid`, `VideoSessionsSection`) and their data imports intact but unused — code is preserved.

## Files NOT Touched
- `src/pages/CaseStudies.tsx`, `CaseStudyDetail.tsx`, `VideoSessions.tsx`, `VideoSessionDetail.tsx` — kept as-is (just no longer routed)
- `src/data/caseStudiesItems.ts`, `videoSessionsItems.ts`, `caseStudies.ts` — kept
- `src/components/resources/CaseStudyDetailPage.tsx`, `VideoSessionDetailPage.tsx` — kept
- `src/components/sections/CaseStudyGrid.tsx` — kept
- Cross-references inside `videoSessionsItems.ts` to `/resources/case-studies/...` — kept (file no longer used by any route)

## Outcome
- Nav (desktop + mobile): only Travel Insights and Guides & Playbooks show under Resources
- Footer Resources column: only Travel Insights and Guides & Playbooks show
- Our Work page: flows Hero → What This Work Reflects → Travel Insights → Guides → Final CTA
- All Case Studies / Video Sessions URLs return 404 (NotFound)
- All code remains in the repo, ready to re-enable by uncommenting

