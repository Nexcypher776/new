import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, X, Maximize2 } from 'lucide-react';

const NICHES = [
  "All",
  "Fashion",
  "Pet Store",
  "Tech & Gadgets",
  "Print on Demand",
  "Beauty & Skincare",
  "Fitness & Gym",
  "Home Decor"
];

const INITIAL_DESIGNS = [
  {
    id: 1,
    title: "Premium Fashion Store (SKIMS)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/1GAJjSfIysPBI64aPLTC/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/1GAJjSfIysPBI64aPLTC/image.png"
  },
  {
    id: 2,
    title: "Premium Fashion Store (Gymshark)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/uGiXdoHrbsBomrgOUJsK/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/uGiXdoHrbsBomrgOUJsK/image.png"
  },
  {
    id: 3,
    title: "Premium Fashion Store (Adanola)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/GCwcBjSIctiYybRJVKdx/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/GCwcBjSIctiYybRJVKdx/image.png"
  },
  {
    id: 4,
    title: "Premium Fashion Store (Represent)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/rXGy74kopcBXnHVvEjkB/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/rXGy74kopcBXnHVvEjkB/image.png"
  },
  {
    id: 5,
    title: "Premium Fashion Store (Cole Buxton)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/DKJxia8SSH4Ma7xRXXC2/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/DKJxia8SSH4Ma7xRXXC2/image.png"
  },
  {
    id: 6,
    title: "Premium Fashion Store (Meshki)",
    niche: "Fashion",
    image: "https://plain-eeur-prod-public.komododecks.com/202604/28/vZ5rW5Y3lvnzuM8cJH6m/image.png",
    thumbnail: "https://plain-eeur-prod-public.komododecks.com/202604/28/vZ5rW5Y3lvnzuM8cJH6m/image.png"
  },
  {
    id: 7,
    title: "Premium Fashion Store (White Fox)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/9JqHpGKijEGhj9GkTtpu/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/9JqHpGKijEGhj9GkTtpu/image.png"
  },
  {
    id: 8,
    title: "Premium Fashion Store (Oh Polly)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/yoMDPTTS7QAWGjgNMFYF/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/yoMDPTTS7QAWGjgNMFYF/image.png"
  },
  {
    id: 9,
    title: "Premium Fashion Store (Princess Polly)",
    niche: "Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=800&q=80"
  },
  {
    id: 10,
    title: "Premium Fashion Store (Aime Leon Dore)",
    niche: "Fashion",
    image: "https://plain-enam-prod-public.komododecks.com/202604/28/4VpJngU85EeGB0T1f5gh/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/28/4VpJngU85EeGB0T1f5gh/image.png"
  },
  {
    id: 11,
    title: "Premium Tech Store (Nomad)",
    niche: "Tech & Gadgets",
    image: "https://plain-weur-prod-public.komododecks.com/202604/29/51LUfQfQnewFtfe9Zedl/image.png",
    thumbnail: "https://plain-weur-prod-public.komododecks.com/202604/29/51LUfQfQnewFtfe9Zedl/image.png"
  },
  {
    id: 12,
    title: "Premium Tech Store (Wyze)",
    niche: "Tech & Gadgets",
    image: "https://plain-weur-prod-public.komododecks.com/202604/29/Ylghh0PHCOmuzFk2znZi/image.png",
    thumbnail: "https://plain-weur-prod-public.komododecks.com/202604/29/Ylghh0PHCOmuzFk2znZi/image.png"
  },
  {
    id: 13,
    title: "Premium Tech Store (Skullcandy)",
    niche: "Tech & Gadgets",
    image: "https://plain-weur-prod-public.komododecks.com/202604/29/iBzg7qVbHxYRx9Dyqt3J/image.png",
    thumbnail: "https://plain-weur-prod-public.komododecks.com/202604/29/iBzg7qVbHxYRx9Dyqt3J/image.png"
  },
  {
    id: 14,
    title: "Premium Tech Store (Turtle Beach)",
    niche: "Tech & Gadgets",
    image: "https://plain-weur-prod-public.komododecks.com/202604/29/9grhzPuFBMcLr0pkUFrU/image.png",
    thumbnail: "https://plain-weur-prod-public.komododecks.com/202604/29/9grhzPuFBMcLr0pkUFrU/image.png"
  },
  {
    id: 15,
    title: "Premium Tech Store (Tech21)",
    niche: "Tech & Gadgets",
    image: "https://plain-weur-prod-public.komododecks.com/202604/29/5e6tFqV1s3YFIIhuSHbT/image.png",
    thumbnail: "https://plain-weur-prod-public.komododecks.com/202604/29/5e6tFqV1s3YFIIhuSHbT/image.png"
  },
  {
    id: 16,
    title: "Premium Tech Store (Anker)",
    niche: "Tech & Gadgets",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/nS0DMfhbdTErTGUdvPpc/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/nS0DMfhbdTErTGUdvPpc/image.png"
  },
  {
    id: 17,
    title: "Premium Tech Store (Peak Design)",
    niche: "Tech & Gadgets",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/ZnR0cqgpPIB21ivw8pkQ/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/ZnR0cqgpPIB21ivw8pkQ/image.png"
  },
  {
    id: 18,
    title: "Premium Tech Store (PopSockets)",
    niche: "Tech & Gadgets",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/UuIVOw6nadtO5xkLSdh5/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/UuIVOw6nadtO5xkLSdh5/image.png"
  },
  {
    id: 19,
    title: "Premium Tech Store (Spigen)",
    niche: "Tech & Gadgets",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/DvpHRUM0mqsJOqmVbVfR/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/DvpHRUM0mqsJOqmVbVfR/image.png"
  },
  {
    id: 20,
    title: "Premium Tech Store (Headphones.com)",
    niche: "Tech & Gadgets",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/caUdKROreWletNoQNDaO/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/caUdKROreWletNoQNDaO/image.png"
  },
  {
    id: 21,
    title: "Premium Pet Store (Barkbox)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/uyU8mw5zzGy7DwMKTmXn/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/uyU8mw5zzGy7DwMKTmXn/image.png"
  },
  {
    id: 22,
    title: "Premium Pet Store (Chewy)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/vfuhhIUaLuc4usZLaMXN/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/vfuhhIUaLuc4usZLaMXN/image.png"
  },
  {
    id: 23,
    title: "Premium Pet Store (Meowingtons)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/acQUpDCRzKBY0Ez4RycB/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/acQUpDCRzKBY0Ez4RycB/image.png"
  },
  {
    id: 24,
    title: "Premium Pet Store (The Farmer's Dog)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/8QkdSGG3RWZhFWvEEE4d/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/8QkdSGG3RWZhFWvEEE4d/image.png"
  },
  {
    id: 25,
    title: "Premium Pet Store (PawzDogBoots)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/jLolZrJXfwWBKbeUTYNH/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/jLolZrJXfwWBKbeUTYNH/image.png"
  },
  {
    id: 26,
    title: "Premium Pet Store (Wild One)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/T1crHK47bRCjb9BWvQFQ/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/T1crHK47bRCjb9BWvQFQ/image.png"
  },
  {
    id: 27,
    title: "Premium Pet Store (Fable Pets)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/HzwTKgHvtb09vDhZR8l6/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/HzwTKgHvtb09vDhZR8l6/image.png"
  },
  {
    id: 28,
    title: "Premium Pet Store (Petlibro)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/A7uKRZwJ6JsyUu6zHfnk/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/A7uKRZwJ6JsyUu6zHfnk/image.png"
  },
  {
    id: 29,
    title: "Premium Pet Store (Tuft and Paw)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/r798RF61pTgRpyUswn88/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/r798RF61pTgRpyUswn88/image.png"
  },
  {
    id: 30,
    title: "Premium Pet Store (Petcube)",
    niche: "Pet Store",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/pBABMGE1JCeK9h8ep5Zu/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/pBABMGE1JCeK9h8ep5Zu/image.png"
  },
  {
    id: 31,
    title: "Premium Print on Demand Store (Pura Vida Bracelets)",
    niche: "Print on Demand",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/nB7mfTJ1pqn5zqq8RNLc/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/nB7mfTJ1pqn5zqq8RNLc/image.png"
  },
  {
    id: 32,
    title: "Premium Print on Demand Store (Fanjoy)",
    niche: "Print on Demand",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/t2l6AOTWyxEEyZr4el3H/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/t2l6AOTWyxEEyZr4el3H/image.png"
  },
  {
    id: 33,
    title: "Premium Print on Demand Store (The Mountain)",
    niche: "Print on Demand",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/q4ucXDuybp7iVNPRHbqA/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/q4ucXDuybp7iVNPRHbqA/image.png"
  },
  {
    id: 34,
    title: "Premium Print on Demand Store (TeePublic)",
    niche: "Print on Demand",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/fyuj8l2K4YBumWi73Jgb/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/fyuj8l2K4YBumWi73Jgb/image.png"
  },
  {
    id: 35,
    title: "Premium Print on Demand Store (BustedTees)",
    niche: "Print on Demand",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/n61FbhyMFXmrEoTQXS6w/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/n61FbhyMFXmrEoTQXS6w/image.png"
  },
  {
    id: 36,
    title: "Premium Print on Demand Store (Dogecore)",
    niche: "Print on Demand",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/Fvp0nqvxa6AS7JN9kawW/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/Fvp0nqvxa6AS7JN9kawW/image.png"
  },
  {
    id: 37,
    title: "Premium Print on Demand Store (Gelato)",
    niche: "Print on Demand",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/BvslYuCDDDj12Ms83Beq/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/BvslYuCDDDj12Ms83Beq/image.png"
  },
  {
    id: 38,
    title: "Premium Home Decor Store (McGee & Co.)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/43f2Xl8u5h8OXLh8YKSj/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/43f2Xl8u5h8OXLh8YKSj/image.png"
  },
  {
    id: 39,
    title: "Premium Home Decor Store (The Citizenry)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/c5Ibt2tLxbaKWyBtJITi/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/c5Ibt2tLxbaKWyBtJITi/image.png"
  },
  {
    id: 40,
    title: "Premium Home Decor Store (Jonathan Adler)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/OP9kYyqj9RRSe7JCOTjw/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/OP9kYyqj9RRSe7JCOTjw/image.png"
  },
  {
    id: 41,
    title: "Premium Home Decor Store (Ruggable)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/0uq263ApPwXpyFm4G9RF/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/0uq263ApPwXpyFm4G9RF/image.png"
  },
  {
    id: 42,
    title: "Premium Home Decor Store (Brooklinen)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/51A0gGuVEz0WWq847gmz/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/51A0gGuVEz0WWq847gmz/image.png"
  },
  {
    id: 43,
    title: "Premium Home Decor Store (Goodee)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/MJq1P1uZS4bEOvHZrSfT/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/MJq1P1uZS4bEOvHZrSfT/image.png"
  },
  {
    id: 44,
    title: "Premium Home Decor Store (Pattern Brands)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/n2FVOjxtKC7tWQTJhdR9/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/n2FVOjxtKC7tWQTJhdR9/image.png"
  },
  {
    id: 45,
    title: "Premium Home Decor Store (Skull Bliss)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/JEKcaDeAsobrRsippP8v/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/JEKcaDeAsobrRsippP8v/image.png"
  },
  {
    id: 46,
    title: "Premium Home Decor Store (Dear Keaton)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/d7Vxd5a1tz4InRzQwiWv/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/d7Vxd5a1tz4InRzQwiWv/image.png"
  },
  {
    id: 47,
    title: "Premium Home Decor Store (CULTIVER)",
    niche: "Home Decor",
    image: "https://plain-enam-prod-public.komododecks.com/202604/29/HE2dfQOldmyKuapXtgG2/image.png",
    thumbnail: "https://plain-enam-prod-public.komododecks.com/202604/29/HE2dfQOldmyKuapXtgG2/image.png"
  },
  {
    id: 48,
    title: "Premium Fitness Store (Iron Bull Strength)",
    niche: "Fitness & Gym",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://www.awesomescreenshot.com/video/52027023?key=c8df25fe726c92c65084833352cec648"
  },
  {
    id: 49,
    title: "Premium Fitness Store (G&G Fitness Equipment)",
    niche: "Fitness & Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://www.awesomescreenshot.com/video/52026833?key=29ace4f9641fcbd964549db858919779"
  },
  {
    id: 50,
    title: "Premium Fitness Store (Barbell Apparel)",
    niche: "Fitness & Gym",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://www.awesomescreenshot.com/video/52026718?key=68bba58dacc11e65beb69560126cbba1"
  },
  {
    id: 51,
    title: "Premium Fitness Store (GYMREAPERS)",
    niche: "Fitness & Gym",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://www.awesomescreenshot.com/video/52026479?key=9d9674621456e2a4a27d425209b8c6f6"
  },
  {
    id: 52,
    title: "Premium Fitness Store (Vanquish Fitness)",
    niche: "Fitness & Gym",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://www.awesomescreenshot.com/video/52026309?key=1f2324fe65b1f88d671272361b8ffafb"
  },
  {
    id: 53,
    title: "Premium Fitness Store (Naked Nutrition)",
    niche: "Fitness & Gym",
    image: "https://images.unsplash.com/photo-1526506114642-999335ef07ba?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1526506114642-999335ef07ba?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://www.awesomescreenshot.com/video/52027950?key=dc9901270ea815c8e2c274554e4ea64d"
  },
  {
    id: 54,
    title: "Premium Fitness Store (Bucked Up)",
    niche: "Fitness & Gym",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&h=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=600&h=800&q=80",
    videoUrl: "https://www.awesomescreenshot.com/video/52027851?key=cfc71437d3630f7c051d2922422c0ae0"
  },
  { id: 501, title: "Premium Beauty Store 1", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1596704017254-9b5c10898154?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1596704017254-9b5c10898154?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 502, title: "Premium Beauty Store 2", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 503, title: "Premium Beauty Store 3", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 504, title: "Premium Beauty Store 4", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 505, title: "Premium Beauty Store 5", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1598440947619-2c35fd9591c4?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1598440947619-2c35fd9591c4?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 506, title: "Premium Beauty Store 6", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 507, title: "Premium Beauty Store 7", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1570172619644-dfd03d5d812e?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03d5d812e?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 508, title: "Premium Beauty Store 8", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1612442436855-64c924bc01c7?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1612442436855-64c924bc01c7?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 509, title: "Premium Beauty Store 9", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&h=800&q=80" },
  { id: 510, title: "Premium Beauty Store 10", niche: "Beauty & Skincare", image: "https://images.unsplash.com/photo-1522335643444-245ed73d1f05?auto=format&fit=crop&w=800&h=1600&q=80", thumbnail: "https://images.unsplash.com/photo-1522335643444-245ed73d1f05?auto=format&fit=crop&w=600&h=800&q=80" }
];

// Generate placeholder data
const GENERATED_DESIGNS = Array.from({ length: 4 }).map((_, i) => {
  const nichesWithoutAll = NICHES.filter(n => n !== "All");
  const randomNiche = nichesWithoutAll[i % nichesWithoutAll.length];
  
  return {
    id: i + 100,
    title: `Premium ${randomNiche} Store`,
    niche: randomNiche,
    // Using a vertical placeholder to represent a full page screenshot
    image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=1600&q=80`, 
    thumbnail: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=800&q=80`
  };
});

const DESIGNS = [...INITIAL_DESIGNS, ...GENERATED_DESIGNS];

export const StoreDesignGallery = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname}`;
  
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof DESIGNS[0] | null>(null);

  const filteredDesigns = activeTab === "All" 
    ? DESIGNS 
    : DESIGNS.filter(d => d.niche === activeTab);

  return (
    <>
      <Helmet>
        <title>Shopify Store Design Gallery | Nexcypher</title>
        <meta name="description" content="Explore premium Shopify homepage designs created for different niches, including fashion, pets, tech gadgets, print-on-demand, beauty, fitness, and more." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* Header Section */}
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-2 text-xs">
            Premium Designs
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Shopify Store <br className="hidden md:block"/> <span className="text-accent-blue italic">Design Gallery</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore premium Shopify homepage designs created for different niches, including fashion, pets, tech gadgets, print-on-demand, beauty, fitness, and more.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {NICHES.map(niche => (
              <button
                key={niche}
                onClick={() => setActiveTab(niche)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === niche 
                    ? 'bg-accent-gold text-black shadow-[0_0_20px_rgba(252,192,44,0.3)]' 
                    : 'bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-white/30'
                }`}
              >
                {niche}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredDesigns.map((design) => (
                <motion.div
                  key={design.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col hover:border-accent-blue/30 transition-colors"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                    <img 
                      src={design.thumbnail} 
                      alt={design.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    decoding="async" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                       <Button 
                        onClick={() => setSelectedItem(design)}
                        className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full font-bold px-8"
                       >
                         {('videoUrl' in design && design.videoUrl) ? <><div className="w-0 h-0 mr-2 border-l-[12px] border-l-white border-y-[8px] border-y-transparent"></div> Play Video</> : <><Maximize2 className="w-4 h-4 mr-2" /> View Design</>}
                       </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="text-[10px] text-accent-blue border-accent-blue/20 mb-3">{design.niche}</Badge>
                    <h3 className="text-xl font-bold text-white">{design.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredDesigns.length === 0 && (
            <div className="text-center py-20 text-white/50 font-medium">
              No designs found for this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
            Want a Shopify Store <br className="hidden md:block" /> Like These?
          </h2>
          <p className="text-white/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Let Nexcypher design a premium Shopify store built around your niche, products, and growth goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-bold shadow-2xl">
                Start My Store Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 h-16 text-lg font-bold">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex justify-center overflow-y-auto p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedItem(null)}
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[210]">
              <button 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-md transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`w-full ${'videoUrl' in selectedItem && selectedItem.videoUrl ? 'max-w-6xl' : 'max-w-5xl'} my-auto relative shadow-2xl rounded-2xl md:rounded-[40px] overflow-hidden cursor-default`}
              onClick={(e) => e.stopPropagation()}
            >
              {('videoUrl' in selectedItem && selectedItem.videoUrl) ? (
                <div className="w-full h-[85vh] bg-zinc-900 border-none m-0 p-0 flex flex-col relative">
                  <iframe
                    src={(selectedItem as any).videoUrl}
                    title={selectedItem.title}
                    allow="autoplay; fullscreen; microphone; camera; display-capture; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full flex-1 border-0"
                  />
                  <div className="bg-zinc-950 p-4 shrink-0 flex items-center justify-between border-t border-white/10">
                    <p className="text-zinc-400 text-sm">Having trouble playing the video?</p>
                    <a href={(selectedItem as any).videoUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
                      Open in New Tab
                    </a>
                  </div>
                </div>
              ) : (
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title!} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover block bg-zinc-900" 
                loading="lazy" decoding="async" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
