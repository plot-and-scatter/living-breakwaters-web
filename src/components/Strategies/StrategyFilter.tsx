import { colorForStrategy, strategyTypes } from '../../pages/strategies'
import React from 'react'

import FixTypeLater from '../../@types/FixTypeLater'

interface Props {
  checkboxCallback: (event: FixTypeLater) => void
  filters: FixTypeLater[]
}

const StrategyFilter = ({ checkboxCallback, filters }: Props): JSX.Element => {
  return (
    <div className="StrategyFilter col-6 text-right">
      <div className="d-flex justify-content-end align-items-center">
        <h5 className="text-muted mr-3 mb-0">Show strategies:</h5>
        {strategyTypes.map((strategyType) => {
          const color = colorForStrategy(strategyType)
          return (
            <div
              key={strategyType}
              className={`py-1 px-2 form-check form-check-inline border border-${color} text-${color}`}
            >
              <input
                className="form-check-input"
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
