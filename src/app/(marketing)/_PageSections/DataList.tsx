import { BarChart } from 'lucide-react';

export default function threeGraps() {
  return (
    <div className="text-white p-12">
      <h1 className="text-4xl font-bold text-center mb-8">Podium</h1>
      <div className="flex justify-center items-center gap-24">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={`bg-gray-800 p-6 rounded-lg shadow-lg w-64 ${
              index === 2 ? '-mt-8' : ''
            }`}
          >
            <BarChart className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Feature {index}</h2>
            <p className="text-gray-400 mb-4">Description of feature {index}</p>
            <div className="h-32 flex items-end justify-between">
              {[40, 60, 80, 50].map((height, i) => (
                <div
                  key={i}
                  className="bg-blue-500 w-1/5"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
