import { Hero } from './sections/Hero';
import { MockupShowcase } from './sections/MockupShowcase';
import { FashionGrid } from './sections/FashionGrid';
import { Branding } from './sections/Branding';

function App() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] overflow-hidden selection:bg-black selection:text-white">
      
      <Hero />
      
      <MockupShowcase />
      
      <FashionGrid />
      
      <Branding />

      {/* Prosty Footer */}
      <footer className="bg-black text-white py-20 text-center">
        <h2 className="font-luxury text-4xl mb-6">Let's work together</h2>
        <a href="mailto:kontakt@example.com" className="text-gray-400 hover:text-white transition-colors">
          dominika.gluszkowska@portfolio.com
        </a>
        <p className="text-xs text-gray-600 mt-10">© 2024 Design by Dominika Głuszkowska</p>
      </footer>
      
    </main>
  );
}

export default App;