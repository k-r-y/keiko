// Real-world code snippets for free practice in the Playground
// Curated production patterns across all 12 supported programming languages

export const PLAYGROUND_PRESETS = [
  {
    id: 'play-javascript-hook',
    title: 'React Custom Hook (useDebounce)',
    language: 'javascript',
    category: 'Frontend Web',
    difficulty: 'Medium',
    task: 'Type a production-ready debounce hook for responsive user search inputs.',
    content: `import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}`,
    expectedOutput: `Hook useDebounce initialized with delay 300ms.`,
  },
  {
    id: 'play-python-fastapi',
    title: 'FastAPI Endpoint with Pydantic',
    language: 'python',
    category: 'Backend API',
    difficulty: 'Medium',
    task: 'Type a modern asynchronous REST API route with typed request validation.',
    content: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="TermType Service")

class ItemPayload(BaseModel):
    name: str
    price: float
    is_active: bool = True

@app.post("/items")
async def create_item(item: ItemPayload):
    if item.price <= 0:
        raise HTTPException(status_code=400, detail="Invalid price")
    return {"status": "created", "item": item.name}`,
    expectedOutput: `INFO: Uvicorn running on http://127.0.0.1:8000
POST /items 200 OK -> {"status": "created"}`,
  },
  {
    id: 'play-typescript-repo',
    title: 'TypeScript Generic Repository',
    language: 'typescript',
    category: 'Backend API',
    difficulty: 'Medium',
    task: 'Type a generic type-safe database repository interface with async promises.',
    content: `interface Entity {
  id: string | number;
}

interface Repository<T extends Entity> {
  findById(id: T["id"]): Promise<T | null>;
  save(entity: T): Promise<T>;
}

class UserRepository implements Repository<{ id: number; email: string }> {
  async findById(id: number) {
    return { id, email: "developer@termtype.dev" };
  }
  async save(user: { id: number; email: string }) {
    return user;
  }
}`,
    expectedOutput: `Generic repository loaded with compile-time type safety.`,
  },
  {
    id: 'play-java-controller',
    title: 'Spring Boot REST Controller',
    language: 'java',
    category: 'Backend API',
    difficulty: 'Medium',
    task: 'Type a Spring Boot REST API controller with dependency injection.',
    content: `package dev.termtype.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/v1/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<String> checkHealth() {
        return ResponseEntity.ok("{\\"status\\": \\"UP\\"}");
    }
}`,
    expectedOutput: `Spring Boot context started on port 8080 [JVM 21].`,
  },
  {
    id: 'play-cpp-raii',
    title: 'C++ RAII Lock Guard & Multithreading',
    language: 'cpp',
    category: 'Systems',
    difficulty: 'Hard',
    task: 'Type a thread-safe counter using C++ std::mutex and std::lock_guard.',
    content: `#include <iostream>
#include <mutex>
#include <thread>

class SafeCounter {
    std::mutex mtx;
    int count = 0;
public:
    void increment() {
        std::lock_guard<std::mutex> lock(mtx);
        ++count;
    }
    int get() {
        std::lock_guard<std::mutex> lock(mtx);
        return count;
    }
};`,
    expectedOutput: `Thread-safe counter initialized with zero data races.`,
  },
  {
    id: 'play-csharp-minimal-api',
    title: 'C# ASP.NET Core Minimal API',
    language: 'csharp',
    category: 'Backend API',
    difficulty: 'Medium',
    task: 'Type a high-performance modern C# minimal Web API endpoint in .NET 8.',
    content: `var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/status", () => Results.Ok(new {
    Status = "Healthy",
    Version = "8.0.2",
    UptimeSeconds = 86400
}));

