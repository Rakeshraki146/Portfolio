import fs from 'fs';
import path from 'path';

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`\x1b[32m✔ PASS\x1b[0m: ${message}`);
    passCount++;
  } else {
    console.error(`\x1b[31m✖ FAIL\x1b[0m: ${message}`);
    failCount++;
  }
}

console.log('\n========================================');
console.log('   PORTFOLIO AUTOMATED TEST SUITE   ');
console.log('   Candidate: B Rakesh             ');
console.log('========================================\n');

// 1. Check Data Structure File
console.log('--- Suite 1: Data Integrity & Requirements Validation ---');
const dataFilePath = path.resolve('src/data/portfolioData.ts');
assert(fs.existsSync(dataFilePath), 'portfolioData.ts exists at src/data/');

const dataContent = fs.readFileSync(dataFilePath, 'utf-8');

// Check Personal Information
assert(dataContent.includes('B Rakesh'), 'Candidate name "B Rakesh" present');
assert(dataContent.includes('rakeshboya8@gmail.com'), 'Email "rakeshboya8@gmail.com" present');
assert(dataContent.includes('+91 9704378386'), 'Mobile "+91 9704378386" present');
assert(dataContent.includes('www.linkedin.com/in/b-rakesh-060044322'), 'LinkedIn URL present');
assert(dataContent.includes('https://github.com/Rakeshraki146'), 'GitHub URL present');

// Check Education
assert(dataContent.includes('Lovely Professional University'), 'Education: Lovely Professional University present');
assert(dataContent.includes('6.32'), 'CGPA: 6.32 present');
assert(dataContent.includes('Prathibha Junior College'), 'Intermediate: Prathibha Junior College present');
assert(dataContent.includes('98%'), 'Intermediate Percentage: 98% present');
assert(dataContent.includes('SSC: 100%'), 'Updated score: "SSC: 100%" present');

// Check Training
assert(dataContent.includes('Basics of Data Structures and Algorithms'), 'Training: Basics of Data Structures and Algorithms present');
assert(dataContent.includes('Centre for Professional Enhancement, Lovely Professional University'), 'Training Org: Centre for Professional Enhancement present');
assert(dataContent.includes('July 2026'), 'Training Date: July 2026 present');
assert(dataContent.includes('A Grade'), 'Training Achievement: "A Grade" present');

// Check Certifications
assert(dataContent.includes('https://lnkd.in/p/dQqGJKgJ'), 'Certificate C++ URL: https://lnkd.in/p/dQqGJKgJ present');
assert(dataContent.includes('int428.codeup_compressed.pdf'), 'Certificate AI Essentials PDF present');
assert(dataContent.includes('https://lnkd.in/p/d2MHibrR'), 'Certificate React.js URL: https://lnkd.in/p/d2MHibrR present');
assert(dataContent.includes('1Lk6em6nnEuyoUNDAYdnlMyaOq-q3f9rI'), 'Certificate DBMS Drive link present');

// Check Projects
assert(dataContent.includes('Indian AI Property Marketplace'), 'Project 1: Indian AI Property Marketplace present');
assert(dataContent.includes('September 2026'), 'Project 1 Date: September 2026 present');
assert(dataContent.includes('Extra Trees Regressor'), 'Project 1 ML: Extra Trees Regressor present');
assert(dataContent.includes('Streamlit Community Cloud'), 'Project 1 Deployment: Streamlit Community Cloud present');
assert(dataContent.includes('Deadlock Detection & Recovery Toolkit'), 'Project 2: Deadlock Detection & Recovery Toolkit present');
assert(dataContent.includes('November 2025'), 'Project 2 Date: November 2025 present');
assert(dataContent.includes("Banker's Algorithm"), "Project 2: Banker's Algorithm present");
assert(dataContent.includes('Resource Allocation Graph'), 'Project 2: Resource Allocation Graph (RAG) present');

// Check Strict Skills Constraint
const forbiddenSkills = ['Docker', 'Kubernetes', 'AWS', 'Angular', 'Vue', 'Django', 'Flask', 'Spring Boot', 'GraphQL', 'PHP', 'Ruby', 'MongoDB'];
forbiddenSkills.forEach(forbidden => {
  assert(!dataContent.includes(`"${forbidden}"`), `Strict Compliance: Forbidden unlisted tech "${forbidden}" is NOT included`);
});

// 2. Check Static Assets
console.log('\n--- Suite 2: Static Assets & Media Verification ---');
assert(fs.existsSync('public/profile.jpg'), 'Profile photo public/profile.jpg exists');
const profileStat = fs.statSync('public/profile.jpg');
assert(profileStat.size > 50000, `Profile photo is a valid high-res image (size: ${(profileStat.size/1024).toFixed(1)} KB)`);

assert(fs.existsSync('public/favicon.svg'), 'Favicon public/favicon.svg exists');
assert(fs.existsSync('public/int428.codeup_compressed.pdf'), 'AI Certificate PDF exists in public directory');
assert(fs.existsSync('dist/int428.codeup_compressed.pdf'), 'AI Certificate PDF exists in dist bundle');
assert(fs.existsSync('index.html'), 'index.html exists');

// 3. Check Components and Navigation Anchors
console.log('\n--- Suite 3: Components & Navigation Structure ---');
const requiredComponents = [
  'NeuralBackground.tsx',
  'Navbar.tsx',
  'Hero.tsx',
  'About.tsx',
  'Skills.tsx',
  'Projects.tsx',
  'ProjectModal.tsx',
  'Training.tsx',
  'Certificates.tsx',
  'Education.tsx',
  'ResumeSection.tsx',
  'GitHubSection.tsx',
  'Contact.tsx',
  'Footer.tsx'
];

requiredComponents.forEach(comp => {
  assert(fs.existsSync(path.join('src/components', comp)), `Component exists: ${comp}`);
});

// Check Sections in App.tsx
const appContent = fs.readFileSync('src/App.tsx', 'utf-8');
const expectedSections = ['home', 'about', 'skills', 'projects', 'training', 'certificates', 'education', 'resume', 'contact'];
expectedSections.forEach(sec => {
  assert(appContent.includes(`'${sec}'`), `Navigation spy tracks section: #${sec}`);
});

// 4. Check Production Build Output
console.log('\n--- Suite 4: Production Distribution Bundle ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html generated');
assert(fs.existsSync('dist/profile.jpg'), 'dist/profile.jpg bundled');
assert(fs.existsSync('dist/favicon.svg'), 'dist/favicon.svg bundled');

const distAssets = fs.existsSync('dist/assets') ? fs.readdirSync('dist/assets') : [];
const hasJs = distAssets.some(f => f.endsWith('.js'));
const hasCss = distAssets.some(f => f.endsWith('.css'));
assert(hasJs, `dist/assets contains compiled JS bundle: ${distAssets.find(f => f.endsWith('.js'))}`);
assert(hasCss, `dist/assets contains compiled CSS bundle: ${distAssets.find(f => f.endsWith('.css'))}`);

console.log('\n========================================');
console.log(`TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('========================================\n');

if (failCount > 0) {
  process.exit(1);
}
