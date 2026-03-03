import React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
  showLabels?: boolean
  labels?: string[]
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  showLabels = false,
  labels = [],
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        const label = labels[index] || ''
        
        // Extract color from child's className
        const childElement = child as React.ReactElement<any>
        const childClassName = childElement?.props?.className || ''
        const colorMatch = childClassName.match(/text-(\w+-\d+|\w+)/)
        const iconColor = colorMatch ? colorMatch[1] : 'slate-600'
        
        // Map text colors to background colors
        const getBackgroundClass = (color: string) => {
          const colorMap: Record<string, string> = {
            'red-600': 'bg-red-100',
            'blue-600': 'bg-blue-100',
            'yellow-400': 'bg-yellow-100',
            'blue-800': 'bg-blue-100',
            'cyan-500': 'bg-cyan-100',
            'blue-400': 'bg-blue-100',
            'gray-600': 'bg-gray-100',
            'orange-600': 'bg-orange-100',
            'blue-500': 'bg-blue-100',
            'green-600': 'bg-green-100',
            'green-500': 'bg-green-100',
            'red-500': 'bg-red-100',
            'purple-400': 'bg-purple-100',
            'purple-600': 'bg-purple-100',
            'slate-700': 'bg-slate-100',
            'blue-700': 'bg-blue-100',
            'text-blue-600': 'bg-blue-100',
            'text-orange-500': 'bg-orange-100',
            'text-yellow-500': 'bg-yellow-100',
            'text-green-600': 'bg-green-100',
            'text-red-600': 'bg-red-100',
            'text-purple-600': 'bg-purple-100',
            'text-cyan-500': 'bg-cyan-100',
            'text-gray-800': 'bg-gray-100',
            'text-gray-600': 'bg-gray-100',
            'text-orange-600': 'bg-orange-100',
            'text-blue-400': 'bg-blue-100',
            'text-blue-500': 'bg-blue-100',
            'text-red-400': 'bg-red-100',
            'text-blue-800': 'bg-blue-100',
            'text-yellow-400': 'bg-yellow-100',
            'text-green-500': 'bg-green-100',
            'text-purple-500': 'bg-purple-100',
            'text-blue-700': 'bg-blue-100',
          }
          return colorMap[iconColor] || 'bg-slate-100'
        }
        
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
              animationDirection: reverse ? "reverse" : "normal",
            } as React.CSSProperties}
            className={cn(
              `animate-orbit absolute flex flex-col items-center justify-center transform-gpu`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            <div className={`flex size-[var(--icon-size)] items-center justify-center rounded-full ${getBackgroundClass(iconColor)} shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-white/20`}>
              {child}
            </div>
            {showLabels && label && (
              <span className="absolute top-full mt-0.5 text-[10px] font-medium text-foreground/80 whitespace-nowrap bg-background/90 px-0.5 py-0.5 rounded shadow-sm backdrop-blur-sm hidden sm:block">
                {label}
              </span>
            )}
          </div>
        )
      })}
    </>
  )
}
