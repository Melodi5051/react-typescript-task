import React, { Component } from 'react'
import { VehicleFilter } from '../data/vehicles/contracts'
import { VehicleTypeSelect } from './VehicleTypeSelect'

interface FilterProps {
  onFilterChange: (filter: VehicleFilter) => void
}

export class Filter extends Component<FilterProps> {
  state = {
    title: '',
    type: null
  }

  handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value }, () => this.updateFilter())
  }

  handleTypeChange = (selectedType: number | null) => {
    this.setState({ type: selectedType }, () => this.updateFilter())
    console.log({ type: selectedType })
  }
  updateFilter () {
    const { title, type } = this.state
    this.props.onFilterChange({ title, type })
  }

  render () {
    return (
      <div>
        <label>
          Название:
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </label>
        <VehicleTypeSelect
          value={this.state.type}
          onChange={this.handleTypeChange}
        />
      </div>
    )
  }
}
