'use client';

import Link from 'next/link';
import { translations, TranslationKey } from '@/lib/translations';

export default function About() {
  const t: TranslationKey = translations['bs'];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-md shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                TrueMeter
              </Link>
              <nav className="flex gap-4">
                <Link href="/" className="text-blue-400 hover:text-slate-400 transition-colors">
                  {t.nav.home}
                </Link>
                <Link href="/about" className="text-slate-400 font-semibold">
                  {t.nav.about}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-8 border border-slate-700">
          <h1 className="text-4xl font-bold text-slate-200 mb-3">{t.about.title}</h1>
          <p className="text-xl text-slate-400 mb-8">{t.about.subtitle}</p>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">{t.about.howItWorks.title}</h2>
            <p className="text-slate-300 mb-6">{t.about.howItWorks.intro}</p>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">
                    {t.about.howItWorks.step1.title}
                  </h3>
                  <p className="text-slate-300">{t.about.howItWorks.step1.description}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">
                    {t.about.howItWorks.step2.title}
                  </h3>
                  <p className="text-slate-300">{t.about.howItWorks.step2.description}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">
                    {t.about.howItWorks.step3.title}
                  </h3>
                  <p className="text-slate-300">{t.about.howItWorks.step3.description}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Dataset Section */}
          <section className="mb-12 bg-slate-700/50 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">{t.about.dataset.title}</h2>
            <p className="text-slate-300 mb-4">{t.about.dataset.description}</p>
            
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-purple-500/20">
              <h3 className="font-semibold text-slate-200 mb-3">{t.about.dataset.features.title}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span className="text-slate-300">{t.about.dataset.features.item1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span className="text-slate-300">{t.about.dataset.features.item2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span className="text-slate-300">{t.about.dataset.features.item3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span className="text-slate-300">{t.about.dataset.features.item4}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span className="text-slate-300">{t.about.dataset.features.item5}</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-300 font-medium">{t.about.dataset.source}:</span>
              <a 
                href="https://www.kaggle.com/datasets/ander289386/cars-germany?resource=download"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-violet-400 underline font-medium transition-colors"
              >
                {t.about.dataset.kaggleLink} →
              </a>
            </div>
          </section>

          {/* Technology Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">{t.about.technology.title}</h2>
            <p className="text-slate-300 mb-6">{t.about.technology.description}</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-xl p-5 border border-slate-700 shadow-sm">
                <h3 className="font-semibold text-slate-200 mb-2">{t.about.technology.ai.title}</h3>
                <p className="text-slate-300 text-sm">{t.about.technology.ai.description}</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 rounded-xl p-5 border border-emerald-500/30 shadow-sm">
                <h3 className="font-semibold text-emerald-100 mb-2">{t.about.technology.analysis.title}</h3>
                <p className="text-emerald-200 text-sm">{t.about.technology.analysis.description}</p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/50 to-amber-800/50 rounded-xl p-5 border border-amber-500/30 shadow-sm">
                <h3 className="font-semibold text-amber-100 mb-2">{t.about.technology.rules.title}</h3>
                <p className="text-amber-200 text-sm">{t.about.technology.rules.description}</p>
              </div>
            </div>
          </section>

          {/* Limitations Section */}
          <section className="bg-amber-900/30 border-l-4 border-amber-500 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-4">{t.about.limitations.title}</h2>
            <p className="text-amber-200 mb-4">{t.about.limitations.description}</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">⚠</span>
                <span className="text-amber-200">{t.about.limitations.item1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">⚠</span>
                <span className="text-amber-200">{t.about.limitations.item2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">⚠</span>
                <span className="text-amber-200">{t.about.limitations.item3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">⚠</span>
                <span className="text-amber-200">{t.about.limitations.item4}</span>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
          >
            {t.nav.home} →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800/80 backdrop-blur-md text-white py-8 mt-16 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300">
            {t.footer.madeBy}{' '}
            <a
              href="https://www.linkedin.com/in/janjiczoran/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-violet-400 transition-colors"
            >
              Zoran Janjić
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
