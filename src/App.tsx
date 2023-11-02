import React, { useState, useEffect } from 'react'
import { Vehicle, VehicleFilter } from './data/vehicles/contracts'
import { VehicleApi } from './data/vehicles/api'

import { Table } from './components/Table'
import { Filter } from './components/Filter'

const initialFilter: VehicleFilter = {
  title: '',
  type: null
}

export default function App () {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  const applyFilter = (filter: VehicleFilter) => {
    const filteredData = VehicleApi.search(filter)
    setVehicles(filteredData)
  }

  useEffect(() => {
    const data = VehicleApi.search(initialFilter)
    setVehicles(data)
  }, [])

  return (
    <>
      <Filter onFilterChange={applyFilter} />
      <Table vehicles={vehicles} />
    </>
  )
}
