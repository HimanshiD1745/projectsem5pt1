// Business.jsx
import React from 'react';
import './Business.css';

export default function Business() {
  const businesses = [
    {
      id: 1,
      title: 'JSB Logistics',
      description: 'Trading, freight forwarding and customs clearance',
      image: 'https://www.istockphoto.com/photo/stack-of-blue-container-boxes-with-sky-background-cargo-freight-shipping-for-import-gm1406705759-458161476?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner-popular_media&utm_term=cargo',
      hasButton: false
    },
    {
      id: 2,
      title: 'DVEX (NVOCC – Dubai)',
      description: 'NVOCC services ensuring global trade connectivity',
      image: 'https://pixabay.com/photos/jeans-denim-blue-seam-material-9724673/',
      hasButton: false
    },
    {
      id: 3,
      title: 'RJ Enterprise',
      description: 'Expanding into FMCG with mineral water and bakery products',
      image: 'https://pixabay.com/photos/container-van-export-travel-cargo-2568197/',
      hasButton: false
    },
    {
      id: 4,
      title: 'JSB Farms',
      description: 'A wellness-focused venture providing natural and holistic lifestyle solutions',
      image: 'https://pixabay.com/photos/colorful-container-van-cargo-wharf-2567060/',
      hasButton: true
    }
  ];

  return (
    <section className="business-section">
      <div className="business-container">
        <h2 className="business-heading">OUR BUSINESS</h2>
        
        <div className="business-grid">
          {businesses.map((business) => (
            <div key={business.id} className="business-card">
              <div 
                className="business-card-image"
                style={{ backgroundImage: `url(${business.image})` }}
              >
                <div className="business-card-overlay"></div>
                <div className="business-card-content">
                  <h3 className="business-card-title">{business.title}</h3>
                  <p className="business-card-description">{business.description}</p>
                  
                  {business.hasButton && (
                    <div className="business-card-actions">
                      <button className="business-card-button">Know more</button>
                      <button className="business-card-icon-button">
                        <span className="arrow-icon">→</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}