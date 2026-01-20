"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, CheckCircle, Cloud, Star, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Notification {
  id: number;
  type: "booking" | "signup" | "review" | "credits";
  name: string;
  company?: string;
  location: string;
  time: string;
  message: string;
}

const sampleNotifications: Notification[] = [
  {
    id: 1,
    type: "booking",
    name: "Sarah",
    company: "TechFlow",
    location: "San Francisco, US",
    time: "2 minutes ago",
    message: "just booked a cloud audit",
  },
  {
    id: 2,
    type: "credits",
    name: "Michael",
    company: "FinanceHub",
    location: "London, UK",
    time: "5 minutes ago",
    message: "applied for AWS credits",
  },
  {
    id: 3,
    type: "signup",
    name: "Amara",
    company: "HealthSync",
    location: "Lagos, NG",
    time: "8 minutes ago",
    message: "started using CloudPulse",
  },
  {
    id: 4,
    type: "review",
    name: "David",
    company: "DataPrime",
    location: "Berlin, DE",
    time: "12 minutes ago",
    message: "left a 5-star review",
  },
  {
    id: 5,
    type: "booking",
    name: "Emily",
    company: "ScaleUp",
    location: "Toronto, CA",
    time: "15 minutes ago",
    message: "scheduled a consultation",
  },
  {
    id: 6,
    type: "credits",
    name: "James",
    company: "CloudNine",
    location: "Sydney, AU",
    time: "18 minutes ago",
    message: "received $25,000 in AWS credits",
  },
];

interface SocialProofToastProps {
  enabled?: boolean;
  initialDelay?: number; // Delay before first notification (ms)
  interval?: number; // Time between notifications (ms)
  duration?: number; // How long each notification is shown (ms)
}

export function SocialProofToast({
  enabled = true,
  initialDelay = 10000,
  interval = 30000,
  duration = 5000,
}: SocialProofToastProps) {
  const [currentNotification, setCurrentNotification] =
    useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!enabled || isDismissed) return;

    // Check if user has dismissed notifications this session
    const hasDissmissed = sessionStorage.getItem("socialProofDismissed");
    if (hasDissmissed) {
      setIsDismissed(true);
      return;
    }

    let notificationIndex = 0;

    const showNotification = () => {
      const notification = sampleNotifications[notificationIndex];
      setCurrentNotification(notification);
      setIsVisible(true);

      // Hide after duration
      setTimeout(() => {
        setIsVisible(false);
      }, duration);

      // Move to next notification
      notificationIndex = (notificationIndex + 1) % sampleNotifications.length;
    };

    // Show first notification after initial delay
    const initialTimer = setTimeout(showNotification, initialDelay);

    // Then show notifications at regular intervals
    const intervalTimer = setInterval(showNotification, interval);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [enabled, isDismissed, initialDelay, interval, duration]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("socialProofDismissed", "true");
  };

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "booking":
        return <Calendar className="w-4 h-4 text-brand" />;
      case "signup":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "review":
        return <Star className="w-4 h-4 text-amber-500" />;
      case "credits":
        return <Cloud className="w-4 h-4 text-blue-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-brand" />;
    }
  };

  if (!enabled || isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: 0 }}
          className="fixed bottom-4 left-4 z-50 max-w-sm"
        >
          <div className="bg-card border rounded-xl shadow-lg p-4 pr-10 relative">
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Dismiss notifications"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>

            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                {getIcon(currentNotification.type)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-semibold">{currentNotification.name}</span>
                  {currentNotification.company && (
                    <span className="text-muted-foreground">
                      {" "}
                      from {currentNotification.company}
                    </span>
                  )}
                  <span className="text-muted-foreground">
                    {" "}
                    {currentNotification.message}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {currentNotification.location} • {currentNotification.time}
                </p>
              </div>
            </div>

            {/* Verified badge */}
            <div className="flex items-center gap-1 mt-2 pt-2 border-t">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span className="text-xs text-muted-foreground">
                Verified by Morpheex
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
