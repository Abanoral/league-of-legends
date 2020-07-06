import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Nosotros = () => {
  const [listaCampeones, setListaCampeones] = useState([]);

  useEffect(() => {
    obtenerCampeonesLol();
  }, []) // hacemos la llamada del back solo una vez al tener los corchetes vacíos y no poner la dependencia del cambio de un valor

  const obtenerCampeonesLol = async () => {
    let allChampionsData = await axios('https//ddragon.leagueoflegends.com/cdn/10.11.1/data/es_ES/champion.json');
    setListaCampeones(allChampionsData.data.data);
  }


  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {
          Object.entries(listaCampeones).map(([key, value]) => (
            <div key={value.id} className="media mb-1">
              <li>
                Nombre del campeon: {value.name}
              </li>
            </div>
            )
          )
        }
      </ul>
    </div>
  )
}

export default Nosotros;
