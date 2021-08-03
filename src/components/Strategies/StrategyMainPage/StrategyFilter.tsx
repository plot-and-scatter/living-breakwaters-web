import React from 'react'

import { colorForStrategy } from '../../../pages/strategies'
import { StrategyType } from '../../../@types/StrategyType'

interface Props {
  checkboxCallback: React.ChangeEventHandler<HTMLInputElement>
  filters: StrategyType[]
}

const StrategyFilter = ({ checkboxCallback, filters }: Props): JSX.Element => {
  return (
    <div className="StrategyFilter my-3">
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {/* <h5 className="text-muted mr-3 mb-0">Filter strategies:</h5> */}
        {Object.values(StrategyType).map((strategyType) => {
          const color = colorForStrategy(strategyType)
          return (
            <div
              key={strategyType}
              className={`py-1 px-3 form-check form-check-inline border border-${color} text-${color} rounded mb-2`}
            >
              <input
                className="form-check-input mr-2"
                type="checkbox"
                id={`InlineCheckbox-${strategyType}`}
                value={strategyType}
                onChange={checkboxCallback}
                defaultChecked={filters.includes(strategyType)}
              />
              <label
                className="form-check-label"
                htmlFor={`InlineCheckbox-${strategyType}`}
              >
                {strategyType}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StrategyFilter
