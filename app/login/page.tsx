"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (result?.error) {
            setError(result.error);
            setLoading(false);
        } else {
          router.push("/");
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-muted/30 px-4'>
        <Card className='w-full max-w-md'>
            <CardHeader className='text-center'>
                <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground text-primary-foreground">
                        
                    </div>
                </div>
                <CardTitle className='text-2xl'>Login</CardTitle>
                <CardDescription>Sign In to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor='email'>Email</Label>
                        <input
                        type="email"
                        id='email'
                        placeholder='you@example.com'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='password'>Password</Label>
                        <Input
                        type="password"
                        id='password'
                        placeholder='Enter your password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type='submit' className='w-full'>{loading ? 'Loading...' : 'Login'}</Button>
                </form>
                <p className='text-center text-sm text-muted-foreground mt-4'>
                    Don't have an account?{' '}
                    <Link href="/register" className="text-primary-foreground hover:underline">Sign up</Link>
                </p>
            </CardContent>
        </Card>
    </div>
  )
}
