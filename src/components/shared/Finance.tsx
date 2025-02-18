import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 
type CardProps = React.ComponentProps<typeof Card>
 
const Finance = ({ className, ...props }: CardProps) => {
  return (
    <div className="flex space-x-4">
    <Card className={cn("w-[180px] border rounded-xl p-4", className)} {...props}>
      <CardContent className="grid gap-1">
        <div className=" flex items-center space-x-2">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
             $$$
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>  
      </CardContent>
    </Card>

    <Card className={cn("w-[180px] border rounded-xl p-4", className)} {...props}>
      <CardContent className="grid gap-1">
        <div className=" flex items-center space-x-2">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              $$$
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>  
      </CardContent>
    </Card>

    <Card className={cn("w-[180px] border rounded-xl p-4", className)} {...props}>
      <CardContent className="grid gap-1">
        <div className=" flex items-center space-x-2">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              $$$
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>  
      </CardContent>
    </Card>

    
    </div>
  )
}

export default Finance;