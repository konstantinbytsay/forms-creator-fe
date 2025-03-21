import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center gap-2 font-bold">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Gen Forms AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Create intelligent forms with AI assistance. Streamline your data
              collection process.
            </p>
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold">Product</h3>
            <nav className="grid gap-2">
              <Link
                to="/form-builder"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Form Builder
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Templates
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold">Company</h3>
            <nav className="grid gap-2">
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Careers
              </Link>
            </nav>
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold">Legal</h3>
            <nav className="grid gap-2">
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Gen Forms AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
