import React, { useEffect, useRef } from 'react';
import { 
  Dumbbell, 
  Brain, 
  LineChart, 
  Clock, 
  ChevronRight,
  ArrowRight,
  Play,
  Cpu,
  Zap,
  Binary,
  Quote,
  Salad,
  Apple,
  Workflow,
  LayoutDashboard,
  Send,
  Target,
  Droplets,
  Smile,
  CalendarCheck,
  LineChart as Chart,
  ShoppingCart,
  PieChart,
  Bell,
  Users,
  Trophy,
  Calendar,
  Medal,
  Timer,
  Flame,
  Link
} from 'lucide-react';
import MatrixRain from './MatrixRain';
import Navbar from './components/Navbar';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixRain />
      
      {/* Fixed Tech Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 writing-vertical text-white/20 text-xs tracking-widest">
          MIND • BODY • NUTRITION • LIFESTYLE
        </div>
        <div className="absolute top-20 right-4 writing-vertical text-white/20 text-xs tracking-widest">
          TRANSFORM • OPTIMIZE • EVOLVE • THRIVE
        </div>
        <div className="absolute bottom-20 left-4 text-white/20 text-xs tracking-widest">
          01001 • 10101 • 11010
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-30 grayscale"
          >
            <source src="https://cdn.coverr.co/videos/coverr-working-out-at-the-gym-5244/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-matrix-text relative">
            <span className="absolute inset-0 animate-glitch-1"></span>
            <span className="absolute inset-0 animate-glitch-2"></span>
            More Than Fitness.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
            Transform Your Body. Optimize Your Mind. Elevate Your Life.
          </p>
          <button className="group redpill-button flex items-center mx-auto animate-fade-in-delay-2">
            Join WholeFit
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Play className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Pillars Section */}
      <section id="pillars" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            The Four Pillars of WholeFit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Dumbbell className="w-12 h-12 text-white" />,
                title: "Physical Fitness",
                description: "AI-optimized workout plans tailored to your goals and progress"
              },
              {
                icon: <Salad className="w-12 h-12 text-white" />,
                title: "Whole Foods & Recipes",
                description: "Personalized meal plans with delicious, nutrient-rich recipes"
              },
              {
                icon: <Apple className="w-12 h-12 text-white" />,
                title: "Nutrition & Proteins",
                description: "Smart macro tracking and supplement recommendations"
              },
              {
                icon: <Brain className="w-12 h-12 text-white" />,
                title: "Mindset & Routines",
                description: "Build lasting habits and mental resilience"
              }
            ].map((pillar, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll border border-white/10 hover:border-white/20"
              >
                {pillar.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-gray-900/10"></div>
        <div className="container mx-auto relative">
          <div className="flex items-center justify-center mb-16">
            <LayoutDashboard className="w-8 h-8 text-white mr-3" />
            <h2 className="text-4xl font-bold text-center animate-on-scroll bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Your Wellness Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Daily Wellness Tracker */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Daily Wellness Tracker
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Calories</span>
                  <div className="text-white">1,850 / 2,200</div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Protein</span>
                  <div className="text-white">120g / 150g</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5 text-white" />
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-white to-gray-300"></div>
                  </div>
                  <span className="text-sm">6/8 glasses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Mood</span>
                  <div className="flex space-x-2">
                    <Smile className="w-6 h-6 text-white" />
                    <span>Energized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fitness Section */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <Dumbbell className="w-6 h-6 mr-2" />
                Fitness Tracking
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <CalendarCheck className="w-5 h-5 text-white" />
                  <span>Weekly Plan</span>
                </div>
                <div className="flex items-center justify-between">
                  <Chart className="w-5 h-5 text-white" />
                  <span>Progress Charts</span>
                </div>
                <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-300">Next Workout: Upper Body Focus (45 min)</p>
                </div>
              </div>
            </div>

            {/* Meal & Recipe Hub */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <Salad className="w-6 h-6 mr-2" />
                Meal & Recipe Hub
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Today's Meals</span>
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Macro Split</span>
                  <PieChart className="w-5 h-5 text-white" />
                </div>
                <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-300">Featured: High-Protein Breakfast Bowl</p>
                </div>
              </div>
            </div>

            {/* Smart Reminders */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <Bell className="w-6 h-6 mr-2" />
                Smart Reminders
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Timer className="w-5 h-5 text-white" />
                  <span>Water break in 30 mins</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Timer className="w-5 h-5 text-white" />
                  <span>Log lunch at 1:00 PM</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Timer className="w-5 h-5 text-white" />
                  <span>Evening stretch routine</span>
                </div>
              </div>
            </div>

            {/* Community & Challenges */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Community & Challenges
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-300">
                  <span>Active Challenge</span>
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-sm">30-Day Morning Routine</p>
                  <div className="flex items-center mt-2">
                    <div className="flex-1 h-1 bg-gray-700 rounded-full">
                      <div className="w-2/3 h-full bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-sm text-white">20/30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements & Integrations */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <Medal className="w-6 h-6 mr-2" />
                Progress & Sync
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-5 h-5 text-white" />
                    <span className="text-white">15 Day Streak!</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Link className="w-5 h-5 text-white" />
                  <span>Connected with Apple Health</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Synced with Google Calendar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="group redpill-button">
              Start Your Journey
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Zap className="w-8 h-8 text-white mr-3" />
            <h2 className="text-4xl font-bold text-center animate-on-scroll bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Join Our Community
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "WholeFit Member",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
                quote: "WholeFit's holistic approach transformed not just my body, but my entire lifestyle. The community support is incredible!"
              },
              {
                name: "David Chen",
                role: "Fitness Coach",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
                quote: "As a coach, I'm amazed by how WholeFit integrates every aspect of wellness. It's a complete transformation system."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-2xl animate-on-scroll flex items-start space-x-4 border border-white/10"
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-white/50"
                />
                <div>
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-8 animate-on-scroll bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Start Your Transformation
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-gray-900/80 border border-white/20 focus:border-white/40 focus:outline-none text-white"
              />
              <button className="group bg-gradient-to-r from-white to-gray-300 hover:from-gray-300 hover:to-white p-4 rounded-full transition-all duration-300">
                <Send className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;