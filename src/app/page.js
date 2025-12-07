"use client";

import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { Star } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col md:flex-row">
      {/* Left side - Brand and Marketing */}
      <div className="md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col">
        {/* Logo with Brand Name */}
        <div className="mb-8 md:mb-12 -ml-13">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Postly Logo"
              className="h-24 md:h-28 lg:h-32 object-contain"
            />
            <div className="flex flex-col -ml-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                Postly
              </h1>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                Developer Community Platform
              </p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-lg">
            {/* Tagline */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium border border-cyan-200">
                ✨ Trusted by Developers Worldwide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">More than just</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                friends truly connect
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
              Join thousands of developers in a community built for
              collaboration, learning, and meaningful connections. Share code,
              ideas, and grow together.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-medium">
                  <span className="text-cyan-600 font-bold">4.9/5</span> average
                  rating
                </p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-cyan-600 mb-1">12K+</p>
                <p className="text-gray-700 font-medium">Active Developers</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-cyan-600 mb-1">100+</p>
                <p className="text-gray-700 font-medium">Projects Daily</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-6 rounded-full bg-cyan-100 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-cyan-600" />
                </div>
                <span className="text-gray-700">
                  Real-time collaboration tools
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 rounded-full bg-cyan-100 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-cyan-600" />
                </div>
                <span className="text-gray-700">
                  Secure and private workspaces
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 rounded-full bg-cyan-100 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-cyan-600" />
                </div>
                <span className="text-gray-700">Integrated code sharing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            By joining, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 lg:p-16">
        <div className="w-full max-w-md">
          {/* Welcome Back Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to continue to your developer community
            </p>
          </div>

          {/* Clerk SignIn Component */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <SignIn />
          </div>

          {/* Alternative Options */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
              >
                Join now
              </a>
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">Or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Login Placeholder */}
            <div className="flex gap-4 justify-center">
              <button className="flex-1 max-w-40 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <svg className="size-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">Google</span>
              </button>
              <button className="flex-1 max-w-40 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <svg className="size-5 fill-gray-700" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-gray-700 font-medium">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
