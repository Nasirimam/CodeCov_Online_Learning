let rot = 1800;
let rotType = -180;
let rotLang = -180;
let rotTool = -180;

let types = ['Blog Post (111)', 'Tutorial (32)', 'Media Coverage (7)', 'Article (6)', 'On-Demand Webinar (6)', 'ebook (2)', 'video (2)'];

let languages = ['Node / Javascript (13)', 'Java (11)', 'PHP (9)', 'GO (8)', 'C++ (7)', 'Kotlin (2)', 'Swift (2)', 'Ruby (3)'];

let tools = ['Codecov (34)', 'Github Actions (25)', 'Jacoco (13)', 'Travis Ci (28)', 'CircleCI (11)', 'Jest (10)', 'CMake (4)'];

document.querySelector('#type > p').addEventListener('click', () => {
    rotate('type');
});
document.querySelector('#type > img').addEventListener('click', () => {
    rotate('type');
});
document.querySelector('#language > p').addEventListener('click', () => {
    rotate('language');
});
document.querySelector('#language > img').addEventListener('click', () => {
    rotate('language');
});
document.querySelector('#tool > p').addEventListener('click', () => {
    rotate('tool');
});
document.querySelector('#tool > img').addEventListener('click', () => {
    rotate('tool');
});


function rotate(id) {
    document.querySelector(`#${id} > img`).style.transition = `ease-in .15s`;
    if (id == 'type') {
        document.querySelector(`#${id} > img`).style.transform = `rotate(${rotType}deg)`;
        if (rotType) {
            document.querySelector(`#${id}`).style.overflow = 'visible';
            rotType += 180;
            addOptions(option_type,types);
        }
        else {
            document.querySelector(`#${id}`).style.overflow = 'hidden';
            rotType -= 180;
        }
    }
    else if (id == 'language') {
        document.querySelector(`#${id} > img`).style.transform = `rotate(${rotLang}deg)`;
        if (rotLang) {
            document.querySelector(`#${id}`).style.overflow = 'visible';
            rotLang += 180;
            addOptions(option_lang,languages);
        }
        else {
            document.querySelector(`#${id}`).style.overflow = 'hidden';
            rotLang -= 180;
        }
    }
    else {
        document.querySelector(`#${id} > img`).style.transform = `rotate(${rotTool}deg)`;
        if (rotTool) {
            document.querySelector(`#${id}`).style.overflow = 'visible';
            rotTool += 180;
            addOptions(option_tool,tools);
        }
        else {
            document.querySelector(`#${id}`).style.overflow = 'hidden';
            rotTool -= 180;
        }
    }
}

function search(x) {
    if (x == 'Enter' || x === 'run') {
        let img = document.querySelector('#search_logo')
        img.src = 'https://about.codecov.io/wp-content/plugins/facetwp/assets/images/loading.png';
        img.style.transform = `rotate(${rot}deg)`;
        img.style.transition = 'linear 2s'
        document.querySelector('#search_filter').style.opacity = '0.5';
        setTimeout(() => {
            document.querySelector('#search_filter').style.opacity = '1';
            img.src = "https://about.codecov.io/wp-content/plugins/facetwp/assets/images/icon-search.png";
        }, 2000);
        rot += 1800;
    }
}


function addOptions(type, names) {
    console.log(option_type)
    type.innerHTML = '';
    names.forEach(elm => {
        let div = document.createElement('div');
        let box = document.createElement('input');
        box.setAttribute('type', 'checkbox');
        let label = document.createElement('label');
        label.innerText = ' ' + elm;
        div.append(box, label);
        type.append(div);
    });
}


