/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SimpleMap from '../components/map';
import logo from '../assets/logo.svg';
import './home.scss';

const Home = () => {
  const mapData = useSelector((state) => state);
  const mapResults = () => {
    if (mapData === undefined) { return false; }
    // @ts-ignore
    return mapData.units;
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="Mapon" />
      <div className="content-wrapper">
        <div className="input-wrapper">
          <h1>Route report</h1>
          <Autocomplete
            disablePortal
            id="vehicle-inpit"
            options={mapResults()}
            sx={{ width: 300 }}
            // @ts-ignore
            getOptionLabel={(unit) => unit.car_reg_certificate}
            renderInput={(params) => <TextField {...params} label="Cars" />}
          />

        </div>
        <SimpleMap />
        <div className="footer">
          <div className="button-wrapper">
            <Button
              variant="contained"
              color="success"
              onClick={() => console.log('press')}
            >
              GENERATE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
