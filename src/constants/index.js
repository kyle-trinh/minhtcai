import { perceptionThumbnail, roboticThumbnail } from '../assets';

export const navLinks = [
  {
    id: 'research-interest',
    title: 'Research Interest',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'honors',
    title: 'Honors & Awards',
  },
  {
    id: 'courseworks',
    title: 'Related Courseworks',
  },
];

export const researchInterests = [
  {
    id: 'perception',
    title: 'Perception',
    description:
      'If humans can see stars like nocturnal animals, hear high frequency sounds, and feel magnetic fields using external sensors, how will the brain handle these new types of signals? How will it affect our consciousness and subconsciousness? Is it possible and how to unlock new perceptions for humans?',
    image: perceptionThumbnail,
  },
  {
    id: 'robotic',
    title: 'Robot Evolution',
    description:
      'Biological species evolve based on primal goals. How can robots be made to evolve into a high-order organized society similar to that of humans, and what would it look like? How would they cooperate, handle conflicts, yield, compromise, and come up with new, non-predetermined goals (such as performing art or exploring space)? When robots can do self-adjustment based exploration (questioning, reasoning, and creating), does it become a truly intelligent subject?',
    image: roboticThumbnail,
  },
];
