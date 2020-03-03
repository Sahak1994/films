export default class AttackOfTheClones {

    peopleList = [
        {
            id: 1,
            name: 'Anakin Skywalker',
            gender: 'male',
            height: 188,
        },
        {
            id: 2,
            name: 'Ayla Secura',
            gender: 'female',
            height: 178,
        },
        {
            id: 3,
            name: 'Bail Prestor Organa',
            gender: 'male',
            height: 191,
        },
        {
            id: 4,
            name: 'Barriss Offee',
            gender: 'female',
            height: 166,
        },
        {
            id: 5,
            name: 'Beru Whitesun lars',
            gender: 'female',
            height: 165,
        },
        {
            id: 6,
            name: '	Boba Fett',
            gender: 'male',
            height: 183,
        },
        {
            id: 7,
            name: 'C-3PO',
            gender: 'n/a',
            height: 167,
        },
        {
            id: 8,
            name: 'Cliegg Lars',
            gender: 'male',
            height: 183,
        },
        {
            id: 9,
            name: 'Cordé',
            gender: 'female',
            height: 157,
        },
        {
            id: 10,
            name: 'Dexter Jettster',
            gender: 'male',
            height: 198,
        },
        {
            id: 11,
            name: 'Dooku',
            gender: 'male',
            height: 193,
        },
        {
            id: 12,
            name: 'Dormé',
            gender: 'female',
            height: 165,
        },
        {
            id: 13,
            name: 'Gregar Typho',
            gender: 'male',
            height: 185,
        },
        {
            id: 14,
            name: 'Jango Fett',
            gender: 'male',
            height: 183,
        },
        {
            id: 15,
            name: 'Jar Jar Binks',
            gender: 'male',
            height: 196,
        },
        {
            id: 16,
            name: 'Jocasta Nu',
            gender: 'female',
            height: 167,
        },
        {
            id: 17,
            name: 'Ki-Adi-Mundi',
            gender: 'male',
            height: 198,
        },
        {
            id: 18,
            name: '	Kit Fisto',
            gender: 'male',
            height: 196,
        },
    ];

    title = 'Attack of the Clones';


    summary = `There is unrest in the Galactic Senate. Several thousand
            solar systems have declared their intentions to leave the
            Republic. This separatist movement, under the leadership of
            the mysterious Count Dooku, has made it difficult for the
            limited number of Jedi Knights to maintain peace and order
            in the galaxy. Senator Amidala, the former Queen of Naboo,
            is returning to the Galactic Senate to vote on the critical
            issue of creating an ARMY OF THE REPUBLIC to assist the
            overwhelmed Jedi....`

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