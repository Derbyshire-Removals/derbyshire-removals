import React from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';

const ReviewStats = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Customer Testimonials</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <p className="text-lg font-semibold">
          Verified customer reviews
        </p>
        
        <div className="space-y-2 text-sm">
          <p>
            Check out our reviews on{' '}
            <a 
              href="https://www.google.com/search?q=derbyshrie+removals#lrd=0x48798e96bb172501:0x823e3a1119d6cc3c,1,,,," 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Google <ExternalLink className="h-3 w-3" />
            </a>{' '}
            and{' '}
            <a 
              href="https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Derbyshire Trusted Trader <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;