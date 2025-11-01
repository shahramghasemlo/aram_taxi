
import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
  return (
    <div className="bg-slate-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
