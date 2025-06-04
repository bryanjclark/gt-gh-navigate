document.addEventListener('keydown', function(event) {
  // Check if Command+O (Mac) or Ctrl+O (Windows/Linux) is pressed
  if ((event.metaKey || event.ctrlKey) && event.key === 'o') {
    const currentUrl = window.location.href;
    let newUrl = null;

    // Check if we're on GitHub
    if (currentUrl.includes('github.com')) {
      // Parse GitHub PR URL: https://github.com/owner/repo/pull/number
      const githubMatch = currentUrl.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull\/(\d+)/);
      
      if (githubMatch) {
        const owner = githubMatch[1];
        const repo = githubMatch[2];
        const prNumber = githubMatch[3];
        
        // Convert to Graphite URL
        newUrl = `https://app.graphite.dev/github/pr/${owner}/${repo}/${prNumber}`;
      }
    }
    // Check if we're on Graphite
    else if (currentUrl.includes('app.graphite.dev')) {
      // Parse Graphite PR URL: https://app.graphite.dev/github/pr/owner/repo/number
      const graphiteMatch = currentUrl.match(/app\.graphite\.dev\/github\/pr\/([^\/]+)\/([^\/]+)\/(\d+)/);
      
      if (graphiteMatch) {
        const owner = graphiteMatch[1];
        const repo = graphiteMatch[2];
        const prNumber = graphiteMatch[3];
        
        // Convert to GitHub URL
        newUrl = `https://github.com/${owner}/${repo}/pull/${prNumber}`;
      }
    }

    // Navigate to the new URL if we found a match
    if (newUrl) {
      event.preventDefault();
      window.location.href = newUrl;
    }
  }
});