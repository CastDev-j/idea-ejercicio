let d = document;
let ls = localStorage;

export default function deployIcons($iconContainerClass, palette) {
    $iconContainerClass = d.querySelector($iconContainerClass);
    let $deployer = $iconContainerClass.querySelector('.deployer');

    createColorIcons(palette, $iconContainerClass);
    let color = ls.getItem('color') || palette.lavanda;
    setPrimaryColor(color);

    d.addEventListener('click', (e) => {
        if(e.target.matches('.deployer') || e.target.matches('.color')) {
            $iconContainerClass.classList.toggle('active');
            $deployer.classList.toggle('active');
        }

        if(e.target.matches('.color')){
            let color = e.target.style.getPropertyValue('--palette-colors');
            ls.setItem('color', color);
            setPrimaryColor(color);
        }
    });
}

function createColorIcons(palette, container) {
    let fragment = d.createDocumentFragment();
    for (let color in palette) {
        let span = d.createElement('span');
        span.classList.add('color');
        span.style.setProperty('--palette-colors', palette[color]);
        fragment.appendChild(span);
    }

    container.appendChild(fragment);
}

let setPrimaryColor = (color) => {
    d.documentElement.style.setProperty('--primary-color', color);
}