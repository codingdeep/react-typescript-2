import React, {useState} from 'react';
import Lists from './components/Lists'
import {People} from './components/List'

function App(){
    const [people,setPeople] = useState<People["people"]>([
        {
            image: 'https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/247297850_4184259631703348_8278068781224248925_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHNZRkZPaudMsvMjLW5kYSbNLaHUDtMShY0todQO0xKFlOT-7N2gsqop5lGbIbGn4YD7AA5wTRFxJwPmZPD2O5W&_nc_ohc=yWH31EiuyyUAX_e2coY&_nc_ht=scontent.fdac110-1.fna&oh=76d871804e9be1c2a5d6ac2c43bdfe89&oe=618F4293',
            name: 'Rubel Ahmmed',
            age: 30,
            address: 'Nayagola',
            note: 'He is a good boy'
        },
        {
            image: 'https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/247297850_4184259631703348_8278068781224248925_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHNZRkZPaudMsvMjLW5kYSbNLaHUDtMShY0todQO0xKFlOT-7N2gsqop5lGbIbGn4YD7AA5wTRFxJwPmZPD2O5W&_nc_ohc=yWH31EiuyyUAX_e2coY&_nc_ht=scontent.fdac110-1.fna&oh=76d871804e9be1c2a5d6ac2c43bdfe89&oe=618F4293',
            name: 'Rubel Ahmmed',
            age: 30,
            address: 'Nayagola',
            note: 'He is a good boy'
        },
        {
            image: 'https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/247297850_4184259631703348_8278068781224248925_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHNZRkZPaudMsvMjLW5kYSbNLaHUDtMShY0todQO0xKFlOT-7N2gsqop5lGbIbGn4YD7AA5wTRFxJwPmZPD2O5W&_nc_ohc=yWH31EiuyyUAX_e2coY&_nc_ht=scontent.fdac110-1.fna&oh=76d871804e9be1c2a5d6ac2c43bdfe89&oe=618F4293',
            name: 'Rubel Ahmmed',
            age: 30,
            address: 'Nayagola',
            note: 'He is a good boy'
        },
        {
            image: 'https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/247297850_4184259631703348_8278068781224248925_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHNZRkZPaudMsvMjLW5kYSbNLaHUDtMShY0todQO0xKFlOT-7N2gsqop5lGbIbGn4YD7AA5wTRFxJwPmZPD2O5W&_nc_ohc=yWH31EiuyyUAX_e2coY&_nc_ht=scontent.fdac110-1.fna&oh=76d871804e9be1c2a5d6ac2c43bdfe89&oe=618F4293',
            name: 'Rubel Ahmmed',
            age: 30,
            address: 'Nayagola',
            note: 'He is a good boy'
        },
        {
            image: 'https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/247297850_4184259631703348_8278068781224248925_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHNZRkZPaudMsvMjLW5kYSbNLaHUDtMShY0todQO0xKFlOT-7N2gsqop5lGbIbGn4YD7AA5wTRFxJwPmZPD2O5W&_nc_ohc=yWH31EiuyyUAX_e2coY&_nc_ht=scontent.fdac110-1.fna&oh=76d871804e9be1c2a5d6ac2c43bdfe89&oe=618F4293',
            name: 'Rubel Ahmmed',
            age: 30,
            address: 'Nayagola',
            note: 'He is a good boy'
        }
    ]);
    return (
        <div style={{width: '500px',margin:'auto'}}>
          <h1>People that talk English.</h1>
          <Lists people={people}/>
        </div>
    );
}

export default App;
