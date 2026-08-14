import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import lucasImg from '../assets/images/lucas_siverns.jpg';
import markImg from '../assets/images/mark_pascua.jpg';
import kyleImg from '../assets/images/kyle_astorga.jpg';

export interface TestimonialCardData {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  metric: string;
  platform: string;
  rating?: number;
}

const TESTIMONIALS_COL1: TestimonialCardData[] = [
  {
    id: 'sp4-1',
    name: 'Lucas Siverns',
    role: 'Marketing Director',
    company: 'JustSimplyMarketing',
    avatar: lucasImg,
    content: "Ray my guy! I don't know how long we worked together tbh, a little over a year? but honestly bro, with your dedication and work ethic it felt like enough hours to fill 10 years haha. I have never questioned your dedication to your craft and have always admired your ability to lock in, focus up, and make sure that the job gets done no matter how impossible of an ask it may seem. You are reliable, trustworthy, hardworking, dedicated, and one of the most loyal people I have had the pleasure to work with. Honestly bro, if any of your clients are questioning your integrity or think that you are promising them is insane, tell them to call me. I don't even have to know what the job is, I know that you'll not only get it done, but get it done to the highest level, with the most care, passion, love, and dedication humanly possible.",
    metric: 'Verified Reference',
    platform: 'Marketing & Operations',
    rating: 5
  },
  {
    id: 'sp4-2',
    name: 'Mark Pascua',
    role: 'Manager',
    company: 'CreativeVision',
    avatar: markImg,
    content: "Working with you has been an incredible experience. You've not only shown me how to lead our team effectively but also helped me understand each editor's unique strengths and personalities. Your approach to leadership is something I truly admire.",
    metric: 'Leadership & Operations',
    platform: 'Team Operations',
    rating: 5
  }
];

const TESTIMONIALS_COL2: TestimonialCardData[] = [
  {
    id: 'sp4-3',
    name: 'Kyle Astorga',
    role: 'CEO',
    company: 'CreativeVision',
    avatar: kyleImg,
    content: "Hey man! Working with you is an awesome opportunity to work with my business. I remember the day I started the business. It was literally from scratch, but you being here makes the money flow in fast! We SAVED a lot of time and allocated it to make money! Also you're a hardworking guy who wants to collaborate with like-minded people, and that's why you're easy to work with. You have a sense of responsibility and can achieve things on your own! Thanks man, and God Bless you!",
    metric: 'Time & Revenue Scale',
    platform: 'Agency Growth',
    rating: 5
  },
  {
    id: 'sp4-4',
    name: 'Lucas Siverns',
    role: 'Marketing Director',
    company: 'JustSimplyMarketing',
    avatar: lucasImg,
    content: "Ray my guy! I don't know how long we worked together tbh, a little over a year? but honestly bro, with your dedication and work ethic it felt like enough hours to fill 10 years haha. I have never questioned your dedication to your craft and have always admired your ability to lock in, focus up, and make sure that the job gets done no matter how impossible of an ask it may seem. You are reliable, trustworthy, hardworking, dedicated, and one of the most loyal people I have had the pleasure to work with.",
    metric: 'Verified Reference',
    platform: 'Marketing & Operations',
    rating: 5
  }
];

const TESTIMONIALS_COL3: TestimonialCardData[] = [
  {
    id: 'sp4-5',
    name: 'Mark Pascua',
    role: 'Manager',
    company: 'CreativeVision',
    avatar: markImg,
    content: "Working with you has been an incredible experience. You've not only shown me how to lead our team effectively but also helped me understand each editor's unique strengths and personalities.",
    metric: 'Leadership & Operations',
    platform: 'Team Operations',
    rating: 5
  },
  {
    id: 'sp4-6',
    name: 'Kyle Astorga',
    role: 'CEO',
    company: 'CreativeVision',
    avatar: kyleImg,
    content: "Working with you is an awesome opportunity to work with my business. We SAVED a lot of time and allocated it to make money! You have a sense of responsibility and can achieve things on your own!",
    metric: 'Time & Revenue Scale',
    platform: 'Agency Growth',
    rating: 5
  }
];

const GlassTestimonialCard: React.FC<{ item: TestimonialCardData }> = ({ item }) => {
  return (
    <div className="relative p-3 sm:p-4 rounded-xl space-y-2 my-1.5 text-left">
      {/* Header: User Info & Photo */}
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="relative shrink-0">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full object-cover border border-white/20"
            />
            <div className="absolute -bottom-0.5 -right-0.5 bg-[#D94E10] text-white p-0.5 rounded-full" title="Verified Client">
              <CheckCircle className="w-2.5 h-2.5" />
            </div>
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white leading-tight truncate">
              {item.name}
            </h4>
            <p className="text-[10px] text-stone-400 font-light leading-tight truncate">
              {item.role}, <span className="text-stone-300">{item.company}</span>
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5 text-[#E85D26] shrink-0">
          {[...Array(item.rating || 5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#E85D26] text-[#E85D26]" />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-stone-300 text-xs font-light leading-snug relative z-10 italic">
        "{item.content}"
      </p>
    </div>
  );
};

export const SocialProof4: React.FC = () => {
  // Duplicate columns for infinite marquee loop
  const col1 = [...TESTIMONIALS_COL1, ...TESTIMONIALS_COL1];
  const col2 = [...TESTIMONIALS_COL2, ...TESTIMONIALS_COL2];
  const col3 = [...TESTIMONIALS_COL3, ...TESTIMONIALS_COL3];

  return (
    <div className="w-full mt-6 relative">
      {/* Compact 3-Column Marquee Container */}
      <div className="relative h-[260px] sm:h-[290px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto px-2 h-full">

          {/* Column 1 - Moving Up */}
          <div className="overflow-hidden relative h-full">
            <div className="animate-marquee-vertical space-y-1">
              {col1.map((item, idx) => (
                <GlassTestimonialCard key={`col1-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Column 2 - Moving Down (Reverse) */}
          <div className="overflow-hidden relative h-full hidden md:block">
            <div className="animate-marquee-vertical-reverse space-y-1">
              {col2.map((item, idx) => (
                <GlassTestimonialCard key={`col2-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Column 3 - Moving Up */}
          <div className="overflow-hidden relative h-full hidden md:block">
            <div className="animate-marquee-vertical-slow space-y-1">
              {col3.map((item, idx) => (
                <GlassTestimonialCard key={`col3-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SocialProof4;
