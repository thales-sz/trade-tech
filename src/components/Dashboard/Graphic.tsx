import { type ApexOptions } from 'apexcharts'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const options: ApexOptions = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left'
  },
  colors: ['#7592CA'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 400,
    type: 'candlestick',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 1
    },
    toolbar: {
      show: true
    }
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300
        }
      }
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350
        }
      }
    }
  ],
  stroke: {
    width: [1, 2],
    curve: 'straight'
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  dataLabels: {
    enabled: true
  },
  markers: {
    size: 2,
    colors: '#fff',
    strokeColors: ['#7592CA'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 4
    }
  },
  xaxis: {
    type: 'category',
    categories: [
      '0 - 15 min',
      '16 - 30 min',
      '31 - 45 min'
    ],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    title: {
      text: 'Tempo de jogo (min.)',
      style: {
        fontSize: '20px'
      }
    }
  },
  yaxis: {
    title: {
      text: 'Gols Marcados (unid.)',
      style: {
        fontSize: '20px'
      }
    },
    min: 0,
    max: 25
  }
}

interface State {
  options: ApexOptions
  series: Array<{
    name: string
    data: number[]
  }>
}

function Graphic (): JSX.Element {
  const [state] = useState<State>({
    options,
    series: [
      {
        name: 'Gols',
        data: [4, 17, 11]
      }
    ]
  })

  return (
    <div className="border border-slate-300 bg-slate-100 px-5 pt-7.5 pb-5 shadow-lg rounded-lg mt-5 w-[580px]">
      <h1 className='text-2xl font-semibold my-2'>Gráfico (Gols x Tempo)</h1>
      <div>
        <div id="chartOne">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Graphic
