import React from 'react';
import {
  FaTruck,
  FaShippingFast,
  FaWarehouse,
  FaGlobeEurope,
} from 'react-icons/fa';

const Autodoprava = () => {
  const services = [
    {
      icon: <FaTruck />,
      title: 'Vnitrostátní doprava',
      description:
        'Spolehlivá přeprava zboží po celé České republice s flexibilními termíny a sledováním zásilek.',
      features: [
        'Expresní přeprava',
        'Pravidelné linky',
        'Částečné náklady',
        'Sledování zásilek online',
      ],
    },
    {
      icon: <FaGlobeEurope />,
      title: 'Mezinárodní doprava',
      description:
        'Profesionální přeprava zboží po celé Evropě s důrazem na bezpečnost a včasné doručení.',
      features: [
        'Přeprava do všech zemí EU',
        'Celní odbavení',
        'Mezinárodní dokumentace',
        'GPS sledování',
      ],
    },
    {
      icon: <FaShippingFast />,
      title: 'Kurýrní služby',
      description:
        'Rychlá a spolehlivá přeprava menších zásilek s možností expresního doručení.',
      features: [
        'Expresní doručení',
        'SMS notifikace',
        'Online sledování',
        'Flexibilní výběr termínu',
      ],
    },
    {
      icon: <FaWarehouse />,
      title: 'Skladové služby',
      description:
        'Moderní skladové prostory s možností krátkodobého i dlouhodobého skladování.',
      features: [
        'Klimatizované sklady',
        '24/7 zabezpečení',
        'Skladové hospodářství',
        'Příprava zásilek',
      ],
    },
  ];

  return (
    <div className="page-container">
      <div className="services-section">
        <h1>Autodoprava</h1>
        <p className="section-description">
          Poskytujeme komplexní služby v oblasti přepravy zboží. Naše flotila
          moderních vozidel a zkušený personál zajišťují spolehlivou a efektivní
          přepravu po celé České republice i Evropě.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="/kontakt" className="service-button">
                Kontaktujte nás
              </a>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <h2>Proč si vybrat naši autodopravu?</h2>
          <ul className="benefits-list">
            <li>Moderní flotila vozidel</li>
            <li>Zkušený tým řidičů</li>
            <li>GPS sledování zásilek</li>
            <li>Flexibilní ceník</li>
            <li>24/7 podpora</li>
            <li>Pojištění zásilek</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Autodoprava;
