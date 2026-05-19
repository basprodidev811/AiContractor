const phases = [
  {
    id: "p1",
    label: "Phase 1",
    name: "AI-Assisted Foundation",
    promise: "Pick the trade, buyer lane, and first cash offer before building anything else.",
  },
  {
    id: "p2",
    label: "Phase 2",
    name: "Trust Infrastructure",
    promise: "Build enough market trust that buyers believe the offer before the first call.",
  },
  {
    id: "p3",
    label: "Phase 3",
    name: "Securing Client Zero",
    promise: "Close cleaner work with risk reversal, quote structure, and follow-up discipline.",
  },
  {
    id: "p4",
    label: "Phase 4",
    name: "Execution and Expectation Management",
    promise: "Protect reviews, cash flow, and client trust through documented delivery.",
  },
  {
    id: "p5",
    label: "Phase 5",
    name: "Operator Bottleneck",
    promise: "Measure job cost, lead quality, paid media, and the systems worth scaling.",
  },
];

const modules = [
  {
    id: "1.1",
    phase: "p1",
    title: "Start Here: Pick Your Phase, Pick Your Trade, Pick Your Lane",
    type: "Orientation",
    outcome:
      "Decide where you fit in the roadmap and whether you need to pick or narrow your trade.",
    tags: ["beginner", "trade", "lane"],
  },
  {
    id: "1.2",
    phase: "p1",
    title: "The Ruthless Inventory and Local Leverage Audit",
    type: "Strategy",
    outcome:
      "Turn tools, proof, relationships, and local access into immediate leverage.",
    tags: ["assets", "beginner", "cash"],
  },
  {
    id: "1.3",
    phase: "p1",
    title: "Build the First Offer They Can Actually Buy",
    type: "Offer Build",
    outcome: "Build one clear offer instead of selling a messy service list.",
    tags: ["offer", "cash", "trade"],
  },
  {
    id: "1.4",
    phase: "p1",
    title: "B2C Organic Demand Mining",
    type: "Lead Gen",
    outcome: "Find urgent homeowner demand in Nextdoor, Facebook, referrals, and local chatter.",
    tags: ["b2c", "leads", "cash"],
  },
  {
    id: "1.5",
    phase: "p1",
    title: "B2B Landscape Mapping",
    type: "Lead Gen",
    outcome: "Build a commercial target list around property managers, facilities, and brokers.",
    tags: ["b2b", "leads", "commercial"],
  },
  {
    id: "1.6",
    phase: "p1",
    title: "Legal Setup, Permit Research, Insurance Limits, and the 30-Day Cash Injection Plan",
    type: "Tool/Workflow",
    outcome: "Research city and state requirements before taking work, then build a focused 30-day sprint.",
    tags: ["compliance", "cash", "tools"],
  },
  {
    id: "2.1",
    phase: "p2",
    title: "Brand Standards and Trust Architecture",
    type: "Brand",
    outcome: "Know what the business must signal before buyers call.",
    tags: ["trust", "brand"],
  },
  {
    id: "2.2",
    phase: "p2",
    title: "Visual Discipline: Portfolio, Truck, Tools, and Jobsite Proof",
    type: "Brand",
    outcome: "Collect single strong proof photos and remove collages from ads and portfolio assets.",
    tags: ["trust", "visuals"],
  },
  {
    id: "2.3",
    phase: "p2",
    title: "Google Business Profile and the Review Velocity Engine",
    type: "Local SEO",
    outcome: "Set up local trust, high-intent search presence, and review capture.",
    tags: ["b2c", "reviews", "trust"],
  },
  {
    id: "2.4",
    phase: "p2",
    title: "Website, Landing Page, and Estimate Design That Looks Easy to Buy From",
    type: "Trust + Funnel",
    outcome: "Build a simple destination and readable estimate that increase trust.",
    tags: ["trust", "website", "estimate"],
  },
  {
    id: "2.5",
    phase: "p2",
    title: "LinkedIn and Commercial Credibility for Serious Buyers",
    type: "Commercial Brand",
    outcome: "Look stable and easy to work with in front of property teams.",
    tags: ["b2b", "commercial", "trust"],
  },
  {
    id: "3.1",
    phase: "p3",
    title: "The Zero-Deposit Offer and Risk-Reversal Positioning",
    type: "Sales",
    outcome: "Require no money upfront and collect only after completion and formal sign-off.",
    tags: ["sales", "zero-deposit"],
  },
  {
    id: "3.2",
    phase: "p3",
    title: "Quote Decoupling, Structural Add-Ons, and Scope Control",
    type: "Sales",
    outcome: "Protect margin by separating primary labor from scaffolding, weep screeds, and other structural necessities.",
    tags: ["quote", "margin", "sales"],
  },
  {
    id: "3.3",
    phase: "p3",
    title: "Residential Sales Psychology, Walkthroughs, and Homeowner Trust",
    type: "Sales",
    outcome: "Run a calmer residential sales process that feels human and clear.",
    tags: ["b2c", "sales"],
  },
  {
    id: "3.4",
    phase: "p3",
    title: "Commercial Outreach, Pilot Jobs, and Proposal Walkthroughs",
    type: "Sales",
    outcome: "Move from cold commercial outreach into operationally serious proposals.",
    tags: ["b2b", "commercial", "sales"],
  },
  {
    id: "3.5",
    phase: "p3",
    title: "Markup, Gross Margin, and Cash Protection Basics",
    type: "Pricing",
    outcome: "Stop confusing markup with margin before bad revenue enters the schedule.",
    tags: ["pricing", "margin"],
  },
  {
    id: "3.6",
    phase: "p3",
    title: "Follow-Up Until Client Zero",
    type: "Sales Workflow",
    outcome: "Recover quotes with text, call, email, and referral follow-up loops.",
    tags: ["sales", "follow-up"],
  },
  {
    id: "4.1",
    phase: "p4",
    title: "Pre-Job Expectation Setting and Finish Language",
    type: "Operations",
    outcome: "Set finish, scope, sign-off, and realistic texture matching rules before the job starts.",
    tags: ["expectations", "operations"],
  },
  {
    id: "4.2",
    phase: "p4",
    title: "Daily Jobsite Communication, Transparency, and Cleanliness",
    type: "Operations",
    outcome: "Keep the client calm and the job feeling controlled every day.",
    tags: ["communication", "operations"],
  },
  {
    id: "4.3",
    phase: "p4",
    title: "Change Orders, Documentation, and Conflict Control",
    type: "Operations",
    outcome: "Document problems before they turn into unpaid work.",
    tags: ["documentation", "operations"],
  },
  {
    id: "4.4",
    phase: "p4",
    title: "Review Harvesting, Formal Sign-Off, and the Driveway Close",
    type: "Operations",
    outcome: "Turn finished jobs into reviews, referrals, and cleaner collections.",
    tags: ["reviews", "operations"],
  },
  {
    id: "4.5",
    phase: "p4",
    title: "Multi-Project Scheduling, Route Efficiency, and Calendar Control",
    type: "Operations",
    outcome: "Stop wasting margin through bad routes and chaotic scheduling.",
    tags: ["scheduling", "operations"],
  },
  {
    id: "5.1",
    phase: "p5",
    title: "True Job Costing",
    type: "Measurement",
    outcome: "Track real labor, material, subcontractor, and travel costs by job.",
    tags: ["job-costing", "margin"],
  },
  {
    id: "5.2",
    phase: "p5",
    title: "KPI Tracking: Leads, Cost Per Lead, Close Rate, and ROI",
    type: "Measurement",
    outcome: "Track what is driving revenue instead of marketing blind.",
    tags: ["kpi", "tracking"],
  },
  {
    id: "5.3",
    phase: "p5",
    title: "The Marketing Feedback Loop",
    type: "Measurement",
    outcome: "Know what to double down on, what to kill, and what to automate.",
    tags: ["marketing", "systems"],
  },
  {
    id: "5.4",
    phase: "p5",
    title: "Google Ads Search Architecture for Contractors",
    type: "Paid Media Tutorial",
    outcome: "Build search campaigns without burning budget on low-intent traffic.",
    tags: ["google-ads", "paid-media"],
  },
  {
    id: "5.5",
    phase: "p5",
    title: "Facebook and Instagram Ads for Local Contractors",
    type: "Paid Media Tutorial",
    outcome: "Use Meta ads with stronger creative, lead quality, and follow-up speed.",
    tags: ["meta-ads", "paid-media"],
  },
  {
    id: "5.6",
    phase: "p5",
    title: "Bing and Microsoft Ads for Cheaper High-Intent Traffic",
    type: "Paid Media Tutorial",
    outcome: "Use Microsoft Ads as a controlled extension after Google basics are healthy.",
    tags: ["bing-ads", "paid-media"],
  },
  {
    id: "5.7",
    phase: "p5",
    title: "AI Tools Stack, Daily Assistant Habits, and the First Admin Handoff",
    type: "Tools",
    outcome: "Use AI and simple systems to support the operator before hiring too fast.",
    tags: ["tools", "admin", "ai"],
  },
];

