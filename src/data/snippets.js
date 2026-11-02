export const CATEGORIES = [
  { id: 'all', label: 'All Samples', icon: 'Terminal' },
  { id: 'networking', label: 'Networking & SSH', icon: 'Network' },
  { id: 'cli', label: 'CLI & Terminal', icon: 'Command' },
  { id: 'devops', label: 'DevOps & Cloud', icon: 'Cloud' },
  { id: 'programming', label: 'Code & Syntax', icon: 'Code' },
  { id: 'database', label: 'SQL & Database', icon: 'Database' },
  { id: 'configs', label: 'Configs & Infra', icon: 'FileCode' },
];

export const TECHNOLOGIES = [
  { id: 'all', label: 'All Tech' },
  { id: 'bash', label: 'Bash / Linux' },
  { id: 'ssh', label: 'SSH & Remote' },
  { id: 'docker', label: 'Docker' },
  { id: 'kubernetes', label: 'Kubernetes' },
  { id: 'git', label: 'Git' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'python', label: 'Python' },
  { id: 'go', label: 'Go' },
  { id: 'rust', label: 'Rust' },
  { id: 'sql', label: 'SQL' },
  { id: 'nginx', label: 'Nginx' },
  { id: 'yaml', label: 'YAML' },
];

export const SORT_OPTIONS = [
  { id: 'recommended', label: 'Curated Order' },
  { id: 'title-asc', label: 'Title (A → Z)' },
  { id: 'title-desc', label: 'Title (Z → A)' },
  { id: 'length-asc', label: 'Length: Shortest First' },
  { id: 'length-desc', label: 'Length: Longest First' },
  { id: 'diff-asc', label: 'Difficulty: Easy → Hard' },
  { id: 'diff-desc', label: 'Difficulty: Hard → Easy' },
  { id: 'language', label: 'Group by Language' },
];

