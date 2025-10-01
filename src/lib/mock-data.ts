export const threatsChartData = [
  { name: 'Jan', phishing: 400, malware: 240 },
  { name: 'Feb', phishing: 300, malware: 139 },
  { name: 'Mar', phishing: 200, malware: 980 },
  { name: 'Apr', phishing: 278, malware: 390 },
  { name: 'May', phishing: 189, malware: 480 },
  { name: 'Jun', phishing: 239, malware: 380 },
];

export const threatAlertsData = [
    {
        id: 'TH-001',
        type: 'Phishing',
        severity: 'High',
        timestamp: '2 hours ago',
        details: 'Attempted login from unrecognized IP.',
    },
    {
        id: 'TH-002',
        type: 'Malware',
        severity: 'Critical',
        timestamp: '5 hours ago',
        details: 'Malicious executable detected in email attachment.',
    },
    {
        id: 'TH-003',
        type: 'Data Leak',
        severity: 'Medium',
        timestamp: '1 day ago',
        details: 'Unusual outbound traffic on port 8080.',
    },
    {
        id: 'TH-004',
        type: 'Phishing',
        severity: 'High',
        timestamp: '2 days ago',
        details: 'Suspicious link clicked by user@example.com.',
    },
     {
        id: 'TH-005',
        type: 'Brute Force',
        severity: 'Critical',
        timestamp: '3 days ago',
        details: 'Multiple failed login attempts on admin account.',
    },
];
