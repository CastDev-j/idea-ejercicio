import { pastelColors } from './palette.js';
import deployIcons from './icon_deployer.js';
import formData from './form_data.js';


let d = document;

d.addEventListener('DOMContentLoaded', () => {

    deployIcons('.palette-selector', pastelColors);
    formData('.form');
});
