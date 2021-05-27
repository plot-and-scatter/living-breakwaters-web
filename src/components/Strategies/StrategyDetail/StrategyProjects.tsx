import React from 'react'

interface Props {
  examples: string[]
}

const StrategyProjects = ({ examples }: Props): JSX.Element => {
  return (
    <div className="col-8 Examples">
      <div className="row">
        <div className="ExamplesTitle col-12">
          <h2>
            <i className="fas fa-tools mr-2"></i> Example projects
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
    </div>
  )
}

export default StrategyProjects
