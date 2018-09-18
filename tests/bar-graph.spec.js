/* global describe test expect document */

const d3 = require('d3')

/* Fill in our fake web page with our actual index.html */
const fs = require('fs')
document.body.innerHTML = fs.readFileSync('src/index.html')

/* Run the code for our chart */
const chart = require('../src/bar-chart')

const svg = d3.select('#bar-chart')

/* Unit tests */

describe('Testing the xPositionScale', () => {
  test('Make sure it knows about different countries', () => {
    const countries = chart.xPositionScale.domain()
    expect(countries.length).toBeGreaterThan(10)
  })
})

describe('Clicking the Africa button', () => {
  test('African places become bright blue', () => {
    const circle = svg.select('rect.africa')
    expect(circle.attr('fill')).toBe('lightgrey')

    d3.select('#africa-btn').dispatch('click')

    expect(circle.attr('fill')).toBe('#4cc1fc')
  })

  test('Non-african places stay light grey', () => {
    const circle = svg.select('rect.asia')
    expect(circle.attr('fill')).toBe('lightgrey')

    d3.select('#africa-btn').dispatch('click')

    expect(circle.attr('fill')).toBe('lightgrey')
  })
})
