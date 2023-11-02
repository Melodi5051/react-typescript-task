import React from 'react'
import { CurrencyLabel } from '@skbkontur/react-ui'
import { Vehicle, vehicleTypeTitles } from '../data/vehicles/contracts'

interface Props {
  vehicles: Vehicle[]
}
interface PropsItem {
  vehicle: Vehicle
  number: number
}
const TableItem: React.FC<PropsItem> = ({ vehicle, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{vehicle.title}</td>
      <td>
        <CurrencyLabel value={vehicle.price} fractionDigits={2} />
      </td>
      <td>{vehicleTypeTitles[vehicle.type]}</td>
    </tr>
  )
}

export const Table: React.FC<Props> = ({ vehicles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Цена, ₽</th>
          <th>Тип ТС</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((x: Vehicle, i: number) => (
          <TableItem key={x.id} number={i + 1} vehicle={x} />
        ))}
      </tbody>
    </table>
  )
}