const questions = [
  {
    id: "revenue",
    title: "Where is the business right now?",
    help: "Pick the option closest to your current reality.",
    options: [
      {
        label: "I am just starting",
        help: "No steady jobs yet, or still picking the trade.",
        scores: { p1: 6, p2: 1 },
        tags: ["beginner", "trade"],
      },
      {
        label: "Some jobs, no stable pipeline",
        help: "You can get paid work, but it is inconsistent.",
        scores: { p1: 3, p2: 3, p3: 2 },
        tags: ["cash", "leads"],
      },
      {
        label: "$10k-$100k monthly range",
        help: "You have demand, but systems and margin are uneven.",
        scores: { p3: 3, p4: 3, p5: 4 },
        tags: ["margin", "operations"],
      },
      {
        label: "$100k+ monthly range",
        help: "You need measurement, paid media control, and operator systems.",
        scores: { p4: 2, p5: 6 },
        tags: ["systems", "tracking"],
      },
    ],
  },
  {
    id: "trade",
    title: "How clear is the trade or service lane?",
    help: "This determines whether you should start at the foundation or skip ahead.",
    options: [
      {
        label: "I have not picked a trade",
        help: "I need to compare options first.",
        scores: { p1: 6 },
        tags: ["trade", "beginner"],
      },
      {
        label: "I have too many options",
        help: "I need to narrow the business down.",
        scores: { p1: 5, p3: 1 },
        tags: ["trade", "offer"],
      },
      {
        label: "I know the trade, not the offer",
        help: "I need a focused service subset.",
        scores: { p1: 3, p3: 3 },
        tags: ["offer"],
      },
      {
        label: "I know the exact offer",
        help: "I need stronger trust, sales, or systems.",
        scores: { p2: 2, p3: 2, p5: 1 },
        tags: ["trust", "sales"],
      },
    ],
  },
  {
    id: "buyerPath",
    title: "Who are you trying to sell first?",
    help: "Do not mix sales paths too early.",
    options: [
      {
        label: "I do not know yet",
        help: "I need to choose the buyer path.",
        scores: { p1: 5 },
        tags: ["lane"],
        buyer: "Undecided",
      },
      {
        label: "Homeowners",
        help: "Residential, local, referral, Facebook, Nextdoor, Google Business Profile.",
        scores: { p1: 2, p2: 2, p3: 1 },
        tags: ["b2c"],
        buyer: "B2C / Residential",
      },
      {
        label: "Property teams",
        help: "Property managers, facilities, brokers, commercial accounts.",
        scores: { p1: 2, p2: 2, p3: 2 },
        tags: ["b2b", "commercial"],
        buyer: "B2B / Commercial",
      },
      {
        label: "Both right now",
        help: "I am splitting attention across residential and commercial.",
        scores: { p1: 4, p3: 1 },
        tags: ["lane"],
        buyer: "Mixed path",
      },
    ],
  },
  {
    id: "assets",
    title: "How much usable leverage do you have?",
    help: "Tools, relationships, proof, local access, and photos all count.",
    options: [
      {
        label: "Almost none",
        help: "I need to build leverage from scratch.",
        scores: { p1: 4 },
        tags: ["assets"],
      },
      {
        label: "Tools or labor access",
        help: "I have physical assets, but no clear offer yet.",
        scores: { p1: 4, p3: 1 },
        tags: ["assets", "offer"],
      },
      {
        label: "Proof and some photos",
        help: "I have work evidence but need it packaged better.",
        scores: { p2: 4, p3: 1 },
        tags: ["visuals", "trust"],
      },
      {
        label: "A network I can activate",
        help: "I know people who can refer, guide, or open doors.",
        scores: { p1: 2, p3: 2 },
        tags: ["assets", "leads"],
      },
    ],
  },
  {
    id: "leads",
    title: "How are leads coming in?",
    help: "This reveals whether you need demand mining, trust infrastructure, or tracking.",
    options: [
      {
        label: "No lead flow yet",
        help: "I need immediate organic demand.",
        scores: { p1: 5 },
        tags: ["leads", "cash"],
      },
      {
        label: "Mostly referrals",
        help: "It works sometimes, but it is not predictable.",
        scores: { p2: 2, p3: 2, p5: 1 },
        tags: ["trust", "follow-up"],
      },
      {
        label: "Google/social/local search",
        help: "I have market visibility but need stronger conversion.",
        scores: { p2: 3, p3: 2, p5: 1 },
        tags: ["trust", "reviews"],
      },
      {
        label: "Paid ads or multiple channels",
        help: "I need to measure and control channels.",
        scores: { p5: 5 },
        tags: ["paid-media", "tracking"],
      },
    ],
  },
  {
    id: "trust",
    title: "How strong is the public trust layer?",
    help: "Google profile, reviews, photos, website, estimates, and social proof.",
    options: [
      {
        label: "Barely exists",
        help: "No real profile, reviews, or clean proof.",
        scores: { p2: 5, p1: 1 },
        tags: ["trust"],
      },
      {
        label: "Some proof, weak presentation",
        help: "Photos or reviews exist, but they are not organized.",
        scores: { p2: 5 },
        tags: ["visuals", "trust"],
      },
      {
        label: "Decent, but not conversion-ready",
        help: "People can find me, but the estimate or landing page needs work.",
        scores: { p2: 3, p3: 2 },
        tags: ["website", "estimate"],
      },
      {
        label: "Strong enough to support ads",
        help: "Now I need measurement and campaign control.",
        scores: { p5: 4, p3: 1 },
        tags: ["paid-media", "tracking"],
      },
    ],
  },
  {
    id: "sales",
    title: "What happens when you quote work?",
    help: "This points to sales positioning, quote structure, or follow-up.",
    options: [
      {
        label: "I am not quoting yet",
        help: "I still need the first offer and leads.",
        scores: { p1: 4 },
        tags: ["offer"],
      },
      {
        label: "Prospects hesitate",
        help: "I need a cleaner risk-reversal pitch.",
        scores: { p3: 5 },
        tags: ["sales", "zero-deposit"],
      },
      {
        label: "Quotes are messy",
        help: "Scope, structural add-ons, and exclusions need cleanup.",
        scores: { p3: 5 },
        tags: ["quote", "margin"],
      },
      {
        label: "Quotes go out and die",
        help: "I need follow-up loops and quote recovery.",
        scores: { p3: 4, p5: 1 },
        tags: ["follow-up", "sales"],
      },
    ],
  },
  {
    id: "delivery",
    title: "What is the biggest delivery risk?",
    help: "Choose the problem that costs the most reputation or cash.",
    options: [
      {
        label: "Not delivering jobs yet",
        help: "I need to secure the first buyer first.",
        scores: { p1: 3, p3: 1 },
        tags: ["cash"],
      },
      {
        label: "Expectation disputes",
        help: "Clients expect more than the job can realistically deliver.",
        scores: { p4: 5 },
        tags: ["expectations"],
      },
      {
        label: "Change orders and scope creep",
        help: "Extra work or damage claims are not documented tightly.",
        scores: { p4: 5, p3: 1 },
        tags: ["documentation"],
      },
      {
        label: "Scheduling and communication",
        help: "Jobs feel chaotic across crews, cities, or projects.",
        scores: { p4: 4, p5: 1 },
        tags: ["communication", "scheduling"],
      },
    ],
  },
  {
    id: "reviews",
    title: "What happens after completion?",
    help: "The closeout is part of the business engine.",
    options: [
      {
        label: "No closeout system yet",
        help: "I need sign-off, review, and final invoice discipline.",
        scores: { p4: 4 },
        tags: ["reviews"],
      },
      {
        label: "I forget to ask for reviews",
        help: "I need review harvesting built into the job close.",
        scores: { p4: 5, p2: 1 },
        tags: ["reviews"],
      },
      {
        label: "Payment or sign-off drags",
        help: "I need a cleaner closeout and documentation process.",
        scores: { p4: 4, p3: 1 },
        tags: ["operations"],
      },
      {
        label: "Closeout is already tight",
        help: "I should focus on tracking and scale.",
        scores: { p5: 4 },
        tags: ["tracking"],
      },
    ],
  },
  {
    id: "numbers",
    title: "How well do you track numbers?",
    help: "This includes job cost, lead source, close rate, and ROI.",
    options: [
      {
        label: "I do not track them",
        help: "I need simple measurement immediately.",
        scores: { p5: 5 },
        tags: ["tracking", "job-costing"],
      },
      {
        label: "Revenue only",
        help: "I can see money in, not true job profit.",
        scores: { p5: 5 },
        tags: ["job-costing"],
      },
      {
        label: "Some lead source tracking",
        help: "I need KPIs and channel decisions.",
        scores: { p5: 4 },
        tags: ["kpi", "tracking"],
      },
      {
        label: "Clear job and marketing numbers",
        help: "I can move into paid media and tool leverage.",
        scores: { p5: 3 },
        tags: ["paid-media", "tools"],
      },
    ],
  },
  {
    id: "ads",
    title: "What is your paid media readiness?",
    help: "Paid traffic should follow trust and tracking.",
    options: [
      {
        label: "Not ready for ads",
        help: "I need offer, trust, and lead basics first.",
        scores: { p1: 2, p2: 3 },
        tags: ["trust"],
      },
      {
        label: "Ready for Google search",
        help: "I have a service, city, and destination page.",
        scores: { p5: 4 },
        tags: ["google-ads"],
      },
      {
        label: "Testing Meta or retargeting",
        help: "I need creative, lead quality, and follow-up speed.",
        scores: { p5: 4 },
        tags: ["meta-ads"],
      },
      {
        label: "Scaling multiple ad channels",
        help: "I need channel control and budget discipline.",
        scores: { p5: 5 },
        tags: ["bing-ads", "paid-media", "tracking"],
      },
    ],
  },
  {
    id: "bottleneck",
    title: "What feels like the main bottleneck right now?",
    help: "Use instinct here. The scoring engine will combine this with the other answers.",
    options: [
      {
        label: "Choosing the right lane",
        help: "Trade, buyer path, and first offer are still unclear.",
        scores: { p1: 6 },
        tags: ["trade", "lane", "offer"],
      },
      {
        label: "Looking credible",
        help: "The business does not yet look trustworthy enough.",
        scores: { p2: 6 },
        tags: ["trust", "visuals"],
      },
      {
        label: "Closing profitably",
        help: "Sales, quotes, pricing, or follow-up are leaking jobs.",
        scores: { p3: 6 },
        tags: ["sales", "quote", "margin"],
      },
      {
        label: "Delivering cleanly",
        help: "Execution, reviews, documentation, or scheduling are the issue.",
        scores: { p4: 6 },
        tags: ["operations", "reviews"],
      },
      {
        label: "Measuring and scaling",
        help: "Job costing, KPIs, ads, and tools are the next wall.",
        scores: { p5: 6 },
        tags: ["tracking", "paid-media", "tools"],
      },
    ],
  },
];

