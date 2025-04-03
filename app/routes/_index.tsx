import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Protege - AI-Powered Career Feedback" },
    { name: "description", content: "Get expert feedback on your portfolio, resume, and case studies powered by AI." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Protege</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="/pricing" className="transition-colors hover:text-foreground/80">Pricing</Link>
              <Link to="/about" className="transition-colors hover:text-foreground/80">About</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container flex min-h-screen flex-col items-center justify-center gap-6 pb-8 pt-24 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Level up your career with AI-powered feedback
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Get expert feedback on your portfolio, resume, and case studies. Powered by advanced AI to help you stand out in your job search.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-medium"
          >
            Get Started
          </Link>
          <Link
            to="/pricing"
            className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 text-lg font-medium"
          >
            View Pricing
          </Link>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Resume Review</h3>
            <p className="text-center text-muted-foreground">Get detailed feedback on your resume from our AI expert</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Portfolio Analysis</h3>
            <p className="text-center text-muted-foreground">Improve your portfolio with AI-driven insights</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Case Study Enhancement</h3>
            <p className="text-center text-muted-foreground">Make your case studies more compelling</p>
          </div>
        </div>
      </main>
    </div>
  );
}