function CountryCard({ country, onClick, onFavorite, isFavorite }) {
    return (
      <div className="country-card" onClick={onClick}>
        <img src={country.flags.png} alt="flag" />
  
        <div className="card-body">
          <h3>{country.name.common}</h3>
          <p>👥 {country.population.toLocaleString()}</p>
          <p>🌍 {country.region}</p>
        </div>
  
        <button
          className={`fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); // ❗ กัน modal เปิด
            onFavorite();
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    );
  }
  
  export default CountryCard;