const words = ['Snow', 'Walnut', 'Green Room', 'Garden', 'Still Life', 'Portraits', 'E-commerce', 'Branding']

export const Marquee = () => (
  <div className="bg-espresso text-ivory overflow-hidden py-4 md:py-6" aria-hidden>
    <div className="flex w-max animate-marquee">
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0">
          {words.map((w) => (
            <span key={w} className="font-luxury uppercase text-4xl md:text-6xl px-6 md:px-10 flex items-center gap-12 md:gap-20">
              {w}
              <span className="inline-block w-2 h-2 rounded-full bg-cognac" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
)
