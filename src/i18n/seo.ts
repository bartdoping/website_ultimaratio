import type { Metadata } from 'next'
import { DEFAULT_LOCALE, type Locale } from './locales'

/**
 * Zentral gepflegte, lokalisierte SEO-Metadaten pro Seite.
 *
 * Deutsch ist SEO-Primärziel der Google-Ads-Kampagne "Medizin Nachhilfe Online".
 * Englisch und Arabisch sind konservativ übersetzt und sollten fachlich
 * gegengelesen werden (siehe Abschlussbericht).
 *
 * Keine Garantie-/Erfolgsversprechen, keine erfundenen Zertifizierungen.
 */

export type SeoEntry = {
  title: string
  description: string
  /** Selbstreferenzierender Canonical-Pfad, z. B. '/vorklinik'. */
  path: string
}

type SeoByLocale = Record<Locale, SeoEntry>

export const SITE_NAME = 'ultima-rat.io'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ultima-rat.io'

const pages: Record<string, SeoByLocale> = {
  home: {
    de: {
      path: '/',
      title: 'Medizin Nachhilfe Online – 1:1 Coaching & Prüfungsvorbereitung',
      description:
        'Individuelle Online-Nachhilfe für das Medizinstudium: persönliches 1:1 Coaching, strukturierter Lernplan und gezielte Prüfungsvorbereitung für Physikum, M2 und M3. Jetzt Beratung per WhatsApp starten.',
    },
    en: {
      path: '/',
      title: 'Online Medical Tutoring – 1:1 Coaching & Exam Preparation',
      description:
        'Individual online tutoring for medical students: personal 1:1 coaching, a structured study plan and focused exam preparation for Physikum, M2 and M3. Start your consultation on WhatsApp.',
    },
    ar: {
      path: '/',
      title: 'دروس طب خصوصية أونلاين – تدريب فردي وتحضير للامتحانات',
      description:
        'دروس خصوصية فردية أونلاين لطلاب الطب: تدريب شخصي فردي وخطة تعلّم منظّمة وتحضير مركّز لامتحانات Physikum وM2 وM3. ابدأ استشارتك عبر واتساب.',
    },
  },
  coaching: {
    de: {
      path: '/coaching',
      title: 'Medizin Coaching & 1:1 Nachhilfe Online',
      description:
        'Persönliches 1:1 Coaching für Medizinstudierende: individueller Lernplan, prüfungsgerechtes Lernen und Online-Nachhilfe mit erfahrenen Tutor:innen und approbierten Ärzt:innen.',
    },
    en: {
      path: '/coaching',
      title: 'Medical Coaching & 1:1 Online Tutoring',
      description:
        'Personal 1:1 coaching for medical students: an individual study plan, exam-focused learning and online tutoring with experienced tutors and licensed physicians.',
    },
    ar: {
      path: '/coaching',
      title: 'تدريب طبي ودروس خصوصية فردية أونلاين',
      description:
        'تدريب شخصي فردي لطلاب الطب: خطة تعلّم فردية وتعلّم موجّه نحو الامتحان ودروس أونلاين مع معلّمين ذوي خبرة وأطباء مرخّصين.',
    },
  },
  vorklinik: {
    de: {
      path: '/vorklinik',
      title: 'Physikum Nachhilfe & Vorklinik Coaching Online',
      description:
        'Gezielte Physikum-Vorbereitung und Vorklinik-Nachhilfe online: Anatomie, Biochemie und Physiologie verständlich erklärt, individueller Lernplan und Unterstützung beim Zweit- oder Drittversuch.',
    },
    en: {
      path: '/vorklinik',
      title: 'Physikum Tutoring & Pre-clinical Coaching Online',
      description:
        'Focused Physikum preparation and pre-clinical tutoring online: anatomy, biochemistry and physiology explained clearly, an individual study plan and support for a second or third attempt.',
    },
    ar: {
      path: '/vorklinik',
      title: 'دروس Physikum وتدريب المرحلة قبل السريرية أونلاين',
      description:
        'تحضير مركّز لامتحان Physikum ودروس للمرحلة قبل السريرية أونلاين: شرح واضح للتشريح والكيمياء الحيوية وعلم وظائف الأعضاء، وخطة تعلّم فردية ودعم للمحاولة الثانية أو الثالثة.',
    },
  },
  klinik: {
    de: {
      path: '/klinik',
      title: 'M2 & M3 Nachhilfe – Hammerexamen Vorbereitung Online',
      description:
        'Strukturierte Vorbereitung auf M2 (Hammerexamen) und die mündliche M3-Prüfung: klinisches Denken, Kreuzen, Fallvorstellung und individuelle Online-Nachhilfe für klinische Fächer.',
    },
    en: {
      path: '/klinik',
      title: 'M2 & M3 Tutoring – Clinical Exam Preparation Online',
      description:
        'Structured preparation for M2 (Hammerexamen) and the oral M3 exam: clinical reasoning, question practice, case presentation and individual online tutoring for clinical subjects.',
    },
    ar: {
      path: '/klinik',
      title: 'دروس M2 وM3 – تحضير الامتحانات السريرية أونلاين',
      description:
        'تحضير منظّم لامتحان M2 (Hammerexamen) وامتحان M3 الشفهي: التفكير السريري وحل الأسئلة وعرض الحالات ودروس أونلاين فردية للمواد السريرية.',
    },
  },
  examenskurse: {
    de: {
      path: '/examenskurse',
      title: 'Examensvorbereitung Medizin – Physikum, M2 & M3',
      description:
        'Strukturierte Examensvorbereitung für alle Staatsexamina im Medizinstudium: Physikum, M2 und M3 – mit individuellem Lernplan, Kreuzen und persönlichem Coaching.',
    },
    en: {
      path: '/examenskurse',
      title: 'Medical Exam Preparation – Physikum, M2 & M3',
      description:
        'Structured exam preparation for every state examination in medical school: Physikum, M2 and M3 – with an individual study plan, question practice and personal coaching.',
    },
    ar: {
      path: '/examenskurse',
      title: 'تحضير امتحانات الطب – Physikum وM2 وM3',
      description:
        'تحضير منظّم لجميع امتحانات الدولة في دراسة الطب: Physikum وM2 وM3 – مع خطة تعلّم فردية وحل أسئلة وتدريب شخصي.',
    },
  },
  kenntnispruefung: {
    de: {
      path: '/kenntnispruefung',
      title: 'Kenntnisprüfung Vorbereitung für Ärzte Online',
      description:
        'Gezielte Vorbereitung auf die Kenntnisprüfung für ausländische Ärzt:innen: prüfungsgerechtes Lernen, klinische Fälle und individuelles Online-Coaching auf dem Weg zur Approbation in Deutschland.',
    },
    en: {
      path: '/kenntnispruefung',
      title: 'Kenntnisprüfung Preparation for Doctors Online',
      description:
        'Focused preparation for the Kenntnisprüfung for international doctors: exam-oriented learning, clinical cases and individual online coaching on the way to the German medical licence (Approbation).',
    },
    ar: {
      path: '/kenntnispruefung',
      title: 'تحضير امتحان المعرفة (Kenntnisprüfung) للأطباء أونلاين',
      description:
        'تحضير مركّز لامتحان المعرفة (Kenntnisprüfung) للأطباء الأجانب: تعلّم موجّه نحو الامتحان وحالات سريرية وتدريب فردي أونلاين في الطريق إلى الترخيص الطبي (Approbation) في ألمانيا.',
    },
  },
  fachsprachpruefung: {
    de: {
      path: '/fachsprachpruefung',
      title: 'Fachsprachprüfung Vorbereitung – Deutsch für Ärzte',
      description:
        'Vorbereitung auf die Fachsprachprüfung für ausländische Ärzt:innen: medizinisches Deutsch, Patientengespräch und Arztbrief üben – mehr Sicherheit im Prüfungsgespräch mit individuellem Coaching.',
    },
    en: {
      path: '/fachsprachpruefung',
      title: 'Fachsprachprüfung Preparation – Medical German for Doctors',
      description:
        'Preparation for the Fachsprachprüfung for international doctors: practise medical German, patient consultations and the doctor’s letter – more confidence in the exam with individual coaching.',
    },
    ar: {
      path: '/fachsprachpruefung',
      title: 'تحضير امتحان اللغة المتخصصة – الألمانية الطبية للأطباء',
      description:
        'تحضير لامتحان اللغة المتخصصة (Fachsprachprüfung) للأطباء الأجانب: تدرّب على الألمانية الطبية وحوار المريض والتقرير الطبي – ثقة أكبر في الامتحان مع تدريب فردي.',
    },
  },
  medicalskills: {
    de: {
      path: '/medicalskills',
      title: 'Medical Skills Training – EKG, Röntgen & Labor',
      description:
        'Klinische Fertigkeiten gezielt üben: EKG, Röntgen-Thorax, Laborwerte und Untersuchungstechniken – praxisnahe Online-Vorbereitung für M2, M3 und OSCE.',
    },
    en: {
      path: '/medicalskills',
      title: 'Medical Skills Training – ECG, X-ray & Lab Values',
      description:
        'Practise clinical skills in a targeted way: ECG, chest X-ray, lab values and examination techniques – practical online preparation for M2, M3 and OSCE.',
    },
    ar: {
      path: '/medicalskills',
      title: 'تدريب المهارات السريرية – تخطيط القلب والأشعة والمختبر',
      description:
        'تدرّب على المهارات السريرية بشكل موجّه: تخطيط القلب وأشعة الصدر وقيم المختبر وتقنيات الفحص – تحضير عملي أونلاين لامتحانات M2 وM3 وOSCE.',
    },
  },
  zahnmedizin: {
    de: {
      path: '/zahnmedizin',
      title: 'Zahnmedizin Nachhilfe & Coaching Online',
      description:
        'Individuelle Online-Nachhilfe für das Zahnmedizinstudium: Vorbereitung auf Z1, Z2 und Z3 mit strukturiertem Lernplan und persönlichem Coaching.',
    },
    en: {
      path: '/zahnmedizin',
      title: 'Dentistry Tutoring & Coaching Online',
      description:
        'Individual online tutoring for dental studies: preparation for Z1, Z2 and Z3 with a structured study plan and personal coaching.',
    },
    ar: {
      path: '/zahnmedizin',
      title: 'دروس طب الأسنان والتدريب أونلاين',
      description:
        'دروس خصوصية فردية أونلاين لدراسة طب الأسنان: تحضير لامتحانات Z1 وZ2 وZ3 مع خطة تعلّم منظّمة وتدريب شخصي.',
    },
  },
  methoden: {
    de: {
      path: '/methoden',
      title: 'Unsere Lernmethoden – prüfungsgerecht & individuell',
      description:
        'Wie ultima-rat.io Medizinstudierende vorbereitet: wissenschaftlich fundierte Lernmethoden, individueller Lernplan und prüfungsgerechtes Lernen für nachhaltigen Lernerfolg.',
    },
    en: {
      path: '/methoden',
      title: 'Our Learning Methods – Exam-focused & Individual',
      description:
        'How ultima-rat.io prepares medical students: evidence-informed learning methods, an individual study plan and exam-focused learning for lasting results.',
    },
    ar: {
      path: '/methoden',
      title: 'منهجيتنا في التعلّم – موجّهة للامتحان وفردية',
      description:
        'كيف يُحضّر ultima-rat.io طلاب الطب: أساليب تعلّم قائمة على أسس علمية وخطة تعلّم فردية وتعلّم موجّه نحو الامتحان لتحقيق نتائج مستدامة.',
    },
  },
  team: {
    de: {
      path: '/team',
      title: 'Unser Team – approbierte Ärzt:innen & Tutor:innen',
      description:
        'Lerne das Team von ultima-rat.io kennen: approbierte Ärzt:innen und erfahrene Tutor:innen, die dich in Online-Nachhilfe und Prüfungsvorbereitung persönlich begleiten.',
    },
    en: {
      path: '/team',
      title: 'Our Team – Licensed Physicians & Tutors',
      description:
        'Meet the team behind ultima-rat.io: licensed physicians and experienced tutors who support you personally in online tutoring and exam preparation.',
    },
    ar: {
      path: '/team',
      title: 'فريقنا – أطباء مرخّصون ومعلّمون',
      description:
        'تعرّف على فريق ultima-rat.io: أطباء مرخّصون ومعلّمون ذوو خبرة يرافقونك شخصيًا في الدروس الخصوصية أونلاين وتحضير الامتحانات.',
    },
  },
  kontakt: {
    de: {
      path: '/kontakt',
      title: 'Kontakt – Online-Nachhilfe Medizin anfragen',
      description:
        'Starte deine individuelle Online-Nachhilfe: Kontaktiere ultima-rat.io per WhatsApp oder E-Mail und bespreche deinen Lernplan und deine Prüfungsvorbereitung.',
    },
    en: {
      path: '/kontakt',
      title: 'Contact – Request Online Medical Tutoring',
      description:
        'Start your individual online tutoring: contact ultima-rat.io via WhatsApp or email and discuss your study plan and exam preparation.',
    },
    ar: {
      path: '/kontakt',
      title: 'تواصل – اطلب دروس طب خصوصية أونلاين',
      description:
        'ابدأ دروسك الخصوصية الفردية أونلاين: تواصل مع ultima-rat.io عبر واتساب أو البريد الإلكتروني وناقش خطة تعلّمك وتحضيرك للامتحان.',
    },
  },
}

export function getSeoEntry(page: string, locale: Locale): SeoEntry {
  const entry = pages[page]
  if (!entry) return pages.home[locale] ?? pages.home[DEFAULT_LOCALE]
  return entry[locale] ?? entry[DEFAULT_LOCALE]
}

const OG_LOCALE: Record<Locale, string> = {
  de: 'de_DE',
  en: 'en_US',
  ar: 'ar_AR',
}

/**
 * Baut ein vollständiges Metadata-Objekt inkl. Title-Suffix, Canonical und
 * OpenGraph/Twitter für eine Seite und Sprache.
 */
export function buildMetadata(page: string, locale: Locale): Metadata {
  const { title, description, path } = getSeoEntry(page, locale)
  const fullTitle = `${title} | ${SITE_NAME}`
  return {
    // Dokumenttitel ohne Marken-Suffix: das Layout-Template ergänzt "| ultima-rat.io".
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
