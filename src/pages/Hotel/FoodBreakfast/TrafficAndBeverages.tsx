import { Clock, Coffee, ExternalLink } from 'lucide-react'
import turnoverIcon from '../../../assets/table-turnover.svg'
import { Area } from '@ant-design/plots'

const trafficData = [
  { time: '6:00', guests: 2 },
  { time: '6:15', guests: 6 },
  { time: '6:30', guests: 14 },
  { time: '6:45', guests: 30 },
  { time: '7:00', guests: 42 },
  { time: '7:15', guests: 55 },
  { time: '7:30', guests: 64 },
  { time: '7:45', guests: 68 },
  { time: '8:00', guests: 66 },
  { time: '8:15', guests: 61 },
  { time: '8:30', guests: 55 },
  { time: '8:45', guests: 44 },
  { time: '9:00', guests: 33 },
  { time: '9:15', guests: 24 },
  { time: '9:30', guests: 17 },
]

const isPeakPoint = (time: string) => time === '7:45'

const trafficConfig = {
  data: trafficData,
  xField: 'time',
  yField: 'guests',
  smooth: true,

  tooltip: {
    items: [{ channel: 'y', name: 'Guests' }],
  },

  interaction: {
    tooltip: { marker: false },
  },

  style: {
    fill: 'linear-gradient(-90deg, rgba(0, 54, 54, 0.24) 68%, rgba(10, 223, 201, 0.23) 100%)',
  },

  // ✅ FIXED GRID BEHAVIOR
  scale: {
    x: {
      type: 'point',
      tickCount: 4, // ✅ fixed vertical spacing (NOT per data point)
    },
    y: {
      domain: [0, 68],
      tickCount: 4, // ✅ clean horizontal sections
      nice: true,
    },
  },

  // ✅ DASHED GRID LINES
  axis: {
    x: {
      labelFill: 'rgba(255,255,255,0.55)',
      lineStroke: 'rgba(255,255,255,0.12)',
      tickStroke: 'rgba(255,255,255,0.15)',
      grid: null, // 🔥 remove vertical lines (cleaner look)
    },
    y: {
      
      labelFill: 'rgba(255,255,255,0.55)',
      lineStroke: 'rgba(255,255,255,0.12)',
      tickStroke: 'rgba(255,255,255,0.15)',
      grid: {
        line: {
          style: {
            stroke: 'rgba(255,255,255,0.12)',
            lineDash: [4, 4], // ✅ dashed horizontal lines
          },
        },
      },
    },
  },

  line: {
    style: {
      stroke: '#00D4C0',
      lineWidth: 2,
    },
  },

  point: {
    size: (d: { time: string }) => (isPeakPoint(d.time) ? 6 : 3),
    shape: (d: { time: string }) => (isPeakPoint(d.time) ? 'diamond' : 'circle'),
    style: (d: { time: string }) => ({
      stroke: isPeakPoint(d.time) ? '#F84247' : '#00D4C0',
      fill: isPeakPoint(d.time) ? '#F84247' : '#0b0f13',
      lineWidth: 1,
    }),
  },
}

export default function TrafficAndBeverages() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-[1.35fr_1fr] gap-4">
      {/* Traffic Chart */}
      <div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="text-[18px] text-white inline-flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00d4c0]" />
            <span>Guest Traffic Timeline</span>
          </div>

          <div className="justify-self-center inline-flex items-center gap-4 text-[12px]">
            <span className="inline-flex items-center gap-1 text-white/60">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#F84247] inline-block" />
              Peak (68)
            </span>
            <span className="inline-flex items-center gap-1 text-white/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4C0] inline-block" />
              Now (42)
            </span>
          </div>

          <span className="justify-self-end rounded-[3px] bg-white/10 px-2 py-1 text-[12px] text-white/50">
            6:00 am - 10:00 am
          </span>
        </div>

		<div className="mt-4 h-[320px]">
          <Area {...trafficConfig} />
        </div>
      </div>

      {/* Beverages + Table Turnover */}
      <div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
		<div className="grid grid-cols-[1fr_1fr] items-center">
          <div className="text-[18px] text-white inline-flex items-center gap-2">
			<Coffee className="w-4 h-4 text-[#00d4c0]" />
			<span>Beverages</span>
          </div>
          <span className="justify-self-end rounded-[3px] px-2 py-1 text-[12px] text-white/50">
            By zone traffic
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 pt-4">
            <div className="flex justify-between text-white/50 text-[12px]">
              <span>Tea / Coffee</span>
              <span>80%</span>
            </div>
            <div className="mt-1 h-[8px] rounded-full bg-[#0f2a2a]">
              <div className="h-full w-[80%] rounded-full bg-[#00d4c0]" />
            </div>
          </div>

          <div className="flex flex-col gap-1 pt-4">
            <div className="flex justify-between text-white/50 text-[12px]">
              <span>Other</span>
              <span>45%</span>
            </div>
            <div className="mt-1 h-[8px] rounded-full bg-[#0f2a2a]">
              <div className="h-full w-[45%] rounded-full bg-[#00d4c0]" />
            </div>
          </div>
        </div>

         <div className="mt-6 border-t border-white/10 pt-4">
           <div className="text-[18px] text-white inline-flex items-center gap-2">
             <img src={turnoverIcon} className="w-6 h-6" />
             <span>Table Turnover</span>
           </div>

           <div className="mt-3 grid grid-cols-3 gap-6">
             {/* Tables */}
             <div className="flex flex-col gap-3">
               <div className="text-white text-[18px] leading-none">30</div>
               <div className="text-white/70 text-[12px] inline-flex items-center gap-1">
                 <span>Tables</span>
                 <ExternalLink className="w-3.5 h-3.5" />
               </div>
             </div>
             {/* Avg. Turns */}
             <div className="flex flex-col gap-3 items-center">
               <div className="flex flex-row gap-3 items-center">
                 <div className="text-white text-[18px] leading-none">4.2x</div>
                 <div className="text-[#22c55e] text-[14px] md:text-[16px]">-4% ↓</div>
               </div>
               <div className="text-white/70 text-[12px] inline-flex items-center gap-1">
                 <span>Avg. Turns</span>
                 <ExternalLink className="w-3.5 h-3.5" />
               </div>
             </div>
             {/* Avg. Wipe Down */}
             <div className="flex flex-col gap-3 items-end text-right">
               <div className="flex flex-row gap-3 items-center">
                 <div className="text-white text-[18px] leading-none">1m 45s</div>
                 <div className="text-[#22c55e] text-[14px] md:text-[16px]">-2% ↓</div>
               </div>
               <div className="text-white/70 text-[12px] inline-flex items-center gap-1">
                 <span>Avg. Wipe Down</span>
                 <ExternalLink className="w-3.5 h-3.5" />
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}