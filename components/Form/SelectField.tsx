import React from 'react'
import { Controller } from 'react-hook-form'
import ReactSelect, { ReactSelectProps } from 'react-select'

const SelectField: React.FC<ReactSelectProps> = ({
  isClearable = true,
  isMulti = true,
  closeMenuOnSelect = false,
  ...delegated
}) => {
  return (
    <Controller
      as={ReactSelect}
      isClearable={isClearable}
      isMulti={isMulti}
      closeMenuOnSelect={closeMenuOnSelect}
      {...delegated}
    />
  )
}

export default SelectField
