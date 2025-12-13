import { FileText, LayoutDashboard, ListTodo, Timer } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    const navItems = [
        {label:"Dashboard", href:"/dashboard", icon:LayoutDashboard},
        {label: "Tasks", href: "/tasks", icon: ListTodo},
        {label: "Pomodoro", href: "/pomodoro", icon: Timer},
        {label: "Notes", href:"/notes", icon: FileText }
    ]

  return (
    <aside className='fixed left-0 top-0 z-40 h-screen w-64 border-r'>
        <div className="flex flex-col h-full">
            <div className="flex h-16 items-center gap-2 border-b px-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {/* "logo" */}
                </div>
                <span className='text-xl font-bold'>FocusFlow</span>
            </div>
            <nav className='flex-1 space-y-1 px-3 py-4'>
                {navItems.map((item) => {
                    return (
                        <Link key={item.href} href={item.href}>
                            <item.icon className='h-5 w-5'>{item.label}</item.icon>
                        </Link>
                    )
                })}
            </nav>
        </div>
    </aside>
  )
}
