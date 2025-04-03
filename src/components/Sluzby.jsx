import React from 'react';

const Sluzby = () => {
  const services = [
    {
      title: 'Zemní a výkopové práce',
      description:
        'Profesionální zemní práce, výkopy základů, terénní úpravy a příprava stavebních ploch s moderní technikou.',
      icon: '🚜',
    },
    {
      title: 'Tesařské práce',
      description:
        'Kvalitní tesařské práce včetně konstrukcí střech, dřevostaveb a dalších dřevěných konstrukcí.',
      icon: '🔨',
    },
    {
      title: 'Stavební práce',
      description:
        'Kompletní stavební služby od základů až po střechu, rekonstrukce a modernizace objektů.',
      icon: '🏗️',
    },
    {
      title: 'Údržba zeleně',
      description:
        'Profesionální péče o trávníky, sekání trávy a kompletní údržba zelených ploch.',
      icon: '🌿',
    },
  ];

  return (
    <div className="page-container services-page">
      <h1>Naše služby</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sluzby;
