import React from 'react';
import Table from '../table/Table';

const DataFecth = () => {

    const { isLoading, error, data } = useQuery('users', () =>

        fetch('https://graphqlzero.almansi.me/api').then(res =>

            res.json()

        )

    )

    if (isLoading) return 'Loading...'



    if (error) return 'An error has occurred: ' + error.message

    return (
        <Table data={data} />
    )
}

export default DataFecth;