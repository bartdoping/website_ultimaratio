export default function WiderrufPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Widerrufsbelehrung
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Informationen zu Ihrem Widerrufsrecht
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Widerrufsrecht für Verbraucher</h2>
            <p className="text-gray-700 mb-6">
              <em>
                Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend 
                weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.
              </em>
            </p>
            <p className="text-gray-700 mb-6">
              Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist 
              beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p className="text-gray-700 mb-6">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Thavarajasingam, Ahkash; Eid, Mustafa Magdy Abdel Razik 
              Mahmoud GbR, Warburghof, 14, 30627 Hannover, Telefon: +49 163 9347633, E-Mail: info@ultima-rat.io) mittels 
              einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, 
              diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, 
              das jedoch nicht vorgeschrieben ist.
            </p>
            <p className="text-gray-700 mb-6">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts 
              vor Ablauf der Widerrufsfrist absenden.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Folgen des Widerrufs</h2>
            <p className="text-gray-700 mb-6">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, 
              einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie 
              eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), 
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über 
              Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe 
              Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde 
              ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
            </p>
            <p className="text-gray-700 mb-6">
              Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen 
              angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des 
              Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich 
              zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Muster-Widerrufsformular</h2>
            <p className="text-gray-700 mb-6">
              Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4"><strong>An</strong></p>
              <p className="text-gray-700 mb-4">
                Thavarajasingam, Ahkash; Eid, Mustafa Magdy Abdel Razik Mahmoud GbR<br />
                Warburghof, 14<br />
                30627 Hannover<br />
                E-Mail: info@ultima-rat.io
              </p>
              
              <p className="text-gray-700 mb-4">
                Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden 
                Dienstleistung (Bezeichnung, ggf. Bestellnummer und Preis):
              </p>
              
              <div className="border-b border-gray-300 mb-4 pb-2">
                <p className="text-gray-500">..............................................................................</p>
                <p className="text-gray-500">..............................................................................</p>
              </div>
              
              <p className="text-gray-700 mb-2">Bestellt am (Datum):</p>
              <div className="border-b border-gray-300 mb-4 pb-2">
                <p className="text-gray-500">.............................</p>
              </div>
              
              <p className="text-gray-700 mb-2">Erhalten am (Datum):</p>
              <div className="border-b border-gray-300 mb-4 pb-2">
                <p className="text-gray-500">.............................</p>
              </div>
              
              <p className="text-gray-700 mb-2">Name und Anschrift des Verbrauchers:</p>
              <div className="border-b border-gray-300 mb-4 pb-2">
                <p className="text-gray-500">.............................</p>
                <p className="text-gray-500">.............................</p>
                <p className="text-gray-500">.............................</p>
                <p className="text-gray-500">.............................</p>
              </div>
              
              <p className="text-gray-700 mb-2">Datum:</p>
              <div className="border-b border-gray-300 mb-4 pb-2">
                <p className="text-gray-500">....................................................</p>
              </div>
              
              <p className="text-gray-700 mb-2">Unterschrift Kunde (nur bei schriftlichem Widerruf):</p>
              <div className="border-b border-gray-300 mb-4 pb-2">
                <p className="text-gray-500">....................................................</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}