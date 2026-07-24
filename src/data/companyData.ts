import { ServiceItem, IndustryItem, WorkflowStep, ProjectItem } from '../types';

export const companyDetails = {
  name: 'RemoLance',
  subtitle: 'Global AI Data Vendor & Workforce Solutions',
  tagline: 'Connecting Global Talent. Powering AI.',
  phone: '+234 902 588 3310',
  ceoEmail: 'johnefe137@gmail.com',
  infoEmail: 'info@remolance.com',
  partnersEmail: 'partners@remolance.com',
  website: 'www.remolance.com',
  headquarters: 'Remote-First | Serving Clients Worldwide',
  metrics: {
    contributorNetwork: '25,000+',
    datasetDelivered: '1.5M+',
    precisionRate: '99.8%',
    countriesCovered: '50+'
  },
  founder: {
    name: 'Efe John',
    role: 'Founder & Managing Director',
    bio: 'Efe John established RemoLance with the vision of building a globally recognized AI data vendor that connects organizations with talented contributors while supporting the development of next-generation artificial intelligence.',
    directEmail: 'johnefe137@gmail.com',
    initials: 'EJ',
  },
  executiveSummary: `RemoLance is a global AI data vendor providing scalable data collection and workforce solutions for organizations developing artificial intelligence, machine learning, and language technologies.\n\nOur mission is to help businesses access reliable, diverse, and ethically sourced datasets by connecting them with a growing global network of contributors. We support projects involving speech, text, image, video, multilingual, survey, and research data collection while maintaining strong quality assurance standards and efficient project management.`,
  aboutUsText: `RemoLance is committed to delivering dependable AI data collection services that enable organizations to build smarter and more inclusive AI systems.\n\nWe work to bridge the gap between global organizations requiring human-generated data and qualified contributors capable of delivering high-quality project outcomes.\n\nOur approach combines professionalism, transparency, and scalable workforce management to meet the needs of clients across different industries.`,
  vision: `To become one of the world's most trusted AI data collection and workforce solution providers, supporting organizations with high-quality human data from diverse global communities.`,
  mission: `To deliver ethical, reliable, and scalable AI data collection solutions through a global contributor network while maintaining excellence in quality, security, and project execution.`,
  qualityCommitment: `Every project is managed with a focus on accuracy, consistency, confidentiality, and continuous quality improvement. We strive to meet agreed project requirements while maintaining ethical standards throughout the data collection process.`,
  commitmentStatement: `At RemoLance, we believe exceptional artificial intelligence begins with exceptional human data. We are committed to building trusted partnerships with organizations around the world by delivering dependable, scalable, and ethical data collection solutions.`,
  whyChooseUs: [
    { title: 'Global Contributor Network', description: 'Access diverse talent across continents, languages, and demographics for authentic data.' },
    { title: 'Scalable Workforce Solutions', description: 'Flexibly scale workforce capacity from dozens to thousands of contributors on demand.' },
    { title: 'Flexible Project Execution', description: 'Tailored workflows adapted to unique data collection parameters and tight schedules.' },
    { title: 'Ethical Data Collection', description: 'Strict privacy compliance, transparent consent, and fair compensation for all contributors.' },
    { title: 'Quality-Focused Delivery', description: 'Multi-stage validation and quality assurance pipelines ensuring high model accuracy.' },
    { title: 'Responsive Communication', description: 'Direct project manager support and real-time updates for seamless client collaboration.' },
    { title: 'Reliable Project Coordination', description: 'End-to-end management handling recruitment, task distribution, QA, and secure delivery.' },
  ]
};

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-data-collection',
    title: 'AI Data Collection',
    description: 'Comprehensive data gathering across modalities to fuel computer vision, NLP, and multimodal AI models.',
    iconName: 'Database',
    category: 'data-collection',
    features: ['Custom Dataset Sourcing', 'Demographic-Specific Samples', 'Multimodal Sourcing', 'Ethical Consent Management']
  },
  {
    id: 'speech-voice-recording',
    title: 'Speech & Voice Recording',
    description: 'High-fidelity audio collection in varied environments, accents, dialects, and acoustic conditions.',
    iconName: 'Mic',
    category: 'data-collection',
    features: ['Multi-accent & Dialects', 'Conversational Scripted/Spontaneous', 'Noise Environment Mapping', 'Acoustic Annotation']
  },
  {
    id: 'image-collection',
    title: 'Image Collection',
    description: 'Diverse photo collection for object detection, facial recognition, autonomous driving, and computer vision.',
    iconName: 'Camera',
    category: 'data-collection',
    features: ['Facial & Selfie Datasets', 'Object & Scene Sourcing', 'Variable Lighting & Angles', 'Metadata Tagging']
  },
  {
    id: 'video-collection',
    title: 'Video Collection',
    description: 'Action recognition, gesture tracking, and surveillance video datasets recorded by global contributors.',
    iconName: 'Video',
    category: 'data-collection',
    features: ['Human Motion & Gesture', 'Temporal Action Datasets', 'Multi-device Formats', 'Frame-by-frame Metadata']
  },
  {
    id: 'text-language-data',
    title: 'Text & Language Data Collection',
    description: 'Curated text corpora, domain-specific prompts, instructions, and RLHF human evaluation datasets.',
    iconName: 'FileText',
    category: 'data-collection',
    features: ['LLM Fine-tuning Prompts', 'Domain Specific Corpora', 'Conversational Dialogue', 'Intent & Entity Sourcing']
  },
  {
    id: 'multilingual-data',
    title: 'Multilingual Data Collection',
    description: 'Data collection covering underrepresented languages, regional dialects, and cross-cultural content.',
    iconName: 'Globe',
    category: 'data-collection',
    features: ['100+ Languages & Dialects', 'Localized Slang & Idioms', 'Parallel Corpora', 'Cultural Nuance Validation']
  },
  {
    id: 'survey-research-data',
    title: 'Survey & Research Data Collection',
    description: 'Targeted demographic research, user sentiment analysis, and field surveys for AI product design.',
    iconName: 'BarChart2',
    category: 'data-collection',
    features: ['Demographic Filtering', 'Custom Questionnaire Design', 'Real-time Panel Response', 'Statistical Verification']
  },
  {
    id: 'data-validation',
    title: 'Data Validation',
    description: 'Rigorous filtering and verification of third-party or collected raw datasets to eliminate errors.',
    iconName: 'CheckCircle2',
    category: 'processing-qa',
    features: ['Metadata Verification', 'Duplication Cleanup', 'Anomalies Detection', 'Format Standardisation']
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    description: 'Multi-pass human-in-the-loop auditing to ensure high accuracy and strict adherence to client schemas.',
    iconName: 'ShieldCheck',
    category: 'processing-qa',
    features: ['Inter-Annotator Agreement Check', 'Statistical Sampling', 'Error Taxonomy Tracking', 'Model Benchmarking']
  },
  {
    id: 'contributor-recruitment',
    title: 'Contributor Recruitment & Workforce Management',
    description: 'End-to-end sourcing, onboarding, training, and payout management for specialized global data teams.',
    iconName: 'Users',
    category: 'workforce',
    features: ['Demographic Targeted Onboarding', 'Contributor Skill Testing', 'Project Distribution', 'Secure Global Payouts']
  }
];

