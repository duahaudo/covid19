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
  type: "line" | "doughnut"
  options: Options
  height: number
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
              display: false
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
    <canvas ref={ref} height={props.height}></canvas>
  </div>
}

export default ChartEle