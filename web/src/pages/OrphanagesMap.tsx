import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import '../styles/pages/orphanage-map.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from '../utils/mapIcon'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Londrina</strong>
          <span>PR</span>
        </footer>
      </aside>

      <div>
        <Map
          center={[-23.3146145, -50.0701201]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-23.3064522, -50.0769559]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              Lar das meninas
              <Link to="orphanages/1" >
                <FiArrowRight size={32} color="#FFF"/>
              </Link>
          </Popup>
          </Marker>
        </Map>
      </div>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
