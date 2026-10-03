/**
 * Case studies rendered by <CaseStudy />.
 *
 * Every field must come from the business — never invent a problem, a build
 * description or a result. Empty fields are simply not rendered, and a study
 * with no measured result should describe the outcome qualitatively in
 * `outcome` rather than quote a number.
 */
export interface CaseStudyData {
  id: string;
  client: string;
  /** Screenshot in /public, served through next/image. */
  image: string;
  websiteUrl?: string;
  problem: string;
  built: string;
  outcome: string;
  /** Shown in the 2-up section on the homepage. */
  featured: boolean;
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'sproutslegal',
    client: 'Sprouts Legal',
    image: '/portfolio/sproutslegal.webp',
    websiteUrl: 'https://www.sproutslegal.com/',
    // TODO(case-study): problem, what we built and result still to be supplied.
    problem: '',
    built: '',
    outcome: '',
    featured: true,
  },
  {
    id: 'kavitakabira',
    client: 'Kavita Kabira Wellness Clinic',
    image: '/portfolio/kavitakabira.webp',
    websiteUrl: 'https://www.kavitakabira.com/',
    // TODO(case-study): problem, what we built and result still to be supplied.
    problem: '',
    built: '',
    outcome: '',
    featured: false,
  },
  {
    id: 'fawdubai',
    client: 'FAW Dubai',
    image: '/portfolio/fawdubai.webp',
    websiteUrl: 'https://www.fawdubai.com/',
    // TODO(case-study): problem, what we built and result still to be supplied.
    problem: '',
    built: '',
    outcome: '',
    featured: true,
  },
];

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter((study) => study.featured);
