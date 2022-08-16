"use strict"

const BRIDGE_IDS = {
    'NLTNZ130B20497800009':'Oostsluis, Terneuzen, brug over buitenhoofd',
    'NLTNZ001300522600307':'Westsluis,Terneuzen, Noordbrug',
    'NLTNZ130B20497600005':'Oostsluis, Terneuzen, brug over binnenhoofd',
    'NLTNZ001300522400303':'Westsluis,Terneuzen, Zuidbrug',
    'NLTNZ001300522000264':'Sluiskil, verkeers-/spoorbrug',
    'NLSVG001300521600186':'Sas van Gent, brug'
}

const BRIDGE_LATITUDES = {
    'Westsluis,Terneuzen, Zuidbrug': 51.326756,
    'Oostsluis, Terneuzen, brug over binnenhoofd': 51.33302,
    'Westsluis,Terneuzen, Noordbrug': 51.329697,
    'Oostsluis, Terneuzen, brug over buitenhoofd': 51.336056,
    'Sluiskil, verkeers-/spoorbrug': 51.29379,
    'Sas van Gent, brug': 51.229412,
    'Waarderbrug TEST': '52.3952599805373'
}

const BRIDGE_LONGITUDES = {
    'Westsluis,Terneuzen, Zuidbrug': 3.8183095,
    'Oostsluis, Terneuzen, brug over binnenhoofd': 3.8204138,
    'Westsluis,Terneuzen, Noordbrug': 3.8160496,
    'Oostsluis, Terneuzen, brug over buitenhoofd': 3.8197742,
    'Sluiskil, verkeers-/spoorbrug': 3.835428,
    'Sas van Gent, brug': 3.8075185,
    'Waarderbrug TEST': '4.6514597364968'
}

/*const BRIDGE_COORDINATES = {
    'Westsluis,Terneuzen, Zuidbrug': {
        latitude : 51.326756,
        longitude: 3.8183095
    },
    'Oostsluis, Terneuzen, brug over binnenhoofd': {
        latitude : 51.33302,
        longitude: 3.8204138
    },
    'Westsluis,Terneuzen, Noordbrug': {
        latitude : 51.329697,
        longitude: 3.8160496
    },
    'Oostsluis, Terneuzen, brug over buitenhoofd': {
        latitude : 51.336056,
        longitude: 3.8197742
    },
    'Sluiskil, verkeers-/spoorbrug': {
        latitude : 51.29379,
        longitude: 3.835428
    },
    'Sas van Gent, brug': {
        latitude : 51.229412,
        longitude: 3.8075185
    },
}
*/
fetch('brugopeningen2.xml')
    .then(res => {
        return res.text()
    })
    .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, 'application/xml');
            //document.getElementById('output').textContent = data
            console.log(xml)
            getBridgeName(xml)
            getSituation(xml)
        })


function getBridgeName(x) {
    let bridges = x.getElementsByTagName('situationRecord')
    for (let i=0; i< bridges.length; i++) {
        //let latitude = bridges[i].getElementsByTagName('groupOfLocations')[0].getElementsByTagName('locationForDisplay')[0].getElementsByTagName('latitude')[0].textContent
        //let longitude = bridges[i].getElementsByTagName('groupOfLocations')[0].getElementsByTagName('locationForDisplay')[0].getElementsByTagName('longitude')[0].textContent
        //console.log(latitude)
        let id = bridges[i].getAttribute('id')
        id = id.slice(6,26)
        if (Object.keys(BRIDGE_IDS).includes(id)) {
            //console.log(BRIDGE_IDS[id] + ' ' + id)
        } 
        //li.textContent = bridge;
        //list.appendChild(li)
    }
}

function getSituation(x) {
    let situations = x.getElementsByTagName('situation')
    for(let i = 0; i < situations.length; i++) {
    
        console.log(situations[i])
    }
}