export const coreServices = servicesData;

export const industriesData: IndustryItem[] = [
  { title: 'Artificial Intelligence', description: 'Core training data for foundational AI models and generative systems.', iconName: 'Cpu' },
  { title: 'Machine Learning', description: 'Custom feature sets, labeled datasets, and ground truth validation.', iconName: 'Brain' },
  { title: 'Natural Language Processing', description: 'Multilingual text corpora, sentiment datasets, and intent classification.', iconName: 'MessageSquareText' },
  { title: 'Speech Recognition', description: 'Accented voice samples, conversational speech, and acoustic models.', iconName: 'Mic' },
  { title: 'Computer Vision', description: 'Diverse photo, video, facial recognition, and object detection data.', iconName: 'Eye' },
  { title: 'Healthcare Technology', description: 'Ethical health surveys, medical text annotations, and biometric data.', iconName: 'Activity' },
  { title: 'Education Technology', description: 'Multilingual educational content, speech pronunciation, and grading QA.', iconName: 'GraduationCap' },
  { title: 'Research Organizations', description: 'Academic research panels, field survey data, and cross-cultural studies.', iconName: 'BookOpen' },
  { title: 'Autonomous Systems', description: 'Obstacle video sets, road environment images, and sensor data.', iconName: 'Car' },
  { title: 'Enterprise AI Solutions', description: 'Bespoke corporate datasets, customer support audio, and chatbot evaluation.', iconName: 'Building2' }
];

export const industriesServed = industriesData;

