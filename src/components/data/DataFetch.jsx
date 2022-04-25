import React from 'react';
import Table from '../table/Table';
import gql from 'graphql-tag';
import { useGQLQuery } from './useGQLQuery';


const GET_DATA = gql`
        query {
            users{
                data{
                     id
                    name 
                    username
                    email
                    phone
                    website
                    address {
                        street
                    }
                 }
             }
        } 
    `

const DataFetch = () => {


    const { data, isLoading, error } = useGQLQuery('users', GET_DATA)

    if (isLoading) return 'Loading...'



    if (error) return 'An error has occurred: ' + error.message
    // console.log(data.users.data)

    return (
        <Table data={data.users.data} />
    )
}

export default DataFetch;