import {
  actuateLogo,
  cameraThumbnail,
  cubeThumbnail,
  fedThumbnail,
  fruitThumbnail,
  metaThumbnail,
  moonThumbnail,
  odometryThumbnail,
  perceptionThumbnail,
  roboticThumbnail,
  samThumbnail,
  segmentationThumbnail,
  sortThumbnail,
  vedaLogo,
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
    title: 'Awards & Experiences',
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
    github: 'https://github.com/MSCV-2023/AL',
    report:
      'https://docs.google.com/presentation/u/1/d/1Vw--ETSGbOeRyZrrYJSOZ6YKgWl6weSIeFCBLsHp-ZI/edit#slide=id.p',
    presentation:
      'https://docs.google.com/presentation/d/1OuDYo3vnvsFMXRi41v5BWOtHTd5ERmxNzolqaGSQNVM/edit#slide=id.g288207319b1_0_45',
  },
  {
    name: 'CubeSat Localization',
    description: 'Classify Region and Detect Landmark for Localization',
    image: cubeThumbnail,
    website: null,
    github: 'https://github.com/cmu-spacecraft-design-build-fly-2023/vision',
    report: null,
    presentation: null,
  },
  {
    name: 'MLMF: Multi-modal Meta-Learning for Federated Tasks',
    description:
      'Improve learning from missing modalites in federated settings',
    image: fedThumbnail,
    website: null,
    github: 'https://github.com/minhtcai/MLMF',
    report:
      'https://docs.google.com/presentation/d/1MwLl7O0FB1ggzywZUPWjlDJ6JFL5KK5cUmluIcyVNBc/edit#slide=id.g2a309d2eb40_0_0',
    presentation: null,
  },
  {
    name: 'Pose Estimation for Stereo Visual Odometry - Updating',
    description: 'Optical Flow and Depth for Pose Estimation on TartanAir',
    image: odometryThumbnail,
    website: null,
    github: 'https://github.com/minhtcai/iStereoVO',
    report:
      'https://docs.google.com/presentation/d/1OclG_DjVSUWer8Il-_WNDMO6jF75jfnPFaVCFgNX8RY/edit',
    presentation: null,
  },
  {
    name: 'Structured Light for Fruit Freshness Prediction',
    description: 'Is structured light better?',
    image: fruitThumbnail,
    website: null,
    github: 'https://github.com/minhtcai/fruit_freshness',
    report:
      'https://docs.google.com/presentation/d/1U7qYeAOosmj36D6bmybok-jwUEahBSwIgsE5ZTu4PPo/edit#slide=id.g21238f436ba_0_633',
    presentation: null,
  },
  {
    name: 'Fine-tuning 2D Segmentation for 3D Vision - Updating',
    description: 'Fine-tune SAM model for 3D inputs.',
    image: samThumbnail,
    website: null,
    github: 'https://github.com/minhtcai/SAM3D',
    report:
      'https://docs.google.com/presentation/d/1A8nDw6mRxrCmrL6xTCyuhMGYQotg3jcR4qrCwmoyu14/edit#slide=id.g23dd7b1c6e6_0_2',
    presentation: null,
  },
  {
    name: 'Meta Learning for Few-Shot Medical Text Classification',
    description:
      'Meta Learning with Distributionally Robust Optimization for Medical Text',
    image: metaThumbnail,
    website: null,
    github: 'https://github.com/minhtcai/meta-mimic',
    report: null,
    presentation: 'https://arxiv.org/pdf/2212.01552.pdf',
  },
  {
    name: 'Camera Next Door - Updating',
    description:
      'A home-made pipeline of incremental learning for object detection',
    image: cameraThumbnail,
    website: null,
    github: 'https://github.com/minhtcai/camera-next-door',
    report: null,
    presentation: null,
  },
  {
    name: 'YOLOv4+SORT',
    description: 'Add object tracker to YOLOv4 Darknet',
    image: sortThumbnail,
    website: null,
    github: 'https://github.com/minhtcai/darknet',
    report: null,
    presentation: null,
  },
  {
    name: 'PrismRanger Localization - Updating',
    description: 'Localization on the Moon using ground image',
    image: moonThumbnail,
    website: null,
    github: null,
    report: null,
    presentation: null,
  },
];

