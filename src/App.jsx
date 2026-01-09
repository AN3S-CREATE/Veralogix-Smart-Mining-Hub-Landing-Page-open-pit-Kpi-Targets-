import { useEffect } from 'react';

const year = new Date().getFullYear();

const App = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add('on'));
      return undefined;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }

    elements.forEach((el) => el.classList.add('on'));
    return undefined;
  }, []);

  return (
    <>
      <div className="gridOverlay"></div>

      <header className="nav">
        <div className="wrap navinner">
          <div className="brand">
            <span className="dot" aria-hidden="true"></span>
            <span>Veralogix • Smart Mining Hub</span>
          </div>
          <nav className="navlinks" aria-label="Primary">
            <a href="#modules">Modules</a>
            <a href="#how">How it works</a>
            <a href="#trust">Trust</a>
            <a href="#cta" className="btn primary">
              Book a Pilot <span className="chev">›</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <svg
            className="heroArt"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroG" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#D2FF05" stopOpacity=".55" />
                <stop offset="1" stopColor="#9AD153" stopOpacity=".35" />
              </linearGradient>
              <filter id="heroB" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.8" />
              </filter>
            </defs>
            <rect width="1200" height="500" fill="transparent" />
            <path
              d="M60 390 C200 300, 360 330, 520 260 C690 185, 850 210, 1140 110"
              fill="none"
              stroke="url(#heroG)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#heroB)"
            />
            <path
              d="M80 420 C260 340, 400 360, 560 300 C720 240, 880 260, 1160 160"
              fill="none"
              stroke="url(#heroG)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity=".8"
            />
            <g opacity=".28" stroke="#F6F3EA">
              <path d="M0 460 H1200" />
              <path d="M0 430 H1200" />
              <path d="M0 400 H1200" />
              <path d="M0 370 H1200" />
              <path d="M0 340 H1200" />
            </g>
            <path
              d="M60 450 L220 370 L420 400 L560 340 L730 360 L900 280 L1140 310"
              fill="none"
              stroke="#F6F3EA"
              strokeOpacity=".18"
              strokeWidth="2"
            />
            <circle cx="520" cy="260" r="6" fill="#D2FF05" opacity=".8" />
            <circle cx="900" cy="280" r="6" fill="#D2FF05" opacity=".7" />
            <circle cx="1140" cy="110" r="6" fill="#D2FF05" opacity=".75" />
          </svg>

          <div className="wrap heroGrid">
            <div className="reveal">
              <div className="kicker">
                <span className="pulse"></span> Open-pit mines • Prototype-ready •
                Audit-first
              </div>

              <h1>
                Real-time <span className="lime">visibility</span>
                <br />
                that turns into control
              </h1>

              <p className="sub">
                A single cockpit for open-pit operations — fleet cycles, ROM-to-plant flow,
                people, and risk — built for harsh environments, messy data, and zero
                patience for downtime.
              </p>

              <div className="proofRow">
                <div className="pill">Detect → Predict → Optimize → Protect</div>
                <div className="pill">
                  Integrates: sensors • PLC/SCADA • LoRaWAN • OEM telemetry
                </div>
                <div className="pill">Role-based access + audit trail</div>
              </div>

              <div className="heroCtas">
                <a className="btn primary" href="#cta">
                  Book a Pilot <span className="chev">›</span>
                </a>
                <a className="btn" href="#how">
                  See the architecture
                </a>
              </div>
            </div>

            <aside className="panel reveal" aria-label="Executive KPI snapshot">
              <div className="panelInner">
                <div className="panelTitle">
                  <span>Executive snapshot</span>
                  <span className="muted62">OPEN-PIT TARGETS</span>
                </div>

                <div className="targetNote">
                  Pilot targets (example) — tune per site baseline and constraints.
                </div>

                <div className="kpis" role="list">
                  <div className="kpi" role="listitem">
                    <div className="n">15%</div>
                    <div className="l">Downtime reduction</div>
                    <div className="t">Target</div>
                  </div>
                  <div className="kpi" role="listitem">
                    <div className="n">8%</div>
                    <div className="l">Throughput uplift</div>
                    <div className="t">Target</div>
                  </div>
                  <div className="kpi" role="listitem">
                    <div className="n">4 hrs</div>
                    <div className="l">Audit prep time</div>
                    <div className="t">From days → hours</div>
                  </div>
                  <div className="kpi" role="listitem">
                    <div className="n">12</div>
                    <div className="l">Critical alerts handled</div>
                    <div className="t">Per shift (goal)</div>
                  </div>
                </div>

                <div className="chartBox" aria-label="ROI example chart">
                  <div className="rowBetween mb10">
                    <div className="miniTitle">Open-pit uplift (example)</div>
                    <div className="muted62 fs12">Replace with real site numbers</div>
                  </div>

                  <svg
                    viewBox="0 0 520 130"
                    width="100%"
                    height="130"
                    role="img"
                    aria-label="Example performance uplift chart"
                  >
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0" stopColor="rgba(210,255,5,.75)" />
                        <stop offset="1" stopColor="rgba(154,209,83,.55)" />
                      </linearGradient>
                      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <g opacity=".25" stroke="rgba(246,243,234,.30)" strokeWidth="1">
                      <line x1="0" y1="110" x2="520" y2="110" />
                      <line x1="0" y1="80" x2="520" y2="80" />
                      <line x1="0" y1="50" x2="520" y2="50" />
                      <line x1="0" y1="20" x2="520" y2="20" />
                    </g>

                    <g fill="rgba(246,243,234,.72)" fontSize="12" fontFamily="Inter">
                      <text x="10" y="125">
                        Downtime
                      </text>
                      <text x="180" y="125">
                        Compliance
                      </text>
                      <text x="355" y="125">
                        Throughput
                      </text>
                    </g>

                    <g filter="url(#glow)">
                      <rect x="15" y="70" width="50" height="40" rx="10" fill="rgba(246,243,234,.12)" />
                      <rect x="75" y="92" width="50" height="18" rx="10" fill="url(#g1)" />

                      <rect x="185" y="92" width="50" height="18" rx="10" fill="rgba(246,243,234,.12)" />
                      <rect x="245" y="60" width="50" height="50" rx="10" fill="url(#g1)" />

                      <rect x="360" y="86" width="50" height="24" rx="10" fill="rgba(246,243,234,.12)" />
                      <rect x="420" y="50" width="50" height="60" rx="10" fill="url(#g1)" />
                    </g>

                    <g fill="rgba(246,243,234,.70)" fontSize="12" fontFamily="Inter">
                      <rect x="10" y="6" width="10" height="10" fill="rgba(246,243,234,.12)" rx="2" />
                      <text x="26" y="15">
                        Before
                      </text>
                      <rect x="85" y="6" width="10" height="10" fill="rgba(210,255,5,.55)" rx="2" />
                      <text x="101" y="15">
                        After
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="wrap">
          <div className="secHead reveal">
            <div>
              <h2>What you get</h2>
              <div className="secNote">
                Executive-clean. Operator-friendly. Built to drive measurable outcomes — not
                dashboards-for-fun.
              </div>
            </div>
            <a className="btn" href="#cta">
              Request a demo
            </a>
          </div>

          <div className="grid">
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">KPI cockpit</span>
                  <span className="icon" aria-hidden="true">
                    ◎
                  </span>
                </div>
                <h3>Real-time ops visibility</h3>
                <p>
                  Shift KPIs, bottlenecks, and interventions — with the context operators
                  actually need to act.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">Fleet + haulage</span>
                  <span className="icon" aria-hidden="true">
                    ↔
                  </span>
                </div>
                <h3>Transport performance</h3>
                <p>
                  Cycle times, queues, delays, and asset utilization — connected directly
                  to production impact.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">HSE + security</span>
                  <span className="icon" aria-hidden="true">
                    ⛉
                  </span>
                </div>
                <h3>Risk with receipts</h3>
                <p>
                  Controls, alerts, and audit trails — so safety and compliance don’t
                  depend on memory.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">Workforce</span>
                  <span className="icon" aria-hidden="true">
                    ⬡
                  </span>
                </div>
                <h3>People + access</h3>
                <p>
                  Onboarding, training matrix, certifications, and access control alignment
                  — expiry-proof.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">Reporting</span>
                  <span className="icon" aria-hidden="true">
                    ▦
                  </span>
                </div>
                <h3>Reporting that’s automatic</h3>
                <p>
                  Dashboards and scheduled outputs across departments. One source of truth.
                  Fewer arguments.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">AI assist</span>
                  <span className="icon" aria-hidden="true">
                    ✶
                  </span>
                </div>
                <h3>AI summaries & triage</h3>
                <p>
                  Turn noisy events into clear actions: what happened, why it matters, who
                  should act, and next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="wrap">
          <div className="secHead reveal">
            <div>
              <h2>How it works</h2>
              <div className="secNote">
                Sensors don’t talk “app.” We translate and normalize at the edge — then the
                Hub enforces clean events, permissions, and outcomes.
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="steps reveal">
              <div className="stepsInner">
                <div className="step">
                  <div className="num">1</div>
                  <div className="txt">
                    <b>Collect at the edge</b>
                    <span>
                      Machines, plant instruments, and people tracking feed gateways
                      (CAN-bus / PLC / LoRaWAN).
                    </span>
                  </div>
                </div>
                <div className="step">
                  <div className="num">2</div>
                  <div className="txt">
                    <b>Normalize + secure</b>
                    <span>
                      Gateways/middleware publish to a unified event stream (MQTT/API). Data
                      becomes consistent, traceable, auditable.
                    </span>
                  </div>
                </div>
                <div className="step">
                  <div className="num">3</div>
                  <div className="txt">
                    <b>Act with accountability</b>
                    <span>
                      Smart Hub triggers alerts, workflows, and AI summaries — with human
                      approvals where required.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="diagram reveal" aria-label="Sensor to hub diagram">
              <div className="miniTitle mb10">Sensor → Hub pipeline</div>

              <svg
                viewBox="0 0 520 260"
                width="100%"
                height="260"
                role="img"
                aria-label="Architecture pipeline diagram"
              >
                <defs>
                  <linearGradient id="path" x1="0" x2="1">
                    <stop offset="0" stopColor="rgba(210,255,5,.75)" />
                    <stop offset="1" stopColor="rgba(154,209,83,.55)" />
                  </linearGradient>
                  <filter id="g" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g fontFamily="Inter" fontSize="12" fill="rgba(246,243,234,.80)">
                  <rect
                    x="18"
                    y="26"
                    width="140"
                    height="52"
                    rx="14"
                    fill="rgba(246,243,234,.05)"
                    stroke="rgba(246,243,234,.12)"
                  />
                  <text x="34" y="56">
                    Sensors / Machines
                  </text>

                  <rect
                    x="190"
                    y="26"
                    width="140"
                    height="52"
                    rx="14"
                    fill="rgba(246,243,234,.05)"
                    stroke="rgba(246,243,234,.12)"
                  />
                  <text x="206" y="49">
                    Edge Gateways
                  </text>
                  <text x="206" y="66" fill="rgba(246,243,234,.65)">
                    CAN / PLC / LoRa
                  </text>

                  <rect
                    x="362"
                    y="26"
                    width="140"
                    height="52"
                    rx="14"
                    fill="rgba(246,243,234,.05)"
                    stroke="rgba(246,243,234,.12)"
                  />
                  <text x="378" y="49">
                    MQTT / API
                  </text>
                  <text x="378" y="66" fill="rgba(246,243,234,.65)">
                    Unified events
                  </text>

                  <rect
                    x="120"
                    y="128"
                    width="280"
                    height="86"
                    rx="18"
                    fill="rgba(210,255,5,.06)"
                    stroke="rgba(210,255,5,.28)"
                  />
                  <text
                    x="140"
                    y="156"
                    fontFamily="Space Grotesk"
                    fontSize="14"
                    letterSpacing=".08em"
                  >
                    SMART MINING HUB
                  </text>
                  <text x="140" y="178" fill="rgba(246,243,234,.70)">
                    Dashboards • Alerts • Workflows • Audit
                  </text>
                  <text x="140" y="198" fill="rgba(246,243,234,.70)">
                    AI summaries • Role-based access
                  </text>
                </g>

                <g filter="url(#g)">
                  <path
                    d="M158 52 C 175 52, 175 52, 190 52"
                    stroke="url(#path)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M330 52 C 346 52, 346 52, 362 52"
                    stroke="url(#path)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M432 78 C 430 110, 400 118, 320 128"
                    stroke="url(#path)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M88 78 C 90 112, 120 118, 200 128"
                    stroke="url(#path)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>

                <g fontFamily="Inter" fontSize="11" fill="rgba(246,243,234,.62)">
                  <text x="210" y="18">
                    Translate + validate
                  </text>
                  <text x="366" y="18">
                    Publish + secure
                  </text>
                </g>
              </svg>

              <div className="muted70 mt10 fs13">
                Outcome: the Hub stays clean and consistent — even when the real world isn’t.
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="wrap">
          <div className="secHead reveal">
            <div>
              <h2>Modules</h2>
              <div className="secNote">
                Start with the Hub. Add modules as the site matures — without replatforming.
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">SMART</span>
                  <span className="icon">OP</span>
                </div>
                <h3>SMART Operations</h3>
                <p>
                  Shift KPIs, bottleneck visibility, interventions, and plant performance —
                  real-time.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">SMART</span>
                  <span className="icon">TR</span>
                </div>
                <h3>SMART Transport</h3>
                <p>
                  Fleet movement visibility, cycle optimization, dispatch support, delay
                  root causes.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">SMART</span>
                  <span className="icon">RK</span>
                </div>
                <h3>SMART Risk</h3>
                <p>
                  HSE + security signals, controls, automated alerts, and audit-ready
                  evidence trails.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">SMART</span>
                  <span className="icon">PP</span>
                </div>
                <h3>SMART People</h3>
                <p>
                  Onboarding, compliance tracking, training matrix, access control alignment.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">SMART</span>
                  <span className="icon">RP</span>
                </div>
                <h3>SMART Reporting</h3>
                <p>
                  Single source dashboards and scheduled reporting — across departments.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <div className="cardInner">
                <div className="cardTop">
                  <span className="tag">INTEGRATIONS</span>
                  <span className="icon">∑</span>
                </div>
                <h3>Connector layer</h3>
                <p>
                  Register devices, map tags → events, validate payloads, and track ingestion
                  health.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="wrap">
          <div className="secHead reveal">
            <div>
              <h2>Proof & trust</h2>
              <div className="secNote">
                Industrial-grade clarity. Compliance posture. Security by default.
                Human-in-the-loop where it matters.
              </div>
            </div>
          </div>

          <div className="trustRow">
            <div className="trust reveal">
              <b>Role-based access</b>
              <span>
                Control who sees what. Separate executive vs operator vs contractor views.
              </span>
            </div>
            <div className="trust reveal">
              <b>Audit trail</b>
              <span>Every action logged: who changed what, when, and why.</span>
            </div>
            <div className="trust reveal">
              <b>Data integrity</b>
              <span>Validated events, dedupe, and ingestion logs for traceability.</span>
            </div>
            <div className="trust reveal">
              <b>POPIA posture</b>
              <span>Privacy-conscious handling for workforce data and identities.</span>
            </div>
          </div>

          <div className="grid mt14">
            <div className="steps reveal span12">
              <div className="stepsInner">
                <div className="step">
                  <div className="num">✓</div>
                  <div className="txt">
                    <b>Prototype now, production later</b>
                    <span>
                      Simulate sensor events today. Swap in real gateways and connectors when
                      engineering commissioning is ready.
                    </span>
                  </div>
                </div>
                <div className="step">
                  <div className="num">✓</div>
                  <div className="txt">
                    <b>Designed for open-pit reality</b>
                    <span>
                      Assumes flaky connectivity, dynamic fleets, and high-stakes decisions.
                      Keeps the UX fast and readable.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="ctaStrip">
          <div className="wrap">
            <div className="ctaBox reveal">
              <div>
                <h3>Book a pilot scoping session</h3>
                <p>
                  We’ll map your site signals → outcomes, define KPIs, and confirm the
                  integration path (PLC / LoRaWAN / OEM telemetry / retrofit).
                </p>
              </div>
              <div className="rowWrap">
                <a
                  className="btn primary"
                  href="mailto:hello@veralogix.com?subject=Smart%20Mining%20Hub%20Pilot%20Request"
                >
                  Email to start <span className="chev">›</span>
                </a>
                <a className="btn" href="#how">
                  Review architecture
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="rowBetweenWrapTop">
            <div>© {year} Veralogix Group • Smart Mining Hub</div>
            <div className="muted55">
              Next boss-level upgrade: swap the hero vector for a real open-pit photo + 1
              pilot story.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
