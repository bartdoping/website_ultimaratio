import { User, GraduationCap, Heart, BookOpen, Award } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unser Team
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Erfahrene Ärzt:innen und Tutoren, die dich auf deinem Weg zum Erfolg begleiten
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mustafa Eid */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Mustafa Eid</h2>
                  <p className="text-blue-600 font-medium">Facharztausbildung Radiologie</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Mustafa hat an der Medizinischen Hochschule Hannover studiert und befindet sich derzeit in der 
                  Facharztausbildung für Radiologie. Schon während seines Studiums hat er über mehrere Semester 
                  hinweg studentische Lerngruppen betreut und Medizinstudierende gezielt auf Prüfungen vorbereitet – 
                  mit einem besonderen Fokus auf Struktur, Verständnis und prüfungsrelevante Inhalte.
                </p>

                <p className="text-gray-700">
                  Bei ultima-rat.io bringt er genau diese Stärke ein: Durch seine didaktische Erfahrung und sein 
                  medizinisches Fachwissen hilft er Studierende, komplexe Themen systematisch zu durchdringen und 
                  sich effizient auf Staatsexamina vorzubereiten. Ob im Gruppenunterricht oder im Einzelcoaching – 
                  Mustafa überzeugt mit einem klaren roten Faden, einem Blick für das Wesentliche und einer ruhigen, 
                  motivierenden Art.
                </p>

                <p className="text-gray-700">
                  Seine klinische Tätigkeit in der Radiologie ergänzt seinen Unterricht durch praxisnahe Einblicke, 
                  und seine kontinuierliche Weiterbildung sorgt dafür, dass seine Lehrinhalte stets aktuell und 
                  relevant bleiben.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                  Medizinische Hochschule Hannover
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2 text-blue-600" />
                  Facharztausbildung Radiologie
                </div>
              </div>
            </div>

            {/* Ahkash Thavarajasingam */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <User className="w-12 h-12 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Ahkash Thavarajasingam</h2>
                  <p className="text-green-600 font-medium">Approbierter Arzt</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Ahkash ist approbierter Arzt und bringt nicht nur ein ausgeprägtes klinisches Interesse mit, 
                  sondern auch wertvolle didaktische Erfahrung. Bereits während seines Studiums hat er über Jahre 
                  hinweg andere Medizinstudierende unterstützt, mit einem klaren Fokus auf strukturierte Prüfungsvorbereitung, 
                  verständliche Erklärungen und das Erarbeiten eines roten Fadens in komplexen Fächern.
                </p>

                <p className="text-gray-700">
                  Bei ultima-rat.io setzt Ahkash genau diese Stärke ein: Er weiß, wo Studierende typischerweise 
                  Schwierigkeiten haben – und wie man Inhalte so aufbereitet, dass sie im Examen nicht nur abrufbar, 
                  sondern wirklich verstanden sind. Ob mündliche Prüfung oder schriftlicher Multiple-Choice-Test – 
                  Ahkash vermittelt medizinische Inhalte kompakt, logisch und prüfungsrelevant.
                </p>

                <p className="text-gray-700">
                  Sein besonderes Interesse an der Neurochirurgie und seine Begeisterung für akademisches Arbeiten 
                  spiegeln sich auch in seiner Mitarbeit an mehreren Forschungsprojekten wider. Gleichzeitig bleibt 
                  er in der Lehre bodenständig, zugewandt und klar in der Kommunikation – Eigenschaften, die von 
                  unseren Kursteilnehmer:innen besonders geschätzt werden.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2 text-green-600" />
                  Approbierter Arzt
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 mr-2 text-green-600" />
                  Forschung & Lehre
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Heart className="w-4 h-4 mr-2 text-green-600" />
                  Neurochirurgie
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600">
              Was uns als Team ausmacht
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expertise
              </h3>
              <p className="text-gray-600">
                Alle unsere Coaches sind approbierte Ärzt:innen oder erfahrene Medizinstudierende mit 
                nachgewiesener Expertise in der Lehre und Prüfungsvorbereitung.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Leidenschaft
              </h3>
              <p className="text-gray-600">
                Wir lieben es, Medizinstudierenden zu helfen und sie auf ihrem Weg zum Erfolg zu begleiten. 
                Unsere Leidenschaft für die Lehre zeigt sich in jedem Coaching.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Struktur
              </h3>
              <p className="text-gray-600">
                Wir arbeiten mit bewährten Methoden und klaren Strukturen, die nachweislich zu besseren 
                Lernergebnissen führen. Systeme bringen Ergebnisse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lerne unser Team kennen
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Möchtest du mehr über unsere Coaches erfahren oder direkt mit einem von ihnen sprechen? 
            Kontaktiere uns für ein unverbindliches Gespräch.
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