export const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Project Consultation',
    description: 'Understanding client requirements, data specifications, privacy bounds, and target model goals.',
    details: ['Define data schema & metrics', 'Establish ethical guidelines', 'Agree on target timeline & budget']
  },
  {
    stepNumber: 2,
    title: 'Planning & Workforce Selection',
    description: 'Designing collection guidelines, sampling strategies, and defining contributor eligibility criteria.',
    details: ['Formulate clear instruction sets', 'Select target regions & demographics', 'Setup pilot test batches']
  },
  {
    stepNumber: 3,
    title: 'Contributor Recruitment',
    description: 'Mobilizing verified global contributors matched specifically to language, device, and task parameters.',
    details: ['Onboard vetted talent', 'Conduct task qualification tests', 'Ensure privacy compliance consent']
  },
  {
    stepNumber: 4,
    title: 'Data Collection',
    description: 'Contributors record, capture, or submit high-quality data through secure, streamlined workflows.',
    details: ['Real-time task monitoring', 'Secure cloud upload channels', 'Metadata auto-extraction']
  },
  {
    stepNumber: 5,
    title: 'Quality Assurance',
    description: 'Multi-layer validation by expert QA reviewers checking accuracy, completeness, and guideline compliance.',
    details: ['Rigorous human review', 'Automated heuristic checks', 'Rejection & resubmission loops']
  },
  {
    stepNumber: 6,
    title: 'Client Review',
    description: 'Sample batch delivery for client evaluation, feedback integration, and alignment verification.',
    details: ['Iterative client feedback', 'Schema adjustment if required', 'Batch sign-off approval']
  },
  {
    stepNumber: 7,
    title: 'Final Delivery',
    description: 'Secure transfer of fully validated, formatted, and anonymized datasets ready for machine learning training.',
    details: ['Encrypted dataset delivery', 'Comprehensive metadata reports', 'Post-project audit report']
  }
];

export const currentProjects: ProjectItem[] = [
  {
    id: 'proj-001',
    title: 'Global Selfie Collection Project',
    badge: 'Urgent & Active',
    status: 'Active',
    location: 'Worldwide (All Countries)',
    description: 'Capturing diverse selfie image datasets across varied age groups, ethnicities, lighting conditions, and smartphone camera models to train and benchmark inclusive computer vision algorithms.',
    compensation: '$5.00 - $25.00 per completed photo batch',
    requirements: [
      'Authentic front-facing smartphone photos',
      'Varied expressions (Neutral, Smiling, Glasses, Dim Lighting)',
      'No digital filters or heavy face retouching',
      'Verification of age (18+) & signed media consent form'
    ],
    submissionTypes: ['Neutral Lighting Selfie', 'Outdoor Sunlight Selfie', 'Indoor Dim Light Selfie', 'Side-Angle Profile Photo'],
    targetCount: '50,000 Submissions',
    currentProgress: 68,
    image: 'camera'
  },
  {
    id: 'proj-002',
    title: 'Multilingual Speech & Voice Project',
    badge: 'Popular',
    status: 'Active',
    location: 'Global (Africa, Asia, Latin America, Europe)',
    description: 'Recording short conversational audio clips and prompt readings in regional accents and native dialects to improve voice assistant speech recognition models.',
    compensation: '$15.00 - $40.00 / Audio Hour',
    requirements: [
      'Native speaker of target language or regional dialect',
      'Quiet recording environment with minimal echo',
      'Standard smartphone microphone or headset',
      'Follow reading scripts naturally without robotic cadence'
    ],
    submissionTypes: ['Scripted Sentences', 'Spontaneous Storytelling', 'Command Phrases'],
    targetCount: '2,500 Hours',
    currentProgress: 42,
    image: 'speech'
  },
  {
    id: 'proj-003',
    title: 'LLM Response & Safety Annotation',
    badge: 'High Demand',
    status: 'Active',
    location: 'Remote-Worldwide',
    description: 'Evaluating AI chatbot responses for accuracy, helpfulness, tone, safety, and cultural sensitivity across multiple languages.',
    compensation: '$18.00 - $35.00 / Hour',
    requirements: [
      'Strong written grammar & critical thinking skills',
      'Ability to spot hallucination & factual inaccuracy',
      'Familiarity with prompt engineering or text editing'
    ],
    submissionTypes: ['Response Ranking', 'Safety Flagging', 'Fact Checking Report'],
    targetCount: '100,000 Prompts',
    currentProgress: 85,
    image: 'llm'
  }
];

export const activeProjects = currentProjects;
