import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-br from-signature-start to-signature-end text-white hover:shadow-lg hover:shadow-signature-start/25 hover:scale-[1.03] active:scale-[0.98] border border-transparent",
                primary: "bg-gradient-to-br from-signature-start to-signature-end text-white hover:shadow-lg hover:shadow-signature-start/25 hover:scale-[1.03] active:scale-[0.98] border border-transparent",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-signature-start/30 bg-transparent text-midnight hover:border-signature-start hover:bg-signature-start/5 hover:text-signature-end",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                text: "text-midnight hover:text-signature-end px-0 py-2 hover:bg-transparent justify-start",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-8 py-3",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    icon?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, icon = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
                {icon && !asChild && <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1.5} />}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
