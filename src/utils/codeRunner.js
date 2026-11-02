// Authentic Code Analysis & Execution Engine for Keiko IDE
// Simulates real compilers, interpreters, and runtime outputs across 12 languages.

export function getRunCommand(language, filename) {
  const file = filename || getDefaultFilename(language);
  switch (language) {
    case 'python':
      return `python3 ${file}`;
    case 'javascript':
      return `node ${file}`;
    case 'typescript':
      return `ts-node ${file}`;
    case 'java':
      return `javac ${file} && java Main`;
    case 'cpp':
      return `g++ -std=c++20 ${file} -o bin && ./bin`;
    case 'csharp':
      return `dotnet run`;
    case 'go':
      return `go run ${file}`;
    case 'rust':
      return `rustc ${file} -o main && ./main`;
    case 'php':
      return `php ${file}`;
    case 'ruby':
      return `ruby ${file}`;
    case 'sql':
      return `psql -f ${file}`;
    case 'bash':
      return `bash ${file}`;
    default:
      return `./${file}`;
  }
}

export function getDefaultFilename(language) {
  switch (language) {
    case 'python': return 'main.py';
    case 'javascript': return 'index.js';
    case 'typescript': return 'index.ts';
    case 'java': return 'Main.java';
    case 'cpp': return 'main.cpp';
    case 'csharp': return 'Program.cs';
    case 'go': return 'main.go';
    case 'rust': return 'main.rs';
    case 'php': return 'index.php';
    case 'ruby': return 'app.rb';
    case 'sql': return 'query.sql';
    case 'bash': return 'script.sh';
    default: return 'script.sh';
  }
}

// Executes or statically analyzes the user's typed code against the expected program
export function executeCode({ userInput, lesson, language = 'python' }) {
  const code = (userInput || '').trimEnd();
  const target = (lesson?.content || '').trimEnd();
  const filename = lesson?.filename || getDefaultFilename(language);
  const command = getRunCommand(language, filename);
  const expectedOutput = lesson?.expectedOutput || 'Execution completed with return code 0.';
  const executionTimeMs = Math.floor(Math.random() * 45) + 30;

  // 1. Empty Code Check
  if (!code.trim()) {
    return {
      success: false,
      exitCode: 1,
      command,
      output: generateEmptyError(language, filename),
      executionTimeMs: 15,
      isComplete: false,
    };
  }

  // 2. JavaScript Live Browser Execution
  if (language === 'javascript') {
    const jsResult = tryExecuteJavaScript(code, filename, target, expectedOutput);
    if (jsResult) {
      return {
        ...jsResult,
        command,
        executionTimeMs,
      };
    }
  }

  // 3. Exact Match or Complete Success Check
  if (code === target) {
    return {
      success: true,
      exitCode: 0,
      command,
      output: expectedOutput,
      executionTimeMs,
      isComplete: true,
    };
  }

  // 4. Incomplete Code Check (Prefix of target)
  if (target.startsWith(code)) {
    const userLines = code.split('\n');
    const lastLineIdx = userLines.length - 1;
    const lastLine = userLines[lastLineIdx] || '';
    
    return {
      success: false,
      exitCode: 1,
      command,
      output: generateIncompleteError(language, filename, lastLineIdx + 1, lastLine),
      executionTimeMs,
      isComplete: false,
    };
  }

  // 5. Code with Typos / Syntax Mismatch
  // Locate the first diverging line and column
  const userLines = code.split('\n');
  const targetLines = target.split('\n');
  let errLine = 1;
  let errCol = 1;
  let userLineContent = '';

  for (let i = 0; i < userLines.length; i++) {
    const uLine = userLines[i] || '';
    const tLine = targetLines[i] || '';
    if (uLine !== tLine) {
      errLine = i + 1;
      userLineContent = uLine;
      for (let j = 0; j < Math.max(uLine.length, tLine.length); j++) {
        if (uLine[j] !== tLine[j]) {
          errCol = j + 1;
          break;
        }
      }
      break;
    }
  }

  return {
    success: false,
    exitCode: 1,
    command,
    output: generateSyntaxError(language, filename, errLine, errCol, userLineContent),
    executionTimeMs,
    isComplete: false,
  };
}

// Safely execute JavaScript in browser sandbox
function tryExecuteJavaScript(code, filename, target, expectedOutput) {
  // If exact match, prefer curated expectedOutput
  if (code === target) {
    return {
      success: true,
      exitCode: 0,
      output: expectedOutput,
      isComplete: true,
    };
  }

  const logs = [];
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;

  try {
    // Intercept console outputs
    console.log = (...args) => {
      logs.push(args.map(formatLogArg).join(' '));
    };
    console.error = (...args) => {
      logs.push(`[stderr] ${args.map(formatLogArg).join(' ')}`);
    };
    console.warn = (...args) => {
      logs.push(`[warn] ${args.map(formatLogArg).join(' ')}`);
    };

    // Run in isolated function scope
    const fn = new Function(code);
    fn();

    const output = logs.join('\n');
    return {
      success: true,
      exitCode: 0,
      output: output || 'Program completed with no console output (Exit 0).',
      isComplete: code === target,
    };
  } catch (err) {
    const stackLine = err.stack ? err.stack.split('\n')[1] || '' : '';
    const errorOutput = `${filename}:1\n${code.split('\n')[0]}\n^\n${err.name}: ${err.message}`;
    return {
      success: false,
      exitCode: 1,
      output: errorOutput,
      isComplete: false,
    };
  } finally {
    console.log = originalLog;
    console.error = originalError;
    console.warn = originalWarn;
  }
}

function formatLogArg(arg) {
  if (typeof arg === 'object') {
    try {
      return JSON.stringify(arg);
    } catch {
      return String(arg);
    }
  }
  return String(arg);
}

