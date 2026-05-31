/**
 * Rendert ein schema.org JSON-LD <script>-Tag (serverseitig).
 * Reines Markup, keine Client-Logik.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify ist sicher: keine HTML-Injektion aus statischen Daten
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
