import React from 'react';
import TableHargaBarang from './tugas11/TableHargaBarang'
import Timer from './tugas12/Timer'
import CrudDaftarBuah from './tugas13/CrudDaftarBuah'
import DaftarBuah from './tugas14/DaftarBuah'
import BuahContexts from './tugas15/Buah'
import Navigation from './Navigation'
import Home from './Home'
import { Switch, Route } from 'react-router'

const Routes = () => {
    return (
        <>
            <Navigation />
            <Switch>
                <Route exact path='/buahContexts'>
                    <BuahContexts />
                </Route>
                <Route exact path='/hargaBarang'>
                    <TableHargaBarang />
                </Route>
                <Route exact path='/timer'>
                    <Timer start={100} />
                </Route>
                <Route exact path='/crud'>
                    <CrudDaftarBuah />
                </Route>
                <Route exact path='/DaftarBuah'>
                    <DaftarBuah />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Routes