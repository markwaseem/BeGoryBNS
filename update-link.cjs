const fs = require('fs');
const { execSync } = require('child_process');
const readline = require('readline');

// ANSI escape codes for colors
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=========================================");
console.log("🚀 BeGory App Link Updater");
console.log("=========================================\n");

// We add the GREEN color escape code directly into the question prompt
rl.question(`What is the new release version you just uploaded? (e.g. v1.1.0): ${GREEN}`, (version) => {
  // Reset color after the user is done typing
  process.stdout.write(RESET); 

  // Ensure the version string starts with 'v'
  if (!version.startsWith('v')) version = 'v' + version;
  
  console.log(`\nUpdating to version: ${GREEN}${version}${RESET}`);

  const filePath = './src/pages/FreedomJourneyPage.tsx';
  
  try {
    console.log(`\n📝 1. Updating code in ${filePath}...`);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // This regular expression finds the old version number in the GitHub link and replaces it
    const regex = /(releases\/download\/)v[0-9.]+(\/app-release\.apk)/;
    code = code.replace(regex, `$1${version}$2`);
    
    fs.writeFileSync(filePath, code);
    console.log(`✅ Link successfully updated to ${GREEN}${version}${RESET}!`);

    console.log(`\n☁️  2. Pushing updates to GitHub...`);
    // Run the git commands automatically
    execSync('git add src/pages/FreedomJourneyPage.tsx');
    execSync(`git commit -m "Automated update: App link changed to ${version}"`);
    execSync('git push');
    
    console.log('\n🎉 SUCCESS! GitHub is updated.');
    console.log('⚡ Cloudflare is building your site right now. It will be live in ~60 seconds.');
  } catch (error) {
    console.error('\n❌ An error occurred:', error.message);
  } finally {
    rl.close();
  }
});