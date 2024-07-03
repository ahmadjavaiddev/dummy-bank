/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DkLSJZSJiIV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import {
//     TooltipProvider,
//     Tooltip,
//     TooltipTrigger,
//     TooltipContent,
// } from "../components/ui/tooltip";
// import { Link } from "react-router-dom";
// import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import {
//     DropdownMenu,
//     DropdownMenuTrigger,
//     DropdownMenuContent,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuItem,
// } from "../components/ui/dropdown-menu";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
// import {
//     Card,
//     CardHeader,
//     CardTitle,
//     CardDescription,
//     CardContent,
//     CardFooter,
// } from "../components/ui/card";
// import { Label } from "../components/ui/label";
// import { Textarea } from "../components/ui/textarea";
// import {
//     Table,
//     TableHeader,
//     TableRow,
//     TableHead,
//     TableBody,
//     TableCell,
// } from "../components/ui/table";

// export default function Component() {
//     return (
//         <div className="flex min-h-screen w-full bg-background">
//             <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
//                 <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
//                     <TooltipProvider>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href="#"
//                                     className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                                     prefetch={false}
//                                 >
//                                     <BanknoteIcon className="h-5 w-5" />
//                                     <span className="sr-only">Bank</span>
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent side="right">Bank</TooltipContent>
//                         </Tooltip>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href="#"
//                                     className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                                     prefetch={false}
//                                 >
//                                     <SendIcon className="h-5 w-5" />
//                                     <span className="sr-only">Send Money</span>
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent side="right">Send Money</TooltipContent>
//                         </Tooltip>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href="#"
//                                     className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                                     prefetch={false}
//                                 >
//                                     <ReplyIcon className="h-5 w-5" />
//                                     <span className="sr-only">Request Money</span>
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent side="right">Request Money</TooltipContent>
//                         </Tooltip>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href="#"
//                                     className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                                     prefetch={false}
//                                 >
//                                     <TicketIcon className="h-5 w-5" />
//                                     <span className="sr-only">Transactions</span>
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent side="right">Transactions</TooltipContent>
//                         </Tooltip>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href="#"
//                                     className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                                     prefetch={false}
//                                 >
//                                     <UserIcon className="h-5 w-5" />
//                                     <span className="sr-only">Profile</span>
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent side="right">Profile</TooltipContent>
//                         </Tooltip>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href="#"
//                                     className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                                     prefetch={false}
//                                 >
//                                     <SettingsIcon className="h-5 w-5" />
//                                     <span className="sr-only">Settings</span>
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent side="right">Settings</TooltipContent>
//                         </Tooltip>
//                     </TooltipProvider>
//                 </nav>
//                 <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
//                     <TooltipProvider>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href="#"
//                                     className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//                                     prefetch={false}
//                                 >
//                                     <LogOutIcon className="h-5 w-5" />
//                                     <span className="sr-only">Logout</span>
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent side="right">Logout</TooltipContent>
//                         </Tooltip>
//                     </TooltipProvider>
//                 </nav>
//             </aside>
//             <div className="flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-14">
//                 <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
//                     <Sheet>
//                         <SheetTrigger asChild>
//                             <Button size="icon" variant="outline" className="sm:hidden">
//                                 <MenuIcon className="h-5 w-5" />
//                                 <span className="sr-only">Toggle Menu</span>
//                             </Button>
//                         </SheetTrigger>
//                         <SheetContent side="left" className="sm:max-w-xs">
//                             <nav className="grid gap-6 text-lg font-medium">
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                                     prefetch={false}
//                                 >
//                                     <BanknoteIcon className="h-5 w-5" />
//                                     Bank
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-4 px-2.5 text-foreground"
//                                     prefetch={false}
//                                 >
//                                     <SendIcon className="h-5 w-5" />
//                                     Send Money
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                                     prefetch={false}
//                                 >
//                                     <ReplyIcon className="h-5 w-5" />
//                                     Request Money
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                                     prefetch={false}
//                                 >
//                                     <TicketIcon className="h-5 w-5" />
//                                     Transactions
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                                     prefetch={false}
//                                 >
//                                     <UserIcon className="h-5 w-5" />
//                                     Profile
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                                     prefetch={false}
//                                 >
//                                     <SettingsIcon className="h-5 w-5" />
//                                     Settings
//                                 </Link>
//                             </nav>
//                         </SheetContent>
//                     </Sheet>
//                     <div className="relative ml-auto flex-1 md:grow-0">
//                         <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                         <Input
//                             type="search"
//                             placeholder="Search..."
//                             className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
//                         />
//                     </div>
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button
//                                 variant="outline"
//                                 size="icon"
//                                 className="overflow-hidden rounded-full"
//                             >
//                                 <img
//                                     src="/placeholder.svg"
//                                     width={36}
//                                     height={36}
//                                     alt="Avatar"
//                                     className="overflow-hidden rounded-full"
//                                 />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end">
//                             <DropdownMenuLabel>John Doe</DropdownMenuLabel>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-2"
//                                     prefetch={false}
//                                 >
//                                     <UserIcon className="h-4 w-4" />
//                                     Profile
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-2"
//                                     prefetch={false}
//                                 >
//                                     <SettingsIcon className="h-4 w-4" />
//                                     Settings
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem>
//                                 <Link
//                                     href="#"
//                                     className="flex items-center gap-2"
//                                     prefetch={false}
//                                 >
//                                     <LogOutIcon className="h-4 w-4" />
//                                     Logout
//                                 </Link>
//                             </DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </header>
//                 <main className="flex-1 p-4 sm:px-6 sm:py-0">
//                     <Tabs defaultValue="send-money">
//                         <TabsList className="flex border-b">
//                             <TabsTrigger value="send-money">Send Money</TabsTrigger>
//                             <TabsTrigger value="request-money">Request Money</TabsTrigger>
//                             <TabsTrigger value="transactions">Transactions</TabsTrigger>
//                             <TabsTrigger value="profile">Profile</TabsTrigger>
//                             <TabsTrigger value="settings">Settings</TabsTrigger>
//                         </TabsList>
//                         <TabsContent value="send-money">
//                             <Card className="max-w-md mx-auto">
//                                 <CardHeader>
//                                     <CardTitle>Send Money</CardTitle>
//                                     <CardDescription>
//                                         Enter the recipient's details and the amount to send.
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="space-y-2">
//                                         <Label htmlFor="recipient">Recipient</Label>
//                                         <Input
//                                             id="recipient"
//                                             placeholder="Enter recipient's name or email"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label htmlFor="amount">Amount</Label>
//                                         <Input
//                                             id="amount"
//                                             type="number"
//                                             placeholder="Enter amount"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label htmlFor="note">Note (optional)</Label>
//                                         <Textarea id="note" placeholder="Add a note" />
//                                     </div>
//                                 </CardContent>
//                                 <CardFooter>
//                                     <Button className="w-full">Send Money</Button>
//                                 </CardFooter>
//                             </Card>
//                         </TabsContent>
//                         <TabsContent value="request-money">
//                             <Card className="max-w-md mx-auto">
//                                 <CardHeader>
//                                     <CardTitle>Request Money</CardTitle>
//                                     <CardDescription>
//                                         Enter the payer's details and the amount to request.
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="space-y-2">
//                                         <Label htmlFor="payer">Payer</Label>
//                                         <Input
//                                             id="payer"
//                                             placeholder="Enter payer's name or email"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label htmlFor="amount">Amount</Label>
//                                         <Input
//                                             id="amount"
//                                             type="number"
//                                             placeholder="Enter amount"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label htmlFor="note">Note (optional)</Label>
//                                         <Textarea id="note" placeholder="Add a note" />
//                                     </div>
//                                 </CardContent>
//                                 <CardFooter>
//                                     <Button className="w-full">Request Money</Button>
//                                 </CardFooter>
//                             </Card>
//                         </TabsContent>
//                         <TabsContent value="transactions">
//                             <Card className="max-w-3xl mx-auto">
//                                 <CardHeader>
//                                     <CardTitle>Transactions</CardTitle>
//                                     <CardDescription>
//                                         View your recent transactions.
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <Table>
//                                         <TableHeader>
//                                             <TableRow>
//                                                 <TableHead>Date</TableHead>
//                                                 <TableHead>Type</TableHead>
//                                                 <TableHead>Amount</TableHead>
//                                                 <TableHead>Note</TableHead>
//                                             </TableRow>
//                                         </TableHeader>
//                                         <TableBody>
//                                             <TableRow>
//                                                 <TableCell>2023-06-01</TableCell>
//                                                 <TableCell>Send</TableCell>
//                                                 <TableCell>$50.00</TableCell>
//                                                 <TableCell>Rent payment</TableCell>
//                                             </TableRow>
//                                             <TableRow>
//                                                 <TableCell>2023-05-28</TableCell>
//                                                 <TableCell>Request</TableCell>
//                                                 <TableCell>$25.00</TableCell>
//                                                 <TableCell>Dinner with friends</TableCell>
//                                             </TableRow>
//                                             <TableRow>
//                                                 <TableCell>2023-05-15</TableCell>
//                                                 <TableCell>Send</TableCell>
//                                                 <TableCell>$100.00</TableCell>
//                                                 <TableCell>Utility bill</TableCell>
//                                             </TableRow>
//                                             <TableRow>
//                                                 <TableCell>2023-05-10</TableCell>
//                                                 <TableCell>Request</TableCell>
//                                                 <TableCell>$75.00</TableCell>
//                                                 <TableCell>Reimbursement</TableCell>
//                                             </TableRow>
//                                             <TableRow>
//                                                 <TableCell>2023-04-30</TableCell>
//                                                 <TableCell>Send</TableCell>
//                                                 <TableCell>$20.00</TableCell>
//                                                 <TableCell>Gift for friend</TableCell>
//                                             </TableRow>
//                                         </TableBody>
//                                     </Table>
//                                 </CardContent>
//                             </Card>
//                         </TabsContent>
//                         <TabsContent value="profile">
//                             <Card className="max-w-md mx-auto">
//                                 <CardHeader>
//                                     <CardTitle>Profile</CardTitle>
//                                     <CardDescription>
//                                         View and manage your account information.
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="space-y-2">
//                                         <Label htmlFor="name">Name</Label>
//                                         <Input id="name" defaultValue="John Doe" />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label htmlFor="email">Email</Label>
//                                         <Input id="email" defaultValue="john@example.com" />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label htmlFor="balance">Account Balance</Label>
//                                         <Input id="balance" defaultValue="$5," />
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </TabsContent>
//                     </Tabs>
//                 </main>
//             </div>
//         </div>
//     );
// }

// function BanknoteIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <rect width="20" height="12" x="2" y="6" rx="2" />
//             <circle cx="12" cy="12" r="2" />
//             <path d="M6 12h.01M18 12h.01" />
//         </svg>
//     );
// }

// function LogOutIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//             <polyline points="16 17 21 12 16 7" />
//             <line x1="21" x2="9" y1="12" y2="12" />
//         </svg>
//     );
// }

// function MenuIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <line x1="4" x2="20" y1="12" y2="12" />
//             <line x1="4" x2="20" y1="6" y2="6" />
//             <line x1="4" x2="20" y1="18" y2="18" />
//         </svg>
//     );
// }

// function ReplyIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <polyline points="9 17 4 12 9 7" />
//             <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
//         </svg>
//     );
// }

// function SendIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m22 2-7 20-4-9-9-4Z" />
//             <path d="M22 2 11 13" />
//         </svg>
//     );
// }

// function SettingsIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//             <circle cx="12" cy="12" r="3" />
//         </svg>
//     );
// }

// function TicketIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
//             <path d="M13 5v2" />
//             <path d="M13 17v2" />
//             <path d="M13 11v2" />
//         </svg>
//     );
// }

// function UserIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//             <circle cx="12" cy="7" r="4" />
//         </svg>
//     );
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XCcIEDySYe3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { useEffect, useState } from "react";

export default function Component() {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);
    return (
        <div className="flex min-h-screen w-full bg-background">
            <aside className="hidden w-64 flex-col border-r bg-background p-6 md:flex">
                <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-muted-foreground">
                            johndoe@example.com
                        </div>
                    </div>
                </div>
                <Separator className="my-6" />
                <nav className="grid gap-2">
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                        prefetch={false}
                    >
                        <SendIcon className="h-5 w-5" />
                        Send Money
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                        prefetch={false}
                    >
                        <ReplyIcon className="h-5 w-5" />
                        Request Money
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                        prefetch={false}
                    >
                        <TicketIcon className="h-5 w-5" />
                        Transactions
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                        prefetch={false}
                    >
                        <UserIcon className="h-5 w-5" />
                        Profile
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                        prefetch={false}
                    >
                        <SettingsIcon className="h-5 w-5" />
                        Settings
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                        prefetch={false}
                    >
                        <CreditCardIcon className="h-5 w-5" />
                        Credit Card
                    </Link>
                </nav>
                <Separator className="my-6" />
                <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                        <DollarSignIcon className="h-5 w-5 text-primary" />
                        <div>
                            <div className="text-sm font-medium">Account Balance</div>
                            <div className="text-2xl font-semibold">$12,345.67</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCardIcon className="h-5 w-5 text-primary" />
                        <div>
                            <div className="text-sm font-medium">Credit Card</div>
                            <div className="text-lg font-semibold">**** **** **** 1234</div>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="flex-1">
                <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 shadow-sm md:px-6">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="md:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle Sidebar</span>
                        </Button>
                        <h1 className="text-xl font-semibold">Send Money</h1>
                        <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <SignalIcon className="h-6 w-6" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <UserIcon className="h-4 w-4" />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <SettingsIcon className="h-4 w-4" />
                                        Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2"
                                        prefetch={false}
                                    >
                                        <LogOutIcon className="h-4 w-4" />
                                        Sign Out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="p-4 md:p-6">
                    <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send Money</CardTitle>
                                    <CardDescription>
                                        Enter the recipient's details and the amount to send.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="recipient-name">Recipient Name</Label>
                                        <Input
                                            id="recipient-name"
                                            placeholder="Enter recipient name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="recipient-email">
                                            Recipient Email
                                        </Label>
                                        <Input
                                            id="recipient-email"
                                            placeholder="Enter recipient email"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="amount">Amount</Label>
                                        <Input
                                            id="amount"
                                            type="number"
                                            placeholder="Enter amount"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="note">Note (optional)</Label>
                                        <Textarea id="note" placeholder="Add a note" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="save-recipient" />
                                        <Label htmlFor="save-recipient">
                                            Save recipient as contact
                                        </Label>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="ml-auto">Send Money</Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Transaction History</CardTitle>
                                    <CardDescription>
                                        View your recent money transfers.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium">John Doe</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        johndoe@example.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">-$250.00</div>
                                                <div className="text-sm text-muted-foreground">
                                                    May 15, 2023
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium">
                                                        Jane Smith
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        janesmith@example.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">-$100.00</div>
                                                <div className="text-sm text-muted-foreground">
                                                    May 10, 2023
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8 w-8 border">
                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                    <AvatarFallback>JD</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium">
                                                        Bob Johnson
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        bobjohnson@example.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">-$75.00</div>
                                                <div className="text-sm text-muted-foreground">
                                                    May 5, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="ml-auto">
                                        View All Transactions
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function CreditCardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    );
}

function DollarSignIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}

function LogOutIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function ReplyIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="9 17 4 12 9 7" />
            <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
        </svg>
    );
}

function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}

function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function SignalIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
        </svg>
    );
}

function TicketIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
        </svg>
    );
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}
