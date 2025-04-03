import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaTools, FaHardHat, FaWrench, FaLeaf } from 'react-icons/fa';

const VsechnySluzby = () => {
  const services = [
    {
      id: 1,
      title: 'Kontejnerová doprava',
      description:
        'Profesionální odvoz odpadu a stavebního materiálu kontejnery různých velikostí.',
      icon: <FaTruck size={40} />,
      path: '/sluzby/kontejnerova-doprava',
    },
    {
      id: 2,
      title: 'Zemní a výkopové práce',
      description:
        'Kompletní realizace zemních prací a výkopů pro stavební projekty.',
      icon: <FaTools size={40} />,
      path: '/sluzby/zemni-prace',
    },
    {
      id: 3,
      title: 'Stavební práce',
      description: 'Kvalitní stavební práce od základů až po dokončení stavby.',
      icon: <FaHardHat size={40} />,
      path: '/sluzby/stavebni-prace',
    },
    {
      id: 4,
      title: 'Stolařství',
      description: 'Zakázková výroba a montáž dřevěných konstrukcí a nábytku.',
      icon: <FaWrench size={40} />,
      path: '/sluzby/stolarstvi',
    },
    {
      id: 5,
      title: 'Údržba zeleně',
      description: 'Profesionální péče o zeleň, sečení trávy a úprava zahrad.',
      icon: <FaLeaf size={40} />,
      path: '/sluzby/udrzba-zelene',
    },
  ];

  return (
    <div className="page-container">
      <h1>Všechny služby</h1>
      <div className="services-overview-grid">
        {services.map((service) => (
          <Link to={service.path} key={service.id} className="service-card">
            <div className="service-card-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VsechnySluzby;
