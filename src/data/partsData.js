import axios from 'axios';

const getLegoHeads = () => axios.get('http://localhost:3350/heads');

const getLegoTorsos = () => axios.get('http://localhost:3350/torsos');

const getLegoLegs = () => axios.get('http://localhost:3350/legs');

export default { getLegoHeads, getLegoTorsos, getLegoLegs };
