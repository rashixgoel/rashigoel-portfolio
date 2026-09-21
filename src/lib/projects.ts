/** Single source of truth for project URLs so internal and external links cannot drift. */
export const projectLinks = {
  clinicflow: {
    name: "ClinicFlow",
    internal: "/work/clinicflow",
    liveApp: null,
    caseStudy: null,
  },
  faxbridge: {
    name: "FaxBridge",
    internal: "/work/faxbridge",
    liveApp: "https://faxbridge.vercel.app/",
    caseStudy:
      "https://www.linkedin.com/posts/-rashi-goel_what-if-instead-of-trying-to-kill-the-fax-activity-7482532964518608896-8lzo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADi9ISsBpdXVhmMVposdk7JY9MRo4QpzfOo",
  },
  caresignal: {
    name: "CareSignal",
    internal: "/work/caresignal",
    liveApp: "https://caresignal.rashigoel.io/",
    caseStudy:
      "https://drive.google.com/file/d/1G4b6i5Os2ymVyk35l7OEAmVX5KN5SCgl/view?usp=sharing",
  },
} as const;

export const CONTACT_EMAIL = "hello@rashigoel.io";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
