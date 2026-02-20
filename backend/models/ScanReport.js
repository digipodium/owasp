const mongoose = require('mongoose');

const VulnerabilitySchema = new mongoose.Schema({
    id: String,
    category: String,
    severity: {
        type: String,
        enum: ['Critical', 'High', 'Medium', 'Low', 'Info']
    },
    description: String,
    details: String,
    remediation: String,
    score: Number
});

const ScanReportSchema = new mongoose.Schema({
    target: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    summary: {
        riskScore: Number,
        vulnerabilitiesFound: Number,
        checksPerformed: Number
    },
    owaspTop10: [VulnerabilitySchema]
});

module.exports = mongoose.model('ScanReport', ScanReportSchema);
