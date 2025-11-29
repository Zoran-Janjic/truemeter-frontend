'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Language, translations, TranslationKey } from '@/lib/translations';
import { CarInput, FraudCheckResponse, checkCarFraud } from '@/lib/api';

export default function Home() {
  const [formData, setFormData] = useState<CarInput>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    reported_km: 0,
    fuelType: 'Diesel',
    gearbox: 'Manual',
    horsepower: 0,
    price: 0,
    offerType: 'Used'
  });
  const [result, setResult] = useState<FraudCheckResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t: TranslationKey = translations['bs'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await checkCarFraud(formData);
      setResult(response);
    } catch (err) {
      setError(t.errors.generic);
      console.error('Error checking car:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ['year', 'reported_km', 'horsepower', 'price'].includes(name) 
        ? Number(value) 
        : value
    }));
  };

  const resetForm = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-md shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {t.title}
                </h1>
                <p className="text-sm text-slate-300 mt-1">{t.subtitle}</p>
              </div>
              <nav className="flex gap-4 ml-8">
                <Link href="/" className="text-blue-400 font-semibold hover:text-violet-400 transition-colors">
                  {t.nav.home}
                </Link>
                <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors">
                  {t.nav.about}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!result ? (
          /* Form */
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Make and Model */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.make} *
                  </label>
                  <input
                    type="text"
                    name="make"
                    required
                    value={formData.make}
                    onChange={handleInputChange}
                    placeholder={t.form.makePlaceholder}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-slate-400 bg-slate-700 backdrop-blur-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.model} *
                  </label>
                  <input
                    type="text"
                    name="model"
                    required
                    value={formData.model}
                    onChange={handleInputChange}
                    placeholder={t.form.modelPlaceholder}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-slate-400 bg-slate-700 backdrop-blur-sm transition-all"
                  />
                </div>
              </div>

              {/* Year and Mileage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.year} *
                  </label>
                  <input
                    type="number"
                    name="year"
                    required
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    value={formData.year}
                    onChange={handleInputChange}
                    placeholder={t.form.yearPlaceholder}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-slate-400 bg-slate-700 backdrop-blur-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.reportedKm} (km) *
                  </label>
                  <input
                    type="number"
                    name="reported_km"
                    required
                    min="0"
                    value={formData.reported_km}
                    onChange={handleInputChange}
                    placeholder={t.form.kmPlaceholder}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-slate-400 bg-slate-700 backdrop-blur-sm transition-all"
                  />
                </div>
              </div>

              {/* Fuel Type and Gearbox */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.fuelType} *
                  </label>
                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white bg-slate-700 backdrop-blur-sm transition-all"
                  >
                    <option value="Petrol">{t.form.fuelTypes.petrol}</option>
                    <option value="Diesel">{t.form.fuelTypes.diesel}</option>
                    <option value="Electric">{t.form.fuelTypes.electric}</option>
                    <option value="Hybrid">{t.form.fuelTypes.hybrid}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.gearbox} *
                  </label>
                  <select
                    name="gearbox"
                    value={formData.gearbox}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white bg-slate-700 backdrop-blur-sm transition-all"
                  >
                    <option value="Manual">{t.form.gearboxTypes.manual}</option>
                    <option value="Automatic">{t.form.gearboxTypes.automatic}</option>
                  </select>
                </div>
              </div>

              {/* Horsepower and Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.horsepower} (HP) *
                  </label>
                  <input
                    type="number"
                    name="horsepower"
                    required
                    min="0"
                    value={formData.horsepower}
                    onChange={handleInputChange}
                    placeholder={t.form.horsepowerPlaceholder}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-slate-400 bg-slate-700 backdrop-blur-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.form.price} (€) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    min="0"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder={t.form.pricePlaceholder}
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-slate-400 bg-slate-700 backdrop-blur-sm transition-all"
                  />
                </div>
              </div>

              {/* Offer Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t.form.offerType} *
                </label>
                <select
                  name="offerType"
                  value={formData.offerType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white bg-slate-700 backdrop-blur-sm transition-all"
                >
                  <option value="Used">{t.form.offerTypes.used}</option>
                  <option value="New">{t.form.offerTypes.new}</option>
                </select>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <p className="font-medium">{t.errors.title}</p>
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
              >
                {loading ? t.form.checking : t.form.check}
              </button>
            </form>
          </div>
        ) : (
          /* Results */
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-6">{t.results.title}</h2>
            
            {/* Car Info */}
            <div className="bg-slate-800/80 rounded-lg p-4 mb-6 border border-purple-500/20">
              <p className="text-lg font-semibold text-slate-200">
                {formData.make} {formData.model} ({formData.year})
              </p>
              <p className="text-sm text-slate-400">
                {formData.reported_km.toLocaleString()} km • {formData.horsepower} HP • €{formData.price.toLocaleString()}
              </p>
            </div>

            {/* Fraud Score */}
            <div className={`rounded-2xl p-6 mb-6 ${
              result.is_suspicious 
                ? 'bg-rose-900/50 border-2 border-rose-500/50' 
                : 'bg-emerald-900/50 border-2 border-emerald-500/50'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-slate-300">{t.results.fraudScore}:</span>
                <span className={`text-4xl font-bold ${
                  result.is_suspicious ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {result.fraud_score}%
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all ${
                    result.is_suspicious ? 'bg-gradient-to-r from-rose-400 to-rose-500' : 'bg-gradient-to-r from-emerald-400 to-emerald-500'
                  }`}
                  style={{ width: `${result.fraud_score}%` }}
                />
              </div>
              <p className={`mt-3 text-center font-semibold ${
                result.is_suspicious ? 'text-rose-300' : 'text-emerald-300'
              }`}>
                {result.is_suspicious ? t.results.suspicious : t.results.notSuspicious}
              </p>
            </div>

            {/* Expected Mileage */}
            <div className="bg-slate-700/50 rounded-xl p-4 mb-6 border border-slate-700">
              <p className="text-sm text-slate-400">{t.results.expectedKm}:</p>
              <p className="text-2xl font-bold text-slate-200">
                {result.expected_km.toLocaleString()} km
              </p>
            </div>

            {/* Reasons */}
            {result.reasons.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">{t.results.reasons}:</h3>
                <ul className="space-y-2">
                  {result.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-rose-400 mt-1">⚠️</span>
                      <span className="text-slate-300">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Check Another Button */}
            <button
              onClick={resetForm}
              className="w-full bg-slate-700 text-slate-200 font-semibold py-3 px-6 rounded-xl hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all shadow-sm hover:shadow-md"
            >
              {t.results.checkAnother}
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800/80 backdrop-blur-md border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-300">
            {t.footer.madeBy}{' '}
            <a 
              href="https://www.linkedin.com/in/janjiczoran/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-blue-400 hover:text-violet-400 hover:underline transition-colors"
            >
              Zoran Janjić
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
