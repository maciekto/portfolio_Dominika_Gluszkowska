// Polska typografia: jednoliterowe wyrazy (a, i, o, u, w, z) nie mogą zostawać na końcu linii.
// Po każdym takim wyrazie wstawiamy twardą spację (U+00A0), więc przechodzi do nowej linii
// razem z następnym słowem. Działa też dla angielskiego „a” i „I”.
//
// Krótkie teksty (tytuły, nazwy w menu) pomijamy: tam sklejenie „i” z długim słowem
// mogłoby wypchnąć je poza ekran telefonu, a wiszących spójników i tak nie ma.

const MIN_LENGTH = 40
const ORPHAN = /(?<=^|[\s\u00A0(„"«])([aiouwzAIOUWZ]) /g

export const fixOrphans = (text: string): string =>
  text.length < MIN_LENGTH ? text : text.replace(ORPHAN, '$1\u00A0')

/** Przechodzi rekurencyjnie po słowniku i poprawia każdy tekst. */
export const withTypography = <T>(value: T): T => {
  if (typeof value === 'string') return fixOrphans(value) as T
  if (Array.isArray(value)) return value.map(withTypography) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withTypography(v)])) as T
  }
  return value
}