export const experiences = [
  {
    title: 'First Prize & Best in Show',
    points: ['hackAuton CMU (Team: Patient Safety)'],
    iconBg: '#383E56',
    date: '2023',
    link: 'https://docs.google.com/presentation/d/1U9HUG89AFapU0Pz71Q3tZr5lgBnSF4tqZ3lJitQnjI4/edit#slide=id.g27f50e000bb_0_42',
  },
  {
    title: null,
    points: ['McKinsey Digital Hackathon New York (Team: CPC4)'],
    iconBg: '#E6DEDD',
    date: '2023',
    link: 'https://hackathon-nyc2023.mckinsey.com/',
  },
  {
    title: null,
    points: ['AWAP CMU Algorithms Hackathon (Team: IDC)'],
    iconBg: '#383E56',
    date: '2023',
    link: 'https://challonge.com/ii3qtozf',
  },
  {
    title: 'Senior Data Scientist',
    company_name: 'Actuate AI',
    points: [
      'I built the vision pipeline for weapon detection. When I left Actuate, my models were deployed for 10000+ CCTV cameras at 800+ schools and facilities. Amazing environment with amazing people.',
    ],
    iconBg: '#fff',
    date: 'Nov 2018 - Jan 2022',
    icon: actuateLogo,
  },
  {
    title: null,
    points: [
      'Edward L. Kaplan, ’71, New Venture Challenge (Employer: Aegis AI)',
    ],
    iconBg: '#383E56',
    date: '2019',
    link: 'https://polsky.uchicago.edu/2019-companies/',
  },
  {
    title: 'Data Scientist',
    company_name: 'Vega Grace Inc.',
    points: [
      'I built image processing pipeline and model for skin disease detection, advised by Dr.Vinay Rawlani, the most thoughtful mentor ever.',
    ],
    iconBg: '#262626',
    date: 'Jul 2018 - Feb 2019',
    icon: vedaLogo,
  },
  {
    title: null,
    points: ['MARS Hackathon Chicago (Team: DePaul)'],
    iconBg: '#383E56',
    date: '2018',
    link: 'https://www.marshackathon.com/',
  },
  {
    title: null,
    points: ['Bosch & KPMG Mobility Hackathon Chicago (Team: Amber)'],
    iconBg: '#E6DEDD',
    date: '2018',
    link: 'https://www.linkedin.com/pulse/tackling-urban-mobility-challenges-chicago-steve-hill',
  },
  {
    title: null,
    points: ['Computer Training Institute of Chicago Full Scholarship'],
    iconBg: '#383E56',
    date: '2018',
  },
  {
    title: null,
    points: [
      'Young Entrepreneurs & Sustainability Education Hack (Team: Pupa)',
    ],
    iconBg: '#E6DEDD',
    date: '2015',
    link: 'https://www.facebook.com/yese.vn',
  },
  {
    title: null,
    points: ['FTU Excellence Student Scholarship'],
    iconBg: '#383E56',
    date: '2015',
  },
  {
    title: null,
    points: ['Hanoi Startup Weekend (Team: Beeketing)'],
    iconBg: '#E6DEDD',
    date: '2014',
    link: 'http://gktagroup.com/startup-weekend-hanoi-2014/',
  },
];

export const courses = [
  {
    title: 'Advanced Computer Vision.',
    classID: '16-820',
  },
  {
    title: 'Multimodal Machine Learning.',
    classID: '11-777',
  },
  {
    title: 'Mathematical Fundamentals for Robotics.',
    classID: '16-811',
  },
  {
    title: 'Space Robotics.',
    classID: '16-861',
  },
  {
    title: 'Physics-based Methods in Vision.',
    classID: '16-823',
  },
  {
    title: 'Learning for 3D Vision.',
    classID: '16-825',
  },
  {
    title: 'Discrete Differential Geometry.',
    classID: '15-858',
  },
  {
    title: 'Deep Multi-Task and Meta Learning.',
    classID: 'CS330',
  },
  {
    title: 'Fundamentals of Data Science.',
    classID: 'IS467',
  },
  {
    title: 'Advanced Data Analysis.',
    classID: 'CSC424',
  },
  {
    title: 'Machine Learning.',
    classID: 'CSC478',
  },
  {
    title: 'Social Networks Analysis .',
    classID: 'CSC495',
  },
  {
    title: 'Image Processing.',
    classID: 'CSC481',
  },
  {
    title: 'Computer Vision.',
    classID: 'CSC528',
  },
  {
    title: 'Mining Big Data.',
    classID: 'CSC555',
  },
  {
    title: 'Advanced Data Mining.',
    classID: 'CSC529',
  },
  {
    title: 'Neural Networks and Deep Learning.',
    classID: 'CSC578',
  },
  {
    title: 'Natural Language Processing.',
    classID: 'CSC594',
  },
  {
    title: 'Cognitive Science.',
    classID: 'CSC587',
  },
];
