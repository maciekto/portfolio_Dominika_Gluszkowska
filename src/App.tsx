import { Navigate, Route, Routes } from 'react-router'
import { LangLayout } from './components/LangLayout'
import { HomePage } from './pages/HomePage'
import { CampaignPage } from './pages/CampaignPage'
import { EcommercePage } from './pages/EcommercePage'
import { BrandingPage } from './pages/BrandingPage'
import { AiPage } from './pages/AiPage'
import { NextPage } from './pages/NextPage'
import { detectLang } from './i18n/useLang'

function App() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-cognac selection:text-ivory">
      <Routes>
        <Route path="/" element={<Navigate to={`/${detectLang()}`} replace />} />
        <Route path=":lang" element={<LangLayout />}>
          <Route index element={<HomePage />} />
          <Route path="campaign" element={<CampaignPage />} />
          <Route path="ecommerce" element={<EcommercePage />} />
          <Route path="branding" element={<BrandingPage />} />
          <Route path="ai" element={<AiPage />} />
          <Route path="next" element={<NextPage />} />
          <Route path="*" element={<Navigate to=".." replace />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
