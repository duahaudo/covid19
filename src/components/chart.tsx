import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

interface Dataset {
  label?: string;
  data: number[];
  borderWidth?: number;
}

export interface Options {
  labels: string[];
  datasets: Dataset[];
}

interface Props {
  type: "line"
  options: Options
}

const ChartEle = (props: Props) => {
  const ref = useRef(null)
  const chart = useRef<Chart>()

  useEffect(() => {
    if (ref.current) {
      chart.current = new Chart(ref.current, {
        type: props.type,
        data: props.options,
        options: {
          plugins: {
            legend: {
              display: true
            }
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }

    return () => {
      if (chart.current) {
        chart.current.destroy()
      }
    }
  }, [ref, props, chart])

  return <div>
    <canvas ref={ref} height="200"></canvas>
  </div>
}

export default ChartEle