import { useState } from 'react';
import './Api.css'
import { Table } from './Table';

export default function Api(props) {
    const {title} = props;

    const [ products, setProducts ] = useState([
        {
            id: 1,
            name: 'Mesa',
            price: 1000,
            stock: 55,
            description: 'Material: Madera',
            img: 'https://i.pinimg.com/736x/09/cd/5d/09cd5dde9dd0d270fd02f5a5badde902.jpg' 
        },
        {
            id: 2,
            name: 'Silla',
            price: 500,
            stock: 78,
            description: 'Material: Madera',
            img: 'https://static.vecteezy.com/system/resources/previews/006/652/768/non_2x/cartoon-chair-vector.jpg' 
        },
    ]);

    return(
       <div className="Api">
            <div className="jumbotron">
                <h3><u> Componente { title } </u></h3>
                <hr />

                <Table products={ products }/>

            </div>
       </div> 
    )
}