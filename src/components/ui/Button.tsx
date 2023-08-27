import { cn } from "@/lib/utils"
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
    'relative active:scale-95 inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none focus:ring-offset-slate-900',
    {
        variants: {
            variant: {
                default: 'bg-slate-200 text-slate-900 hover:bg-slate-100',
                nav: 'rounded-full bg-transparent hover:bg-neutral-800 text-slate-400 data-[state=open]:bg-transparent',
                outline: 'rounded-md bg-slate-200 text-slate-900 hover:bg-slate-100 border border-slate-700',
                subtle: 'rounded-md hover:bg-slate-200 bg-slate-700 text-slate-100',
                ghost: 'bg-transparent hover:bg-slate-800 text-slate-400 data-[state=open]:bg-transparent',
                link: 'rounded-md bg-transparent underline-offset-4 hover:underline text-slate-100',
            },
            size: {
                default: 'h-10 py-2 px-4 rounded-full',
                xs: 'h-6 px-2 rounded-md',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, isLoading, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading}
                {...props}>
                {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }