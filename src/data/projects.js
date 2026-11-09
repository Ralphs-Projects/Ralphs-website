// Project content. Source of truth: Ralph_Dyakugha_Project_Catalogue.pdf.
//
// Adding screenshots: put originals in assets-src/<folder>/, run `npm run images`,
// then list them below as ["<file name without .webp>", "caption"].

const files = import.meta.glob("../assets/projects/*/*.webp", { eager: true, import: "default" });

function gallery(folder, list) {
  return list.map(([name, caption]) => {
    const src = files[`../assets/projects/${folder}/${name}.webp`];
    const thumb = files[`../assets/projects/${folder}/${name}-thumb.webp`];
    if (!src) throw new Error(`Missing image ${folder}/${name}.webp. Did you run npm run images?`);
    return { src, thumb: thumb || src, caption };
  });
}

// Shown as large cards with an image gallery.
export const featured = [
  {
    id: "ocean-vr",
    title: "Ocean Literacy VR Experience",
    category: "VR · Unity",
    period: "Sep 2025 – May 2026",
    context: "Honours research · Aalborg University & NUST",
    role: "VR developer & researcher",
    summary:
      "A VR experience that teaches an ocean literacy principle through the story of the Topnaar (ǃAonin), the first documented inhabitants of Namibia's Walvis Bay coast. Users walk a virtual Sandwich Harbour shoreline guided by a Topnaar narrator, harvest seaweed by hand, then dive into a kelp forest that responds to their touch.",
    built: [
      "Two full environments: dune and coastline terrain, an ocean with underwater caustics, post-processing, and 3D spatial audio placed around the user.",
      "A narration system that keeps audio content separate from its triggers, so voice lines fire on a timeline or on a user action without overlapping.",
      "Spawn and reachability logic that turns users toward the coast and places grabbable objects inside their guardian boundary, so one is always in reach.",
      "Hand-tracked interactions: snapping a kelp branch back into place, environment state changes, a simple buoyancy simulation and comfortable scene fades.",
      "Designed with Topnaar community members, then ran a pilot and a second evaluation. Fixes between rounds markedly improved how well participants recalled both the cultural and the ecological content.",
    ],
    tech: ["Unity 6", "C#", "Meta Quest", "Meta Interaction SDK", "Hand tracking", "Spatial audio"],
    links: [{ label: "Watch the demo", href: "https://www.youtube.com/watch?v=VyaEZIzMA5Y", icon: "play" }],
    images: gallery("ocean-vr", [
      ["01-coastline", "The coastline, modelled on Sandwich Harbour."],
      ["02-dunes", "Dunes built as separate terrain: more detail where the user stands, less where they can't reach."],
      ["03-seaweed", "Picking up seaweed by hand, mirroring a real Topnaar harvesting practice."],
      ["04-hand-tracking", "Hand-tracked grabbing. Objects spawn inside the guardian boundary so they're always reachable."],
      ["05-underwater", "Underwater, fish react to the user's hand as they move through the kelp forest."],
      ["06-kelp-forest", "Touching the bright kelp triggers narration on kelp, phytoplankton and oxygen."],
      ["07-kelp", "Snapping the kelp strips the environment bare; returning the branch brings it back to life."],
    ]),
  },
  {
    id: "hymmalation",
    title: "Hymmalation",
    category: "Desktop · Python",
    period: "Released July 2026",
    context: "Independent product · in weekly use",
    role: "Designer, developer & maintainer",
    summary:
      "A Windows app for projecting hymn and song lyrics during church services. A volunteer runs the service from a simple console while the congregation sees nothing but clean, readable words. It has been used every week since July 2026 and works fully offline, so a service never depends on the network.",
    built: [
      "A song library with verse and chorus editing, a live preview, search inside lyrics, and bulk import from hymnal PDFs.",
      "A live console with a queue that survives a restart mid-service, manual or timed slide stepping, and a preview captured from the actual projector output.",
      "A service planner: build the order of service in advance, then load it into the live console with Go Live.",
      "Hymmalation Online, an opt-in shared hymn library on Google Cloud Run. Nothing syncs without the user's say-so, and conflicts are never resolved automatically.",
      "Releases on GitHub with a published SHA-256 checksum, with updates shipped against feedback from live services.",
    ],
    tech: ["Python", "PyQt6", "SQLite", "Google Cloud Run", "GitHub Releases"],
    links: [
      { label: "Product site", href: "https://hymmalation-44106681214.europe-west2.run.app", icon: "external" },
      { label: "Releases", href: "https://github.com/RalphDred/Hymmalation-releases", icon: "github" },
    ],
    images: gallery("hymmalation", [
      ["01-play", "Play: song browser, queue, slide sections and a live preview of the projector."],
      ["02-library", "Library: books and songs, the lyric editor, and a preview that updates as you type."],
      ["03-program", "Program: plan the running order, then press Go Live."],
      ["04-dashboard", "Dashboard: clock, the next service's running order, and reminders."],
      ["05-notifications", "Reminders filed mid-service against whichever song was playing."],
      ["06-online", "Hymmalation Online: review incoming updates before anything changes locally."],
      ["07-play-dark", "Dark mode changes the operator's console only. The projector output stays black on white."],
    ]),
  },
  {
    id: "rgd",
    title: "RGD Software",
    category: "Web · Business",
    period: "2026",
    context: "My software studio, Windhoek",
    role: "Founder, designer & developer",
    summary:
      "The website for RGD Software, the studio I run that builds websites, apps and custom tools for Namibian businesses. It sets out the services, shows recent work, answers pricing questions up front in an FAQ, and makes it easy to get in touch by email, phone or WhatsApp.",
    built: [
      "Designed and built the whole site: brand, layout, copy, and a light and dark theme.",
      "A responsive layout that works from phone to desktop, with a compact mobile navigation.",
      "A services grid, a portfolio carousel and an expandable FAQ, built as reusable components.",
      "Deployed and maintained on Netlify.",
    ],
    tech: ["React", "CSS", "Responsive design", "Netlify"],
    links: [{ label: "Visit the site", href: "https://rgdsoftware.com.na/", icon: "external" }],
    images: gallery("rgd", [
      ["01-hero", "Home page."],
      ["02-services", "Services: what the studio builds."],
      ["03-work", "Selected work, one project at a time."],
      ["04-faq", "FAQ that answers cost and process questions up front."],
      ["05-about", "About: the studio's mission."],
      ["06-mobile", "The same site on a phone."],
    ]),
  },
];

