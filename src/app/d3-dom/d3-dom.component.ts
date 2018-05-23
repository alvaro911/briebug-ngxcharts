import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

import { single } from '../data';

@Component({
  selector: 'app-d3-dom',
  template: `<div id="bar-chart"></div>`
})
export class D3DomComponent implements OnInit {
  host: any;
  svg: any;
  width: number = 800;
  height: number
  margin;
  xScale;
  yScale;
  xAxis;
  yAxis;
  yTicks;

  constructor(private _element: ElementRef) {
    this.host = d3.select(this._element.nativeElement);
  }

  ngOnInit() {
    this.setup();
    this.buildSvg();
    this.drawXAxis();
    this.drawYAxis();
    this.populate();
  }

  setup(){
    this.margin = {
      top: 15,
      right: 50,
      bottom: 40,
      left: 50
    };
    this.width = this.width - this.margin.left - this.margin.right;
    this.height = this.width * .6 - this.margin.bottom - this.margin.top;
    this.xScale = d3.scaleBand().range([0, this.width]).domain(single.map(d => d.name));
    this.yScale = d3.scaleLinear().range([0, this.height]).domain([0, this.getMax()]);
    this.yTicks = d3.scaleLinear().range([this.height, 0]).domain([0, this.getMax()]);
  }

  buildSvg() {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  }

  drawXAxis(){
    this.xAxis = d3.axisBottom(this.xScale)
      .ticks(single.length)
      .tickPadding(15);

    this.svg.append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(this.xAxis)
      .append('text')
        .attr('x', this.width)
        .attr('y', 0)
        .style('fill', 'grey')
        .text('Countries');
  }

  drawYAxis(){
    this.yAxis = d3.axisLeft(this.yTicks)
      .ticks(5)
      .tickPadding(10);

    this.svg.append('g')
      .call(this.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0)
      .style('fill', 'grey')
      .text('GDP per capita')
  }

  getMax(){
    return d3.max(single, d => d.value)
  }

  populate(){
    this.svg.selectAll('rect')
      .data(single)
      .enter().append('rect')
        .attr('x', (d, i) => i * (this.width / single.length) + 40)
        .attr('y', d => this.height - this.yScale(d.value))
        .attr('width', 40)
        .attr('height', d => this.yScale(d.value))
        .attr('fill', '#0ad5e9');
  }
}