app.Run();`,
    expectedOutput: `Now listening on: http://localhost:5000 [Kestrel Engine]`,
  },
  {
    id: 'play-go-concurrency',
    title: 'Go Goroutines & Channels Worker Pool',
    language: 'go',
    category: 'Concurrency',
    difficulty: 'Hard',
    task: 'Type a concurrent worker pool pattern using Go channels and sync.WaitGroup.',
    content: `package main

import (
    "fmt"
    "sync"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\\n", id, j)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)
    var wg sync.WaitGroup

    for w := 1; w <= 3; w++ {
        wg.Add(1)
        go worker(w, jobs, results, &wg)
    }
}`,
    expectedOutput: `Worker 1 processing job 1
Worker 2 processing job 2
Jobs completed with return code 0.`,
  },
  {
    id: 'play-rust-safety',
    title: 'Rust Safe Struct & Option Match',
    language: 'rust',
    category: 'Systems',
    difficulty: 'Hard',
    task: 'Type an idiomatic Rust struct with Option pattern matching and methods.',
    content: `struct CacheEntry<T> {
    key: String,
    value: Option<T>,
}

impl<T: std::fmt::Display> CacheEntry<T> {
    fn inspect(&self) {
        match &self.value {
            Some(val) => println!("Key '{}' has value: {}", self.key, val),
            None => println!("Key '{}' is empty", self.key),
        }
    }
}

fn main() {
    let entry = CacheEntry {
        key: String::from("session_token"),
        value: Some(9942),
    };
    entry.inspect();
}`,
    expectedOutput: `Key 'session_token' has value: 9942`,
  },
  {
    id: 'play-php-middleware',
    title: 'PHP PSR-15 HTTP Middleware',
    language: 'php',
    category: 'Backend API',
    difficulty: 'Medium',
    task: 'Type a PSR-compliant HTTP authentication middleware in modern PHP 8.',
    content: `<?php
declare(strict_types=1);

namespace App\\Middleware;

use Psr\\Http\\Message\\ResponseInterface;
use Psr\\Http\\Message\\ServerRequestInterface;
use Psr\\Http\\Server\\MiddlewareInterface;
use Psr\\Http\\Server\\RequestHandlerInterface;

class AuthMiddleware implements MiddlewareInterface {
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface {
        if (!$request->hasHeader('Authorization')) {
            throw new \\RuntimeException("Missing Auth Header", 401);
        }
        return $handler->handle($request);
    }
}`,
    expectedOutput: `AuthMiddleware registered into HTTP kernel stack.`,
  },
  {
    id: 'play-ruby-service',
    title: 'Ruby Service Object Pattern',
    language: 'ruby',
    category: 'Backend API',
    difficulty: 'Medium',
    task: 'Type a clean Rails-style callable Service Object with Result struct.',
    content: `class CreateUserService
  Result = Struct.new(:success?, :user, :error)

  def self.call(email:, role: 'developer')
    new(email, role).call
  end

  def initialize(email, role)
    @email = email
    @role = role
  end

  def call
    return Result.new(false, nil, "Invalid email") if @email.empty?
    Result.new(true, { email: @email, role: @role }, nil)
  end
end`,
    expectedOutput: `CreateUserService called -> Result: #<struct CreateUserService::Result success?=true>`,
  },
  {
    id: 'play-sql-analytics',
    title: 'SQL Window Functions & Aggregation',
    language: 'sql',
    category: 'Database Analytics',
    difficulty: 'Medium',
    task: 'Type an advanced analytical SQL query using ROW_NUMBER() and PARTITION BY.',
    content: `WITH RankedSalaries AS (
    SELECT 
        employee_id,
        first_name,
        department,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY department 
            ORDER BY salary DESC
        ) AS rank_in_dept
    FROM employees
)
SELECT * FROM RankedSalaries
WHERE rank_in_dept <= 3;`,
    expectedOutput: ` employee_id | first_name | department | salary | rank_in_dept 
-------------+------------+------------+--------+--------------
         102 | Sarah      | Eng        | 165000 |            1
         105 | David      | Eng        | 152000 |            2
(2 rows returned)`,
  },
  {
    id: 'play-bash-deploy',
    title: 'Bash Production Script with Trap',
    language: 'bash',
    category: 'CLI & DevOps',
    difficulty: 'Medium',
    task: 'Type a robust DevOps shell script with error trapping and cleanup routines.',
    content: `#!/usr/bin/env bash
set -euo pipefail

cleanup() {
    local exit_code=\$?
    echo "Cleaning temporary build artifacts (Exit: \${exit_code})..."
    rm -rf /tmp/termtype-build-*
}
trap cleanup EXIT

echo "Starting container deployment pipeline..."
DEPLOY_TAG=\${1:-"latest"}
echo "Successfully built image: termtype:\${DEPLOY_TAG}"`,
    expectedOutput: `Starting container deployment pipeline...
Successfully built image: termtype:latest
Cleaning temporary build artifacts (Exit: 0)...`,
  },
];