// Shown as compact cards (client work without public screenshots).
export const compact = [
  {
    id: "queuehub",
    title: "Queuehub",
    category: "Full-stack · Mobile",
    context: "G-Mobility Investment Technology",
    role: "Project manager & full-stack developer, 4-person team",
    summary:
      "A virtual queue system: the public joins a queue from a mobile app instead of standing in line, and businesses run their queues from a web console. Both apps share one backend.",
    built: [
      "Wrote the system requirements specification and ran the client interviews behind it.",
      "Designed and built the Express and MongoDB REST backend, with ten resources behind role-based authorisation middleware.",
      "Built the public React Native (Expo) app: join a queue, get an allocated time, and track your position live.",
      "Worked with three front-end developers on the React business console.",
    ],
    tech: ["React", "React Native (Expo)", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "auction-era",
    title: "Auction Era",
    category: "Web · Mobile",
    context: "G-Mobility Investment Technology",
    role: "Front-end developer",
    summary:
      "A digital auction platform that replaced an entirely paper-based process. A host tablet, a bidder web app and an admin desktop work together during a live auction.",
    built: [
      "Built the bidder web app and the React Native host tablet app from Figma prototypes.",
      "On-site bidder registration by scanning a QR code instead of filling in a paper form.",
      "Kept the design deliberately simple so it runs well on old, low-end hardware.",
    ],
    tech: ["React", "React Native (Expo)", "Figma"],
  },
];