const state = {
  answers: {},
};

const questionList = document.getElementById("questionList");
const form = document.getElementById("assessmentForm");
const results = document.getElementById("results");
const progressFill = document.getElementById("progressFill");
const questionCounter = document.getElementById("questionCounter");
const phaseMeter = document.getElementById("phaseMeter");
const resetButton = document.getElementById("resetButton");
const editAnswersButton = document.getElementById("editAnswersButton");
const copyResultButton = document.getElementById("copyResultButton");
const tradeInput = document.getElementById("tradeInput");
const marketInput = document.getElementById("marketInput");

function renderQuestions() {
  questionList.innerHTML = questions
    .map((question, index) => {
      const number = String(index + 1).padStart(2, "0");
      const options = question.options
        .map((option, optionIndex) => {
          const value = `${question.id}:${optionIndex}`;
          return `
            <label class="option">
              <input type="radio" name="${question.id}" value="${value}" />
              <span class="option-body">
                <span class="option-label">${option.label}</span>
                <span class="option-help">${option.help}</span>
              </span>
            </label>
          `;
        })
        .join("");

      return `
        <fieldset class="question">
          <div class="question-top">
            <span class="question-index">${number}</span>
            <div class="question-title">
              <h3>${question.title}</h3>
              <p>${question.help}</p>
            </div>
          </div>
          <div class="options">${options}</div>
        </fieldset>
      `;
    })
    .join("");
}

