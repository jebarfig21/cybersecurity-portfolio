import type { ReactNode } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiKalilinux,
} from "react-icons/si";
import { FaGithub, FaTerminal } from "react-icons/fa";

/**
 * Maps technology identifiers to their corresponding icons.
 *
 * This indirection layer allows:
 * - clean separation between data and UI
 * - easy icon replacement
 * - graceful handling of unknown tech IDs
 */
export const techIcons: Record<string, ReactNode> = {
  react: <SiReact />,
  tailwind: <SiTailwindcss />,
  node: <SiNodedotjs />,
  python: <SiPython />,
  docker: <SiDocker />,
  kali: <SiKalilinux />,
  github: <FaGithub />,
  terminal: <FaTerminal />,
};
