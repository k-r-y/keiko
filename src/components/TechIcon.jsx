import React from 'react';

export default function TechIcon({ id, className = "w-4 h-4", style = {} }) {
  const normId = (id || '').toLowerCase();

  switch (normId) {
    case 'python':
    case 'py':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <path
            d="M11.9 2C6.9 2 7.2 4.2 7.2 4.2V6.5H12.1V7.2H5.1C5.1 7.2 2 6.8 2 11.9C2 17 4.7 16.8 4.7 16.8H6.2V14.6C6.2 14.6 6.1 12.1 8.7 12.1H13.6C13.6 12.1 15.9 12.2 15.9 9.9V4.4C15.9 4.4 16.3 2 11.9 2ZM9.8 3.7C10.4 3.7 10.9 4.2 10.9 4.8C10.9 5.4 10.4 5.9 9.8 5.9C9.2 5.9 8.7 5.4 8.7 4.8C8.7 4.2 9.2 3.7 9.8 3.7Z"
            fill="#38BDF8"
          />
          <path
            d="M12.1 22C17.1 22 16.8 19.8 16.8 19.8V17.5H11.9V16.8H18.9C18.9 16.8 22 17.2 22 12.1C22 7 19.3 7.2 19.3 7.2H17.8V9.4C17.8 9.4 17.9 11.9 15.3 11.9H10.4C10.4 11.9 8.1 11.8 8.1 14.1V19.6C8.1 19.6 7.7 22 12.1 22ZM14.2 20.3C13.6 20.3 13.1 19.8 13.1 19.2C13.1 18.6 13.6 18.1 14.2 18.1C14.8 18.1 15.3 18.6 15.3 19.2C15.3 19.8 14.8 20.3 14.2 20.3Z"
            fill="#FACC15"
          />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <rect width="24" height="24" rx="4" fill="#FACC15" />
          <path
            d="M6.5 17.5C7.2 18.1 8 18.5 8.9 18.5C10.2 18.5 11 17.8 11 16.5V11H9.2V16.4C9.2 17 8.8 17.2 8.3 17.2C7.7 17.2 7.3 16.9 6.8 16.4L6.5 17.5ZM13 17.4C13.8 18.1 14.9 18.5 16.1 18.5C18.2 18.5 19.5 17.3 19.5 15.4C19.5 13.7 18.4 12.9 16.9 12.2L16.2 11.9C15.3 11.5 14.8 11.1 14.8 10.4C14.8 9.7 15.4 9.1 16.3 9.1C17.1 9.1 17.8 9.5 18.3 10L18.9 8.9C18.2 8.3 17.3 8 16.3 8C14.4 8 13.1 9.2 13.1 10.9C13.1 12.5 14.1 13.3 15.6 14L16.3 14.3C17.3 14.8 17.8 15.2 17.8 16C17.8 16.8 17.1 17.4 16.1 17.4C15.1 17.4 14.2 16.9 13.6 16.2L13 17.4Z"
            fill="#111827"
          />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M5 9.5H11.5V11H9V18.5H7.5V11H5V9.5ZM12.5 17.4C13.3 18.1 14.4 18.5 15.6 18.5C17.7 18.5 19 17.3 19 15.4C19 13.7 17.9 12.9 16.4 12.2L15.7 11.9C14.8 11.5 14.3 11.1 14.3 10.4C14.3 9.7 14.9 9.1 15.8 9.1C16.6 9.1 17.3 9.5 17.8 10L18.4 8.9C17.7 8.3 16.8 8 15.8 8C13.9 8 12.6 9.2 12.6 10.9C12.6 12.5 13.6 13.3 15.1 14L15.8 14.3C16.8 14.8 17.3 15.2 17.3 16C17.3 16.8 16.6 17.4 15.6 17.4C14.6 17.4 13.7 16.9 13.1 16.2L12.5 17.4Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <path
            d="M8.5 19C11 19.5 15.5 19.5 17.5 18C16 19 13 20 8.5 19ZM7.5 16.5C10.5 17 15 17 17.5 15.5C15 16.5 11 17 7.5 16.5ZM15.5 13C16.5 13.5 17.5 14.5 17.5 14.5C17.5 14.5 16 14 14 14C11.5 14 8.5 15 6 15C6 15 8.5 14 11 13.5C13.5 13 15.5 13 15.5 13ZM11.5 6C12.5 7 12 8 10.5 9C9 10 9.5 11 11 12C9 11 8 9.5 9 8C10 6.5 11 6.5 11.5 6ZM14 8C15 9 14.5 10 13 11C11.5 12 12 13 13.5 14C11.5 13 10.5 11.5 11.5 10C12.5 8.5 13.5 8.5 14 8Z"
            stroke="#EA580C"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'cpp':
    case 'c++':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <path
            d="M11 7C8.2 7 6 9.2 6 12C6 14.8 8.2 17 11 17C12.5 17 13.8 16.3 14.7 15.2L13.2 14.1C12.7 14.7 11.9 15.1 11 15.1C9.3 15.1 8 13.7 8 12C8 10.3 9.3 8.9 11 8.9C11.9 8.9 12.7 9.3 13.2 9.9L14.7 8.8C13.8 7.7 12.5 7 11 7Z"
            fill="#60A5FA"
          />
          <path
            d="M16 11V10H17V11H18V12H17V13H16V12H15V11H16ZM19.5 11V10H20.5V11H21.5V12H20.5V13H19.5V12H18.5V11H19.5Z"
            fill="#93C5FD"
          />
        </svg>
      );

    case 'csharp':
    case 'cs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <rect width="24" height="24" rx="4" fill="#9333EA" />
          <path
            d="M9 8C7 8 5.5 9.5 5.5 12C5.5 14.5 7 16 9 16C10.2 16 11.2 15.3 11.8 14.3L10.3 13.5C10 14 9.5 14.3 9 14.3C7.8 14.3 7.2 13.3 7.2 12C7.2 10.7 7.8 9.7 9 9.7C9.5 9.7 10 10 10.3 10.5L11.8 9.7C11.2 8.7 10.2 8 9 8Z"
            fill="#FFFFFF"
          />
          <path
            d="M13.5 12H18.5M13.5 14H18.5M14.5 10.5V15.5M17.5 10.5V15.5"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'go':
    case 'golang':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <path
            d="M3 13.5C3 10.5 5.5 8 8.5 8C10.8 8 12.7 9.5 13.5 11.5H11.2C10.7 10.5 9.7 9.8 8.5 9.8C6.5 9.8 4.8 11.5 4.8 13.5C4.8 15.5 6.5 17.2 8.5 17.2C10.1 17.2 11.4 16.2 11.9 14.7H8.5V13H13.8V14C13.2 16.9 11.1 19 8.5 19C5.5 19 3 16.5 3 13.5ZM15 13.5C15 10.5 17.5 8 20.5 8C23.5 8 26 10.5 26 13.5C26 16.5 23.5 19 20.5 19C17.5 19 15 16.5 15 13.5Z"
            fill="#06B6D4"
          />
          <path
            d="M17.8 11.8C18.4 11 19.4 10.5 20.5 10.5C22.2 10.5 23.5 11.8 23.5 13.5C23.5 15.2 22.2 16.5 20.5 16.5C19.4 16.5 18.4 16 17.8 15.2V18.8H16V8.2H17.8V11.8Z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'rust':
    case 'rs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 7.5H13C14.7 7.5 16 8.8 16 10.5C16 11.7 15.3 12.8 14.2 13.2L16.5 16.5H14.1L12.1 13.5H10V16.5H8V7.5ZM10 9.5V11.5H12.8C13.4 11.5 13.9 11 13.9 10.5C13.9 10 13.4 9.5 12.8 9.5H10Z"
            fill="#F97316"
          />
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="#6366F1" />
          <path
            d="M7 14V10H9C9.8 10 10.5 10.4 10.5 11.2C10.5 12 9.8 12.5 9 12.5H7.8V14H7ZM12 14V10H13V11.5H14.5V10H15.5V14H14.5V12.5H13V14H12ZM17 14V10H19C19.8 10 20.5 10.4 20.5 11.2C20.5 12 19.8 12.5 19 12.5H17.8V14H17Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'ruby':
    case 'rb':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
          <path
            d="M6 3L18 3L22 9L12 21L2 9L6 3Z"
            fill="#EF4444"
          />
          <path
            d="M6 3L12 21M18 3L12 21M2 9H22M6 3L10 9M18 3L14 9"
            stroke="#FCA5A5"
            strokeWidth="1.2"
          />
        </svg>
      );

    case 'bash':
    case 'shell':
    case 'cli':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={style}
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );

    case 'sql':
    case 'database':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={style}
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={style}
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}
