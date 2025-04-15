
import React from 'react';
import { Calendar, Building2, Clock, Zap, Code, Users, Coffee, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Benefits = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tNCAwSDJ2LTRoMzB2NHptMCA0aC0ydjRoMnYtNHptLTQgMEgydjRoMzB2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Code className="text-indigo-400" size={24} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Member Benefits</h2>
        </div>
        
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6 bg-indigo-900/30 p-3 rounded-lg inline-block">
            <Calendar className="text-indigo-400" size={24} />
            <h3 className="text-2xl font-semibold text-indigo-200">Wednesdays</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-none shadow-xl shadow-indigo-900/10 hover:shadow-indigo-600/20 transition-all group hover:translate-y-[-5px] backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-indigo-200">
                  <Building2 className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={20} />
                  <span>Workspace Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100/80">
                  Techstars New York Office space to work with other engineer founders
                </p>
                <div className="flex mt-3 gap-2">
                  <div className="bg-indigo-900/50 px-2 py-1 rounded text-xs text-indigo-300 flex items-center gap-1">
                    <Users size={12} /> <span>Networking</span>
                  </div>
                  <div className="bg-indigo-900/50 px-2 py-1 rounded text-xs text-indigo-300 flex items-center gap-1">
                    <Coffee size={12} /> <span>Collaboration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-none shadow-xl shadow-indigo-900/10 hover:shadow-indigo-600/20 transition-all group hover:translate-y-[-5px] backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-indigo-200">
                  <Clock className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={20} />
                  <span>Expert Guidance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100/80">
                Lunch office hours with founders-turned-investors who get it
                </p>
                <div className="flex mt-3 gap-2">
                  <div className="bg-indigo-900/50 px-2 py-1 rounded text-xs text-indigo-300 flex items-center gap-1">
                    <Zap size={12} /> <span>Mentorship</span>
                  </div>
                  <div className="bg-indigo-900/50 px-2 py-1 rounded text-xs text-indigo-300 flex items-center gap-1">
                    <Code size={12} /> <span>Tech Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-none shadow-xl shadow-indigo-900/10 hover:shadow-indigo-600/20 transition-all group hover:translate-y-[-5px] backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-indigo-200">
                  <MessageSquare className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={20} />
                  <span>Community Chat</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100/80">
                  Join a WhatsApp group with other engineer founders
                </p>
                <div className="flex mt-3 gap-2">
                  <div className="bg-indigo-900/50 px-2 py-1 rounded text-xs text-indigo-300 flex items-center gap-1">
                    <Users size={12} /> <span>Network</span>
                  </div>
                  <div className="bg-indigo-900/50 px-2 py-1 rounded text-xs text-indigo-300 flex items-center gap-1">
                    <MessageSquare size={12} /> <span>Communication</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-md transition-all shadow-lg shadow-indigo-600/20 hover:translate-y-[-2px]"
          >
            Join the Village
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
