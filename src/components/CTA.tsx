import { motion } from "motion/react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useRef, useEffect } from "react";

export default function CTA({ activeTheme }: { activeTheme: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeAnimRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const fade = (targetOpacity: number, duration: number) => {
    if (fadeAnimRef.current) cancelAnimationFrame(fadeAnimRef.current);
    
    if (!videoRef.current) return;
    
    const currentOpacity = parseFloat(videoRef.current.style.opacity) || 0;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * progress;
      if (videoRef.current) {
        videoRef.current.style.opacity = newOpacity.toString();
      }
      
      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(animate);
      } else {
        fadeAnimRef.current = null;
      }
    };
    
    fadeAnimRef.current = requestAnimationFrame(animate);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const timeRemaining = video.duration - video.currentTime;
    
    if (timeRemaining <= 0.55 && !fadingOutRef.current && video.duration > 0) {
      fadingOutRef.current = true;
      fade(0, 500);
    }
  };

  const handleEnded = () => {
    if (!videoRef.current) return;
    videoRef.current.style.opacity = "0";
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        fadingOutRef.current = false;
        fade(1, 500);
      }
    }, 100);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.opacity = "0";
      // Initial fade in after metadata is loaded or immediately
      const onLoaded = () => fade(1, 500);
      videoRef.current.addEventListener('loadedmetadata', onLoaded);
      if (videoRef.current.readyState >= 1) onLoaded();
      
      return () => {
        if (fadeAnimRef.current) cancelAnimationFrame(fadeAnimRef.current);
        videoRef.current?.removeEventListener('loadedmetadata', onLoaded);
      };
    }
  }, []);

  return (
    <section className="min-h-[65svh] py-24 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-10"
        >
          Ready for Your Next Ad Creative?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="https://wa.me/918129917227" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold ${activeTheme.color} bg-white hover:bg-zinc-50 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl group w-full sm:w-auto`}>
            Discuss Your Brand
            <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="mailto:tibin.jacob.uiux@gmail.com"
            className="inline-flex items-center text-zinc-300 hover:text-white transition-colors duration-300 font-medium group"
          >
            <Mail className="w-5 h-5 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            Or email your store link and creative brief
          </a>
        </motion.div>
      </div>
    </section>
  );
}
