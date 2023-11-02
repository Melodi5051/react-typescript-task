import React from 'react'
import {
  VehicleType,
  vehicleTypes,
  vehicleTypeTitles
} from '../data/vehicles/contracts'
import { Select } from '@skbkontur/react-ui'

export interface VehicleTypeSelectProps {
  value: VehicleType | null
  onChange: (value: VehicleType | null) => void
}

const items: Array<[VehicleType, string]> = [
  [-1 as VehicleType, 'Все'],
  Select.SEP() as any,
  ...vehicleTypes.map<[VehicleType, string]>(x => [x, vehicleTypeTitles[x]])
]

export const VehicleTypeSelect: React.FC<VehicleTypeSelectProps> = ({
  value,
  onChange
}) => {
  console.log(1)
  console.log(items)
  console.log(value)
  return (
    <Select
      items={items}
      value={value != null ? value : (-1 as VehicleType)}
      onValueChange={(x: any) => onChange(x === -1 ? null : x)}
    />
  )
}