export const SNIPPETS = [
  // --- NETWORKING & SSH ---
  {
    id: 'net-ssh-portforward',
    title: 'SSH Local Port Forwarding Tunnel',
    category: 'networking',
    subCategory: 'ssh',
    language: 'ssh',
    difficulty: 'medium',
    type: 'command',
    prompt: 'user@workstation:~$',
    content: 'ssh -i ~/.ssh/id_ed25519 -p 2222 -L 8080:127.0.0.1:80 deploy@192.168.1.105',
    description: 'Establishes a secure SSH tunnel forwarding local port 8080 to remote port 80 on target 192.168.1.105 using custom port 2222 and an Ed25519 identity file.',
    tags: ['ssh', 'networking', 'tunnel', 'security']
  },
  {
    id: 'net-ssh-socks5',
    title: 'Dynamic SOCKS5 SSH Proxy',
    category: 'networking',
    subCategory: 'ssh',
    language: 'ssh',
    difficulty: 'easy',
    type: 'command',
    prompt: 'user@workstation:~$',
    content: 'ssh -D 1080 -C -q -N bastion.corp.internal -p 2202',
    description: 'Creates a dynamic SOCKS5 proxy on local port 1080 with compression (-C), quiet mode (-q), and no remote command execution (-N).',
    tags: ['ssh', 'socks5', 'proxy', 'bastion']
  },
  {
    id: 'net-scp-recursive',
    title: 'Secure Remote File Copy (SCP)',
    category: 'networking',
    subCategory: 'ssh',
    language: 'ssh',
    difficulty: 'easy',
    type: 'command',
    prompt: 'admin@prod-node:~$',
    content: 'scp -P 2200 -C -r /var/www/dist/ root@10.0.4.15:/var/www/backup_v2/',
    description: 'Recursively copies directory contents to a remote server on custom port 2200 with gzip compression enabled.',
    tags: ['scp', 'ssh', 'file-transfer']
  },
  {
    id: 'net-rsync-ssh',
    title: 'Rsync Archive over Custom SSH Port',
    category: 'networking',
    subCategory: 'ssh',
    language: 'ssh',
    difficulty: 'medium',
    type: 'command',
    prompt: 'sysadmin@storage:~$',
    content: "rsync -avzP --exclude='.git' -e 'ssh -p 2244' ./build/ admin@10.10.0.5:/srv/app/",
    description: 'Synchronizes build directory preserving permissions, timestamps (-a), compressing (-z), showing progress (-P), excluding git history.',
    tags: ['rsync', 'ssh', 'sync', 'sysadmin']
  },
  {
    id: 'net-ssh-jump',
    title: 'SSH Connection via Proxy Jump Host',
    category: 'networking',
    subCategory: 'ssh',
    language: 'ssh',
    difficulty: 'medium',
    type: 'command',
    prompt: 'dev@laptop:~$',
    content: 'ssh -J jumpuser@bastion.cloud.net:2222 -i ~/.ssh/prod_key admin@10.0.10.45',
    description: 'Connects to private internal node 10.0.10.45 through a perimeter bastion jump server (-J) without exposing internal subnet to public internet.',
    tags: ['ssh', 'bastion', 'proxy-jump', 'security']
  },
  {
    id: 'net-lsof-listen',
    title: 'Find Process Listening on Port',
    category: 'networking',
    subCategory: 'networking',
    language: 'bash',
    difficulty: 'easy',
    type: 'command',
    prompt: 'root@server:~#',
    content: 'lsof -i :8080 -sTCP:LISTEN -P -n',
    description: 'Inspects all processes listening on TCP port 8080 with port numbers (-P) and raw IP addresses (-n) instead of DNS resolution.',
    tags: ['lsof', 'port', 'diagnostics']
  },
  {
    id: 'net-ip-route',
    title: 'Linux IP Route & Gateway Configuration',
    category: 'networking',
    subCategory: 'networking',
    language: 'bash',
    difficulty: 'medium',
    type: 'command',
    prompt: 'root@gateway:~#',
    content: 'sudo ip route add 10.244.0.0/16 via 192.168.1.254 dev eth0 proto static metric 100',
    description: 'Adds a static network route for subnet 10.244.0.0/16 through gateway 192.168.1.254 on interface eth0 with metric priority 100.',
    tags: ['ip', 'routing', 'gateway', 'linux']
  },
  {
    id: 'net-curl-jwt',
    title: 'cURL API Request with Bearer Token',
    category: 'networking',
    subCategory: 'cli',
    language: 'bash',
    difficulty: 'hard',
    type: 'command',
    prompt: 'developer@terminal:~$',
    content: 'curl -sS -X POST "https://api.cloud.internal/v2/clusters" -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d \'{"replicas": 3, "zone": "us-east-1a"}\'',
    description: 'Sends a JSON POST payload over HTTPS authenticated with a bearer token, silencing meter while showing errors (-sS).',
    tags: ['curl', 'http', 'api', 'json']
  },
  {
    id: 'net-iptables-rate',
    title: 'Iptables SSH Brute-Force Rate Limiting',
    category: 'networking',
    subCategory: 'security',
    language: 'bash',
    difficulty: 'hard',
    type: 'command',
    prompt: 'root@firewall:~#',
    content: 'iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 4 -j DROP',
    description: 'Drops inbound SSH connection attempts exceeding 4 hits within 60 seconds using iptables state and recent modules.',
    tags: ['iptables', 'security', 'firewall', 'rate-limit']
  },
  {
    id: 'net-dig-trace',
    title: 'DNS Resolution Trace with Dig',
    category: 'networking',
    subCategory: 'networking',
    language: 'bash',
    difficulty: 'easy',
    type: 'command',
    prompt: 'user@client:~$',
    content: 'dig +trace +nodnssec @8.8.8.8 internal.service.consul ANY',
    description: 'Traces recursive DNS delegation from root nameservers to authoritative name servers for a target host.',
    tags: ['dig', 'dns', 'troubleshooting']
  },
  {
    id: 'net-tcpdump-ssl',
    title: 'Tcpdump Capture TLS Handshake Packets',
    category: 'networking',
    subCategory: 'networking',
    language: 'bash',
    difficulty: 'hard',
    type: 'command',
    prompt: 'root@gateway:~#',
    content: "sudo tcpdump -i eth0 -nn -s0 -v 'tcp port 443 and (tcp[tcpflags] & (tcp-syn|tcp-fin) != 0)' -w /tmp/tls_handshakes.pcap",
    description: 'Captures SYN and FIN flags on HTTPS port 443 with un-truncated packet snaplen (-s0) into a Wireshark pcap file.',
    tags: ['tcpdump', 'wireshark', 'networking', 'security']
  },
  {
    id: 'net-nmap-syn',
    title: 'Fast TCP SYN Stealth Port Scan',
    category: 'networking',
    subCategory: 'security',
    language: 'bash',
    difficulty: 'medium',
    type: 'command',
    prompt: 'secops@kali:~$',
    content: 'sudo nmap -sS -p 22,80,443,3306,5432,8080,8443 -T4 -v -Pn 192.168.1.0/24',
    description: 'Performs raw SYN stealth scan against common infrastructure ports across subnet without ping probing (-Pn).',
    tags: ['nmap', 'security', 'portscan', 'recon']
  },
  {
    id: 'net-openssl-cert',
    title: 'Inspect Remote TLS Certificate Expiry Dates',
    category: 'networking',
    subCategory: 'security',
    language: 'bash',
    difficulty: 'hard',
    type: 'command',
    prompt: 'sre@ops:~$',
    content: 'echo | openssl s_client -servername api.internal.org -connect api.internal.org:443 2>/dev/null | openssl x509 -noout -dates -subject',
    description: 'Extracts validity dates and subject common name from a remote server TLS certificate using SNI servername extension.',
    tags: ['openssl', 'tls', 'ssl', 'certificate']
  },

  // --- CLI & TERMINAL ---
  {
    id: 'cli-git-graph',
    title: 'Git Visual Commit History Graph',
    category: 'cli',
    subCategory: 'git',
    language: 'git',
    difficulty: 'easy',
    type: 'command',
    prompt: 'dev@macbook:~/repo$',
    content: 'git log --graph --oneline --decorate --all -n 15',
    description: 'Displays a compact ASCII branch graph of the last 15 commits across all local and remote branches.',
    tags: ['git', 'cli', 'version-control']
  },
  {
    id: 'cli-git-interactive-rebase',
    title: 'Git Autosquash & Interactive Rebase',
    category: 'cli',
    subCategory: 'git',
    language: 'git',
    difficulty: 'medium',
    type: 'command',
    prompt: 'dev@macbook:~/repo$',
    content: 'git rebase -i --autosquash --autostash origin/main',
    description: 'Rebases current feature branch onto origin/main while auto-stashing dirty changes and ordering fixup commits.',
    tags: ['git', 'rebase', 'cli']
  },
  {
    id: 'cli-find-exec-rm',
    title: 'Find Stale Logs & Delete Safely',
    category: 'cli',
    subCategory: 'bash',
    language: 'bash',
    difficulty: 'medium',
    type: 'command',
    prompt: 'root@server:~#',
    content: 'find /var/log/apps -type f -name "*.log" -mtime +14 -exec rm -f {} +',
    description: 'Locates regular log files older than 14 days and batches them into a single rm invocation for high performance.',
    tags: ['find', 'bash', 'linux', 'sysadmin']
  },
  {
    id: 'cli-grep-context',
    title: 'Recursive Regex Grep with Line Numbers',
    category: 'cli',
    subCategory: 'bash',
    language: 'bash',
    difficulty: 'medium',
    type: 'command',
    prompt: 'engineer@node:~$',
    content: 'grep -rEIn --color=always "(FATAL|CRITICAL|PANIC)" /var/log/services/ -C 3',
    description: 'Recursively searches for fatal crash keywords in files, ignoring binary files (-I), displaying 3 lines of surrounding context (-C 3).',
    tags: ['grep', 'regex', 'terminal', 'debugging']
  },
  {
    id: 'cli-ps-awk-mem',
    title: 'Identify Top Memory Consuming Processes',
    category: 'cli',
    subCategory: 'bash',
    language: 'bash',
    difficulty: 'medium',
    type: 'command',
    prompt: 'ops@prod-server:~$',
    content: "ps aux --sort=-%mem | awk 'NR<=10{printf \"%-8s %-6s %-5s %s\\n\", $1, $2, $4, $11}'",
    description: 'Sorts processes by memory usage descending and prints a formatted table of top 10 consumers with user, PID, %mem, and binary.',
    tags: ['ps', 'awk', 'linux', 'memory']
  },
  {
    id: 'cli-tar-extract',
    title: 'Extract Compressed Tarball with Stripped Components',
    category: 'cli',
    subCategory: 'bash',
    language: 'bash',
    difficulty: 'easy',
    type: 'command',
    prompt: 'user@server:~$',
    content: 'tar -xzvf archive-latest.tar.gz -C /opt/app --strip-components=1',
    description: 'Decompresses and unpacks a gzip tar archive into /opt/app while stripping the top-level directory folder.',
    tags: ['tar', 'compression', 'linux']
  },
  {
    id: 'cli-sed-in-place',
    title: 'Stream Editor In-Place Regex Substitution',
    category: 'cli',
    subCategory: 'bash',
    language: 'bash',
    difficulty: 'hard',
    type: 'command',
    prompt: 'deploy@worker:~$',
    content: "sed -i.bak -E 's/(ENVIRONMENT=)[a-z]+$/\\1production/' /etc/default/app-service",
    description: 'Creates a backup file and uses extended regex to update the ENVIRONMENT variable to production.',
    tags: ['sed', 'regex', 'configuration']
  },
  {
    id: 'cli-journalctl-follow',
    title: 'Systemd Live Journal Tail with Error Level',
    category: 'cli',
    subCategory: 'bash',
    language: 'bash',
    difficulty: 'easy',
    type: 'command',
    prompt: 'root@server:~#',
    content: 'journalctl -u nginx.service -p err..emerg -n 50 --no-pager -f',
    description: 'Continuously streams (-f) the last 50 log events from nginx systemd service filtering for priority err to emergency.',
    tags: ['journalctl', 'systemd', 'linux', 'logs']
  },

  // --- DEVOPS & CLOUD ---
  {
    id: 'devops-docker-run-pg',
    title: 'Spin Up Isolated PostgreSQL Container',
    category: 'devops',
    subCategory: 'docker',
    language: 'docker',
    difficulty: 'hard',
    type: 'command',
    prompt: 'dev@docker-host:~$',
    content: 'docker run -d --name pg-core -p 5432:5432 -e POSTGRES_PASSWORD=secretKey -v pg_data:/var/lib/postgresql/data --restart unless-stopped postgres:16-alpine',
    description: 'Launches a detached PostgreSQL 16 container with a named volume, port mapping, environment credentials, and automated restart policy.',
    tags: ['docker', 'postgres', 'container', 'devops']
  },
  {
    id: 'devops-docker-compose-up',
    title: 'Docker Compose Build and Zero-Downtime Up',
    category: 'devops',
    subCategory: 'docker',
    language: 'docker',
    difficulty: 'easy',
    type: 'command',
    prompt: 'dev@docker-host:~/app$',
    content: 'docker compose -f docker-compose.prod.yml up -d --build --remove-orphans',
    description: 'Rebuilds images and starts production containers in background while cleaning up orphan containers not declared in compose.',
    tags: ['docker-compose', 'devops', 'deployment']
  },
  {
    id: 'devops-k8s-pod-status',
    title: 'Kubectl Query Unhealthy Pods Across Namespaces',
    category: 'devops',
    subCategory: 'kubernetes',
    language: 'kubernetes',
    difficulty: 'medium',
    type: 'command',
    prompt: 'sre@control-plane:~$',
    content: 'kubectl get pods -A --field-selector status.phase!=Running,status.phase!=Succeeded -o wide',
    description: 'Inspects all namespaces for pods that are failing, pending, or crash-looping with node and IP details.',
    tags: ['kubectl', 'kubernetes', 'sre', 'cloud']
  },
  {
    id: 'devops-k8s-portforward',
    title: 'Kubectl Forward Internal Service to Localhost',
    category: 'devops',
    subCategory: 'kubernetes',
    language: 'kubernetes',
    difficulty: 'easy',
    type: 'command',
    prompt: 'sre@workstation:~$',
    content: 'kubectl port-forward svc/prometheus-k8s 9090:9090 -n monitoring',
    description: 'Routes traffic from local port 9090 directly to the Prometheus monitoring service in the cluster.',
    tags: ['kubectl', 'kubernetes', 'monitoring']
  },
  {
    id: 'devops-k8s-rollout',
    title: 'Kubectl Deployment Rolling Restart & Status',
    category: 'devops',
    subCategory: 'kubernetes',
    language: 'kubernetes',
    difficulty: 'medium',
    type: 'command',
    prompt: 'sre@workstation:~$',
    content: 'kubectl rollout restart deployment/api-server -n prod && kubectl rollout status deployment/api-server -n prod -w',
    description: 'Triggers a zero-downtime rolling restart of production api-server and blocks watching until all new replicas become healthy.',
    tags: ['kubectl', 'rolling-update', 'devops']
  },
  {
    id: 'devops-docker-prune',
    title: 'Docker Clean Build Cache & Unused Volumes',
    category: 'devops',
    subCategory: 'docker',
    language: 'docker',
    difficulty: 'easy',
    type: 'command',
    prompt: 'ops@builder:~$',
    content: 'docker system prune -af --volumes && docker builder prune -af',
    description: 'Removes all stopped containers, dangling images, unused networks, volumes, and BuildKit build cache.',
    tags: ['docker', 'cleanup', 'maintenance']
  },

  // --- PROGRAMMING & CODE SYNTAX ---
  {
    id: 'prog-js-retry-fetch',
    title: 'JavaScript Async Fetch with Exponential Backoff',
    category: 'programming',
    subCategory: 'javascript',
    language: 'javascript',
    difficulty: 'hard',
    type: 'snippet',
    content: `const fetchWithRetry = async (url, retries = 3, delay = 500) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      return await res.json();
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, delay * Math.pow(2, attempt - 1)));
    }
  }
};`,
    description: 'Robust modern JavaScript asynchronous API fetch wrapper featuring exponential backoff delay retry handling and JSON response parsing.',
    tags: ['javascript', 'async', 'promise', 'fetch']
  },
  {
    id: 'prog-js-promise-settled',
    title: 'JavaScript Concurrent Microservice Health Probe',
    category: 'programming',
    subCategory: 'javascript',
    language: 'javascript',
    difficulty: 'medium',
    type: 'snippet',
    content: `const probeNodes = async (endpoints) => {
  const checks = await Promise.allSettled(
    endpoints.map(url => fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(2000) }))
  );
  return checks.map((res, i) => ({
    target: endpoints[i],
    healthy: res.status === 'fulfilled' && res.value.ok,
    status: res.status === 'fulfilled' ? res.value.status : 504
  }));
};`,
    description: 'Queries multiple distributed service endpoints concurrently with 2-second timeout signals and maps HTTP status codes.',
    tags: ['javascript', 'promise', 'async', 'microservices']
  },
  {
    id: 'prog-py-context-manager',
    title: 'Python Context Manager & Type Hints',
    category: 'programming',
    subCategory: 'python',
    language: 'python',
    difficulty: 'medium',
    type: 'snippet',
    content: `from contextlib import contextmanager
import time

@contextmanager
def execution_timer(label: str):
    start = time.perf_counter()
    try:
        yield
    finally:
        elapsed = time.perf_counter() - start
        print(f"[{label}] Execution took {elapsed * 1000:.2f}ms")`,
    description: 'Python generator-based context manager for high-precision code block latency measurement with microsecond formatting.',
    tags: ['python', 'contextlib', 'performance']
  },
  {
    id: 'prog-py-decorator',
    title: 'Python Parametric Decorator with Wraps',
    category: 'programming',
    subCategory: 'python',
    language: 'python',
    difficulty: 'hard',
    type: 'snippet',
    content: `from functools import wraps

def with_retry(attempts: int = 3):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for i in range(1, attempts + 1):
                try:
                    return func(*args, **kwargs)
                except ConnectionError:
                    if i == attempts:
                        raise
        return wrapper
    return decorator`,
    description: 'Python higher-order function decorator with metadata preservation via functools.wraps and network connection retry handling.',
    tags: ['python', 'decorators', 'functions', 'resilience']
  },
  {
    id: 'prog-go-worker-pool',
    title: 'Go Goroutines & Buffered Channel Dispatcher',
    category: 'programming',
    subCategory: 'go',
    language: 'go',
    difficulty: 'hard',
    type: 'snippet',
    content: `func worker(id int, jobs <-chan string, results chan<- error) {
	for job := range jobs {
		if err := processTask(job); err != nil {
			results <- fmt.Errorf("worker %d failed: %w", id, err)
			return
		}
		results <- nil
	}
}`,
    description: 'Idiomatic Go concurrency pattern utilizing directional buffered channels, error wrapping with %w, and range channel iteration.',
    tags: ['go', 'concurrency', 'channels', 'goroutine']
  },
  {
    id: 'prog-rust-result-match',
    title: 'Rust Option/Result Matching & Lifetimes',
    category: 'programming',
    subCategory: 'rust',
    language: 'rust',
    difficulty: 'hard',
    type: 'snippet',
    content: `pub fn parse_header<'a>(raw: &'a str) -> Result<(&'a str, &'a str), HeaderError> {
    let (key, value) = raw.split_once(':')
        .ok_or(HeaderError::MissingDelimiter)?;
    Ok((key.trim(), value.trim()))
}`,
    description: 'Rust zero-allocation string slice splitting with explicit lifetime annotations and expressive Result error mapping.',
    tags: ['rust', 'systems', 'error-handling', 'lifetimes']
  },
  {
    id: 'prog-bash-healthcheck',
    title: 'Bash Endpoint TCP Healthcheck Function',
    category: 'programming',
    subCategory: 'bash',
    language: 'bash',
    difficulty: 'medium',
    type: 'snippet',
    content: `check_service_alive() {
  local host="\${1:?Hostname required}"
  local port="\${2:-443}"
  timeout 3 bash -c "</dev/tcp/$host/$port" 2>/dev/null
  if [ $? -eq 0 ]; then
    echo "[ONLINE] $host:$port reachable"
    return 0
  fi
  echo "[OFFLINE] $host:$port unreachable" >&2
  return 1
}`,
    description: 'Lightweight bash function testing TCP socket connectivity via pseudo-device /dev/tcp without requiring netcat or telnet.',
    tags: ['bash', 'networking', 'scripting', 'healthcheck']
  },

  // --- DATABASE & SQL ---
  {
    id: 'db-sql-window-cte',
    title: 'SQL CTE with Partitioned Window Function',
    category: 'database',
    subCategory: 'sql',
    language: 'sql',
    difficulty: 'hard',
    type: 'snippet',
    content: `WITH RankedTraffic AS (
  SELECT 
    client_ip,
    endpoint,
    latency_ms,
    ROW_NUMBER() OVER(PARTITION BY client_ip ORDER BY latency_ms DESC) AS rank
  FROM api_access_logs
  WHERE created_at >= NOW() - INTERVAL '24 HOURS'
)
SELECT client_ip, endpoint, latency_ms 
FROM RankedTraffic 
WHERE rank <= 3 
ORDER BY latency_ms DESC;`,
    description: 'Advanced relational SQL query extracting the top 3 highest latency requests per client IP within the last 24 hours using Common Table Expressions.',
    tags: ['sql', 'postgres', 'window-functions', 'database']
  },
  {
    id: 'db-sql-upsert',
    title: 'PostgreSQL Idempotent Upsert (ON CONFLICT)',
    category: 'database',
    subCategory: 'sql',
    language: 'sql',
    difficulty: 'medium',
    type: 'snippet',
    content: `INSERT INTO service_heartbeats (node_id, status, last_ping_at, fail_count)
VALUES ('node-01', 'ALIVE', CURRENT_TIMESTAMP, 0)
ON CONFLICT (node_id) 
DO UPDATE SET 
  status = EXCLUDED.status,
  last_ping_at = EXCLUDED.last_ping_at,
  fail_count = 0;`,
    description: 'PostgreSQL atomic upsert statement ensuring idempotent node heartbeat registration and reset of failure counters.',
    tags: ['sql', 'postgres', 'upsert', 'concurrency']
  },
  {
    id: 'db-sql-index',
    title: 'Partial Index with JSONB Query Optimization',
    category: 'database',
    subCategory: 'sql',
    language: 'sql',
    difficulty: 'medium',
    type: 'snippet',
    content: `CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_audit_active_errors 
ON audit_events ((payload->>'error_code')) 
WHERE is_resolved = FALSE AND severity IN ('HIGH', 'CRITICAL');`,
    description: 'Creates a non-blocking concurrent partial B-tree index on a JSONB attribute for unresolved high-severity audit entries.',
    tags: ['sql', 'postgres', 'indexing', 'performance']
  },

  // --- CONFIGS & INFRASTRUCTURE ---
  {
    id: 'config-k8s-deployment',
    title: 'Kubernetes Pod Security & Resource Limits YAML',
    category: 'configs',
    subCategory: 'yaml',
    language: 'kubernetes',
    difficulty: 'hard',
    type: 'snippet',
    content: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
  namespace: security
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: auth-api
        image: registry.internal/auth:v2.4
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "100m"
            memory: "128Mi"`,
    description: 'Kubernetes deployment specification declaring pod replica count, container image registry, and CPU/memory quotas.',
    tags: ['kubernetes', 'yaml', 'devops', 'infra']
  },
  {
    id: 'config-nginx-proxy',
    title: 'Nginx High-Performance Reverse Proxy & WebSocket',
    category: 'configs',
    subCategory: 'nginx',
    language: 'nginx',
    difficulty: 'hard',
    type: 'snippet',
    content: `location /ws/ {
    proxy_pass http://upstream_websocket_backend;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 3600s;
    proxy_send_timeout 3600s;
}`,
    description: 'Nginx configuration directive enabling bidirectional WebSocket protocol upgrade headers and extended 1-hour connection timeouts.',
    tags: ['nginx', 'networking', 'websocket', 'proxy']
  },
  {
    id: 'config-gh-action',
    title: 'GitHub Actions CI Step with Cache & Lint',
    category: 'configs',
    subCategory: 'yaml',
    language: 'yaml',
    difficulty: 'medium',
    type: 'snippet',
    content: `- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-`,
    description: 'Continuous Integration workflow caching step for npm dependencies keyed on OS and package-lock SHA hash.',
    tags: ['github-actions', 'ci-cd', 'yaml', 'automation']
  },
  {
    id: 'config-dockerfile-multistage',
    title: 'Optimized Multi-Stage Production Dockerfile',
    category: 'configs',
    subCategory: 'dockerfile',
    language: 'docker',
    difficulty: 'medium',
    type: 'snippet',
    content: `FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
    description: 'Production container image specification using multi-stage compilation to keep final image footprint small and secure.',
    tags: ['docker', 'dockerfile', 'containers', 'production']
  }
];
