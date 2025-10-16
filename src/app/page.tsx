import Link from 'next/link'
import { CheckCircle, Users, Target, BookOpen, Brain, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bestnoten im<br />
              <span className="text-blue-600">Medizinstudium</span><br />
              durch echtes Verstehen
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Medizin-Nachhilfe für Medizinstudierende – mit approbierten Ärzt:innen und qualifizierten Tutor:innen, 
              prüfungsnahem Training und Lernstrategien, die auf dich zugeschnitten sind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Kostenloses Erstgespräch
              </a>
              <Link
                href="/coaching"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Community beitreten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Recipe Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Erfolgsrezept
            </h2>
            <p className="text-xl text-gray-600">
              Wie Du dein Studium mit Bravur meisterst
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1:1-Online-Nachhilfe, die auf dich zugeschnitten ist!
              </h3>
              <h4 className="text-lg font-medium text-gray-800 mb-3">Ärztliche Coaches</h4>
              <p className="text-gray-600">
                Approbierte Ärzt:innen mit aktueller Prüfungs- und Klinikroutine. Wir erklären an Befund, 
                Bild und Algorithmus. Ehrlich in der Einschätzung: Was muss sitzen, was reicht knapp, was kann weg.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Plan & Kontrolle
              </h3>
              <p className="text-gray-600">
                Wochenplan mit Abrufübungen und geplanten Wiederholungen. Kurze Check-Ins, sichtbare Meilensteine, 
                Anpassung bei Engpässen (Dienste, Blockpraktika). Fortschritt wird gemessen, nicht geschätzt.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Individuell & fokussiert
              </h3>
              <p className="text-gray-600">
                Kurzaufnahme → Ziele → passender Coach. Plan und Tempo nach Fach und Termin. 
                Klare Prioritäten: Pflichtstoff, Kernkompetenzen, Optionales – damit die wichtigen Punkte sicher sind.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Prüfungsplattform
              </h3>
              <p className="text-gray-600">
                Eigene Plattform mit IMPP-nahen Neufragen (nicht nur Altfragen), adaptiven Sets und Zeitmodus. 
                Auswertung nach Themen und Fehlerarten; die nächsten Aufgaben passen sich an deine Leistung an.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Prüfungslogik & Anwendung
              </h3>
              <p className="text-gray-600">
                Wir trainieren Entscheidungen, nicht nur Fakten: next best step, Ausschlusskriterien, typische Fallen. 
                Erst Herleitung, dann Aufgabe. Ergebnis: ruhige, reproduzierbare Schritte unter Zeitdruck.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Begleitung & Verlässlichkeit
              </h3>
              <p className="text-gray-600">
                Online 1:1 oder Kleingruppe. Feste Termine, schnelle Rückmeldungen zwischen den Sessions, 
                klar kuratiertes Material. Wir bleiben dran bis zur Prüfung — strukturiert, pragmatisch, zuverlässig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Methode
            </h2>
            <p className="text-xl text-gray-600">
              DER ULTIMA-RAT.IO VORTEIL
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Statt beim Altbewährten zu bleiben und verzweifelt seine letzte Energiereverse auszuschöpfen, 
              gehen wir deine Defizite strukturiert auf den Grund.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Unsere Coaches sind approbierte Ärzt:innen und sehr starke Medizinstudierende mit viel 
              Erfahrung im Tutoring. Wir arbeiten strukturiert, klar und prüfen wirksam – damit du dein 
              Potenzial für Physikum, M2 und M3 voll ausschöpfst.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Die Details zählen. Bei uns bekommst du zugewandte, professionelle Mentor:innen, die sich 
              auf Ergebnisse konzentrieren. Wir verbessern nicht nur deine nächste Prüfung, sondern richten 
              Systeme ein, die dich langfristig tragen: Retrieval Practice (Abrufen statt Nachlesen), 
              Spaced Repetition (geplante Wiederholung), Interleaving (Themen sinnvoll mischen), kurze 
              Check-Ups und ehrliches Feedback.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Unsere Studierenden bewerten uns hervorragend. Wenn du wissen möchtest, ob unser Ansatz zu dir passt, 
              frag uns einfach - wir antworten zeitnah und geradeheraus.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Angebot
            </h2>
            <p className="text-xl text-gray-600">
              Unsere Coaching-Fächer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ANATOMIE',
                description: 'Viele scheitern weniger am Wissen als an Orientierung: Verläufe, Ebenen, Innervation und Gefäßgebiete vermischen sich, Querschnitte wirken beliebig. Wir arbeiten jede Region nach einem festen Schema auf (Leitstruktur → Verlauf/Äste → Innervation/Versorgung → Landmarken im Schnitt/CT → typische Läsionsfolgen) und verknüpfen Makro mit Mikro. So werden Befunde, Bilder und Standardfragen vorhersagbar und reproduzierbar.'
              },
              {
                title: 'PHYSIOLOGIE',
                description: 'Regelkreise bleiben oft „Bild" ohne Mechanik; Kurven und Formeln werden auswendig gelernt, aber nicht hergeleitet. Wir bauen belastbare Modelle, leiten die Beziehungen sauber ab und wenden sie anschließend auf typische klinische Situationen an – Volumenmangel, obstruktiv vs. restriktiv, Säure-Base. Ziel ist ruhiges, nachvollziehbares Arbeiten unter Prüfungssituation.'
              },
              {
                title: 'PHYSIK',
                description: 'Das Kernproblem sind unklare Größen und Einheiten; in der Bildgebung fehlen Ankerpunkte. Wir etablieren eine feste Rechenroutine (Skizze → Größen/Einheiten → Grundgleichung → Umstellen → Einsetzen mit Einheitentest) und trainieren Standardaufgaben zu Optik/Linsenformel, Strömung (Bernoulli/Poiseuille), Dämpfung/Strahlung und Dosis. Ergebnis: belastbare Wege statt Formelsalat – auch unter Zeitdruck.'
              },
              {
                title: 'CHEMIE',
                description: 'Fehlende Schul-Chemie? Dann werden Stöchiometrie und pH schnell zu einem Problem. Wir starten bei null und führen dich durch eine einfache, wiederholbare Vorgehensweise: Größen klären, umstellen, einsetzen, Ergebnis prüfen. So funktionieren Stoffmenge, pH/Puffer und Gleichgewichte auch unter Zeitdruck – ohne Formelsalat.'
              },
              {
                title: 'BIOCHEMIE',
                description: 'Das Hauptproblem ist die Orientierung: viele Wege, keine Hierarchie, Klinikbezug fehlt. Wir reduzieren auf die Kernpfade und ihre Schaltstellen (z. B. Phosphofruktokinase, Pyruvatdehydrogenase, Carbamoylphosphat-Synthetase I) und klären jeweils: Was geht hinein? Was entsteht? Wer reguliert? Danach verknüpfen wir mit typischen Befunden. Beispiel: Ethanol ⇒ NADH↑ ⇒ Pyruvat → Laktat (Laktatazidose), Harnstoffzyklusdefekt ⇒ Ammoniak↑, Cholestase ⇒ Bilirubin↑, AP/GGT↑. So entsteht ein kleines Set an „Wenn-dann"-Ankern, mit dem du Labor, Symptome und Weg schnell zusammenbringst.'
              },
              {
                title: 'M2',
                description: 'Zu viel Breite, wenig Zeit. Viele verlieren sich zusätzlich in Details oder Perfektionismus und kommen dadurch nicht mehr voran. Wir setzen Prioritäten nach Leitsymptomen und Prüfungsgewicht: Was muss sicher sitzen, was reicht als Überblick. Geübt werden der nächstbeste Schritt, Ausschlusskriterien und sichere Falsifikatoren. Bei unbekannten Fragen trainieren wir eine strukturierte Entscheidung statt Raten – ein regelbasiertes Bauchgefühl. Zusätzlich verfügbar: interner Katalog IMPP-naher Neufragen mit realistischen Zeitvorgaben und Auswertung.'
              },
              {
                title: 'M3',
                description: 'Zeitdruck und fehlende Struktur sind das Hauptproblem. Wir simulieren die Prüfung in Echtzeit mit festem Ablauf: Anliegen/Red Flags → kurze, fokussierte Anamnese → gezielter Status → 30-Sekunden-Zusammenfassung → DD (Pro/Contra) → nächster Schritt. Du bekommst kurze Standardsätze und direktes Feedback – bis der Ablauf zuverlässig sitzt. Mit unserer Methode wirst du top auf das M3 vorbereitet sein.'
              }
            ].map((subject, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{subject.title}</h3>
                <p className="text-gray-700">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Wobei können wir dich unterstützen?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nicht sicher, womit du starten sollst? Schreib uns kurz dein Fach oder den Prüfungstermin. 
            Wir melden uns mit einer ehrlichen Einschätzung und einem konkreten Vorschlag – unverbindlich.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  )
}