export default class NewHopeService {

    peopleList = [
        {
            id: 1,
            name: 'Beru Whitesun lars',
            gender: 'female',
            height: 165
        },
        {
            id: 2,
            name: 'Biggs Darklighter',
            gender: 'male',
            height: 183,
        },
        {
            id: 3,
            name: 'C-3PO',
            gender: 'n/a',
            height: 167,
        },
        {
            id: 4,
            name: 'Chewbacca',
            gender: 'male',
            height: 228,
        },
        {
            id: 5,
            name: 'Darth Vader',
            gender: 'male',
            height: 202,
        },
        {
            id: 6,
            name: 'Greedo',
            gender: 'male',
            height: 173,
        },
        {
            id: 7,
            name: 'Han Solo',
            gender: 'male',
            height: 180,
        },
        {
            id: 8,
            name: 'Jabba Desilijic Tiure',
            gender: 'hermaphrodite',
            height: 175,
        },
        {
            id: 9,
            name: 'Jek Tono Porkins',
            gender: 'male',
            height: 180,
        },
        {
            id: 10,
            name: 'Leia Organa',
            gender: 'female',
            height: 150,
        },
        {
            id: 11,
            name: 'Luke Skywalker',
            gender: 'male',
            height: 172,
        },
        {
            id: 12,
            name: 'Obi-Wan Kenobi',
            gender: 'male',
            height: 182,
        },
        {
            id: 13,
            name: 'Owen Lars',
            gender: 'male',
            height: 178,
        },
        {
            id: 14,
            name: 'R2-D2',
            gender: 'n/a',
            height: 96,
        },
        {
            id: 15,
            name: 'R5-D4',
            gender: 'n/a',
            height: 97,
        },
        {
            id: 16,
            name: 'Raymus Antilles',
            gender: 'male',
            height: 188,
        },
        {
            id: 17,
            name: 'Wedge Antilles',
            gender: 'male',
            height: 170,
        },
        {
            id: 18,
            name: 'Wilhuff Tarkin',
            gender: 'male',
            height: 180,
        },
    ];

    title = 'A New Hope';


    summary = `It is a period of civil war. Rebel spaceships,
        striking from a hidden base, have won their first victory 
        against the evil Galactic Empire. During the battle, Rebel 
        spies managed to steal secret plans to the Empire's ultimate
        weapon, the DEATH STAR, an armored space station with enough
        power to destroy an entire planet. Pursued by the Empire's
        sinister agents, Princess Leia races home aboard her starship,
        custodian of the stolen plans that can save her people and
        restore freedom to the galaxy....`

    getAllPeople = () => {
        return this.peopleList;
    }

    getCount = () => {
        return this.peopleList.length;
    }

    getTotalHeight = () => {
        let totalHeight = 0;
        this.peopleList.map(p => {
            totalHeight += p.height;
            return null
        })

        return totalHeight;
    }
}