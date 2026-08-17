import React from 'react';
import { Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-ivory-50">
      <Container size="sm">
        <div className="text-center bg-white p-8 sm:p-12 rounded-3xl border border-borderGray shadow-soft-lg">
          <span className="text-5xl sm:text-6xl font-black text-gold-500 font-mono">404</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-950 mt-4 mb-2">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-muted mb-8 max-w-md mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="primary" size="md" href="/" icon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
            <Button variant="outline" size="md" href="/contact">
              Contact Support
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

