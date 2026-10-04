/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DisciplineId = 'frontend' | 'uiux' | 'graphics' | 'styling' | 'it' | 'model';

export interface Discipline {
  id: DisciplineId;
  label: string;
  pillLabel: string;
  title: string;
  tagline: string;
  quote: string;
  description: string;
  visualThemes: string[];
  evidencePillars: {
    title: string;
    description: string;
  }[];
  accentHex: string;
  accentRgb: string;
}

export interface ProjectFacet {
  label: string;
  role: string;
  summary: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  type: 'desktop' | 'mobile' | 'platform' | 'graphic';
  accentColor: string;
  accentHex: string;
  image: string;
  disciplines?: DisciplineId[];
  facets?: ProjectFacet[];
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  challengeTitle?: string;
  challengeLabel: string;
  challengeText: string;
  challengePoints?: string[];
  challengePoints2?: string[];
  solutionLabel: string;
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
    previewElement?: string;
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

export interface Venture {
  id: string;
  name: string;
  tagline: string;
  status: 'COMING SOON';
  description: string;
  highlights: string[];
  accentHex: string;
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
