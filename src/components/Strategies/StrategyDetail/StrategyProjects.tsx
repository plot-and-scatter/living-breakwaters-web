import React from 'react'

interface Props {
  examples: string[]
}

const StrategyProjects = ({ examples }: Props): JSX.Element => {
  return (
    <div className="Examples pb-4 row">
      <div className="ExamplesTitle col-12">
        <h2>
          <i className="fas fa-tools mr-2 py-4"></i> Example projects
        </h2>
      </div>

      {examples &&
        examples.map((exampleHtml, index) => {
          return (
            <div className="col" key={index}>
              <div
                className="Example"
                dangerouslySetInnerHTML={{ __html: exampleHtml }}
              />
            </div>
          )
        })}
    </div>
  )
}

export default StrategyProjects
