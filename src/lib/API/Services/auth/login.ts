import 'client-only';
import { AuthError } from '@/lib/utils/error';
import { toast } from 'react-toastify';

import { signIn, signOut } from 'next-auth/react';
import configuration from '@/lib/config/api';
import config from '@/lib/config/auth';
import { AuthProviderE } from '@/lib/types/enums';
import { EmailFormValues } from '@/lib/types/validations';

export const Login = async ({ email, password }: EmailFormValues) => {
  console.log({ email, password });
  try {
    const result = await signIn(AuthProviderE.PASSWORD, {
      email: email.toLowerCase(),
      password,
      redirect: false,
      callbackUrl: config.redirects.toDashboard
    });
    
    if (!result) {
      toast.error("Authentication failed");
      return { error: "Authentication failed" };
    }
    
    if (result.error) {
      toast.error("Invalid email or password");
      return { error: result.error, status: result.status };
    }
    
    if (result.ok === false) {
      toast.error("Authentication failed");
      return { error: "Authentication failed", status: result.status };
    }
    
    return result;
  } catch (err) {
    toast.error(configuration.errorMessageGeneral);
    AuthError(err);
    return { error: "An error occurred during sign in" };
  }   
};

export const GoogleLogin = async () => {
  try {
    console.log('GoogleLogin');
    await signIn(AuthProviderE.GOOGLE, {
      callbackUrl: config.redirects.toDashboard
    });
    // When redirect is true, execution won't reach here unless there's an error
    // that prevents the redirect
  } catch (err) {
    toast.error(configuration.errorMessageGeneral);
    AuthError(err);
  }
};

export const Logout = async () => {
  try {
    await signOut({ callbackUrl: config.redirects.requireAuth });
  } catch (err) {
    toast.error(configuration.errorMessageGeneral);
    AuthError(err);
  }
};