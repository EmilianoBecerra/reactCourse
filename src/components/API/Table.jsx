import './Table.css'

export const Table = props => {
    const { products } = props;

    return(
        <div className="Table">
            <div className="table-responsive">
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th> id </th>
                            <th> Nombre </th>
                            <th> Precio </th>
                            <th> Stock </th>
                            <th> Descripción </th>
                            <th> Foto </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index)=> 
                                <tr key={ index }>
                                    <td>
                                        { product.id }
                                    </td>
                                    <td>
                                        { product.name }
                                    </td>
                                    <td>
                                        { product.price }
                                    </td>
                                    <td>
                                        { product.stock }
                                    </td>
                                    <td>
                                        { product.description }
                                    </td>
                                    <td>
                                        { product.foto }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
