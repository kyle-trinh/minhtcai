import {
  perceptionThumbnail,
  roboticThumbnail,
  segmentationThumbnail,
} from '../assets';

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

export const projects = [
  {
    name: 'Hard example mining for multi-view part segmentation',
    description:
      'Part segmentation can reduce the ambiguity of meshes used in further downstream tasks for AR/VR at Meta. Multi-view(MV) part segmentation faces challenges due to complexity and high labeling costs/time (can take up to 1 min/annotation). Common failure cases at Meta and in our current pipeline involve self-occlusions, crossings between hands and feet, and complex joint actions where boundaries are unsure (forearm/upper arm under complex elbow rotations). We aim to construct novel active learning (AL) approaches to identify hard examples, maintaining ~95% of possible accuracy while reducing costs (with only ~30-35% annotated data). By selectively querying informative samples, we plan to leverage MV information to accelerate learning, offering an efficient solution for MV part segmentation.',
    image: segmentationThumbnail,
    website: 'https://mscvprojects.ri.cmu.edu/f23team4/',
    github: null,
    report: null,
    presentation:
      'https://docs.google.com/presentation/d/1OuDYo3vnvsFMXRi41v5BWOtHTd5ERmxNzolqaGSQNVM/edit#slide=id.g288207319b1_0_45',
  },
  {
    name: 'Hard example mining for multi-view part segmentation 2',
    description:
      'Part segmentation can reduce the ambiguity of meshes used in further downstream tasks for AR/VR at Meta. Multi-view(MV) part segmentation faces challenges due to complexity and high labeling costs/time (can take up to 1 min/annotation). Common failure cases at Meta and in our current pipeline involve self-occlusions, crossings between hands and feet, and complex joint actions where boundaries are unsure (forearm/upper arm under complex elbow rotations). We aim to construct novel active learning (AL) approaches to identify hard examples, maintaining ~95% of possible accuracy while reducing costs (with only ~30-35% annotated data). By selectively querying informative samples, we plan to leverage MV information to accelerate learning, offering an efficient solution for MV part segmentation.',
    image: segmentationThumbnail,
    website: 'https://mscvprojects.ri.cmu.edu/f23team4/',
    github: null,
    report: null,
    presentation:
      'https://docs.google.com/presentation/d/1OuDYo3vnvsFMXRi41v5BWOtHTd5ERmxNzolqaGSQNVM/edit#slide=id.g288207319b1_0_45',
  },
  {
    name: 'Hard example mining for multi-view part segmentation 3',
    description:
      'Part segmentation can reduce the ambiguity of meshes used in further downstream tasks for AR/VR at Meta. Multi-view(MV) part segmentation faces challenges due to complexity and high labeling costs/time (can take up to 1 min/annotation). Common failure cases at Meta and in our current pipeline involve self-occlusions, crossings between hands and feet, and complex joint actions where boundaries are unsure (forearm/upper arm under complex elbow rotations). We aim to construct novel active learning (AL) approaches to identify hard examples, maintaining ~95% of possible accuracy while reducing costs (with only ~30-35% annotated data). By selectively querying informative samples, we plan to leverage MV information to accelerate learning, offering an efficient solution for MV part segmentation.',
    image: segmentationThumbnail,
    website: 'https://mscvprojects.ri.cmu.edu/f23team4/',
    github: null,
    report: null,
    presentation:
      'https://docs.google.com/presentation/d/1OuDYo3vnvsFMXRi41v5BWOtHTd5ERmxNzolqaGSQNVM/edit#slide=id.g288207319b1_0_45',
  },
  {
    name: 'Hard example mining for multi-view part segmentation 4',
    description:
      'Part segmentation can reduce the ambiguity of meshes used in further downstream tasks for AR/VR at Meta. Multi-view(MV) part segmentation faces challenges due to complexity and high labeling costs/time (can take up to 1 min/annotation). Common failure cases at Meta and in our current pipeline involve self-occlusions, crossings between hands and feet, and complex joint actions where boundaries are unsure (forearm/upper arm under complex elbow rotations). We aim to construct novel active learning (AL) approaches to identify hard examples, maintaining ~95% of possible accuracy while reducing costs (with only ~30-35% annotated data). By selectively querying informative samples, we plan to leverage MV information to accelerate learning, offering an efficient solution for MV part segmentation.',
    image: segmentationThumbnail,
    website: 'https://mscvprojects.ri.cmu.edu/f23team4/',
    github: null,
    report: null,
    presentation:
      'https://docs.google.com/presentation/d/1OuDYo3vnvsFMXRi41v5BWOtHTd5ERmxNzolqaGSQNVM/edit#slide=id.g288207319b1_0_45',
  },
];

export const experiences = [
  {
    title: 'First Prize',
    company_name: 'AWAP CMU 2023, Mars Makeover (Team: IDC).',
    iconBg: '#383E56',
    date: 'June 2023',
  },
  {
    title: 'First Prize',
    company_name: 'AWAP CMU 2023, Mars Makeover (Team: IDC).',
    iconBg: '#E6DEDD',
    date: 'May 2023',
  },
  {
    title: 'First Prize',
    company_name: 'AWAP CMU 2023, Mars Makeover (Team: IDC).',
    iconBg: '#383E56',
    date: 'April 2023',
  },
];

export const courses = [
  { title: 'Introduction to Machine Learning', classID: 'ML101' },
  { title: 'Supervised Learning Techniques', classID: 'ML201' },
  { title: 'Unsupervised Learning and Clustering', classID: 'ML301' },
  { title: 'Natural Language Processing Fundamentals', classID: 'ML401' },
  { title: 'Deep Learning and Neural Networks', classID: 'ML501' },
  { title: 'Reinforcement Learning Applications', classID: 'ML601' },
  { title: 'Machine Learning for Computer Vision', classID: 'ML701' },
  { title: 'Time Series Analysis with Machine Learning', classID: 'ML801' },
  { title: 'Ethical Considerations in Machine Learning', classID: 'ML901' },
  { title: 'Advanced Topics in Machine Learning Research', classID: 'ML1001' },
];
