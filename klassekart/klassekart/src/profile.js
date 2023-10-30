import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import eleverData from './profiles'; // Importer JSON-dataen

 

export default function Profile() {
  const navigate = useNavigate();
  const profileParams = useParams();

  const valgtElev = eleverData.elever.find(elev => elev.navn.toLowerCase() === profileParams.profile);

  if (valgtElev) {
    return (
<>
<div className='profile-container'>
<div className='profile-box'>
<h1>Dette er profilen til {valgtElev.navn}</h1>
<p>Alder: {valgtElev.alder}</p>
<p>Email: {valgtElev.email}</p>
<p>Tlf: {valgtElev.Tlf}</p>
<button onClick={() => navigate(-1)}>Tilbake til Klassekartet</button>
</div>
</div>
</>
    );
  } else {
    return (
<div>
<p>Eleven ble ikke funnet.</p>
<button onClick={() => navigate(-1)}>Tilbake til Klassekartet</button>
</div>
    );
  }
}