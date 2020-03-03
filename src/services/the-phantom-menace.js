export default class ThePhantomMenace {

    peopleList = [
        {
            id: 1,
            name: 'Adi Gallia',
            gender: 'female',
            height: 184,
        },
        {
            id: 2,
            name: 'Anakin Skywalker',
            gender: 'male',
            height: 188,
        },
        {
            id: 3,
            name: 'Ayla Secura',
            gender: 'female',
            height: 178,
        },
        {
            id: 4,
            name: 'Ben Quadinaros',
            gender: 'male',
            height: 163,
        },
        {
            id: 5,
            name: 'C-3PO',
            gender: 'n/a',
            height: 167,
        },
        {
            id: 6,
            name: 'Darth Maul',
            gender: 'male',
            height: 175,
        },
        {
            id: 7,
            name: 'Dud Bolt',
            gender: 'male',
            height: 94,
        },
        {
            id: 8,
            name: 'Eeth Koth',
            gender: 'male',
            height: 171,
        },
        {
            id: 9,
            name: 'Finis Valorum',
            gender: 'male',
            height: 170,
        },
        {
            id: 10,
            name: 'Gasgano',
            gender: 'male',
            height: 122,
        },
        {
            id: 11,
            name: 'Jabba Desilijic Tiure',
            gender: 'hermaphrodite',
            height: 175,
        },
        {
            id: 12,
            name: 'Jar Jar Binks',
            gender: 'male',
            height: 196,
        },
        {
            id: 13,
            name: 'Ki-Adi-Mundi',
            gender: 'male',
            height: 198,
        },
        {
            id: 14,
            name: 'Kit Fisto',
            gender: 'male',
            height: 196,
        },
        {
            id: 15,
            name: 'Mace Windu',
            gender: 'male',
            height: 188,
        },
        {
            id: 16,
            name: 'Mas Amedda',
            gender: 'male',
            height: 196,
        },
        {
            id: 17,
            name: 'Nute Gunray',
            gender: 'male',
            height: 191,
        },
        {
            id: 18,
            name: 'Obi-Wan Kenobi',
            gender: 'male',
            height: 182,
        },
        {
            id: 19,
            name: 'Padmé Amidala',
            gender: 'female',
            height: 165,
        },
        {
            id: 20,
            name: 'Palpatine',
            gender: 'male',
            height: 170,
        },
        {
            id: 21,
            name: 'Plo Koon',
            gender: 'male',
            height: 188,
        },
        {
            id: 22,
            name: 'Quarsh Panaka',
            gender: 'male',
            height: 183,
        },
        {
            id: 23,
            name: 'Qui-Gon Jinn',
            gender: 'male',
            height: 193,
        },
        {
            id: 24,
            name: 'R2-D2',
            gender: 'n/a',
            height: 96,
        },
        {
            id: 25,
            name: 'Ratts Tyerell',
            gender: 'male',
            height: 79,
        },
        {
            id: 26,
            name: 'Ric Olié',
            gender: 'male',
            height: 183,
        },
        {
            id: 27,
            name: 'Roos Tarpals',
            gender: 'male',
            height: 224,
        },
        {
            id: 28,
            name: 'Rugor Nass',
            gender: 'male',
            height: 206,
        },
        {
            id: 29,
            name: 'Saesee Tiin',
            gender: 'male',
            height: 188,
        },
        {
            id: 30,
            name: 'Sebulba',
            gender: 'male',
            height: 112,
        },
        {
            id: 31,
            name: 'Shmi Skywalker',
            gender: 'female',
            height: 163,
        },
        {
            id: 32,
            name: 'Watto',
            gender: 'male',
            height: 137,
        },
        {
            id: 33,
            name: 'Yarael Poof',
            gender: 'male',
            height: 264,
        },
        {
            id: 34,
            name: 'Yoda',
            gender: 'male',
            height: 66,
        },
    ];

    title = 'The Phantom Menace';


    summary = `Turmoil has engulfed the Galactic Republic. The taxation of
            trade routes to outlying star systems is in dispute. Hoping to
            resolve the matter with a blockade of deadly battleships, the
            greedy Trade Federation has stopped all shipping to the small
            planet of Naboo. While the Congress of the Republic endlessly
            debates this alarming chain of events, the Supreme Chancellor has
            secretly dispatched two Jedi Knights, the guardians of peace and
            justice in the galaxy, to settle the conflict....`;

    getAllPeople = async () => {
        return this.peopleList;
    }

    getCount = async () => {
        return this.peopleList.length;
    }

    getTotalHeight = async () => {
        let totalHeight = 0;
        this.peopleList.map(p => {
            totalHeight += p.height;
            return null
        })

        return totalHeight;
    }
}