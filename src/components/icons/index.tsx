import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
  };
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <path
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <rect height="16" rx="2" width="20" x="2" y="4" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function GalleryIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 2, ...props })}>
      <path
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M18.01 18.01l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M18.01 5.99l1.06-1.06"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ComputerIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <rect height="12" rx="2" width="16" x="4" y="4" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <path
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-.974-.94 4.542 4.542 0 0 0 .96-2.122A8.188 8.188 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronUpIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 2, ...props })}>
      <path d="m18 15-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 2, ...props })}>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 2.2, ...props })}>
      <path d="M5 12.5 9.5 17 19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <circle cx="12" cy="12" r="7" />
      <path d="M17.5 17.5 21 21" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export function SpintankIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 4H7a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h10v3a1 1 0 0 1-1 1H6v3h11a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2h11v2z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 170 170" fill="currentColor" {...props}>
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-5.65-8.58-10.15-18.42-13.5-29.5-3.35-11.09-5.03-21.75-5.03-31.98 0-14.35 3.6-26.31 10.81-35.91 7.21-9.6 16.32-14.52 27.33-14.77 5.12 0 10.45 1.25 15.99 3.76 5.54 2.51 9.4 3.82 11.59 3.92 1.84-.1 5.86-1.47 12.06-4.11 6.2-2.65 11.66-3.83 16.38-3.54 12.63.63 22.82 4.98 30.56 13.06-11.09 6.72-16.51 16.09-16.27 28.11.24 9.61 3.96 17.65 11.16 24.13 7.2 6.48 15.7 10.05 25.5 10.72-2.17 6.73-4.53 13.07-7.07 19.01zM119.22 31.42c0-7.38 2.66-14.32 7.97-20.82 5.32-6.5 11.77-10.37 19.37-11.6-1.09 7.39-4.04 14.31-8.87 20.76-4.83 6.46-11.18 10.34-19.04 11.66.19-.9.57-1.89.57-2.93z" />
    </svg>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <rect height="16" rx="2" width="16" x="4" y="4" />
      <line x1="9" x2="9" y1="9" y2="9.01" />
      <line x1="15" x2="15" y1="9" y2="9.01" />
      <line x1="9" x2="9" y1="13" y2="13.01" />
      <line x1="15" x2="15" y1="13" y2="13.01" />
      <line x1="12" x2="12" y1="17" y2="20" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 2, ...props })}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 2, ...props })}>
      <rect height="20" rx="5" width="20" x="2" y="2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function MastodonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.327 8.502c0-4.639-3.043-5.995-3.043-5.995C16.924 1.88 14.18 1.5 12 1.5s-4.924.38-6.284 1.007c0 0-3.043 1.356-3.043 5.995 0 2.27.054 5.347.518 7.683.403 2.032 1.638 3.993 3.684 4.545 1.769.476 3.633.567 5.125.438.384-.033.76-.086 1.127-.156.128-.024.256-.052.383-.083.473-.116.924-.265 1.35-.445.027-.011.054-.023.081-.035.343-.153.67-.33.98-.53l.024-.015a7.1 7.1 0 0 0 .848-.684l.02-.02c.245-.25.467-.525.666-.822l.016-.025c.193-.293.361-.606.504-.937l.015-.035c.135-.326.242-.667.322-1.02.046-.207.086-.418.12-.633.15-.929.215-1.986.215-3.136h-1.89c0 1.258-.04 2.222-.16 2.895-.084.473-.245.861-.482 1.16-.237.3-.578.45-1.023.45-.694 0-1.22-.327-1.578-.98-.242-.442-.363-1.066-.363-1.872V10.22h-1.92v4.887c0 .806-.121 1.43-.363 1.872-.358.653-.884.98-1.578.98-.445 0-.786-.15-1.023-.45-.237-.299-.398-.687-.482-1.16-.12-.673-.16-1.637-.16-2.895 0-2.316.33-4.004.99-5.064.66-1.06 1.734-1.59 3.22-1.59 1.486 0 2.56.53 3.22 1.59.34.545.56 1.254.66 2.127h1.92c-.114-1.343-.532-2.457-1.253-3.342C14.774 4.54 13.568 4.1 12 4.1c-1.568 0-2.774.44-3.617 1.32-.843.88-1.31 2.21-1.4 3.99V12.1c0 1.947.16 3.42.48 4.42.32 1 .84 1.76 1.56 2.28.72.52 1.64.78 2.76.78 1.12 0 2.04-.26 2.76-.78.72-.52 1.24-1.28 1.56-2.28.32-1 .48-2.473.48-4.42V8.502z" />
    </svg>
  );
}

export function BlueskyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 568 501" fill="currentColor" {...props}>
      <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.766 -1.808 568-28.513 568 62.062c0 18.09-10.05 152.029-15.962 173.189-20.505 73.555-95.27 92.355-161.76 81.042 116.143 19.78 145.485 86.417 81.986 151.782-120.485 124.032-171.748-31.144-188.264-80.957-16.516 49.813-67.779 204.989-188.264 80.957-63.499-65.365-34.157-132.002 81.986-151.782C91.231 327.606 16.467 308.806-4.038 235.251-9.95 214.091-20 80.152-20 62.062c0-90.575 76.234-63.87 143.121-28.398z" />
    </svg>
  );
}

export function MusicNoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  );
}

export function AcademicCapIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <path
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BadgeIcon(props: IconProps) {
  return (
    <svg {...base({ stroke: "currentColor", strokeWidth: 1.8, ...props })}>
      <path
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IslandAvatarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-full w-full scale-125" {...props}>
      <rect fill="#fbcfe8" height="40" width="40" />
      <circle cx="20" cy="17" fill="#fda4af" r="9" />
      <path
        d="M14 16C14 16 16 20 20 20C24 20 26 16 26 16"
        stroke="#f43f5e"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path d="M16 15C16 15 17 12 21 12" stroke="#e11d48" strokeLinecap="round" strokeWidth="1.8" />
      <circle cx="20" cy="35" fill="#fb7185" r="14" />
    </svg>
  );
}
