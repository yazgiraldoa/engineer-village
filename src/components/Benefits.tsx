
import React from 'react';
import { Calendar, Building2, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Benefits = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-village-darkBlue mb-4">Member Benefits</h2>
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-village-blue" size={24} />
            <h3 className="text-2xl font-semibold text-village-darkBlue">Wednesdays</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-village-blue shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="text-village-blue" size={20} />
                  <span>Workspace Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-village-darkGray">
                  Techstars New York Office space to work with other engineer founders
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-village-blue shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-village-blue" size={20} />
                  <span>Expert Guidance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-village-darkGray">
                  Open office hours (30 min) with Techstars team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-village-blue hover:bg-village-darkBlue text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Join the Village
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
