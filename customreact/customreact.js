function customRender(re, co) {
    /*const element = document.createElement(re.type);
    element.innerHTML = re.children;

    element.setAttribute('href', re.props.href);
    element.setAttribute('target', re.props.target);

    co.appendChild(element);*/


    // modular approch

    const domElement = document.createElement(re.type);
    domElement.innerHTML = re.children;
    for (const prop in re.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, re.props[prop])
    }
    co.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to jump in GOOGLE'
}

const mainContainer = document.querySelector('#root');


customRender(reactElement, mainContainer);

