'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { EmailFormSchema, EmailFormValues } from '@/lib/types/validations';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/Form';
import { Input } from '@/components/ui/Input';

import { Icons } from '@/components/Icons';
import { Login, GoogleLogin } from '@/lib/API/Services/auth/login';

import config from '@/lib/config/auth';
import { useRouter } from 'next/navigation';
interface AuthFormPropsI {
  submit_text: string;
}

export default function AuthForm({ submit_text }: AuthFormPropsI) {
  const router = useRouter();

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const {
    register,
    formState: { isSubmitting }
  } = form;

  const onSubmit = async (values: EmailFormValues) => {
    // Set form to loading state
    form.setValue('password', values.password); // Preserve password value
    
    const signInResult = await Login(values);
    if (signInResult && !signInResult.error) {
      // Only redirect if authentication was successful

      return true;
    } else {
      // Display error message for failed authentication
      form.setError("email", { 
        type: "manual",
        message: "Invalid email or password"
      });
      // Focus back on password field for better UX
      (document.querySelector('input[type="Password"]') as HTMLInputElement)?.focus();
      // Prevent any NextAuth automatic redirection

      return false;
    }
  };

  const handleGoogleSignIn = async () => {
    await GoogleLogin();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...register('email')}
                    type="text"
                    placeholder="Email"
                    className="bg-background-light dark:bg-background-dark"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...register('password')}
                    type="Password"
                    placeholder="Password"
                    className="bg-background-light dark:bg-background-dark"                  
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
              <Icons.Mail className="mr-2 h-4 w-4" />
              {submit_text}
            </Button>
          </div>
        </form>
      </Form>

      <div className="space-y-8 mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          <Icons.Google />
          <span className="ml-2 font-semibold">Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}