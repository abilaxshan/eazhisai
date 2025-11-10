// Mock API data (Tamil content preserved as in your site)
export const getCourses = () => {
  return Promise.resolve([
    { id: 1, title: 'கர்நாடக இசையின் அறிமுகம்', desc: 'கர்நாடக இசை என்பது தென்னிந்தியாவின் கிளாசிக்கல் இசை...' },
    { id: 2, title: 'வாய்மொழி பாடம்', desc: 'தமிழில் பாடமும் கற்றலும்' },
  ]);
};

export const getEvents = () => {
  return Promise.resolve([
    { id: 1, title: 'முட்டையின் ரெங்கார்த்தம் - நிகழ்வு', date: '2025-11-05', desc: 'நிகழ்வு விவரம் இங்கே.' },
    { id: 2, title: 'கலைநிகழ்ச்சி', date: '2025-12-10', desc: 'நிகழ்வு விவரம் 2.' },
  ]);
};
