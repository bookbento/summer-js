import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import CountryCard from './components/CountryCard';
import SearchBar from './components/SearchBar';
import './App.css';

const API = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,languages';

function App() {
  const { data: countries, loading, error } = useFetch(API);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCountry, setSelectedCountry] = useState(null);

  // ✅ โหลด favorite จาก localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ save favorite
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const toggleFavorite = (country) => {
    setFavorites(prev =>
      prev.some(f => f.name.common === country.name.common)
        ? prev.filter(f => f.name.common !== country.name.common)
        : [...prev, country]
    );
  };

  const filtered = (countries || [])
    .filter(c =>
      c.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === 'All' || c.region === selectedRegion)
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.common.localeCompare(b.name.common);
      if (sortBy === 'population') return b.population - a.population;
      return 0;
    });

  const regionCounts = regions.reduce((acc, r) => {
    acc[r] = r === 'All'
      ? (countries?.length || 0)
      : (countries || []).filter(c => c.region === r).length;
    return acc;
  }, {});

  // ✅ Skeleton loading
  if (loading) {
    return (
      <div className="country-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="skeleton-card"></div>
        ))}
      </div>
    );
  }

  if (error) return <div className="error">เกิดข้อผิดพลาด: {error}</div>;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Explore Countries</h1>
      </header>

      <section className="controls-section">
        <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />

        <div className="filter-group">
          {regions.map(r => (
            <button
              key={r}
              className={`filter-btn ${selectedRegion === r ? 'active' : ''}`}
              onClick={() => setSelectedRegion(r)}
            >
              {r} <span className="badge">{regionCounts[r]}</span>
            </button>
          ))}
        </div>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">ชื่อประเทศ</option>
          <option value="population">จำนวนประชากร</option>
        </select>
      </section>

      <div className="stats-bar">
        <p>แสดง <strong>{filtered.length}</strong> จาก {countries.length} ประเทศ</p>
      </div>

      <main className="country-grid">
        {filtered.length > 0 ? (
          filtered.map(c => (
            <CountryCard
              key={c.name.common}
              country={c}
              onClick={() => setSelectedCountry(c)}
              onFavorite={() => toggleFavorite(c)}
              isFavorite={favorites.some(f => f.name.common === c.name.common)}
            />
          ))
        ) : (
          <p className="no-results">ไม่พบข้อมูลประเทศที่ค้นหา</p>
        )}
      </main>

      {/* ✅ Modal */}
      {selectedCountry && (
        <div className="modal" onClick={() => setSelectedCountry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCountry(null)}>✕</button>

            <h2>{selectedCountry.name.common}</h2>
            <img src={selectedCountry.flags.png} alt="flag" />

            <p><strong>Capital:</strong> {selectedCountry.capital?.[0]}</p>
            <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {selectedCountry.region}</p>

            <p>
              <strong>Languages:</strong>{' '}
              {selectedCountry.languages
                ? Object.values(selectedCountry.languages).join(', ')
                : '-'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;