/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  type: 'desktop' | 'mobile';
  accentColor: string;
  accentHex: string;
  image: string;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  challengeTitle?: string; // or Problem
  challengeLabel: string; // "THE PROBLEM" or "THE CHALLENGE"
  challengeText: string;
  challengePoints?: string[];
  challengePoints2?: string[];
  solutionLabel: string; // "THE SOLUTION"
  solutionTitle: string;
  solutionText: string;
  solutionMetrics?: { value: string; label: string }[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: {
    id: string;
    title: string;
    description: string;
    icon: string;
    previewElement?: string; // Custom mock visual if needed
  }[];
  techFoundation?: {
    id: string;
    category: string;
    title: string;
    description: string;
  }[];
  visualJourneyText?: string;
  visualJourneyImages: string[];
  outcomeLabel: string;
  outcomeTitle: string;
  outcomeText: string;
  outcomeActionLabel: string;
  designedFeatures?: string[];
  nextProject?: {
    id: string;
    title: string;
  };
}

export interface Experience {
  id: string;
  yearRange: string;
  role: string;
  company: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
}
