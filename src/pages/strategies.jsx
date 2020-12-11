import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
import BannerRow from "../components/Rows/BannerRow"

import image from "../../content/assets/images/uta-scholl-pUD1P96NB9c-unsplash.jpg"

const Strategies = (props) => {
    const { data } = props

    const [criteriaOne, setCriteriaOne] = React.useState('A')
    const [criteriaTwo, setCriteriaTwo] = React.useState('X')

    const items = [{i: 'A', ii: 'X'}, {i: 'A', ii: 'Y'}, {i: 'B', ii: 'Z'}, {i: 'B', ii: 'X'}, {i: 'B', ii: 'Y'}]

    const setCriteriaOneCb = React.useCallback((event) => {
      setCriteriaOne(event.target.value)
    }, [setCriteriaOne])

    const setCriteriaTwoCb = React.useCallback((event) => {
      setCriteriaTwo(event.target.value)
    }, [setCriteriaTwo])

    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={props.location} title={siteTitle}>
        <SEO title="Strategies" />
        <BannerRow
          bgColorRGB={"rgb(255, 255, 255)"}
          bgOpacity={0.0}
          bgImage={image}
          textDark
        >
          Strategies
        </BannerRow>

        <div className='row mt-3'>
        <div className='col'>
        <label className='mr-2'>Criteria One</label>
        <select onChange={setCriteriaOneCb}>
        <option></option>
          <option>A</option>
          <option>B</option>
        </select>
        </div>
        <div className='col'>
        <label className='mr-2'>Criteria Two</label>
        <select onChange={setCriteriaTwoCb}>
          <option></option>
          <option>Y</option>
          <option>Z</option>
        </select>
        </div>
        </div>

        <div className='row'>
          {items.filter(item => item.i === criteriaOne).filter(item => item.ii === criteriaTwo).map((item, index) => {
            return <div className='col-4'>
              <h3>Item {index}</h3>
              <p>Criteria One <b>{item.i}</b></p>
              <p>Criteria Two <b>{item.ii}</b></p>
            </div>

          })}


        </div>
      </Layout>
    )
}

export default Strategies

Strategies.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
