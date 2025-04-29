import React from 'react';
import { Calendar, Building2, Clock, Zap, Code, Users, Coffee, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Benefits = () => {
  return <section className="py-20 px-6 md:px-12 bg-techstars-white relative overflow-hidden">
      {/* Removed the tech pattern background div that was here */}
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Code className="text-techstars-phosphor" size={24} />
          <h2 className="text-3xl md:text-4xl font-bold text-techstars-black">Member Benefits</h2>
        </div>
        
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6 bg-techstars-phosphor/20 p-3 rounded-lg inline-block">
            <Calendar className="text-techstars-phosphor" size={24} />
            <h3 className="text-2xl font-semibold text-techstars-black">Wednesdays</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-techstars-white/50 border-none shadow-xl shadow-techstars-slate/10 hover:shadow-techstars-phosphor/20 transition-all group hover:translate-y-[-5px] backdrop-blur-sm">
              <CardHeader className="pb-2 bg-slate-200">
                <CardTitle className="flex items-center gap-2 text-techstars-slate">
                  <Building2 className="text-techstars-phosphor group-hover:text-techstars-phosphor/80 transition-colors" size={20} />
                  <span>Workspace Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-slate-200">
                <p className="text-techstars-black/80">
                  Office Space every Wednesday (with phone booths and meeting rooms)
                </p>
                <div className="flex mt-3 gap-2">
                  <div className="bg-techstars-phosphor/20 px-2 py-1 rounded text-xs text-techstars-phosphor flex items-center gap-1">
                    <Users size={12} /> <span>Networking</span>
                  </div>
                  <div className="bg-techstars-phosphor/20 px-2 py-1 rounded text-xs text-techstars-phosphor flex items-center gap-1">
                    <Coffee size={12} /> <span>Collaboration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-techstars-white/50 border-none shadow-xl shadow-techstars-slate/10 hover:shadow-techstars-phosphor/20 transition-all group hover:translate-y-[-5px] backdrop-blur-sm">
              <CardHeader className="pb-2 bg-slate-200">
                <CardTitle className="flex items-center gap-2 text-techstars-slate">
                  <Clock className="text-techstars-phosphor group-hover:text-techstars-phosphor/80 transition-colors" size={20} />
                  <span>Expert Guidance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-slate-200">
                <p className="text-techstars-black/80">
                Lunch office hours with founders-turned-investors who get it
                </p>
                <div className="flex mt-3 gap-2">
                  <div className="bg-techstars-phosphor/20 px-2 py-1 rounded text-xs text-techstars-phosphor flex items-center gap-1">
                    <Zap size={12} /> <span>Mentorship</span>
                  </div>
                  <div className="bg-techstars-phosphor/20 px-2 py-1 rounded text-xs text-techstars-phosphor flex items-center gap-1">
                    <Code size={12} /> <span>Tech Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-techstars-white/50 border-none shadow-xl shadow-techstars-slate/10 hover:shadow-techstars-phosphor/20 transition-all group hover:translate-y-[-5px] backdrop-blur-sm">
              <CardHeader className="pb-2 bg-slate-200">
                <CardTitle className="flex items-center gap-2 text-techstars-slate">
                  <MessageSquare className="text-techstars-phosphor group-hover:text-techstars-phosphor/80 transition-colors" size={20} />
                  <span>Community Chat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-slate-200">
                <p className="text-techstars-black/80">
                  Join a WhatsApp group with other engineer founders
                </p>
                <div className="flex mt-3 gap-2">
                  <div className="bg-techstars-phosphor/20 px-2 py-1 rounded text-xs text-techstars-phosphor flex items-center gap-1">
                    <Users size={12} /> <span>Network</span>
                  </div>
                  <div className="bg-techstars-phosphor/20 px-2 py-1 rounded text-xs text-techstars-phosphor flex items-center gap-1">
                    <MessageSquare size={12} /> <span>Communication</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" target="_blank" rel="noopener noreferrer" className="inline-block bg-techstars-phosphor hover:bg-techstars-phosphor/90 text-techstars-black font-semibold py-3 px-8 rounded-md transition-all shadow-lg shadow-techstars-phosphor/20 hover:translate-y-[-2px]">
            Join the Village
          </a>
        </div>
      </div>
    </section>;
};
export default Benefits;