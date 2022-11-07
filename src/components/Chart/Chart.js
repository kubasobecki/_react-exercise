import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const dataPointsMaxValue = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={dataPointsMaxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
