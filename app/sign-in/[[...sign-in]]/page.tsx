import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
        }
      }}
    />
  </div>
)

export default SignInPage
