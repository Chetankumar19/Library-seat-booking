function SearchPanel({
  startDate,
  onStartDateChange,
  termOptions,
  selectedTerm,
  onTermChange,
  onSearch,
  activeRangeLabel,
}) {
  return (
    <div className="panel seat-browser">
      <div className="panel-head">
        <div>
          <p className="section-label">Search</p>
          <h2>Check seat availability</h2>
        </div>
        <p className="range-label">{activeRangeLabel}</p>
      </div>

      <div className="search-controls">
        <label className="field">
          <span>Start date</span>
          <input
            type="date"
            value={startDate}
            onChange={(event) => onStartDateChange(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Duration</span>
          <select
            value={selectedTerm}
            onChange={(event) => onTermChange(event.target.value)}
          >
            {termOptions.map((term) => (
              <option key={term.value} value={term.value}>
                {term.label}
              </option>
            ))}
          </select>
        </label>

        <button type="button" className="primary-button search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchPanel
