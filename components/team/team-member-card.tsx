"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, User } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  certifications: string[];
  skills: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-card border rounded-2xl p-6 hover:border-brand/30 transition-all group">
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand/20 to-brand-accent/20 flex items-center justify-center group-hover:from-brand/30 group-hover:to-brand-accent/30 transition-colors">
          <User className="w-8 h-8 text-brand" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-sm text-brand">{member.role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {member.bio}
      </p>

      {/* Certifications */}
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2">
          Certifications
        </p>
        <div className="flex flex-wrap gap-1">
          {member.certifications.map((cert) => (
            <Badge
              key={cert}
              variant="outline"
              className="text-xs bg-brand/5 border-brand/20"
            >
              {cert}
            </Badge>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2">
          Core Skills
        </p>
        <div className="flex flex-wrap gap-1">
          {member.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Social Links */}
      {member.social && (
        <div className="flex gap-2 pt-4 border-t">
          {member.social.linkedin && (
            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.social.twitter && (
            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.social.github && (
            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
