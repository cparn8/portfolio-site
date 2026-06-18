import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Moon, Sun } from 'lucide-react';

import portrait from './assets/portfolio-photo.png';
import aws from './assets/aws-ccp.png';
import itil from './assets/itil4.png';
import proj from './assets/projplus.png';

export default function App() {
  const gutter = 'px-[clamp(1.5rem,3.5vw,4.2rem)]';

  const githubUrl = 'https://github.com/cparn8';
  const linkedinUrl = 'https://www.linkedin.com/in/clay-parnell-2b6ab9168/';

  // Place these files in /public so Vite serves them from the site root.
  const resumeUrl = '/Clayton_Parnell_Application_Specialist_Resume.pdf';
  const caseStudyUrl = '/Clayton_Parnell_Application_Support_Case_Study.pdf';

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  const [copied, setCopied] = useState(false);
  const email = 'claytongparnell@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const portraitW = useMemo(() => 'clamp(210px, 24vw, 470px)', []);

  return (
    <main>
      {/* MASTHEAD / NAVBAR */}
      <header
        className={gutter}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          paddingTop: '2.5rem',
          animation: 'fadeIn 0.8s ease-out both',
        }}
      >
        {/* Utilities */}
        <div
          className='mobile-center mobile-width'
          style={{
            display: 'flex',
            gap: '0.35rem',
            alignItems: 'center',
            fontSize: '1.3rem',
            fontWeight: 600,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a href={githubUrl} target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <span aria-hidden='true'>·</span>
          <a href={linkedinUrl} target='_blank' rel='noreferrer'>
            LinkedIn
          </a>
          <span aria-hidden='true'>·</span>
          <a href={resumeUrl} target='_blank' rel='noreferrer'>
            Resume
          </a>
          <span aria-hidden='true'>·</span>
          <button
            className='topbar'
            onClick={() => copyEmail()}
            aria-label='Copy email'
            title='Copy email'
          >
            Email
          </button>
          <span aria-hidden='true'>·</span>
          <button
            className='topbar'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            title={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {theme === 'light' ? (
              <Moon size={35} strokeWidth={2.3} aria-hidden='true' />
            ) : (
              <Sun size={35} strokeWidth={2.3} aria-hidden='true' />
            )}
          </button>
        </div>
      </header>

      <div style={{ height: 'clamp(3rem, 6vh, 5rem)' }} />

      {/* HERO */}
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
          className='grid gap-12 mobile-stack'
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
                fontSize: 'clamp(3.5rem, 6.5vw, 7.1rem)',
                lineHeight: '0.78',
                letterSpacing: '-0.025em',
                fontWeight: 600,
              }}
            >
              Application Specialist
            </h1>

            <h2
              className='mobile-center mobile-margin'
              style={{
                marginTop: '4.5rem',
                fontSize: 'clamp(2.25rem, 2.92vw, 3rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontWeight: 500,
              }}
            >
              Software-trained support professional
              <br />
              focused on business systems, user workflows, and application
              reliability
            </h2>

            <p
              className='body-lg mobile-center mobile-margin'
              style={{ marginTop: '4rem', maxWidth: '56ch' }}
            >
              I combine a Software Engineering background with hands-on IT
              support experience across user troubleshooting, ticket workflows,
              documentation, account and access issues, operational systems, and
              production-like business applications.
            </p>

            <div
              className='mobile-center mobile-margin'
              style={{
                marginTop: '2.25rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontWeight: 550,
                fontSize: '1.3rem',
              }}
            >
              <a
                href={resumeUrl}
                target='_blank'
                rel='noreferrer'
                className='topbar'
              >
                Resume
              </a>
              <span aria-hidden='true'>·</span>
              <a
                href={caseStudyUrl}
                target='_blank'
                rel='noreferrer'
                className='topbar'
              >
                Case Study
              </a>
              <span aria-hidden='true'>·</span>
              <button
                className='topbar'
                onClick={() => {
                  document
                    .getElementById('fit')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Role Fit
              </button>
            </div>
          </div>

          {/* Right: Portrait + NAME ANCHORED TO BOTTOM-LEFT EDGE OF PHOTO */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              overflow: 'visible',
            }}
          >
            <div
              className='hero-photo hero-photoone'
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
                  This keeps the name in the dead space left of the photo instead of inside it. */}
              <div
                className='hero-name hero-nameone'
                style={{
                  position: 'absolute',
                  right: '100%',
                  bottom: 0,
                  transform: 'translate(0%, 25%)',
                  fontSize: 'clamp(2.75rem, 6.5vw, 7.1rem)',
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

        {/* FIT TEASER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            paddingBottom: 'clamp(1.5rem, 4vh, 3rem)',
            textAlign: 'left',
            animation: 'fadeIn 0.8s ease-out both',
          }}
        >
          <button
            className='topbar'
            onClick={() => {
              document
                .getElementById('fit')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
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
                How I Add Value
              </h2>
              <ArrowDown size={58} strokeWidth={2.6} aria-hidden='true' />
            </div>
          </button>
        </div>
      </section>

      {/* ROLE FIT / CASE STUDY CTA */}
      <section
        className={gutter}
        id='fit'
        style={{
          scrollMarginTop: '1rem',
          animation: 'fadeIn 0.8s ease-out both',
        }}
      >
        <div
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              fontSize: 'clamp(2.75rem, 6.5vw, 7.1rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginBottom: 0,
              fontWeight: 600,
            }}
          >
            Business Application Support
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
            <p
              className='body-lg mobile-center'
              style={{ marginTop: 0, maxWidth: '56ch' }}
            >
              I am targeting roles that combine technical troubleshooting,
              end-user support, workflow analysis, documentation, and ownership
              of business-critical applications.
            </p>

            <div className='mobile-center' style={{ marginTop: '1.5rem' }}>
              <p className='meta' style={{ marginBottom: '0.5rem' }}>
                Target Roles
              </p>
              <p className='body-md' style={{ marginTop: 0 }}>
                Application Specialist · Application Support Analyst · Business
                Applications Support · Technical Support Analyst · SaaS/Product
                Support · Implementation Support
              </p>
            </div>

            <div className='mobile-center' style={{ marginTop: '1.5rem' }}>
              <p className='meta' style={{ marginBottom: '0.5rem' }}>
                Transferable Support Context
              </p>
              <p className='body-md' style={{ marginTop: 0 }}>
                Service Management · User Support · Business Applications ·
                Account/Access Workflows · Documentation · Asset/Endpoint
                Support · REST APIs · PostgreSQL
              </p>
            </div>

            <a
              href={caseStudyUrl}
              target='_blank'
              rel='noreferrer'
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
                  marginTop: '1.25rem',
                }}
              >
                Read Case Study
                <ArrowRight size={58} strokeWidth={2.6} aria-hidden='true' />
              </div>
            </a>
          </div>

          {/* Right column */}
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
                  Hands-on support experience
                </span>{' '}
                triaging user issues, documenting requests, resolving technical
                problems, and escalating system issues when appropriate.
              </li>

              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Business-application support mindset
                </span>{' '}
                across workflows, permissions, data visibility, validation
                behavior, documentation, and user-impact analysis.
              </li>

              <li>
                <span style={{ fontWeight: 'bold' }}>
                  User-centered troubleshooting
                </span>{' '}
                focused on reproducing issues, isolating likely causes,
                documenting findings, and communicating clearly with
                nontechnical users.
              </li>

              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Software engineering foundation
                </span>{' '}
                in React, TypeScript, Django REST, PostgreSQL, REST APIs,
                validation logic, authentication, and deployment-aware
                troubleshooting.
              </li>

              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Application support case study
                </span>{' '}
                documenting how I troubleshoot a full-stack healthcare
                scheduling SaaS across appointment visibility, filters, API
                responses, recurrence, business hours, conflicts, and data
                consistency.
              </li>
            </ul>
          </div>
        </div>

        {/* Education + certs */}
        <div style={{ height: 'clamp(2rem, 12vh, 2.5rem)' }} />

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
                fontWeight: 'bold',
              }}
            >
              B.S. Software Engineering · Western Governors University · 2025
            </p>
          </div>

          <div
            style={{
              marginTop: '1rem',
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

      <div style={{ height: 'clamp(1rem, 12vh, 2.5rem)' }} />

      {/* CONTACT */}
      <section
        className={gutter}
        style={{
          paddingBottom: 'clamp(1rem, 12vh, 1rem)',
          animation: 'fadeIn 0.8s ease-out both',
        }}
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
              fontWeight: 550,
            }}
          >
            <p style={{ maxWidth: '900px' }}>
              Interested in adding me to your team?
            </p>
          </div>

          <div
            style={{
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
              display: 'inline-flex',
              gap: '0.75rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontWeight: 550,
            }}
            className='body-lg muted'
          >
            <a
              href={resumeUrl}
              target='_blank'
              rel='noreferrer'
              className='topbar'
            >
              Resume
            </a>
            <span aria-hidden='true'>·</span>
            <a
              href={githubUrl}
              target='_blank'
              rel='noreferrer'
              className='topbar'
            >
              GitHub
            </a>
            <span aria-hidden='true'>·</span>
            <a
              href={linkedinUrl}
              target='_blank'
              rel='noreferrer'
              className='topbar'
            >
              LinkedIn
            </a>
            <span aria-hidden='true'>·</span>
            <button
              className='topbar'
              onClick={() => copyEmail()}
              aria-label='Copy email'
              title='Copy email'
            >
              Email
            </button>
          </div>
        </div>
      </section>

      {copied && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '0.75rem 1.25rem',
            background: 'var(--purp)',
            color: 'white',
            borderRadius: '999px',
            fontSize: '0.85rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            zIndex: 1000,
          }}
        >
          Email copied to clipboard
        </div>
      )}
    </main>
  );
}