// Generate realistic empty file errors
function generateEmptyError(language, filename) {
  switch (language) {
    case 'python':
      return `Traceback (most recent call last):
  File "${filename}", line 1
    
    ^
IndentationError: unexpected EOF while parsing (empty file)`;
    case 'cpp':
      return `${filename}:1:1: fatal error: no code provided to compiler
#error Empty source file
 ^~~~~
compilation terminated.`;
    case 'rust':
      return `error[E0601]: \`main\` function not found in crate \`main\`
 --> ${filename}:1:1
  |
1 | 
  | ^ consider adding a \`main\` function to \`${filename}\``;
    case 'go':
      return `./${filename}:1:1: expected 'package', found 'EOF'`;
    case 'java':
      return `${filename}:1: error: reached end of file while parsing
^
1 error`;
    case 'sql':
      return `ERROR:  syntax error at end of input
LINE 1: 
        ^`;
    case 'bash':
      return `${filename}: line 1: warning: empty command script executed (Exit code 0)`;
    default:
      return `${filename}:1: error: unexpected end of file`;
  }
}

// Generate realistic incomplete block / EOF errors
function generateIncompleteError(language, filename, lineNum, lastLine) {
  const trimmed = lastLine.trim();
  const indent = ' '.repeat(Math.max(2, lastLine.length));

  switch (language) {
    case 'python':
      if (trimmed.endsWith(':')) {
        return `  File "${filename}", line ${lineNum + 1}
    
    ^
IndentationError: expected an indented block after '${trimmed}' on line ${lineNum}`;
      }
      return `  File "${filename}", line ${lineNum}
    ${lastLine}
    ${indent}^
SyntaxError: unexpected EOF while parsing`;

    case 'javascript':
    case 'typescript':
      return `${filename}:${lineNum}
${lastLine}
${indent}^
SyntaxError: Unexpected end of input`;

    case 'cpp':
      return `${filename}:${lineNum}:${lastLine.length + 1}: error: expected '}' at end of input
 ${lineNum} | ${lastLine}
    | ${indent}^
compilation terminated due to -Wfatal-errors.`;

    case 'rust':
      return `error: this file contains an unclosed delimiter
 --> ${filename}:${lineNum}:${lastLine.length + 1}
  |
${lineNum} | ${lastLine}
  | ${indent}^ unclosed delimiter
error: could not compile \`${filename}\` due to previous error`;

    case 'go':
      return `./${filename}:${lineNum}:${lastLine.length + 1}: syntax error: unexpected EOF, expected }`;

    case 'java':
      return `${filename}:${lineNum}: error: reached end of file while parsing
${lastLine}
${indent}^
1 error`;

    case 'csharp':
      return `${filename}(${lineNum},${lastLine.length + 1}): error CS1513: } expected
Build FAILED.
    0 Warning(s)
    1 Error(s)`;

    case 'sql':
      return `ERROR:  syntax error at end of input
LINE ${lineNum}: ${lastLine}
${' '.repeat(lastLine.length + 7)}^`;

    case 'bash':
      return `${filename}: line ${lineNum}: syntax error: unexpected end of file`;

    case 'php':
      return `PHP Parse error: syntax error, unexpected end of file in ${filename} on line ${lineNum}`;

    case 'ruby':
      return `${filename}:${lineNum}: syntax error, unexpected end-of-input, expecting \`end'`;

    default:
      return `${filename}:${lineNum}: error: unexpected end of input`;
  }
}

// Generate realistic syntax errors at the exact mismatch location
function generateSyntaxError(language, filename, lineNum, colNum, lineContent) {
  const caret = ' '.repeat(Math.max(0, colNum - 1)) + '^';

  switch (language) {
    case 'python':
      return `  File "${filename}", line ${lineNum}
    ${lineContent}
    ${' '.repeat(Math.max(0, colNum - 1))}^
SyntaxError: invalid syntax`;

    case 'javascript':
    case 'typescript':
      return `${filename}:${lineNum}
${lineContent}
${caret}
SyntaxError: Unexpected token`;

    case 'cpp':
      return `${filename}:${lineNum}:${colNum}: error: expected primary-expression before token
 ${lineNum} | ${lineContent}
    | ${caret}`;

    case 'rust':
      return `error: expected one of \`!\`, \`.\`, \`::\`, \`?\`, \`{\`, or an operator, found unexpected token
 --> ${filename}:${lineNum}:${colNum}
  |
${lineNum} | ${lineContent}
  | ${caret} unexpected token`;

    case 'go':
      return `./${filename}:${lineNum}:${colNum}: syntax error: unexpected ${lineContent[colNum - 1] || 'token'}`;

    case 'java':
      return `${filename}:${lineNum}: error: illegal start of expression
    ${lineContent}
    ${caret}
1 error`;

    case 'csharp':
      return `${filename}(${lineNum},${colNum}): error CS1002: ; expected
Build FAILED.
    1 Error(s)`;

    case 'sql':
      return `ERROR:  syntax error at or near "${lineContent.slice(Math.max(0, colNum - 1), colNum + 8)}"
LINE ${lineNum}: ${lineContent}
        ${caret}`;

    case 'php':
      return `PHP Parse error: syntax error, unexpected token "${lineContent[colNum - 1] || ';'}" in ${filename} on line ${lineNum}`;

    case 'ruby':
      return `${filename}:${lineNum}: syntax error, unexpected token
${lineContent}
${caret}`;

    case 'bash':
      return `${filename}: line ${lineNum}: command not found: ${lineContent.trim().split(' ')[0] || 'syntax'}`;

    default:
      return `${filename}:${lineNum}:${colNum}: syntax error`;
  }
}
