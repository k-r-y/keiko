// Standard QWERTY Keyboard Layout with Finger Placement Mapping
// Follows Apple & Touch Typing Standards for Programming Symbols

export const FINGER_COLORS = {
  LP: { name: 'Left Pinky', color: '#f43f5e', bg: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
  LR: { name: 'Left Ring', color: '#f97316', bg: 'bg-orange-500/20 text-orange-300 border-orange-500/40' },
  LM: { name: 'Left Middle', color: '#eab308', bg: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
  LI: { name: 'Left Index', color: '#10b981', bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  T:  { name: 'Thumb', color: '#38bdf8', bg: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
  RI: { name: 'Right Index', color: '#06b6d4', bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  RM: { name: 'Right Middle', color: '#3b82f6', bg: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  RR: { name: 'Right Ring', color: '#6366f1', bg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
  RP: { name: 'Right Pinky', color: '#a855f7', bg: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
};

// Physical keyboard rows
export const KEYBOARD_ROWS = [
  // Row 1: Number & Symbol Row
  [
    { key: '`', shift: '~', finger: 'LP', width: 'w-8 sm:w-10' },
    { key: '1', shift: '!', finger: 'LP', width: 'w-8 sm:w-10' },
    { key: '2', shift: '@', finger: 'LR', width: 'w-8 sm:w-10' },
    { key: '3', shift: '#', finger: 'LM', width: 'w-8 sm:w-10' },
    { key: '4', shift: '$', finger: 'LI', width: 'w-8 sm:w-10' },
    { key: '5', shift: '%', finger: 'LI', width: 'w-8 sm:w-10' },
    { key: '6', shift: '^', finger: 'RI', width: 'w-8 sm:w-10' },
    { key: '7', shift: '&', finger: 'RI', width: 'w-8 sm:w-10' },
    { key: '8', shift: '*', finger: 'RM', width: 'w-8 sm:w-10' },
    { key: '9', shift: '(', finger: 'RR', width: 'w-8 sm:w-10' },
    { key: '0', shift: ')', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: '-', shift: '_', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: '=', shift: '+', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: 'Backspace', isSpecial: true, finger: 'RP', width: 'w-14 sm:w-16' },
  ],
  // Row 2: QWERTY Row
  [
    { key: 'Tab', isSpecial: true, finger: 'LP', width: 'w-12 sm:w-14' },
    { key: 'q', shift: 'Q', finger: 'LP', width: 'w-8 sm:w-10' },
    { key: 'w', shift: 'W', finger: 'LR', width: 'w-8 sm:w-10' },
    { key: 'e', shift: 'E', finger: 'LM', width: 'w-8 sm:w-10' },
    { key: 'r', shift: 'R', finger: 'LI', width: 'w-8 sm:w-10' },
    { key: 't', shift: 'T', finger: 'LI', width: 'w-8 sm:w-10' },
    { key: 'y', shift: 'Y', finger: 'RI', width: 'w-8 sm:w-10' },
    { key: 'u', shift: 'U', finger: 'RI', width: 'w-8 sm:w-10' },
    { key: 'i', shift: 'I', finger: 'RM', width: 'w-8 sm:w-10' },
    { key: 'o', shift: 'O', finger: 'RR', width: 'w-8 sm:w-10' },
    { key: 'p', shift: 'P', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: '[', shift: '{', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: ']', shift: '}', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: '\\', shift: '|', finger: 'RP', width: 'w-10 sm:w-12' },
  ],
  // Row 3: Home Row
  [
    { key: 'Caps', isSpecial: true, finger: 'LP', width: 'w-14 sm:w-16' },
    { key: 'a', shift: 'A', finger: 'LP', width: 'w-8 sm:w-10', isHomeRow: true },
    { key: 's', shift: 'S', finger: 'LR', width: 'w-8 sm:w-10', isHomeRow: true },
    { key: 'd', shift: 'D', finger: 'LM', width: 'w-8 sm:w-10', isHomeRow: true },
    { key: 'f', shift: 'F', finger: 'LI', width: 'w-8 sm:w-10', isHomeRow: true, hasBump: true },
    { key: 'g', shift: 'G', finger: 'LI', width: 'w-8 sm:w-10' },
    { key: 'h', shift: 'H', finger: 'RI', width: 'w-8 sm:w-10' },
    { key: 'j', shift: 'J', finger: 'RI', width: 'w-8 sm:w-10', isHomeRow: true, hasBump: true },
    { key: 'k', shift: 'K', finger: 'RM', width: 'w-8 sm:w-10', isHomeRow: true },
    { key: 'l', shift: 'L', finger: 'RR', width: 'w-8 sm:w-10', isHomeRow: true },
    { key: ';', shift: ':', finger: 'RP', width: 'w-8 sm:w-10', isHomeRow: true },
    { key: "'", shift: '"', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: 'Enter', isSpecial: true, finger: 'RP', width: 'w-16 sm:w-20' },
  ],
  // Row 4: Bottom Row
  [
    { key: 'ShiftLeft', display: 'Shift', isSpecial: true, finger: 'LP', width: 'w-16 sm:w-20' },
    { key: 'z', shift: 'Z', finger: 'LP', width: 'w-8 sm:w-10' },
    { key: 'x', shift: 'X', finger: 'LR', width: 'w-8 sm:w-10' },
    { key: 'c', shift: 'C', finger: 'LM', width: 'w-8 sm:w-10' },
    { key: 'v', shift: 'V', finger: 'LI', width: 'w-8 sm:w-10' },
    { key: 'b', shift: 'B', finger: 'LI', width: 'w-8 sm:w-10' },
    { key: 'n', shift: 'N', finger: 'RI', width: 'w-8 sm:w-10' },
    { key: 'm', shift: 'M', finger: 'RI', width: 'w-8 sm:w-10' },
    { key: ',', shift: '<', finger: 'RM', width: 'w-8 sm:w-10' },
    { key: '.', shift: '>', finger: 'RR', width: 'w-8 sm:w-10' },
    { key: '/', shift: '?', finger: 'RP', width: 'w-8 sm:w-10' },
    { key: 'ShiftRight', display: 'Shift', isSpecial: true, finger: 'RP', width: 'w-18 sm:w-22' },
  ],
  // Row 5: Space Row
  [
    { key: 'Ctrl', isSpecial: true, finger: 'LP', width: 'w-10 sm:w-12' },
    { key: 'Alt', isSpecial: true, finger: 'LP', width: 'w-10 sm:w-12' },
    { key: 'Cmd', isSpecial: true, finger: 'T', width: 'w-10 sm:w-12' },
    { key: ' ', display: 'Space', finger: 'T', width: 'w-48 sm:w-64 flex-1' },
    { key: 'Cmd', isSpecial: true, finger: 'T', width: 'w-10 sm:w-12' },
    { key: 'Alt', isSpecial: true, finger: 'RP', width: 'w-10 sm:w-12' },
  ],
];

// Map character to physical key and finger
export function getCharKeyInfo(char) {
  if (!char) return null;

  if (char === ' ') {
    return { key: ' ', display: 'Space', finger: 'T', requiresShift: false };
  }
  if (char === '\n') {
    return { key: 'Enter', display: 'Enter', finger: 'RP', requiresShift: false };
  }
  if (char === '\t') {
    return { key: 'Tab', display: 'Tab', finger: 'LP', requiresShift: false };
  }

  // Iterate rows
  for (const row of KEYBOARD_ROWS) {
    for (const item of row) {
      if (item.key === char) {
        return { key: item.key, finger: item.finger, requiresShift: false };
      }
      if (item.shift === char) {
        return { key: item.key, shift: item.shift, finger: item.finger, requiresShift: true };
      }
    }
  }

  // Fallback uppercase letters
  const lower = char.toLowerCase();
  for (const row of KEYBOARD_ROWS) {
    for (const item of row) {
      if (item.key === lower) {
        return { key: item.key, finger: item.finger, requiresShift: char !== lower };
      }
    }
  }

  return null;
}
