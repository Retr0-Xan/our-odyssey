import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Heart, Star, Calendar as CalendarIcon } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);

  const [events, setEvents] = useState([
    {
      id: 1,
      date: new Date(2024, 11, 25),
      title: 'Christmas Together',
      type: 'special',
      description: 'Our first Christmas as a couple',
    },
    {
      id: 2,
      date: new Date(2024, 11, 31),
      title: 'New Year\'s Eve',
      type: 'celebration',
      description: 'Midnight kiss to welcome the new year',
    },
    {
      id: 3,
      date: new Date(2025, 0, 14),
      title: 'Valentine\'s Day',
      type: 'romantic',
      description: 'A day dedicated to our love',
    },
  ]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventForDate = (date: Date) => {
    return events.find(event => isSameDay(event.date, date));
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'romantic': return 'bg-red-500';
      case 'special': return 'bg-yellow-500';
      case 'celebration': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 pb-16"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-light serif text-gray-800 mb-6">
            Our Calendar
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Marking the moments that matter most to us
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Calendar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="elegant-card rounded-3xl p-8 mb-12"
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={() => setCurrentDate(subMonths(currentDate, 1))}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="text-gray-600" size={24} />
            </button>
            
            <motion.h2
              key={currentDate.toISOString()}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl serif text-gray-800"
            >
              {format(currentDate, 'MMMM yyyy')}
            </motion.h2>
            
            <button
              onClick={() => setCurrentDate(addMonths(currentDate, 1))}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronRight className="text-gray-600" size={24} />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-4 mb-6">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
              <div key={day} className="text-center font-medium text-gray-500 py-4 text-sm uppercase tracking-wider">
                {day.slice(0, 3)}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-4">
            {days.map((day, index) => {
              const event = getEventForDate(day);
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              
              return (
                <motion.button
                  key={day.toISOString()}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.01 }}
                  onClick={() => setSelectedDate(day)}
                  className={`
                    relative p-4 rounded-xl text-center transition-all duration-300 min-h-[80px] border-2
                    ${isSelected 
                      ? 'bg-gray-800 text-white border-gray-800 shadow-lg' 
                      : 'hover:bg-gray-50 border-transparent'
                    }
                    ${!isSameMonth(day, currentDate) ? 'text-gray-300' : 'text-gray-700'}
                  `}
                >
                  <div className="font-semibold text-lg">
                    {format(day, 'd')}
                  </div>
                  
                  {event && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                      className={`
                        absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full ${getEventTypeColor(event.type)}
                      `}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Event Details */}
        <AnimatePresence>
          {selectedDate && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="elegant-card rounded-3xl p-8 mb-12"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl serif text-gray-800">
                  {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                </h3>
                <button
                  onClick={() => setShowEventForm(true)}
                  className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-none font-medium"
                >
                  <Plus size={18} />
                  <span>ADD EVENT</span>
                </button>
              </div>
              
              {getEventForDate(selectedDate) ? (
                <div className="space-y-6">
                  {events
                    .filter(event => isSameDay(event.date, selectedDate))
                    .map(event => (
                      <motion.div
                        key={event.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="border-l-4 border-yellow-500 pl-6 py-4"
                      >
                        <h4 className="text-2xl serif text-gray-800 mb-2">{event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <CalendarIcon className="text-gray-400 mx-auto mb-6" size={64} />
                  <h4 className="text-2xl serif text-gray-600 mb-4">No events scheduled</h4>
                  <p className="text-gray-500">Why not plan something special for this day?</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upcoming Events */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="elegant-card rounded-3xl p-8"
        >
          <h3 className="text-3xl serif text-gray-800 mb-8 text-center">
            Upcoming Moments
          </h3>
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-6 p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className={`w-4 h-4 rounded-full ${getEventTypeColor(event.type)}`} />
                <div className="flex-1">
                  <h4 className="text-xl serif text-gray-800 mb-1">{event.title}</h4>
                  <p className="text-gray-600">{format(event.date, 'EEEE, MMMM d, yyyy')}</p>
                  <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Calendar;