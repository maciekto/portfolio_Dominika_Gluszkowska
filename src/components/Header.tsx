const links = [
  { href: '#campaign', label: 'Campaign' },
  { href: '#ecommerce', label: 'E-commerce' },
  { href: '#branding', label: 'Branding' },
]

export const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-white">
    <nav className="flex items-center justify-between px-5 md:px-10 py-5 text-[10px] md:text-xs uppercase tracking-[0.3em]">
      <a href="#top" className="font-luxury text-2xl md:text-3xl tracking-normal leading-none">DG</a>
      <ul className="flex gap-4 md:gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:opacity-60 transition-opacity">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
