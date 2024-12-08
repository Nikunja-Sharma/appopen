import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Particles } from "../landing/particles";
import { HighlighterItem, HighlightGroup } from "../landing/highlighter";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center">
      {/* Radial gradient */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
      
      <div className="max-w-md w-full px-4 py-8">
        <HighlightGroup>
          <HighlighterItem>
            <div className="relative bg-zinc-900 rounded-lg z-20 overflow-hidden p-8">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"
                quantity={50}
                color="#34d399"
              />
              
              {/* Sign In Form */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                <p className="text-zinc-400">Sign in to your account</p>
              </div>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your email"
                      />
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300 flex items-center justify-center"
                  >
                    Sign In
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-zinc-400">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary-400 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </HighlighterItem>
        </HighlightGroup>
      </div>
    </section>
  );
};

