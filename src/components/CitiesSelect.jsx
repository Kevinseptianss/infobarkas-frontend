/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/CitySelect.css';

// Sample list of cities in Indonesia
const cities = [
    { value: 'jakarta', label: 'Jakarta' },
    { value: 'bandung', label: 'Bandung' },
    { value: 'surabaya', label: 'Surabaya' },
    { value: 'medan', label: 'Medan' },
    { value: 'semarang', label: 'Semarang' },
    { value: 'yogyakarta', label: 'Yogyakarta' },
    { value: 'bali', label: 'Bali' },
    { value: 'makassar', label: 'Makassar' },
    { value: 'palembang', label: 'Palembang' },
    { value: 'batam', label: 'Batam' },
    { value: 'denpasar', label: 'Denpasar' },
    { value: 'tangerang', label: 'Tangerang' },
    { value: 'bekasi', label: 'Bekasi' },
    { value: 'depok', label: 'Depok' },
    { value: 'bandar lampung', label: 'Bandar Lampung' },
    { value: 'pontianak', label: 'Pontianak' },
    { value: 'palangkaraya', label: 'Palangkaraya' },
    { value: 'banjarmasin', label: 'Banjarmasin' },
    { value: 'samarinda', label: 'Samarinda' },
    { value: 'manado', label: 'Manado' },
    { value: 'ambon', label: 'Ambon' },
    { value: 'kupang', label: 'Kupang' },
    { value: 'jambi', label: 'Jambi' },
    { value: 'cirebon', label: 'Cirebon' },
    { value: 'tangerang selatan', label: 'Tangerang Selatan' },
    { value: 'sukabumi', label: 'Sukabumi' },
    { value: 'cimahi', label: 'Cimahi' },
    { value: 'mataram', label: 'Mataram' },
    { value: 'bontang', label: 'Bontang' },
    { value: 'bitung', label: 'Bitung' },
    { value: 'palu', label: 'Palu' },
    { value: 'gorontalo', label: 'Gorontalo' },
    { value: 'tual', label: 'Tual' },
    { value: 'sorong', label: 'Sorong' },
    { value: 'jayapura', label: 'Jayapura' },
    { value: 'kendari', label: 'Kendari' },
    { value: 'bima', label: 'Bima' },
    { value: 'sukoharjo', label: 'Sukoharjo' },
    { value: 'tulungagung', label: 'Tulungagung' },
    { value: 'blitar', label: 'Blitar' },
    { value: 'malang', label: 'Malang' },
    { value: 'nganjuk', label: 'Nganjuk' },
    { value: 'tuban', label: 'Tuban' },
    { value: 'pasuruan', label: 'Pasuruan' },
    { value: 'probolinggo', label: 'Probolinggo' },
    { value: 'banyuwangi', label: 'Banyuwangi' },
    { value: 'jember', label: 'Jember' },
    { value: 'lumajang', label: 'Lumajang' },
    { value: 'sidoarjo', label: 'Sidoarjo' },
    { value: 'mojokerto', label: 'Mojokerto' },
    // Add more cities as needed
  ];

const CitySelect = ({ onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const filteredCities = cities.filter(city =>
    city.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    onCitySelect(city); // Call the parent function to handle the selected city
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="form-group">
      <label>Pilih Kota</label>
      <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
        <div className="selected-value">
          {selectedCity ? selectedCity.label : 'Pilih Kota'}
        </div>
        {isOpen && (
          <div className="dropdown">
            <input
              type="text"
              placeholder="Cari kota..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()} // Prevent click from closing the dropdown
            />
            <div className="options">
              {filteredCities.length > 0 ? (
                filteredCities.map(city => (
                  <div
                    key={city.value}
                    className="option"
                    onClick={() => handleCitySelect(city)}
                  >
                    {city.label}
                  </div>
                ))
              ) : (
                <div className="no-options">No cities found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitySelect;