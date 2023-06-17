import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <SignIn
    appearance={{
      elements: {
        formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
      }
    }}
  />
)

export default SignInPage
