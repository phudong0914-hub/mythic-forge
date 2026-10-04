#!/usr/bin/env node

/**
 * Sacred Laws Quality Gate — Anti-Slop & Integrity Linter
 * 
 * Part of Mythic Forge Engineering Governance.
 * Enforces:
 * 1. Reality Law: No pseudocode or lazy placeholders.
 * 2. Integrity Law: No fragmented snippet placeholders.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const FORBIDDEN_PATTERNS = [
  { pattern: /\/\/\s*\.\.\.\s*keep existing/i, rule: 'Integrity Law: Avoid fragmented snippet placeholders ("// ... keep existing ...")' },
  { pattern: /\/\/\s*\.\.\.\s*rest of/i, rule: 'Integrity Law: Avoid lazy placeholders ("// ... rest of ...")' },
  { pattern: /\/\/\s*TODO:\s*implement later/i, rule: 'Reality Law: Never commit pseudocode ("// TODO: implement later")' },
  { pattern: /\/\/\s*your code goes here/i, rule: 'Reality Law: Do not leave placeholder comments ("// your code goes here")' }
];

const SCAN_DIRS = ['src'];
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs']);

let violations = 0;

function scanDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (entry !== 'node_modules' && entry !== '.next') {
        scanDir(fullPath);
      }
    } else if (stat.isFile()) {
      const ext = fullPath.slice(fullPath.lastIndexOf('.'));
      if (EXTENSIONS.has(ext)) {
        checkFile(fullPath);
      }
    }
  }
}

function checkFile(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    for (const { pattern, rule } of FORBIDDEN_PATTERNS) {
      if (pattern.test(line)) {
        console.error(`❌ [Violation] ${relative(process.cwd(), filePath)}:${index + 1}`);
        console.error(`   ${rule}`);
        console.error(`   Line: ${line.trim()}`);
        violations++;
      }
    }
  });
}

console.log('🔍 Checking code against Mythic Forge Sacred Laws...');

for (const dir of SCAN_DIRS) {
  try {
    scanDir(dir);
  } catch (err) {
    console.error(`Error scanning directory ${dir}:`, err.message);
  }
}

if (violations > 0) {
  console.error(`\n❌ Failed: Found ${violations} Sacred Law violation(s).`);
  process.exit(1);
} else {
  console.log('✅ Passed: No Sacred Law violations detected in codebase.');
  process.exit(0);
}
