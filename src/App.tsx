import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

import portrait from './assets/portfolio-photo.png';
import aws from './assets/aws-ccp.png';
import itil from './assets/itil4.png';
import proj from './assets/projplus.png';

export default function App() {
  const sectionGap = 'clamp(5rem, 12vh, 9rem)';
  const gutter = 'px-[clamp(1.5rem,4vw,3rem)]';

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const email = 'your@email.com';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const portraitW = useMemo(() => 'clamp(210px, 22vw, 400px)', []);

  return (
    <main>
      {/* MASTHEAD / NAVBAR */}
      <header
        className={gutter}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingTop: '2.5rem',
        }}
      >
        {/* Identity */}
        <div style={{ lineHeight: 1.25 }}>
          <div style={{ fontWeight: 600 }}>Clayton Parnell</div>
          <div style={{ opacity: 0.8 }}>Dallas, TX · Open to relocate</div>
        </div>

        {/* Utilities */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a href='https://github.com/cparn8' target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/clay-parnell-2b6ab9168/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
          <button
            onClick={() => navigator.clipboard.writeText(email)}
            style={{ opacity: 0.8 }}
            aria-label='Copy email'
            title='Copy email'
          >
            Email
          </button>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{ opacity: 0.7 }}
            aria-label='Toggle theme'
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </header>

      <div style={{ height: 'clamp(3rem, 6vh, 5rem)' }} />

      {/* HERO (includes the bottom teaser; no duplicate project header elsewhere) */}
      <section
        className={gutter}
        style={{
          minHeight: 'calc(100vh - 8rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 'clamp(3rem, 7vh, 6rem)',
        }}
      >
        <div
          className='grid gap-12'
          style={{
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.75fr)',
            animation: 'fadeIn 0.8s ease-out both',
            alignItems: 'start',
          }}
        >
          {/* Left: Text */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 6.5vw, 10rem)',
                lineHeight: '0.7',
                letterSpacing: '-0.025em',
                fontWeight: 600,
              }}
            >
              Software Engineer
            </h1>

            <h2
              style={{
                marginTop: '2rem',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Designing and building complex
              <br />
              full-stack systems
            </h2>

            <p
              className='body-lg'
              style={{ marginTop: '2.5rem', maxWidth: '54ch' }}
            >
              I emphasize clear structure, scoped execution, and dependable
              delivery, ensuring requirements, constraints, and technical
              decisions stay aligned from planning through release.
            </p>
          </div>

          {/* Right: Portrait + NAME ANCHORED TO BOTTOM-LEFT EDGE OF PHOTO (but placed to the left) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              overflow: 'visible',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: portraitW,
                overflow: 'visible',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '2 / 3',
                  overflow: 'hidden',
                  background: `var(--portrait-bg-light), var(--purp)`,
                }}
              >
                <img
                  src={portrait}
                  alt='Portrait'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    filter: 'drop-shadow(14px 14px 28px rgba(0, 0, 0, 0.4))',
                  }}
                />
              </div>

              {/* IMPORTANT:
                  right: '100%' anchors the RIGHT EDGE of the name to the LEFT EDGE of the portrait.
                  This makes the name sit in the dead space LEFT of the photo instead of inside it. */}
              <div
                style={{
                  position: 'absolute',
                  right: '100%',
                  bottom: 0,
                  transform: 'translate(0%, 25%)', // X controls attachment; Y controls “hang”
                  fontSize: 'clamp(2.75rem, 6.5vw, 10rem)',
                  letterSpacing: '-0.025em',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              >
                Clayton Parnell
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT TEASER (bottom of hero; links to project section header) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            paddingBottom: 'clamp(1.5rem, 4vh, 3rem)',
            textAlign: 'left',
          }}
        >
          <a
            href='#project'
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'left',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'left',
                gap: '0.5rem',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.02em',
                }}
              >
                Featured Project
              </h2>

              <ArrowDown size={58} strokeWidth={2.6} aria-hidden='true' />
            </div>
          </a>
        </div>
      </section>

      <div style={{ height: sectionGap }} />

      {/* PROJECT DETAILS (single header only; no duplicates) */}
      <section
        className={gutter}
        id='project'
        style={{
          scrollMarginTop: '6.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              marginTop: '1.5rem',
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginBottom: 0,
            }}
          >
            Clinical Scheduling Platform
          </h2>
        </div>

        <div style={{ height: 'clamp(2.5rem, 5vh, 3.5rem)' }} />

        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div style={{ textAlign: 'left' }}>
            <p className='body-lg' style={{ marginTop: 0, maxWidth: '56ch' }}>
              A production-oriented healthcare scheduling system designed to
              handle real clinical workflows and operational reliability.
            </p>

            <div style={{ marginTop: '2.25rem' }}>
              <p className='meta' style={{ marginBottom: '0.5rem' }}>
                Tech Stack
              </p>
              <p className='body-lg' style={{ marginTop: 0 }}>
                React · TypeScript · Tailwind · Django REST · PostgreSQL ·
                Docker · AWS
              </p>
            </div>

            <a
              href='#'
              style={{
                margin: 0,
                fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  marginTop: '2.25rem',
                }}
              >
                View Project
                <ArrowRight size={48} strokeWidth={2.0} aria-hidden='true' />
              </div>
            </a>
          </div>

          {/* Right column: brief, project-impact bullets (not commit-message fixes) */}
          <div style={{ textAlign: 'left' }}>
            <ul
              className='muted'
              style={{
                listStyle: 'disc',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: '0.5rem',
                maxWidth: '56ch',
              }}
            >
              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Rules-driven scheduling engine
                </span>{' '}
                (overlaps, blocks, conflict detection).
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Multi-entity scheduling architecture
                </span>{' '}
                supporting providers, locations, availability, and constraints
                within a unified domain model.
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Scalable schedule retrieval and filtering
                </span>{' '}
                designed to support growth without compromising data
                consistency.
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Strong permission boundaries
                </span>{' '}
                reinforced through role-aware logic, validation, and type-safe
                frontend and backend enforcement.
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Cloud-deployed backend and infrastructure
                </span>{' '}
                configured for production environments, including secure
                runtime, networking, and service boundaries.
              </li>
            </ul>
          </div>
        </div>

        {/* Education + certs: centered under the project section */}
        <div style={{ height: 'clamp(3rem, 6vh, 4.5rem)' }} />

        <div>
          <div
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'auto',
              display: 'flex',
            }}
          >
            <p
              className='muted'
              style={{
                marginTop: 0,
                maxWidth: '900px',
              }}
            >
              B.S. Software Engineering · Western Governors University · 2025
            </p>
          </div>
          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1.25rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              opacity: 0.9,
            }}
          >
            <img
              src={proj}
              alt='CompTIA Project+'
              style={{ height: '6rem', width: 'auto' }}
            />
            <img
              src={aws}
              alt='AWS Certified Cloud Practitioner'
              style={{ height: '6rem', width: 'auto' }}
            />
            <img
              src={itil}
              alt='ITIL 4 Foundation'
              style={{ height: '5.5rem', width: 'auto' }}
            />
          </div>
        </div>
      </section>

      <div style={{ height: 'clamp(3rem, 12vh, 2.5rem)' }} />

      {/* CONTACT (hard-centered container) */}
      <section
        className={gutter}
        style={{ paddingBottom: 'clamp(2rem, 12vh, 3rem)' }}
      >
        <div
          style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
        >
          <div
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'auto',
              display: 'flex',
            }}
          >
            <p style={{ maxWidth: '900px' }}>
              Interested in learning more or discussing opportunities?
            </p>
          </div>
          <div
            style={{
              marginTop: '1rem',
              display: 'inline-flex',
              gap: '0.75rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
            className='body-lg'
          >
            <a href={`mailto:${email}`}>Email</a>
            <span aria-hidden='true'>·</span>
            <a
              href='https://github.com/cparn8'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <span aria-hidden='true'>·</span>
            <a
              href='https://www.linkedin.com/in/clay-parnell-2b6ab9168/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