function getSelectedOptions() {
  return Object.entries(state.answers)
    .map(([questionId, optionIndex]) => {
      const question = questions.find((item) => item.id === questionId);
      return question?.options[optionIndex];
    })
    .filter(Boolean);
}

function calculateScores() {
  const scores = Object.fromEntries(phases.map((phase) => [phase.id, 0]));
  const tags = {};

  getSelectedOptions().forEach((option) => {
    Object.entries(option.scores || {}).forEach(([phaseId, value]) => {
      scores[phaseId] += value;
    });

    (option.tags || []).forEach((tag) => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });

  return { scores, tags };
}

function updateProgress() {
  const answeredCount = Object.keys(state.answers).length;
  const percent = Math.round((answeredCount / questions.length) * 100);
  progressFill.style.width = `${percent}%`;
  questionCounter.textContent = `${String(Math.min(answeredCount + 1, questions.length)).padStart(
    2,
    "0",
  )} / ${questions.length}`;

  const { scores } = calculateScores();
  const maxScore = Math.max(1, ...Object.values(scores));
  phaseMeter.innerHTML = phases
    .map((phase) => {
      const width = Math.round((scores[phase.id] / maxScore) * 100);
      return `
        <div class="meter-row">
          <span>${phase.label}</span>
          <span class="meter-bar"><span style="width:${width}%"></span></span>
          <span>${scores[phase.id]}</span>
        </div>
      `;
    })
    .join("");
}

function getTopPhases(scores) {
  return phases
    .map((phase) => ({ ...phase, score: scores[phase.id] }))
    .sort((a, b) => b.score - a.score);
}

function getBuyerPath() {
  const selected = questions
    .find((question) => question.id === "buyerPath")
    ?.options[state.answers.buyerPath];
  return selected?.buyer || "Undecided";
}

function chooseModules(topPhases, tags) {
  const topPhaseIds = topPhases.slice(0, 2).map((phase) => phase.id);
  const primaryPhaseId = topPhaseIds[0];
  const tagKeys = Object.keys(tags);
  const buyerPath = getBuyerPath();
  const preferredTags = [];
  const preferredOrder = getPreferredModuleOrder(primaryPhaseId, buyerPath, tags);

  if (buyerPath.includes("B2C")) preferredTags.push("b2c");
  if (buyerPath.includes("B2B")) preferredTags.push("b2b", "commercial");

  const scoredModules = modules.map((module) => {
    const phaseRank = topPhaseIds.includes(module.phase) ? 20 - topPhaseIds.indexOf(module.phase) * 5 : 0;
    const tagRank = module.tags.reduce((sum, tag) => sum + (tags[tag] || 0) * 3, 0);
    const coreRank = ["1.1", "3.1", "3.2", "5.1", "5.2"].includes(module.id) ? 2 : 0;
    const buyerBoost = moduleHasAnyTag(module, preferredTags) ? 4 : 0;
    const buyerPenalty = moduleConflictsWithBuyerPath(module, buyerPath) ? 50 : 0;

    return {
      ...module,
      rank: phaseRank + tagRank + coreRank + buyerBoost - buyerPenalty,
    };
  });

  return scoredModules
    .filter((module) => module.rank > 0)
    .sort((a, b) => {
      const orderA = preferredOrder.indexOf(a.id);
      const orderB = preferredOrder.indexOf(b.id);

      if (orderA !== -1 && orderB !== -1) return orderA - orderB;
      if (orderA !== -1) return -1;
      if (orderB !== -1) return 1;
      if (a.phase === primaryPhaseId && b.phase !== primaryPhaseId) return -1;
      if (b.phase === primaryPhaseId && a.phase !== primaryPhaseId) return 1;

      return b.rank - a.rank;
    })
    .slice(0, 7)
    .map((module, index) => ({
      ...module,
      priority: index < 3 ? "Start Now" : "Next",
      matchedTags: module.tags.filter((tag) => tagKeys.includes(tag)),
    }));
}

function getPreferredModuleOrder(phaseId, buyerPath, tags) {
  const buyerSpecificModule = buyerPath.includes("B2B") ? "1.5" : "1.4";
  const salesPathModule = buyerPath.includes("B2B") ? "3.4" : "3.3";
  const trustPathModule = buyerPath.includes("B2B") ? "2.5" : "2.3";
  const adModule = tags["meta-ads"] ? "5.5" : tags["bing-ads"] ? "5.6" : "5.4";

  const orders = {
    p1: ["1.1", "1.2", "1.3", buyerSpecificModule, "1.6"],
    p2: ["2.1", "2.2", trustPathModule, "2.4"],
    p3: ["3.1", "3.2", "3.5", salesPathModule, "3.6"],
    p4: ["4.1", "4.2", "4.3", "4.4", "4.5"],
    p5: ["5.1", "5.2", "5.3", adModule, "5.7"],
  };

  if (buyerPath === "Mixed path" || buyerPath === "Undecided") {
    orders.p1 = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"];
    orders.p2 = ["2.1", "2.2", "2.3", "2.5", "2.4"];
    orders.p3 = ["3.1", "3.2", "3.5", "3.3", "3.4", "3.6"];
  }

  return orders[phaseId] || [];
}

function moduleHasAnyTag(module, tagList) {
  return tagList.some((tag) => module.tags.includes(tag));
}

function moduleConflictsWithBuyerPath(module, buyerPath) {
  if (buyerPath.includes("B2C")) return module.tags.includes("b2b");
  if (buyerPath.includes("B2B")) return module.tags.includes("b2c");
  return false;
}

function getContextValue(input, fallback) {
  return input?.value.trim() || fallback;
}

function getTradeFocus(tags) {
  const tradeContext = getContextValue(tradeInput, "");
  const marketContext = getContextValue(marketInput, "");
  const marketPrefix = marketContext ? `${marketContext}: ` : "";

  if (tags.trade || tags.lane || tags.beginner) {
    const tradeText = tradeContext || "your top three trade options";
    return `${marketPrefix}Score ${tradeText} by demand, ticket size, capital, licensing burden, margin, and speed to first job.`;
  }

  if (tags.offer) {
    const tradeText = tradeContext || "the current trade";
    return `${marketPrefix}Narrow ${tradeText} into one high-intent service subset and one specific first offer.`;
  }

  if (tags.paidMedia || tags["paid-media"]) {
    const tradeText = tradeContext || "the existing service offer";
    return `${marketPrefix}Use ${tradeText} as the basis for paid media tests only after tracking is in place.`;
  }

  const tradeText = tradeContext || "your current trade";
  return `${marketPrefix}Use ${tradeText} as the baseline and tighten the service subset before adding more modules.`;
}

function getSkipGuidance(topPhases) {
  const lowPhases = topPhases
    .slice()
    .reverse()
    .filter((phase) => phase.score <= topPhases[0].score * 0.45)
    .slice(0, 2);

  if (!lowPhases.length) {
    return "Nothing is fully off the table, but stay disciplined: finish the first three recommended modules before browsing sideways.";
  }

  return `Leave ${lowPhases.map((phase) => phase.label).join(" and ")} for later unless your operator or coach assigns it.`;
}

function renderResults() {
  const { scores, tags } = calculateScores();
  const topPhases = getTopPhases(scores);
  const primaryPhase = topPhases[0];
  const moduleQueue = chooseModules(topPhases, tags);
  const buyerPath = getBuyerPath();
  const tradeContext = getContextValue(tradeInput, "the selected trade");
  const marketContext = getContextValue(marketInput, "the local market");

  document.getElementById("resultTitle").textContent = `${primaryPhase.label}: ${primaryPhase.name}`;
  document.getElementById("resultSummary").textContent =
    `This is the highest-leverage place to start for ${tradeContext} in ${marketContext}. Work the module queue in order before jumping deeper into the course.`;
  document.getElementById("phaseRecommendation").textContent = primaryPhase.promise;
  document.getElementById("buyerPath").textContent =
    buyerPath === "Mixed path"
      ? "Choose one path before continuing. Mixed residential and commercial focus slows the first sprint."
      : buyerPath;
  document.getElementById("tradeFocus").textContent = getTradeFocus(tags);
  document.getElementById("skipGuidance").textContent = getSkipGuidance(topPhases);

  document.getElementById("moduleQueue").innerHTML = moduleQueue
    .map(
      (module) => `
        <article class="module-card">
          <div class="module-id">${module.id}</div>
          <div class="module-body">
            <div class="module-title">${module.title}</div>
            <p>${module.outcome}</p>
            <div class="module-meta">${module.type} / ${phaseLabel(module.phase)}</div>
          </div>
          <span class="priority-badge">${module.priority}</span>
        </article>
      `,
    )
    .join("");

  form.classList.add("hidden");
  results.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function phaseLabel(phaseId) {
  return phases.find((phase) => phase.id === phaseId)?.label || phaseId;
}

function readFormState() {
  const formData = new FormData(form);
  questions.forEach((question) => {
    const value = formData.get(question.id);
    if (!value) return;
    const [, optionIndex] = value.split(":");
    state.answers[question.id] = Number(optionIndex);
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 200);
  }, 1800);
}

function copySummary() {
  const resultTitle = document.getElementById("resultTitle").textContent;
  const tradeContext = getContextValue(tradeInput, "Not provided");
  const marketContext = getContextValue(marketInput, "Not provided");
  const moduleTitles = [...document.querySelectorAll(".module-card")].map((card) =>
    card.textContent.replace(/\s+/g, " ").trim(),
  );
  const summary = [
    `AI Contractor Mastermind Assessment Result`,
    resultTitle,
    `Trade: ${tradeContext}`,
    `Market: ${marketContext}`,
    "",
    ...moduleTitles,
  ].join(
    "\n",
  );

  navigator.clipboard
    .writeText(summary)
    .then(() => showToast("Summary copied"))
    .catch(() => showToast("Copy failed"));
}

renderQuestions();
updateProgress();

form.addEventListener("change", (event) => {
  if (!(event.target instanceof HTMLInputElement)) return;
  readFormState();
  updateProgress();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  readFormState();

  const missing = questions.find((question) => state.answers[question.id] === undefined);
  if (missing) {
    const fieldset = [...document.querySelectorAll(".question")][questions.indexOf(missing)];
    fieldset?.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Answer every question first");
    return;
  }

  renderResults();
});

resetButton.addEventListener("click", () => {
  state.answers = {};
  form.reset();
  results.classList.add("hidden");
  form.classList.remove("hidden");
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

editAnswersButton.addEventListener("click", () => {
  results.classList.add("hidden");
  form.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

copyResultButton.addEventListener("click", copySummary);
