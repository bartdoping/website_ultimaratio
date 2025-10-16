export default function AGBPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              AGB für ultima-rat.io
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 1 Geltungsbereich</h2>
            <p className="text-gray-700 mb-6">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen von ultima-rat.io, 
              insbesondere für Medizin-Nachhilfe, Coaching und Prüfungsvorbereitung.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 2 Leistungen</h2>
            <p className="text-gray-700 mb-6">
              ultima-rat.io bietet folgende Dienstleistungen an:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Einzelcoaching und Nachhilfe für Medizinstudierende</li>
              <li>Prüfungsvorbereitung für Physikum, M2, M3 und Kenntnisprüfung</li>
              <li>Online-Sessions via Zoom mit Screen-Sharing und Whiteboard</li>
              <li>Bereitstellung von Lernmaterialien und Protokollen</li>
              <li>Strukturierte Lernpläne und Feedback</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 3 Vertragsschluss</h2>
            <p className="text-gray-700 mb-6">
              Der Vertrag kommt durch die Buchung einer Coaching-Session zustande. Die Buchung erfolgt über 
              WhatsApp oder per E-Mail. Eine Bestätigung der Buchung durch ultima-rat.io ist erforderlich.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 4 Preise und Zahlungsbedingungen</h2>
            <p className="text-gray-700 mb-6">
              Die Preise für unsere Dienstleistungen sind auf der Website angegeben. Alle Preise verstehen sich 
              in Euro und inklusive der gesetzlichen Mehrwertsteuer, soweit anwendbar.
            </p>
            <p className="text-gray-700 mb-6">
              Die Zahlung erfolgt nach der erbrachten Leistung. Wir senden Ihnen eine Rechnung per E-Mail zu, 
              die innerhalb von 14 Tagen zu begleichen ist. Zahlungsmöglichkeiten sind Überweisung oder PayPal.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 5 Durchführung der Dienstleistungen</h2>
            <p className="text-gray-700 mb-6">
              Die Coaching-Sessions finden online über Zoom statt. Der Teilnehmer erhält einen Link zur 
              Session und kann mit Screen-Sharing und Whiteboard arbeiten. Nach der Session erhält der 
              Teilnehmer ein Protokoll und weiteres Material per E-Mail.
            </p>
            <p className="text-gray-700 mb-6">
              Der Teilnehmer ist verpflichtet, pünktlich zur vereinbarten Zeit an der Session teilzunehmen. 
              Bei Verspätung von mehr als 15 Minuten kann die Session als nicht wahrgenommen gelten.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 6 Stornierung und Umbuchung</h2>
            <p className="text-gray-700 mb-6">
              Stornierungen müssen mindestens 24 Stunden vor dem vereinbarten Termin erfolgen. Bei kurzfristigeren 
              Stornierungen behalten wir uns vor, 50% der vereinbarten Gebühr zu berechnen.
            </p>
            <p className="text-gray-700 mb-6">
              Umbuchungen sind bis 24 Stunden vor dem Termin kostenfrei möglich, sofern ein alternativer Termin 
              verfügbar ist.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 7 Haftung</h2>
            <p className="text-gray-700 mb-6">
              Wir haften nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. Die Haftung für 
              leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht zwingende gesetzliche Haftungsbestimmungen 
              entgegenstehen.
            </p>
            <p className="text-gray-700 mb-6">
              Wir übernehmen keine Gewähr für den Erfolg der Prüfungen oder Examina. Unsere Dienstleistungen 
              dienen der Unterstützung und Vorbereitung, können aber keine Garantie für das Bestehen geben.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 8 Datenschutz</h2>
            <p className="text-gray-700 mb-6">
              Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt in Übereinstimmung mit der 
              Datenschutz-Grundverordnung (DSGVO) und unserer Datenschutzerklärung.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 9 Vertraulichkeit</h2>
            <p className="text-gray-700 mb-6">
              Alle im Rahmen der Coaching-Sessions besprochenen Inhalte werden vertraulich behandelt. Wir verpflichten 
              uns, keine Informationen an Dritte weiterzugeben.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 10 Schlussbestimmungen</h2>
            <p className="text-gray-700 mb-6">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der 
              übrigen Bestimmungen unberührt.
            </p>
            <p className="text-gray-700 mb-6">
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Hannover.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 11 Kontakt</h2>
            <p className="text-gray-700 mb-6">
              Bei Fragen zu diesen AGB wenden Sie sich bitte an:
            </p>
            <p className="text-gray-700 mb-6">
              ultima-rat.io<br />
              Warburghof 14<br />
              30672 Hannover<br />
              Deutschland<br />
              E-Mail: info@ultima-rat.io<br />
              Telefon: +49 163 9347633
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                <strong>Stand:</strong> Januar 2025<br />
                <strong>Gültig ab:</strong> 01.01.2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
