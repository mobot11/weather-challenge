import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine,
} from 'react-sparklines';
import _ from 'lodash';

/**
 * Get teh average of our data set.
 * @param  {array} data data we are passing the chart.
 * @return {num}   the average of the data set.
 */
const average = data => {
    return _.round(_.sum(data) / data.length);
};
/**
 * Render a spark chart using the react sparklines library
 * @param  {object} props Props passed from the parent component.
 * @return {JSX} a spark chart JSX component.
 */
const Chart = (props) => {
    return (
        <div className={`chart ${props.value}`}>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                Average {props.value}: {average(props.data)} {props.units}
            </div>
        </div>
    );
};

export default Chart;
